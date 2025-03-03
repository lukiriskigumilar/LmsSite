function InputField({ inputId, typeInput, value, handleChange, name,placeholder,required=true}) {
    return (
        <input
            className="mt-[4px] p-3  border rounded-md border-gray-400 w-full py-2 leading-tight outline-black h-[40px]"
            id={inputId} type={typeInput} value={value} onChange={handleChange} name={name} placeholder={placeholder} required={required}></input>
    );
}

export default InputField;