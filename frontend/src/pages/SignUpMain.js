import './Login.css';
import SignUpChoice from "../components/SignUp/SignUpChoice";
import { ReactComponent as Reservation } from "../assets/Signup.svg";

const SignUpMain = () => {
    return (
        <div className="Login_container">
    <div className="Login_logo">
            <Reservation width="18rem" height="11rem" />
            </div>
            <hr/>
 <SignUpChoice/>
        </div>
    );
};

export default SignUpMain;