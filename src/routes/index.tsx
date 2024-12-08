import RootTemplate from "pages";
import Auth from "pages/auth"
import NotFound from "pages/not-found"
import { IRouter } from "types/routes-types"
import Dashboard from "pages/dashboard"
import PrivateRoute from "./privateRoute";
import Login from "pages/auth/login"
import Register from "pages/auth/register"
import Otp from "pages/auth/otp"
import ForgetPassword from "pages/auth/forget-password"
import { Navigate } from "react-router-dom";

const routes: IRouter[] = [
    { path: "/", element: <RootTemplate /> },
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
    // page not found
    { path: "*", element: <NotFound /> },
    // private routes
    { path: "dashboard", element: <PrivateRoute><Dashboard /></PrivateRoute> }
]





export default routes