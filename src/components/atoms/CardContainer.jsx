function CardContainer({ style,children }) {
    return (
        <>
            <div className={style || "bg-white w-[100%] py-5 pl-2 pr-2 my-3 h-[305] block rounded-lg drop-shadow-xl shadow-xl sm:px-9 lg:w-[32%] lg:px-3 lg:mx-0"}>
                {children}
            </div>
        </>
    );
}

export default CardContainer;