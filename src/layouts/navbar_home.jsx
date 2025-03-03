import NavLayout from "../components/templates/nav_layout";
import HamburgerButton from "../components/atoms/hamburger_btn";
import NavRightcontent from "../components/molecules/nav_md_content";
import NavigateMenu from "../components/atoms/nav_menu";
import ProfileImage from "../components/atoms/profile_image";
import { useState } from "react";
import NavSmMenu from "../components/molecules/nav_sm_home";


function NavbarHome() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenuFunc = () => {
        setIsOpen(!isOpen);
        setIsOpen(!isOpen);
    }
    return (
        <>
            <nav className="bg-customWhite p-4">
                <NavLayout
                    children={
                        <>
                            <NavRightcontent children={<>
                                <li><NavigateMenu /></li>
                                <li><ProfileImage /></li>
                            </>} />
                            <HamburgerButton toggleMenu={toggleMenuFunc} />
                        </>

                    }
                    mobileMenuContent={<NavSmMenu children={
                        <>
                            <ul>
                                <li><NavigateMenu /></li>
                                <li><ProfileImage /></li>
                            </ul>
                        </>}
                        isOpen={isOpen}
                    />}
                />
            </nav>

        </>
    );
}

export default NavbarHome;