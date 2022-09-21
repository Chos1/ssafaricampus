import './Login.css';
import LoginForm from '../components/Login/LoginForm'
import { ReactComponent as Reservation } from "../assets/Login.svg";
const Login = () => {

    return (
        <div className="Login_container">
            
            <div className="Login_logo">
            <Reservation width="18rem" height="11rem" />
            </div>
            <hr/>
            <LoginForm />
        </div>
    );
};

export default Login;