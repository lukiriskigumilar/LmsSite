import NavLayout from "../components/templates/NavLayout";
import Hamburgerbtn from "../components/atoms/Hamburgerbtn";
import NavRightcontent from "../components/molecules/NavRightContent";
import NavigateMenu from "../components/atoms/NavigateMenu";
import ProfileImage from "../components/atoms/ProfileImgae";
import { useState } from "react";
import NavMobileMenu from "../components/molecules/NavMobileMenu";
import { Link } from "react-router-dom";
import ProfileMenu from "../components/molecules/ProfileDropdown";

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
                            <ProfileMenu />
                                
                            </>} />
                            <Hamburgerbtn toggleMenu={toggleMenuFunc} />
                        </>

                    }
                    mobileMenuContent={<NavMobileMenu children={
                        <>
                            <ul className="flex flex-col space-y-2">
                                <li><NavigateMenu /></li>
                                <ProfileMenu />
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