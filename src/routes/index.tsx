import { IRouter } from "types/routes-types"
import { Navigate } from "react-router-dom";
import { lazy } from "react";

const Home = lazy(() => import("pages"))
const Auth = lazy(() => import("pages/auth"))
const NotFound = lazy(() => import("pages/not-found"))
const Dashboard = lazy(() => import("pages/dashboard"))
const PrivateRoute = lazy(() => import("routes/PrivateRoute"))
const Login = lazy(() => import("pages/auth/login"))
const Register = lazy(() => import("pages/auth/register"))
const Otp = lazy(() => import("pages/auth/otp"))
const ForgetPassword = lazy(() => import("pages/auth/forget-password"))
const Products = lazy(() => import("pages/products"))

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
    // page not found
    { path: "*", element: <NotFound /> },
    // private routes
    { path: "dashboard", element: <PrivateRoute><Dashboard /></PrivateRoute> }
]




