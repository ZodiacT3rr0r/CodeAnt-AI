import SigninL from "../components/signinL";
import SigninR from "../components/signinR";
import "./signin.css"

const SignInPage = () => {
  return ( 
    <div className="main">
      <SigninL />
      <SigninR />
    </div>
  );
}
 
export default SignInPage;