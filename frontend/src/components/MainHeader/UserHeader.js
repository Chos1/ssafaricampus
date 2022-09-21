
const UserHeader = () => {
  return (
    <ul>
      <li>
        <NavLink to='/main'>
          Main
        </NavLink>
      </li>
      <li>
        <NavLink to='/login'>
          Login
        </NavLink>
      </li>
      <li>
        <NavLink to='/signup'>
          SignUp
        </NavLink>
      </li>
    </ul>   
  );
};

export default UserHeader;