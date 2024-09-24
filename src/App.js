import React from "react";
import ReactDOM from "react-dom";
import HeaderComponent from "./components/Header";
import BodyComponent from "./components/Body";
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import About from "./components/About";
import Contact from "./components/ContactUs";
import Error from "./components/ErrorComponent";

const AppLayout = () => {
  return (
    <div className="app">
      <HeaderComponent />
      <BodyComponent />
    </div>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />
  },
  {
    path: "/about",
    element: <About />
  },
  {
    path: "/contact",
    element: <Contact />
  }
]);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>) //providing router configration to RouterProvider
