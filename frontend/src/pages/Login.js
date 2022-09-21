import './Login.css';
import LoginForm from '../components/Login/LoginForm'
import MPBtn from '../components/ui/MPBtn'

const Login = () => {
    return (
        <div className="Login_container">
            <h1 >Login</h1>
            <LoginForm />
            <MPBtn>로그인</MPBtn>
        </div>
    );
};

export default Login;