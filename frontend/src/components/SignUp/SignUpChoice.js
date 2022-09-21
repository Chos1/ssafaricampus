import { Link } from 'react-router-dom';
const SignUpChoice = () => {
  return (
      <div>
          {/* <p>Sign Up Choice</p> */}
          <div>
            <Link to='/signup/customer'>
            구매자 이미지
            </Link>
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            <Link to='/signup/seller'>
            판매자 이미지
            </Link>
            </div>
      
      </div>
  );
};

export default SignUpChoice;