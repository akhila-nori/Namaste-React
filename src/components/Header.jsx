import { LOGO_URL } from "../../utils/constants";

const HeaderComponent = () => {
  return (
    <div className="headerCSS">
      <div className="logo-conatiner">
        <img className="logo324grht" src={LOGO_URL} />
      </div>

      <div className="nav-items1">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default HeaderComponent;
