import LogoIcon from "../atoms/logo";
function NavLayout({children, mobileMenuContent}) {
    return (
        <>
        <div className="mx-auto flex items-center justify-between ">
            <LogoIcon className={"h-[40px] sm:w-[237px] sm:h-[56px]"} />
            {children}
        </div>
        {mobileMenuContent}
        </>
    );
}

export default NavLayout;