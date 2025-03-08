import InputField from "../atoms/InputField";
import Label from "../atoms/Label";

function InputTextField({  id, txtLabel, value, type = "text", handleChange, placeholder,style="mt-[10px]"}) {
    return (
        <>   <div className={style}>
            <Label nameLabel={id} txtLabel={txtLabel}  />
            <InputField inputId={id} typeInput={type} value={value} name={id} handleChange={handleChange} placeholder={placeholder} />
        </div>
        </>
    );
}

export default InputTextField;