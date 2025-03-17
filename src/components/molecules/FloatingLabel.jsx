function FloatingLabel({dataValue,labelName, formName,id,onChange}) {
    return (
        <div>
            <div className="relative mt-4">
            <input type="text" onChange={onChange} id={id} name={formName} className=" block px-2.5 pb-2.5 pt-4 w-full text-sm text-black bg-transparent rounded-lg border-1 border-gray-300 appearance-nonedark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-green-primary peer" defaultValue={dataValue} />
                <label htmlFor={id} className=" absolute text-md text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-green-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">{labelName}</label>
            </div>
        </div>
    );
}

export default FloatingLabel;