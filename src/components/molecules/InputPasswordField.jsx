import { useState } from "react";

import EyeRegular from "../../assets/images/eye-regular.svg"
import EyeSlash from "../../assets/images/eye-slash-solid.svg"
import InputField from "../atoms/InputField";
import Label from "../atoms/Label";

function InputPasswordField({ id, txtLabel, value, handleChange, placeholder, }) {
    const [showPassword, setShowPassword] = useState(false);

    const showPasswordFunc = () => {
        setShowPassword(!showPassword);
    }
    return (
        <>
            <div className="mt-[10px]">
                <Label nameLabel={id} txtLabel={txtLabel} />
                <div className="relative">
                    <InputField autoComplete={"username"} inputId={id} typeInput={showPassword ? "text" : "password"} name={id} value={value} handleChange={handleChange} placeholder={placeholder} />
                    <button type="button" onClick={showPasswordFunc}
                        className="cursor-pointer absolute inset-y-0 right-2 top-1.5 flex items-center text-gray-600">
                        <img src={showPassword ? EyeSlash : EyeRegular} alt="eye" className="w-6 h-6" />
                    </button>
                </div>
            </div>
        </>


    );
}

export default InputPasswordField;