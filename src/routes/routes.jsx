import { BrowserRouter, Route, Routes } from "react-router";

import LoginPage from "../pages/login";
import PageNotFound from "../pages/not_found_page/not_found";

function AppRoutes() {
    return (
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="*" element={<PageNotFound />} /> {/* 404 Page */}
            </Routes>
    );
}

export default AppRoutes;