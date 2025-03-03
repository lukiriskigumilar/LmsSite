import NavLayout from "../components/templates/nav_layout";

function NavAuth() {
    return (
        <>
        <nav className="bg-customWhite p-4">
            <NavLayout
                children={""}
                mobileMenuContent={""}
            />
        </nav>
        </>
    );
}

export default NavAuth;