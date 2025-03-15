import { Navigate, Outlet } from "react-router-dom";

function RequireAuth() {
    const currentUser = localStorage.getItem("currentUser");

    if (currentUser) {
        return <Outlet />;
    } else {
        return <Navigate to="/login" replace />;
    }
}

export default RequireAuth;
