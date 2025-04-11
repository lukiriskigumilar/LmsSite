import SvgProfileIcon from "../atoms/SvgProfileIcon";
import SvgBookIcon from "../atoms/SvgBookIcon";
import SvgBasket from "../atoms/SvgBasket";
import SidebarItem from "../atoms/Sidebaritem";
import SvgSettings from "../atoms/SvgSettings";

function SideMenu({ activeMenu, tittleMenu, descMenu, onclickCourse, onclickOrder, onclickProfile, onclickSettings }) {
    return (
        <>
            <div className="flex flex-col gap-2 h-fit w-[311px]">
                <div className="flex flex-col gap-2 items-start">
                    <h1 className="font-semibold text-[20px] text-black">{tittleMenu}</h1>
                    <p className="text-[16px] font-normal text-text-secondary">{descMenu}</p>
                </div>

                <div className="w-[300px] h-fit flex flex-col bg-white rounded-md border-[1px] border-text-secondary px-[20px] py-[20px] items-center mt-[24px] ">

                    <div className="flex flex-col items-start gap-3 ">
                        <SidebarItem
                            isActive={activeMenu == "profile"}
                            itemName={"Profile Saya"}
                            svgIcon={
                                <SvgProfileIcon className={activeMenu == "profile" ? "fill-yellow-button" : "fill-gray-secondary"} />
                            }
                            onclick={onclickProfile} />
                        <SidebarItem
                            isActive={activeMenu == "course"}
                            itemName={"Kelas Saya"}
                            svgIcon={
                                <SvgBookIcon className={activeMenu == "course" ? "fill-yellow-button" : "fill-gray-secondary"} />
                            }
                            onclick={onclickCourse} />
                        <SidebarItem
                            isActive={activeMenu == "order"}
                            itemName={"Pesanan Saya"}
                            svgIcon={
                                <SvgBasket className={activeMenu == "order" ? "fill-yellow-button" : "fill-gray-secondary"} />
                            }
                            onclick={onclickOrder} />
                        <SidebarItem
                            isActive={activeMenu == "settings"}
                            itemName={"Pengaturan"}
                            svgIcon={
                                <SvgSettings className={activeMenu == "settings" ? "fill-yellow-button" : "fill-gray-secondary"} />
                            }
                            onclick={onclickSettings} />

                    </div>
                </div>
            </div>

        </>
    );
}

export default SideMenu;
