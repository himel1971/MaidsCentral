import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Layout from './Layout/Layout.jsx';
import Home from './Pages/Home.jsx';




const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children:
   [
    {
      path: "/",
      element: <Home></Home>
    }
   ]
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
