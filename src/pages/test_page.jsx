import InputPasswordField from "../components/molecules/InputPasswordField";
import PhoneField from "../components/molecules/PhoneField";
import InputTextField from "../components/molecules/InputTextField";
import Rating from "../components/atoms/rating";
import TutorProfile from "../components/molecules/TutorProfile";
import CardImage from "../components/atoms/CardImage";
import CardCourse from "../components/organisms/CardCourse";
import ListCourseLayout from "../components/templates/ListCourseLayout";
import FooterMenu from "../components/molecules/FooterMenu";
import SidebarItem from "../components/atoms/SidebarITem";
import SvgBasket from "../components/atoms/SvgBasket";
import SideMenu from "../components/molecules/SideMenu";


function TestPage() {


    return (
        <>
        <div className="flex flex-row gap-4 items-center justify-center">
        <SideMenu
        classNameProfile={"flex flex-row gap-2  border-[1px] border-orange-primary bg-orange-100 px-11 py-2 w-[100%] rounded-lg"}
        tittleMenu={"Daftar KELAs"} descMenu={"kses Materi Belajar dan Mulailah Meningkatkan Pengetahuan Anda"} />
        </div>
        </>
    );
}

export default TestPage;