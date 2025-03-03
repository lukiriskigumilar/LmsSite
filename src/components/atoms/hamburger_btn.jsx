function HamburgerButton({hamburgerButton,toggleMenu}) {
    return ( 
        <button id={hamburgerButton} className="block md:hidden" onClick={toggleMenu}>
        <span className="block w-6 h-0.5 bg-black mb-1"></span>
        <span className="block w-6 h-0.5 bg-black mb-1"></span>
        <span className="block w-6 h-0.5 bg-black"></span>
    </button>
    );
}

export default HamburgerButton;