import { useState } from "react";
import InputField from "../atoms/InputField";
import CountryCode from "../atoms/CountryCode";


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