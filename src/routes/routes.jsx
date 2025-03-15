import { BrowserRouter, Route, Routes } from "react-router";

import LoginPage from "../pages/login";
import PageNotFound from "../pages/not_found_page/not_found";
import TestPage from "../pages/test_page";
import RegisterPage from "../pages/register";
import HomePage from "../pages/home";
import ProfilePage from "../pages/profile";
import RequireAuth from "./RequireAuth";
import RedirectIfAuthenticated from "./RedirectIfAuthenticated";


function AppRoutes() {
    return (
        <Routes>
            <Route path="*" element={<PageNotFound />} /> {/* 404 Page */}
            <Route path="testpage" element={<TestPage />} />

            <Route element={<RedirectIfAuthenticated />} >
                <Route path="login" element={<LoginPage />} />
                <Route path="register" element={<RegisterPage />} />
            </Route>

            <Route element={<RequireAuth />}>
                <Route path="/" element={<HomePage />} />
                <Route path="home" element={<HomePage />} />
                <Route path="profile" element={<ProfilePage />} />
            </Route>

        </Routes>
    );
}

export default AppRoutes;