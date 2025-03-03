import { BrowserRouter, Route, Routes } from "react-router";

import LoginPage from "../pages/login";
import PageNotFound from "../pages/not_found_page/not_found";
import TestPage from "../pages/test_page";

function AppRoutes() {
    return (
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="*" element={<PageNotFound />} /> {/* 404 Page */}
                <Route path="testpage" element={<TestPage/>} />
            </Routes>
    );
}

export default AppRoutes;