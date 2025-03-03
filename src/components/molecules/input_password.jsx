import { useState } from "react";

import EyeRegular from "../../assets/images/eye-regular.svg"
import EyeSlash from "../../assets/images/eye-slash-solid.svg"
import InputField from "../atoms/input_field";
import Label from "../atoms/label";

function InputPasswordField({ id, txtLabel, value, handleChange, placeholder,}) {
    const [showPassword, setShowPassword] = useState(false);
    
    const showPasswordFunc = () => {
        setShowPassword(!showPassword);
    }
    return (
        <>
            <Label nameLabel={id} txtLabel={txtLabel} />
            <div className="relative">
                <InputField inputId={id} typeInput={showPassword ? "text" : "password"} name={id} value={value} handleChange={handleChange} placeholder={placeholder} />
                <button type="button" onClick={showPasswordFunc}
                    className="cursor-pointer absolute inset-y-0 right-2 top-1.5 flex items-center text-gray-600">
                    <img src={showPassword ? EyeSlash : EyeRegular} alt="eye" className="w-6 h-6" />
                </button>
            </div>
        </>


    );
}

export default InputPasswordField;