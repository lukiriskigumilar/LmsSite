import { useState } from "react";
import InputField from "../atoms/InputField";
import CountryCode from "../atoms/CountryCode";
import Label from "../atoms/LabelText";


function PhoneField({ id_input, name_label, typeInput }) {

    return (
        <>
            <div className="mt-[10px]">


                <Label nameLabel={id_input} txtLabel={name_label} />
                <div className="inline-flex items-end gap-2 w-full ">
                    <CountryCode />
                    <InputField inputId={id_input} name={id_input} typeInput={typeInput} />

                </div>
            </div> </>
    );
}

export default PhoneField;
