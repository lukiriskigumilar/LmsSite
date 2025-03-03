import GenralBtn from "../atoms/genral_button";
import AuthBtn from "../molecules/auth_btn";
import InputPasswordField from "../molecules/input_password";
import InputTextField from "../molecules/input_txt";
import GoogleImage from "../../assets/images/google.png"
import { Children } from "react";


function AuthLayout({ tittle, description, children }) {
    return (

        <div className="bg-white w-full sm:max-w-[90%] lg:max-w-[600px] mx-4 sm:mx-auto p-6 rounded-2xl mt-[60px]">
            <div className="mt-3">
                <h1 className="font-semibold text-3xl text-center ">{tittle}</h1>
                <p className="text-sm font-normal text-center text-textColorsecond">{description}</p>
            </div>
            {children}
        </div>
    );
}

export default AuthLayout;