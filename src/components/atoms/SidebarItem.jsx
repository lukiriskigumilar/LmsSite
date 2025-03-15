import { Children } from "react";

function SidebarItem({ svgIcon, itemName,color,onclick,isActive}) {
    return (

        <div onClick={onclick} className={`cursor-pointer flex flex-row gap-2 border-[1px]  px-11 py-2 w-[100%] rounded-lg ${isActive ? "border-[1px] border-yellow-button bg-yellow-button-100 " : " border-none"} `}> 
            {svgIcon}
            <p className={`font-family-dm-sans text-[18px] font-bold ${isActive?"text-yellow-button" : "text-gray-secondary"}`}>{itemName}</p>
        </div>
    );
}

export default SidebarItem;