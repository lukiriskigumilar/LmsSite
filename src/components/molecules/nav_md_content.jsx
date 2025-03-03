import NavigateMenu from "../atoms/nav_menu";
import ProfileImage from "../atoms/profile_image";

function NavRightContent({ children }) {
    return (
        <div className="hidden md:flex pr-[120px]">
            <ul className="flex gap-[36px] items-center">
                {children}
            </ul>
        </div>
    );
}

export default NavRightContent;