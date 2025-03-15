import InputField from "../atoms/InputField";
import Label from "../atoms/LabelText";
import LabelText from "../atoms/LabelText";

function InputTextField({  id, txtLabel, value, type = "text", handleChange, placeholder,style="mt-[10px]"}) {
    return (
        <>   <div className={style}>
            <LabelText nameLabel={id} txtLabel={txtLabel} />
            <InputField  inputId={id} typeInput={type} value={value} name={id} handleChange={handleChange} placeholder={placeholder} />
        </div>
        </>
    );
}

export default InputTextField;