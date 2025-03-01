function NavLayoutHome() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenuFunc = () => {
        setIsOpen(!isOpen);
        setIsOpen(!isOpen);
    }
    return (
        <>
            <div className="mx-auto flex items-center justify-between">
                <LogoIcon className={"h-[40px] sm:w-[237px] sm:h-[56px]"} />
                <NavMdHome profileImage={profileImage} />
                <HamburgerButton toggleMenu={toggleMenuFunc} />
            </div>
            <NavSmHome isOpen={isOpen} profileImage={profileImage} />


        </>
    );
}

export default NavLayoutHome;
