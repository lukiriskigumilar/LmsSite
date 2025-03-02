function GenralBtn({className, txtBtn, onClickFunc}) {
    return ( 
        <button onClick={onClickFunc}
            className={className}>{txtBtn}</button>
    );
}

export default GenralBtn;