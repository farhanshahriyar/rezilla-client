import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import About from "../pages/Home/About Us/About";
import Contact from "../pages/Contact/Contact";
import Error from "../pages/Error/Error";
import Service from "../pages/Services/Service";
import Construction from "../pages/UnderConstruction/Construction";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children:[
        { path: "/", element: <Home/>},
        { path: "/about-us", element: <About/>},
        // { path: "/all-properties", element: <AllProperties/>},
        { path: "/services", element: <Service/>},
        { path: "/contact", element: <Contact/>},
        { path: "/pricing", element: <Construction/>},
        { path: "*", element: <Error/>},
        // { path: "/login", element: <Login/>},
        // { path: "/register", element: <Register/>},
      ]
    },
  ]);

