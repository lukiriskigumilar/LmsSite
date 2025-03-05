import NavigateMenu from "../atoms/NavigateMenu";
import ProfileImage from "../atoms/ProfileImgae";

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