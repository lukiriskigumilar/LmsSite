
import NavMdHome from "../molecules/nav_md_home";
import NavSmHome from "../molecules/nav_sm_home";
import HamburgerButton from "../atoms/hamburger_btn";
import LogoIcon from "../atoms/logo";



function NavLayoutAuth() {
    return (
        <>
            <div className="mx-auto flex items-center justify-between ">
                <LogoIcon className={"h-[40px] sm:w-[237px] sm:h-[56px]"}  />
            </div>
        </>
    );
}

export default NavLayoutAuth;