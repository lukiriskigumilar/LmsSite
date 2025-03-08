import logo from '../../assets/images/logo.png';

function MainIcon({className,icon=logo}) {
    return (  
        <div><img src={icon} className={className} alt="Video belajar icon" /></div>
    );
}

export default MainIcon;