import { Navigate, Outlet } from "react-router-dom";
import Cookies from "js-cookie";
import { useAuthStore } from "../hooks/authStore";

export default function RequireAuth() {
    const user = useAuthStore((state) => state.user);
    const jwt = Cookies.get("Auth");

    const isAuthorized = user && jwt && user.JWT === jwt;

    return isAuthorized ? <Outlet /> : <Navigate to="/login" replace />;
}