import { Link } from 'react-router-dom';
const SignUpMain = () => {
    return (
        <div>
            <p>Sign Up Main</p>
  
        <div>
            <Link to='/signup/customer'>
            구매자
            </Link>
            </div>
        <div>
        <Link to='/signup/seller'>
            판매자
            </Link>
            </div>
        </div>
    );
};

export default SignUpMain;