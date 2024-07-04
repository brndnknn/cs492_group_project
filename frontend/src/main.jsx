import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import './index.css'
import Root from './routes/root';
import ErrorPage from './error-page';
import Menu from './routes/menu';
import About from './routes/about';
import Login from './routes/login';
import Cart from './routes/cart';
import { CartProvider } from './context/cartcontext';
import Checkout from './components/checkout';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "Menu",
                element: <Menu />
            },
            {
                path: "About",
                element: <About />
            },
            {
                path: "Cart",
                element: <Cart />
            },
            {
                path: "Login",
                element: <Login />
            },
            {
                path: "Checkout",
                element: <Checkout /> 
            }
        ],
    },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CartProvider>
        <RouterProvider router={router} />
    </CartProvider>
  </React.StrictMode>,
)
