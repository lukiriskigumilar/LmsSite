import { BrowserRouter, Route, Routes } from "react-router";

import LoginPage from "../pages/login";
import PageNotFound from "../pages/not_found_page/not_found";
import TestPage from "../pages/test_page";
import RegisterPage from "../pages/register";
import HomePage from "../pages/home";
import ProfilePage from "../pages/profile";


function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="home" element={<HomePage />} />
            <Route path="*" element={<PageNotFound />} /> {/* 404 Page */}
            <Route path="testpage" element={<TestPage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="register" element={<RegisterPage />} />
            <Route path="profile" element={<ProfilePage />} />


        </Routes>
    );
}

export default AppRoutes;