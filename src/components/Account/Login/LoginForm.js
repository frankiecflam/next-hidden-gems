import styles from "./LoginForm.module.css";
import { useState } from "react";
import { useRouter } from "next/router";

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

  return {
    response,
  };
};

const LoginForm = ({ onUnsuccessfulLogin, onSuccessfulLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const response = await sendDataToServer({
      email,
      password,
    });

    // Check if logged in successfully
    const { response: serverResponse } = response;

    if (!serverResponse.ok) {
      onUnsuccessfulLogin();
      return;
    }

    // If successful,
    onSuccessfulLogin();
    router.push("/");
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
        autoComplete="on"
      />
      <AccountFormSubmitBtn text="log in" className={styles.loginBtn} />
    </AccountForm>
  );
};

export default LoginForm;
