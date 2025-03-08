
import { useState } from "react";

function FooterMenu({ titleMenu, liList }) {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    return (

        <>
            <div className="flex justify-between items-start mt-1 lg:mt-0 lg:block">
                <div className="flex flex-col justify-between items-start mt-1 lg:mt-0 lg:block">
                    <p className="text-[15px] font-bold">{titleMenu}</p>
                    <ul
                        className={`lg:block lg:text-textColorsecond font-normal text-text-secondary transition-all duration-300 overflow-hidden ${isDropdownOpen ? "block" : "hidden"
                            } lg:bloc`}
                    >
                        {liList}
                    </ul>
                </div>
                <img
                    src="images/arrow-left.png"
                    alt="arrow"
                    className={`h-[15px] lg:hidden cursor-pointer transform transition-transform ${isDropdownOpen ? "rotate-90" : "rotate-0"
                        }`}
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                />
            </div>
        </>
    );
}

export default FooterMenu;