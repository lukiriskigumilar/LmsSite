import ProfileImage from "../atoms/profile_image";
import NavigateMenu from "../atoms/nav_menu";


function NavSmHome({ profileImage,isOpen }) {
    return (
        <>
            <div id="nav-sm-home" className={`${isOpen ? "flex" : "hidden"} flex-col p-4 space-y-2 bg-customWhite md:hidden`}>
                <NavigateMenu />
                <ProfileImage profileImage={profileImage} />
            </div>
        </>
    );
}

export default NavSmHome;