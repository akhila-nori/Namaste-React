import React from "react";
import ReactDOM from "react-dom";
import HeaderComponent from "./components/Header";
import BodyComponent from "./components/Body";
import {createBrowserRouter, Outlet, RouterProvider} from "react-router-dom"
import About from "./components/About";
import Contact from "./components/ContactUs";
import Error from "./components/ErrorComponent";

const AppLayout = () => {
  return (
    <div className="app">
      <HeaderComponent />
      {/* if path = / then we should have BodyComponent, if pth is /about then we
      should have About component.

      I want to push these children /about, /contact over here conditionally as per the routes and accordingly that particular componennt 
      will be rendered on UI. */}
      <Outlet />
      {/* Outlet would be filled with children as per the current change in the path ==> and it will be rendered as per the current path */}
    </div>
  );
};
const appRouter = createBrowserRouter([
  {
    //App layout has 3 children and these should be loaded conditonally on UI (above : i.e., where components are rendered) as per the path
    path: "/",
    element: <AppLayout />,
    children:[
      {
        path: "/" ,
       element: <BodyComponent/>

      },
    {
        path: "/about",
        element: <About />
    },
    {
        path: "/contact",
        element: <Contact />
    }
    ],
    errorElement: <Error />
  },
  
]);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>) //providing router configration to RouterProvider
