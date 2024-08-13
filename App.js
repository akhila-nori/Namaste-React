import React from "react";
import ReactDOM from "react-dom";

const HeaderComponent = () => {
  return (
    <div className="headerCSS">
      <div className="logo-conatiner">
        <img
          className="logo324grht"
          src="https://mir-s3-cdn-cf.behance.net/project_modules/hd/25539c29532269.55f7d6a0a8c71.jpg"
        />
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

const AppLayout = () => {
  return (
    <div className="app">
      <HeaderComponent />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
