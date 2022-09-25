
import CustomerForm from '../components/SignUp/CustomerForm';
import { ReactComponent as Reservation } from "../assets/Customer.svg";
const SignUpCustomer = () => {
  
  return (
      <div className="container">
          <div className="Login_logo">
            <Reservation width="25rem" height="11rem" />
            </div>
          <hr/>
          <CustomerForm/>
      </div>
  );
};

export default SignUpCustomer;