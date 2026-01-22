import Button from "./Button";
import InputField from "./InputField";

const LoginCard = () => {
  return (
    <div className="login_card">
      <h1 className="login_title">Sign up</h1>
      <p className="login_description">
        All our services are available, but first.
      </p>
      <InputField />
      <Button name="Login" />
    </div>
  );
};

export default LoginCard;
