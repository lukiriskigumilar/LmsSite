import NavigateMenu from "../atoms/nav_menu";
import ProfileImage from "../atoms/profile_image";

function NavMdHome({profileImage}) {
    return (
        <div className="hidden md:flex pr-[120px]">
        <ul className="flex gap-[36px] items-center">
            <li><NavigateMenu/></li>
            <li><ProfileImage profileImage={profileImage}/></li>
        </ul>
    </div>
    );
}

export default NavMdHome;