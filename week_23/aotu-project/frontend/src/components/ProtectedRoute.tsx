import React from "react";
import { useAuthState } from "../store/authStore";
import { Navigate} from "react-router";

function ProtectedRoute({ children }: { children: React.ReactNode }) {
    const token = useAuthState((state) => state.token);
    if (!token) {
        return <Navigate to={"/login"} replace />;
    }
    return <>{children}</>;
}

export default ProtectedRoute;
