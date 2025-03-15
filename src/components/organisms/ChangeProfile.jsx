import CountryCode from "../atoms/CountryCode";
import GeneralBtn from "../atoms/GeneralBtn";
import ProfileImage from "../atoms/ProfileImgae";
import FloatingLabel from "../molecules/FloatingLabel";
import InputTextField from "../molecules/InputTextField";

function ChangeProfile({ nameValue, emailValue, phoneValue }) {
    return (
        <>
            <div className=" w-full  md:w-full lg:w-[550px] xl:w-[770px]  h-fit border-[1px] border-gray-secondary rounded-md bg-white py-[24px] px-[24px] ">
                <div className="flex flex-col">
                    <div className="flex flex-row gap-3 items-center">
                        <ProfileImage className={"w-[80px] h-[80px] rounded-sm"} />
                        <div className="flex flex-col">
                            <p className="font-semibold text-[16px] font-family-poppins text-black">Name</p>
                            <p className="font-normal text-[16px] font-family-dm-sans text-neutral-800">Email</p>
                            <p className="font-bold text-orange-primary text-[14px] font-family-dm-sans">Change image</p>
                        </div>
                    </div>
                    <hr className="mt-3 mb-2 outline-gray-400 outline-0" />
                    <div className="flex flex-col lg:flex-row lg:gap-3 lg:justify-evenly">
                        <FloatingLabel labelName={"Nama lengkap"} dataValue={nameValue} />
                        <FloatingLabel labelName={"E-Mail"} dataValue={emailValue} />
                        <div className="flex flex-row gap-1">
                            <select id="cars" name="cars" className="outline-1 h-[45px] mt-4 rounded-md outline-gray-300">
                                <option value="volvo">+62</option>
                                <option value="saab">Saab 95</option>
                            </select>
                            <FloatingLabel labelName={"No, Hp"} dataValue={phoneValue} />
                        </div>

                    </div>
                    <div className="lg:flex lg:justify-end">
                        <GeneralBtn className={"w-full py-[7px] px-[22px] bg-green-primary text-white font-family-dm-sans text-[14px] font-bold mt-3 rounded-md lg:w-[112px] lg:h-[46px] "} txtBtn={"Simpan"} onClickFunc={() => { }} />
                    </div>
                </div>

            </div>

        </>
    );
}

export default ChangeProfile;