function GeneralBtn({className, txtBtn, onClickFunc, type}) {
    return ( 
        <button onClick={onClickFunc} type={type}
            className={className}>{txtBtn} </button>
    );
}

export default GeneralBtn;