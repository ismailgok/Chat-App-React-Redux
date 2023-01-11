import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import Signup from "./components/auth/Signup";
import Login from './components/auth/Login'
import 'semantic-ui-css/semantic.min.css'
import './index.css';

const router = createBrowserRouter([
  {
    path: "/",
    element:<App />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/login",
    element: <Login />,
  },
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <RouterProvider router={router} />
  
);
