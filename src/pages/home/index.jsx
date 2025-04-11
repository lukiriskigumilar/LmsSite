import { useState,useEffect } from "react";

import GeneralBtn from "../../components/atoms/GeneralBtn";
import Banner from "../../components/molecules/banner";
import CardCourse from "../../components/organisms/CardCourse";
import ListCourseLayout from "../../components/templates/ListCourseLayout";
import NavbarHome from "../../layouts/NavbarHome";
import InputField from "../../components/atoms/InputField";
import InputTextField from "../../components/molecules/InputTextField";
import Footer from "../../layouts/footer";
import { toast } from "react-toastify";


import { getCourses } from "../../services/useService";

function HomePage() {
    const [courses, setCourses] = useState([])

    useEffect(() => {
    
        const fetchCourses = async () => {
            const toastId = toast.loading("Fetching data", {
                autoClose: false,
                position: "top-center",
                isLoading: true,
                
            })
            try {
                
                const data = await getCourses()
                toast.dismiss(toastId);
                setCourses(data) 
            } catch (err) {
                toast.update(toastId, {
                    render: err.message,
                    position: "top-center",
                    type: "error",
                    isLoading: false,
                    autoClose: 3000,
            })
            }
        }

        fetchCourses()
    }, [])
    console.log(courses)
    return (
        <>
            <title>Home Page</title>
            <NavbarHome />
            <div className="bg-background-primary   flex flex-col
             ">
                <section>
                    <Banner
                        imageBanner={"images/banner.png"}
                        textContent={
                            <>
                                <div className="relative z-10  items-center justify-center h-full text-white block">
                                    <div className="block mt-[10px]">
                                        <h2
                                            className="leading-[25px] text-[24px] font-bold text-center px-[20px] lg:leading-[45px] lg:text-[40px] lg:px-[100px] lg:text-center lg:font-[700]">
                                            Revolusi Pembelajaran: Temukan Ilmu Baru melalui Platform Video Interaktif!
                                        </h2>
                                        <p className="px-[-1px] pt-2 text- text-center lg:text-center lg:px-[50px] font-family-dm-sans">
                                            Temukan ilmu baru yang menarik dan mendalam melalui koleksi video pembelajaran berkualitas tinggi. Tidak hanya itu, Anda juga dapat berpartisipasi dalam latihan interaktif yang akan meningkatkan pemahaman Anda.
                                        </p>
                                    </div>
                                </div>

                            </>}
                        buttonContent={
                            <>
                                <div className="mt-1 flex justify-center">
                                    <GeneralBtn
                                        className={"bg-green-primary px-[10px] py-[8px] rounded-lg font-[100] text-[15px] lg:w-[100%] sm:w-[100%] cursor-pointer font-family-dm-sans"}
                                        txtBtn={"Temukan Video Course untuk Dipelajari!"}
                                    />
                                </div>
                            </>
                        }
                    />
                </section>
                <section>
                    <ListCourseLayout
                        clasname={"mx-[20px] md:mx-[100px] lg:mx-[120px] xl:mx-[140px] 2xl:mx-[160px]"}
                        headContent={
                            <>
                                <div className="mt-[20px] overflow-x-auto overflow-y-hidden py-4">
                                    <ul className="flex gap-9  whitespace-nowrap pr-4 text-textColorsecond font-medium text-[14px] ">
                                        <li className="relative font-semibold text-orange-500">
                                            <a href="#">Semua Kelas</a>
                                            <span
                                                className="absolute bottom-[-9px] left-1 transform -translate-x-1/2 w-[69px] border-b-4 border-orange-500"></span>
                                        </li>
                                        <li><a href="#">Pemasaran</a></li>
                                        <li><a href="#">Desain</a></li>
                                        <li><a href="#">Pengembangan Diri</a></li>
                                        <li className="pr-4"><a href="#">Bisnis </a></li>
                                    </ul>
                                </div>
                            </>
                        }
                        cardCourse={
                            <>
                                {/* 
          TODO: Use useState to store course data if it comes from an API.
          If the data comes from a static JSON file, useState is not needed.
        */}
                                <div className="block lg:flex lg:flex-wrap gap-4 justify-start mt-1 mb-[20px] lg:gap-2">
                                    {
                                        courses.map((course, index) => (
                                            <CardCourse
                                                key={index}
                                                descCourse={course.descCourse}
                                                tittleCourse={course.titleCourse}
                                                tutorJob={course.tutorJob}
                                                tutorName={course.tutorName}
                                                workAt={course.workAt}
                                                price={Math.floor(course.price / 1000)}
                                                rating={course.rating}
                                                totalReview={course.reviewTotal}
                                            //Todo: uncomment this code below to show the image card and tutor image if data is available
                                             cardImage={course.cardImage}
                                             tutorImage={course.tutorImage}
                                            />
                                        ))}
                                </div>
                            </>
                        }
                    />
                </section>
                <section>
                    <Banner
                        imageBanner={"/images/ctabanner.png"}
                        textContent={
                            <>
                                <div className="block mt-[10px] ">
                                    <h2
                                        className="text-[12px] mb-[5px] sm:mb-0 font-light text-center px-[55px] lg:leading-[45px] lg:text-[20px] lg:px-[220px] lg:text-center lg:font-light">
                                        NEWSLETTER
                                    </h2>
                                    <h3
                                        className="leading-[25px] text-[24px] font-bold text-center px-[55px] lg:leading-[45px] lg:text-[35px] lg:px-[220px] lg:text-center lg:font-[700]">
                                        Mau Belajar Lebih Banyak?
                                    </h3>
                                    <p className="px-[12px] lg:px-[280px] lg:text-center pt-2 text-center font-family-dm-sans">
                                        Daftarkan dirimu untuk mendapatkan informasi terbaru dan penawaran spesial dari
                                        program-program
                                        terbaik hariesok.id
                                    </p>
                                </div>
                            </>
                        }

                        buttonContent={
                            <>

                                <div className="block sm:relative w-[80%] sm:w-[50%]">
                                    <form action="">

                                        <InputField
                                            style="bg-white w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 pr-16 placeholder-gray-500 text-black"
                                            placeholder={"Masukan Emailmu"}
                                            required={true}
                                        />

                                        <GeneralBtn
                                            className={"hidden lg:inline absolute top-1/2 right-2 transform -translate-y-1/2  bg-yellow-button text-white px-4 py-1 rounded-md  focus:outline-none focus:ring-2 focus:ring-bg-orange-600"}
                                            txtBtn={"Subscribe"}
                                            onClickFunc={() => alert("Subscribe")}
                                        />
                                        <GeneralBtn
                                            className={"mt-3 px-4 py-2 bg-yellow-button w-full rounded-lg lg:hidden"}
                                            txtBtn={"Subscribe"}
                                            onClickFunc={() => (alert("Subscribe"))}
                                        />
                                    </form>
                                </div>

                            </>
                        }

                    />
                </section>
                <footer>
                    <Footer />
                </footer>
            </div>

        </>
    );
}

export default HomePage;