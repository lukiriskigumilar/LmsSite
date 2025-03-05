import GeneralBtn from "../atoms/GeneralBtn";
import AuthBtn from "../molecules/AuthBtn";
import InputPasswordField from "../molecules/InputPasswordField";
import InputTextField from "../molecules/InputTextField";
import GoogleImage from "../../assets/images/google.png"
import { Children } from "react";


function AuthLayout({ tittle, description, children }) {
    return (
        <div className="bg-background-primary w-screen h-[800px] flex justify-center items-start ">
            <div className="bg-white w-full sm:max-w-[90%] lg:max-w-[600px] mx-4 sm:mx-auto p-6 rounded-2xl mt-[60px]">
                <div className="mt-3">
                    <h1 className="font-semibold text-3xl text-center ">{tittle}</h1>
                    <p className="text-sm font-normal text-center text-textColorsecond">{description}</p>
                </div>
                <div className="mt-[30px]">
                    {children}
                </div>
            </div>
        </div>
    );
}

export default AuthLayout;