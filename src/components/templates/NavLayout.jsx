import MainIcon from "../atoms/MainIcon";
function NavLayout({children, mobileMenuContent}) {
    return (
        <>
        <div className="mx-auto flex items-center justify-between ">
           <a href="/"> <MainIcon className={"cursor-pointer h-[40px] sm:w-[237px] sm:h-[56px]"} /></a>
            {children}
        </div>
        {mobileMenuContent}
        </>
    );
}

export default NavLayout;