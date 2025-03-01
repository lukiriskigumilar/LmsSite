import defaultProfileImage from "../../assets/images/Avatar.png"
function ProfileImage({profileImage}) {
    return (
        <a href="{TODO:navigate to profile page}"><img src={profileImage? profileImage: defaultProfileImage} alt="" /></a>
    );
}

export default ProfileImage;