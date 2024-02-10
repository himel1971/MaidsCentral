import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'

import Layout from './assets/Layout/Layout.jsx';
import Home from './assets/Pages/Home.jsx';
import AuthProvider from './assets/Config/AuthProvider.jsx';
import Contact from './assets/Pages/Contact.jsx';
import FindMaids from './assets/Pages/FindMaids.jsx';




const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children:
      [
        {
          path: "/",
          element: <Home></Home>
        },
        {
          path: "/contact",
          element: <Contact></Contact>
        },
        {
          path: "/about",
          element: <h1>About Us</h1>
        },
        {
          path: "/findmaids",
          element: <FindMaids></FindMaids>,
          loader :  ()=>fetch('maids.JSON')

        },
        {
          path: "/login",
          element: <h1>Login</h1>

        },
        {
          path: "/register",
          element: <h1>Register</h1>
        }









      ]
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
