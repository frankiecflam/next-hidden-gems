import styles from "./LoginForm.module.css";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../../../store/Slices/AuthSlice";

import AccountForm from "../AccountForm";
import AccountFormInput from "../AccountFormInput";
import AccountFormSubmitBtn from "../AccountFormSubmitBtn";

const sendDataToServer = async (data) => {
  const response = await fetch("/api/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const { idToken } = await response.json();

  return {
    response,
    idToken,
  };
};

const LoginForm = ({ onUnsuccessfulLogin, onSuccessfulLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const token = useSelector((state) => state.auth.token);
  console.log(token);

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const response = await sendDataToServer({
      email,
      password,
    });

    // Check if logged in successfully
    const { response: serverResponse, idToken } = response;

    if (!serverResponse.ok) {
      onUnsuccessfulLogin();
      return;
    }

    // If successful,
    onSuccessfulLogin();
    dispatch(
      login({
        token: idToken,
      })
    );
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <AccountForm onSubmit={handleFormSubmit}>
      <AccountFormInput
        type="email"
        placeholder="Email"
        value={email}
        required={true}
        onChange={handleEmailChange}
      />
      <AccountFormInput
        type="password"
        placeholder="Password"
        value={password}
        required={true}
        onChange={handlePasswordChange}
      />
      <AccountFormSubmitBtn text="log in" className={styles.loginBtn} />
    </AccountForm>
  );
};

export default LoginForm;
