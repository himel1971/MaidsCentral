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
import AskGPT from './assets/Pages/AskGPT.jsx';
import Service from './assets/Pages/Service.jsx';
import PrivateRouter from './assets/Config/PrivateRouter.jsx';





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
          path: "/service",
          element: <Service></Service>
        },
        {
          path: "/about",
          element: <About></About>
        },
        {
          path: "/findmaids",
          element: <FindMaids></FindMaids>,
          loader: () => fetch('https://maid-central-server-npw1g5hho-kazi-md-khorshed-alams-projects.vercel.app/maids')

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
          element: <PrivateRouter><SingleMaidData></SingleMaidData></PrivateRouter>,
          loader: () => fetch('https://maid-central-server-npw1g5hho-kazi-md-khorshed-alams-projects.vercel.app/maids')

        },

        {
          path: "/blog",
          element: <Blog></Blog>,
          loader: () => ('https://maid-central-server-npw1g5hho-kazi-md-khorshed-alams-projects.vercel.app/blogs')
        },
        {
          path: "/blog/:id",
          element: <BlogDetails></BlogDetails>,
          loader: () => fetch('https://maid-central-server-npw1g5hho-kazi-md-khorshed-alams-projects.vercel.app/blogs')

        },
        {
          path: "/Blog/blog/:id",
          element: <BlogDetails></BlogDetails>,
          loader: () => fetch('https://maid-central-server-npw1g5hho-kazi-md-khorshed-alams-projects.vercel.app/blogs')

        },

        ,
        {
          path: "/tips/:id",
          element: <BlogDetails></BlogDetails>,
          loader: () => fetch('https://maid-central-server-npw1g5hho-kazi-md-khorshed-alams-projects.vercel.app/blogs')

        },
        {
          path: "/faq",
          element: <FaqPage></FaqPage>,

        }
        



      ]
  },
  {
    path: "/dashboard",
    element: <PrivateRouter><Dashboard></Dashboard></PrivateRouter>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/dashboard",
        element: <DashboardHome></DashboardHome>,
      },
      {
        path: "/dashboard/allMaids",
        element: <AllMaids></AllMaids>,
        loader: () => fetch(`https://maid-central-server-npw1g5hho-kazi-md-khorshed-alams-projects.vercel.app/maids`)
      },
      {
        path: "/dashboard/users",
        element: <AllUsers></AllUsers>,
        loader: () => fetch(`https://maid-central-server-npw1g5hho-kazi-md-khorshed-alams-projects.vercel.app/users`)
        
      },
      {
        path: "/dashboard/addUser",
        element: <AddUser></AddUser>,
      },
      {
        path: "/dashboard/edit/:id",
        element: <MaidEdit></MaidEdit>,
        loader: () => fetch('https://maid-central-server-npw1g5hho-kazi-md-khorshed-alams-projects.vercel.app/maids')

      },

    ]





  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(

  <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>

)

