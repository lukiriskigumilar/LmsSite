import { Link } from "react-router-dom";
import defaultProfileImage from "../../assets/images/Avatar.png"
function ProfileImage({profileImage, linkTo, className}) {
    return (
       <Link to={linkTo}>
      <img src={profileImage? profileImage: defaultProfileImage} alt="" className={className || "cursor-pointer  w-[44px] h-[44px]"} />
       </Link>
    );
}

export default ProfileImage;