import logo from '../../assets/images/logo.png';

function LogoIcon({className}) {
    return (  
        <div><img src={logo} className={className} alt="Video belajar icon" /></div>
    );
}

export default LogoIcon;