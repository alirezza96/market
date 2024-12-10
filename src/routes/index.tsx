import { IRouter } from "types/routes-types"
import { Navigate } from "react-router-dom";
import { lazy } from "react";
import PrivateRoute from "routes/PrivateRoute"

const Home = lazy(() => import("pages"))
const Auth = lazy(() => import("pages/auth"))
const NotFound = lazy(() => import("pages/not-found"))
const Dashboard = lazy(() => import("pages/dashboard"))
const Login = lazy(() => import("pages/auth/login"))
const Register = lazy(() => import("pages/auth/register"))
const Otp = lazy(() => import("pages/auth/otp"))
const ForgetPassword = lazy(() => import("pages/auth/forget-password"))
const Products = lazy(() => import("pages/products"))
const Product = lazy(() => import("pages/product/[id]"))
export const routes: IRouter[] = [
    { path: "/", element: <Home /> },
    {
        path: "auth", element: <Auth />,
        children: [
            { path: "", element: <Navigate to="login" replace /> },
            { path: "login", element: <Login /> },
            { path: "register", element: <Register /> },
            { path: "otp", element: <Otp /> },
            { path: "forget-password", element: <ForgetPassword /> },
        ]
    },
    { path: "products", element: <Products /> },
    { path: "product/:id", element: <Product /> },
    // page not found
    { path: "*", element: <NotFound /> },
    // private routes
    { path: "dashboard", element: <PrivateRoute><Dashboard /></PrivateRoute> }
]




