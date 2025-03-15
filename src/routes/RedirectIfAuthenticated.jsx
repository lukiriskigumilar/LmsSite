import { Outlet, Navigate } from "react-router";
function RedirectIfAuthenticated() {
    
    const currentUser = localStorage.getItem("currentUser");

    if (currentUser) {
        return <Navigate to="/" replace />;
    } else {
        return <Outlet />;
    }
}

export default RedirectIfAuthenticated;