import InputField from "../atoms/input_field";
import Label from "../atoms/label";

function InputTextField({ id, txtLabel, value , type ="text"}) {
    return (
        <>
            <Label nameLabel={id} txtLabel={txtLabel}  />
            <InputField inputId={id} typeInput={type}  value={value} name={id} handleChange={handleChange} placeholder={placeholder}  />
        </>
    );
}

export default InputTextField;