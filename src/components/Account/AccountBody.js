import "./AccountBody.module.css";
import SignupForm from "./Signup/SignupForm";
import LoginForm from "./Login/LoginForm";
import AccountFormFeedback from "./AccountFormFeedback";

const AccountBody = ({
  loginModalActive,
  signupModalActive,
  signupSucceeded,
  signupFormSubmitted,
  loginSucceeded,
  loginFormSubmitted,
  onSuccessfulSignup,
  onUnsuccessfulSignup,
  onSuccessfulLogin,
  onUnsuccessfulLogin,
}) => {
  return (
    <div>
      <AccountFormFeedback
        loginModalActive={loginModalActive}
        loginFormSubmitted={loginFormSubmitted}
        loginSucceeded={loginSucceeded}
        signupModalActive={signupModalActive}
        signupFormSubmitted={signupFormSubmitted}
        signupSucceeded={signupSucceeded}
      />

      {/* Only hidden when signupSucceeded */}
      {signupModalActive && !signupSucceeded && (
        <SignupForm
          onSuccessfulSignup={onSuccessfulSignup}
          onUnsuccessfulSignup={onUnsuccessfulSignup}
        />
      )}

      {/* Only hidden when loginSucceeded */}
      {loginModalActive && !loginSucceeded && (
        <LoginForm
          onUnsuccessfulLogin={onUnsuccessfulLogin}
          onSuccessfulLogin={onSuccessfulLogin}
        />
      )}
    </div>
  );
};

export default AccountBody;
