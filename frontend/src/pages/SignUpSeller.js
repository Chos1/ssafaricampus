
import SellerForm from '../components/SignUp/SellerForm';
import { ReactComponent as Reservation } from "../assets/Host.svg";
const SignUpSeller = () => {
  return (
    <div className="container">
               <div className="Login_logo">
            <Reservation width="18rem" height="11rem" />
            </div>
          <hr/>
          <SellerForm/>
          
      </div>
  );
};

export default SignUpSeller;