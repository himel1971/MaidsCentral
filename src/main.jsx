import React from 'react'
import ReactDOM from 'react-dom/client'
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
import SingleMaidData from './assets/Pages/SingleMaidData.jsx';
import Error from './assets/Pages/Error.jsx';





const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <Error></Error>  ,
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
          loader :  ()=>fetch('http://localhost:5000/maids')

        },
        {
          path: "/login",
          element: <h1>Login</h1>

        },
        {
          path: "/register",
          element: <h1>Register</h1>
        },
        {
          path: "/maid/:id",
          element : <SingleMaidData></SingleMaidData> ,
          loader :  ()=>fetch('http://localhost:5000/maids')

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
