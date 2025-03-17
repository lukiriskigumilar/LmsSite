import { act, useState } from "react";

import SidebarItem from "../../components/atoms/SidebarItem";
import SideMenu from "../../components/molecules/SideMenu";
import Footer from "../../layouts/footer";
import NavbarHome from "../../layouts/NavbarHome";
import ChangeProfile from "../../components/organisms/ChangeProfile";
import CourseList from "../../components/organisms/CourseList";
import OrderList from "../../components/organisms/OrderList";


function ProfilePage() {
    const [activeMenu, setActiveMenu] = useState("profile");
    const menuData = {
        profile: { title: "Ubah Profil", desc: "Ubah data diri Anda" },
        order: { title: "Daftar Pesanan", desc: "Informasi terperinci mengenai pembelian" },
        course: { title: "Daftar Kelas", desc: "Akses Materi Belajar dan Mulailah Meningkatkan Pengetahuan Anda!" },
    };

    return (
        <>
            <NavbarHome />
            <title>Profile Page</title>

            <div className="bg-background-primary w-full h-full py-[20px] px-[40px] lg:px-[120px] lg:py-[64px]">
                <div className="flex flex-col gap-6 lg:flex-row  lg:gap-8">
                    <SideMenu tittleMenu={menuData[activeMenu].title} descMenu={menuData[activeMenu].desc}
                        activeMenu={activeMenu}
                        onclickProfile={() => setActiveMenu("profile")}
                        onclickCourse={() => setActiveMenu("course")}
                        onclickOrder={() => setActiveMenu("order")}
                    />
                    <div>

                        {activeMenu == "profile" &&
                            <ChangeProfile />
                        }

                        {activeMenu == "course" &&
                            <CourseList />
                        }

                        {activeMenu == "order" &&
                            <OrderList />
                        }

                    </div>
                </div>
            </div>

            <footer>
                <Footer />
            </footer>
        </>
    );
}

export default ProfilePage;
