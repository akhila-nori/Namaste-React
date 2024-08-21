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

const RestrauntCard = () => {
  return (
    <div
      className="res-card"
      style={{
        backgroundColor: "#f0f0f0",
      }}
    >
      <img
        alt="res-logo"
        src="https://cookingfromheart.com/wp-content/uploads/2017/09/Veg-Biryani-in-Pressure-Cooker-6.jpg"
        style={{
          width: "100%",
          height: "auto",
        }}
      />
      <h3>Meghana Foods</h3>
    </div>
  );
};
const BodyComponent = () => {
  return (
    <div className="bodyCss">
      <div className="searchCss">Search</div>
      <div className="res-conatiner">
        <RestrauntCard />
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <HeaderComponent />
      <BodyComponent />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
