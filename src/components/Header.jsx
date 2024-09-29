import { LOGO_URL } from "../../utils/constants";
import { useEffect, useState } from "react";

const HeaderComponent = () => {
  const [btnNameReact, setbtnNameReact] = useState("Login");

  useEffect(() => {
    console.log("useEffect is called")
  }, [btnNameReact]);

  return (
    <div className="headerCSS">
      <div className="logo-conatiner">
        <img className="logo324grht" src={LOGO_URL} />
      </div>

      <div className="nav-items1">
        <ul>
          <li>Home</li>
          <li><a href="/about">About Us</a></li>
          <li>Contact</li>
          <li>Cart</li>
          <button
            className="loginBtn"
            style={{
              padding: "0 20px",
              backgroundColor: "pink",
              cursor: "pointer"
            }}
            onClick={() => {
              btnNameReact === "Login"
                ? setbtnNameReact("Logout")
                : setbtnNameReact("Login");
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default HeaderComponent;
