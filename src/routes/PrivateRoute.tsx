import { Navigate } from "react-router-dom";
import { ReactNode } from "react";

export default function PrivateRoute({ children }: { children: ReactNode }) {
    const isAdmin: boolean = false;
    return isAdmin ? children : <Navigate to="/auth/login" />;
}
