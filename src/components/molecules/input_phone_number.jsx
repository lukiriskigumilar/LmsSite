import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import InputField from "../atoms/input_field";
import CountryCode from "../atoms/dropdown_country_code";


function PhoneField() {

    return (
        <>
            <div className="inline-flex items-end gap-2 w-full ">
                <CountryCode />
                <InputField />

            </div>
        </>
    );
}

export default PhoneField;