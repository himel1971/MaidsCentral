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
import SignIn from './assets/Pages/Login.jsx';
import Registration from './assets/Pages/Registration.jsx';
import About from './assets/Pages/About.jsx';





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
          element: <About></About>
        },
        {
          path: "/findmaids",
          element: <FindMaids></FindMaids>,
          loader :  ()=>fetch('http://localhost:5000/maids')

        },
        {
          path: "/login",
          element: <SignIn></SignIn>

        },
        {
          path: "/register",
          element: <Registration></Registration>
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
  
  <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>

)

