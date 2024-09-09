import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./Components/Ui/Navbar";
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import ContactUs from "./Pages/ContactUs";
import Cart from "./Pages/Cart";
import AboutUs from "./Pages/AboutUs";
import IndividualPage from "./Pages/IndividualPage";

function App() {
  const appRoutes = createBrowserRouter([
    {
      path: "/",
      element: <Navbar />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/products",
          element: <Products />,
        },
        {
          path: "/contactus",
          element: <ContactUs />,
        },
        {
          path: "/cart",
          element: <Cart />,
        },
        {
          path: "/about",
          element: <AboutUs />,
        },
        {
          path: "/product-page",
          element: <IndividualPage />,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={appRoutes} />
    </>
  );
}

export default App;
