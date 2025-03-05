import NavLayout from "../components/templates/NavLayout";
import Hamburgerbtn from "../components/atoms/Hamburgerbtn";
import NavRightcontent from "../components/molecules/NavRightContent";
import NavigateMenu from "../components/atoms/NavigateMenu";
import ProfileImage from "../components/atoms/ProfileImgae";
import { useState } from "react";
import NavMobileMenu from "../components/molecules/NavMobileMenu";


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
                            <Hamburgerbtn toggleMenu={toggleMenuFunc} />
                        </>

                    }
                    mobileMenuContent={<NavMobileMenu children={
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