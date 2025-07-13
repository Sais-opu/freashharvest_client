import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AuthProvider from './components/Provider/authProvider.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Error from './components/Error.jsx'
import Home from './components/Home/Home.jsx'
import { ToastContainer } from 'react-toastify';
import About from './components/Home/About.jsx'
import Shop from './components/Home/Shop.jsx'
import Blog from './components/Home/Blog.jsx'
import Login from './components/login/Login.jsx'
import Register from './components/register/Register.jsx'
import Fav from './components/Home/Fav.jsx'
import Cart from './components/Home/Cart.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      // {
      //   path: "/",
      //   element: <Home />
      // },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/shop",
        element: <Shop />
      },
      {
        path: "/blog",
        element: <Blog />
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/register",
        element: <Register />
      },
      {
        path: "/favourite",
        element: <Fav />
      },
      {
        path: "/cart",
        element: <Cart />
      },
    ]
    }
  ])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition="bounce"
      />
    </AuthProvider>

  </StrictMode>,
)
