import { Outlet, Navigate } from "react-router";
import Cookies from "js-cookie";
import { useAuthStore } from "../hooks/authStore";

function RedirectIfAuthenticated() {
    const user = useAuthStore((state) => state.user);
    const jwt = Cookies.get("Auth");

    const isAuthorized = user && jwt && user.JWT === jwt;

    return isAuthorized ? <Navigate to="/" replace /> : <Outlet />;
}

export default RedirectIfAuthenticated;