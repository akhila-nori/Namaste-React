import React from "react";
import ReactDOM from "react-dom";
import HeaderComponent from "./components/Header";
import BodyComponent from "./components/Body";

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
