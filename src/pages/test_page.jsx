import InputPasswordField from "../components/molecules/InputPasswordField";
import PhoneField from "../components/molecules/PhoneField";
import InputTextField from "../components/molecules/InputTextField";
import Rating from "../components/atoms/rating";
import TutorProfile from "../components/molecules/TutorProfile";
import CardImage from "../components/atoms/CardImage";
import CardCourse from "../components/organisms/CardCourse";
import ListCourseLayout from "../components/templates/ListCourseLayout";
import FooterMenu from "../components/molecules/FooterMenu";


function TestPage() {
    const Kategori = [
        {
            title: "Pendidikan",
            link: "#"
        },
        {
            title: "Pemasaran",
            link: "#"
        },
        {
            title: "Desain",
            link: "#"
        }
    ]
    return (
        <>
            {/* <CardCourse
                tittleCourse={"Belajar mancing"}
                tutorName={"joko"}
                tutorJob={"Pemancing"}
                workAt={"Pemancingan"}
                descCourse={" Ini adalah kursus tentang cara belajar memancingIni adalah kursus tentang cara belajar memancingIni adalah kursus tentang cara belajar memancingIni adalah kursus tentang cara belajar memancing dengan baik dan benar."}
            /> */}

            {/* <ListCourseLayout /> */}

            <FooterMenu
                titleMenu={"Kategori"}
                liList={
                    <>
                    <li>test</li>
                    
                     </>
                }
            />

            <FooterMenu
                titleMenu={"Kategoris"}
                liList={
                    <>
                    <li>asd</li>
                    </>
                }
            />
        </>
    );
}

export default TestPage;