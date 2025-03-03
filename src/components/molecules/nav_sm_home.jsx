
function NavSmMenu({ children,isOpen }) {
    return (
        <>
            <div id="nav-sm-home" className={`${isOpen ? "flex" : "hidden"} flex-col p-4 space-y-2 bg-customWhite md:hidden`}>
                {children}
            </div>
        </>
    );
}

export default NavSmMenu;