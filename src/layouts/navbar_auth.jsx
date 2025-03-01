import logo from "../assets/images/logo.png";
import NavLayoutAuth from "../components/templates/nav_layout_auth";

function NavAuth() {
    return (
        <>
            <nav className="bg-custom-white p-4">
                <NavLayoutAuth />
            </nav>
        </>
    );
}

export default NavAuth;