function CardContainer({ style,children }) {
    return (
        <>
            <div className={style || "bg-white w-[100%] py-5 pl-2 pr-2 my-3 h-fit lg:h-[450px] 2xl:h-[480px]  block rounded-lg drop-shadow-xl shadow-xl sm:px-9 lg:w-[32%] lg:px-3  lg:mx-0 overflow-hidden"}>
                {children}
            </div>
        </>
    );
}

export default CardContainer;