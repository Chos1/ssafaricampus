import './Login.css';
import LoginForm from '../components/Login/LoginForm'
import MPBtn from '../components/ui/MPBtn'
import MPBtnBrd from '../components/ui/MPBtnBrd'

const Login = () => {
    return (
        <div className="Login_container">
            <h1 >Login</h1>
            <hr/>
            <LoginForm />
            <MPBtn>로그인</MPBtn>
            <MPBtnBrd>회원가입</MPBtnBrd>
        </div>
    );
};

export default Login;