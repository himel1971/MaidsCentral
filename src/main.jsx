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
import Blog from './assets/Pages/Blog.jsx';
import BlogSection from './assets/Component/Home/Blog/BlogSection.jsx';
import BlogDetails from './assets/Component/Home/Blog/BlogDetails.jsx';
import Home2 from './assets/Pages/Home2.jsx';
import Dashboard from './assets/Pages/Admin/Dashboard.jsx';
import DashboardHome from './assets/Pages/Admin/DashboardHome.jsx';
import AllUsers from './assets/Pages/Admin/AllUsers.jsx';
import AddUser from './assets/Pages/Admin/AddMaids.jsx';
import AllMaids from './assets/Pages/Admin/AllMaids.jsx';
import MaidEdit from './assets/Pages/Admin/MaidEdit.jsx';
import FaqPage from './assets/Pages/FaqPage.jsx';





const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <Error></Error>,
    children:
      [
        {
          path: "/",
          element: <Home2></Home2>
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
          loader: () => fetch('http://localhost:5000/maids')

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
          element: <SingleMaidData></SingleMaidData>,
          loader: () => fetch('http://localhost:5000/maids')

        },

        {
          path: "/blog",
          element: <Blog></Blog>,
          loader: () => ('http://localhost:5000/blogs')
        },
        {
          path: "/blog/:id",
          element: <BlogDetails></BlogDetails>,
          loader: () => fetch('http://localhost:5000/blogs')

        },
        {
          path: "/Blog/blog/:id",
          element: <BlogDetails></BlogDetails>,
          loader: () => fetch('http://localhost:5000/blogs')

        },
        
        ,
        {
          path: "/tips/:id",
          element: <BlogDetails></BlogDetails>,
          loader: () => fetch('http://localhost:5000/tips')

        },{
          path:"/faq",
          element:<FaqPage></FaqPage>,
          
        }
        
        







      ]
  },
  {
    path: "/dashboard",
    element: <Dashboard></Dashboard>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/dashboard",
        element: <DashboardHome></DashboardHome>,
        loader: () => fetch(`https://y-two-omega.vercel.app/parcel`)
      },
      {
        path: "/dashboard/allMaids",
        element: <AllMaids></AllMaids>,
        loader: () => fetch(`http://localhost:5000/maids`)
      },
      {
        path: "/dashboard/users",
        element: <AllUsers></AllUsers>,
        loader: () => fetch(`http://localhost:5000/users`)
      },
      {
        path: "/dashboard/addUser",
        element: <AddUser></AddUser>,
        loader: () => fetch(`https://y-two-omega.vercel.app/users`)
      },


      {
        path: "/dashboard/edit/:id",
        element: <MaidEdit></MaidEdit>,
        loader: () => fetch('http://localhost:5000/maids')

      },

    ]





  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(

  <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>

)

