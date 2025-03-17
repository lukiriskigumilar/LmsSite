import { useState } from "react";
import InputField from "../atoms/InputField";
import CountryCode from "../atoms/CountryCode";
import Label from "../atoms/LabelText";


function PhoneField({ id_input, name_label, typeInput,onSelectCountry, onchange }) {

    return (
        <>
            <div className="mt-[10px]">


                <Label nameLabel={id_input} txtLabel={name_label} />
                <div className="inline-flex items-end gap-2 w-full ">
                    <CountryCode onSelectCountry={onSelectCountry} />
                    <InputField inputId={id_input} name={id_input} typeInput={typeInput} handleChange={onchange}/>

                </div>
            </div> </>
    );
}

export default PhoneField;
