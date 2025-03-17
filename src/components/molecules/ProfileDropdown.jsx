import { useState } from "react";
import { Link } from "react-router-dom";
import { X } from "lucide-react";

import ProfileImage from "../atoms/ProfileImgae";
import useAuth from "../../hooks/UseAuth";
function ProfileMenu() {
    const [isOpen, setIsOpen] = useState(false);
    const {handleLogout} = useAuth();
    

    return (
        <li className="relative">
            {/* Button Profile */}
            <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
                <ProfileImage />
            </button>

            {/* Fullscreen Dropdown (Mobile) */}
            <div
                className={`fixed inset-0 bg-white z-50 transform transition-transform duration-300 
                ${isOpen ? "translate-x-0" : "-translate-x-full"} lg:hidden`}
            >
                {/* Close Button */}
                <button 
                    onClick={() => setIsOpen(false)} 
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                >
                    <X size={30} />
                </button>

                {/* Dropdown Menu */}
                <ul className="flex flex-col items-start space-y-4 p-8 text-lg">
                    <li>
                        <Link to="/profile" className="block py-2 text-text-secondary font-bold" onClick={() => setIsOpen(false)}>
                            Profile
                        </Link>
                    </li>
                    <li>
                        <Link className="block py-2 text-red-600 font-bold" onClick={handleLogout}>
                            Logout
                        </Link>
                    </li>
                </ul>
            </div>

            {/* Dropdown Kecil (Desktop) */}
            {isOpen && (
                <ul className="px-2 py-2 absolute right-0 top-full mt-2 w-48 bg-white border rounded-lg shadow-lg z-50 hidden lg:block">
                    <li>
                        <Link to="/profile" className="block px-4 py-2 hover:bg-gray-100" onClick={() => setIsOpen(false)}>
                            Profile
                        </Link>
                    </li>
                    <li>
                        <Link  className="text-red-500 block px-4 py-2 hover:bg-red-500 hover:text-white" onClick={handleLogout}>
                            Logout
                        </Link>
                    </li>
                </ul>
            )}
        </li>
    );
}

export default ProfileMenu;
