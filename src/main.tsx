import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import Login from "./pages/Login";
import Register from "./pages/Register";
import Category from './pages/Category.tsx';
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
// import About from './pages/About.tsx';
import GetStarted from './pages/GetStarted.tsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "/register",
    element: <Register/>,
  },
  {
    path: "/explore",
    element: <Category/>,
  },
  {
    path: "/getstarted",
    element: <GetStarted/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
