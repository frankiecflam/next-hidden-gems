import styles from "./SignupForm.module.css";
import AccountForm from "../AccountForm";
import AccountFormInput from "../AccountFormInput";
import AccountFormSubmitBtn from "../AccountFormSubmitBtn";

import { useReducer } from "react";

const ACTIONS = {
  username: "USERNAME",
  email: "EMAIL",
  password: "PASSWORD",
  confirmPassword: "CONFIRMED_PASSWORD",
  submit: "SUBMIT",
};

const inputInitialState = {
  username: "",
  usernameValidated: false,
  usernameValidity: false,
  email: "",
  emailValidated: false,
  emailValidity: false,
  password: "",
  passwordValidated: false,
  passwordValidity: false,
  confirmPassword: "",
  confirmPasswordValidated: false,
  confirmPasswordValidity: false,
};

const inputReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.username:
      return {
        ...state,
        username: action.value,
        usernameValidated: false,
        usernameValidity: action.value.trim().length > 0,
      };
    case ACTIONS.email:
      return {
        ...state,
        email: action.value,
        emailValidated: false,
        emailValidity: action.value.trim().includes("@"),
      };
    case ACTIONS.password:
      return {
        ...state,
        password: action.value,
        passwordValidated: false,
        passwordValidity: action.value.length > 5,
      };
    case ACTIONS.confirmPassword:
      return {
        ...state,
        confirmPassword: action.value,
        confirmPasswordValidated: false,
        confirmPasswordValidity: state.password === action.value,
      };

    case ACTIONS.submit:
      return {
        ...state,
        usernameValidated: true,
        emailValidated: true,
        passwordValidated: true,
        confirmPasswordValidated: true,
      };
    default:
      return inputInitialState;
  }
};

const sendDataToServer = async (data) => {
  const response = await fetch("/api/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return response;
};

const SignupForm = ({ onSuccessfulSignup, onUnsuccessfulSignup }) => {
  const [inputState, inputDispatch] = useReducer(
    inputReducer,
    inputInitialState
  );

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    inputDispatch({ type: ACTIONS.submit });

    const {
      usernameValidity,
      emailValidity,
      passwordValidity,
      confirmPasswordValidity,
    } = inputState;

    const formValidity =
      usernameValidity &&
      emailValidity &&
      passwordValidity &&
      confirmPasswordValidity;

    if (!formValidity) return;

    const { email, password, username } = inputState;
    const response = await sendDataToServer({
      email,
      password,
    });

    // Check if account has been successfully set up in Firebase
    if (!response.ok) {
      onUnsuccessfulSignup();
      return;
    }

    // Create userObject
    const { localId: userID } = await response.json();
    const user = {
      id: userID,
      username,
      bio: "",
      joinedOn: new Date(Date.now()),
      profileImage: "",
      gems: [],
      collection: [],
      following: [],
      followers: [],
    };

    await fetch("/api/createuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    onSuccessfulSignup();
  };

  const handleUsernameChange = (e) => {
    inputDispatch({ type: ACTIONS.username, value: e.target.value });
  };

  const handleEmailChange = (e) => {
    inputDispatch({ type: ACTIONS.email, value: e.target.value });
  };
  const handlePasswordChange = (e) => {
    inputDispatch({ type: ACTIONS.password, value: e.target.value });
  };

  const handleConfirmPasswordChange = (e) => {
    inputDispatch({ type: ACTIONS.confirmPassword, value: e.target.value });
  };

  return (
    <AccountForm onSubmit={handleFormSubmit}>
      <AccountFormInput
        type="text"
        placeholder="Username"
        value={inputState.username}
        required={true}
        onChange={handleUsernameChange}
        validated={inputState.usernameValidated}
        validity={inputState.usernameValidity}
        invalidFeedback="username must not be empty."
      />
      <AccountFormInput
        type="email"
        placeholder="Email"
        value={inputState.email}
        required={true}
        onChange={handleEmailChange}
        validated={inputState.emailValidated}
        validity={inputState.emailValidity}
        invalidFeedback="email is invalid."
      />
      <AccountFormInput
        type="password"
        placeholder="Password"
        value={inputState.password}
        required={true}
        onChange={handlePasswordChange}
        validated={inputState.passwordValidated}
        validity={inputState.passwordValidity}
        invalidFeedback="password must be at least 6-digit long."
      />
      <AccountFormInput
        type="password"
        placeholder="Confirm your password"
        value={inputState.confirmPassword}
        required={true}
        onChange={handleConfirmPasswordChange}
        validated={inputState.confirmPasswordValidated}
        validity={inputState.confirmPasswordValidity}
        invalidFeedback="password doesn't match."
      />
      <AccountFormSubmitBtn text="sign up" className={styles.signupBtn} />
    </AccountForm>
  );
};

export default SignupForm;
