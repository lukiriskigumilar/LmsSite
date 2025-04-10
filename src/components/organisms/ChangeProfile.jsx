
import CountryCode from "../atoms/CountryCode";
import GeneralBtn from "../atoms/GeneralBtn";
import ProfileImage from "../atoms/ProfileImgae";
import FloatingLabel from "../molecules/FloatingLabel";
import countries from '../../data/countryList.json'
import useUpdateUser from "../../hooks/useUpdateUser";
import { useAuthStore } from "../../hooks/authStore";

function ChangeProfile({ nameValue, emailValue, phoneValue }) {
    const { changeProfile, handleChange, } = useUpdateUser();
    const currentUser = useAuthStore((state) => state.user);

    if (!currentUser || Object.keys(currentUser).length === 0) {
        return <p>Loading....</p>
    }

    return (
        <>
            <div className=" w-full  md:w-full lg:w-[550px] xl:w-[770px]  h-fit border-[1px] border-gray-secondary rounded-md bg-white py-[24px] px-[24px] ">
                <div className="flex flex-col">
                    <div className="flex flex-row gap-3 items-center">
                        <ProfileImage className={"w-[80px] h-[80px] rounded-sm"} />
                        <div className="flex flex-col">
                            <p className="font-semibold text-[16px] font-family-poppins text-black">{currentUser?.full_name ?? 'none of data'}</p>
                            <p className="font-normal text-[16px] font-family-dm-sans text-neutral-800">{currentUser?.email ?? 'none of data'}</p>
                            <p className="font-bold text-orange-primary text-[14px] font-family-dm-sans">Change image</p>
                        </div>
                    </div>
                    <hr className="mt-3 mb-2 outline-gray-400 outline-0" />

                    <form onSubmit={changeProfile}>
                        <div className="flex flex-col lg:flex-row lg:gap-2 lg:justify-evenly">
                            <FloatingLabel id="full_name" labelName={"Nama lengkap"} dataValue={currentUser.full_name} onChange={handleChange} />
                            <FloatingLabel id="email" labelName={"E-Mail"} dataValue={currentUser.email} onChange={handleChange} />
                            <div className="flex flex-row gap-1">
                                <select id="country_dial_code" name="country_dial_code" onChange={handleChange} className="outline-1 h-[45px] mt-4 rounded-md outline-gray-300">
                                    <option value={currentUser.country_dial_code}>{currentUser.country_dial_code}</option>
                                    {
                                        countries.map(
                                            (country, index) => (

                                                <option key={index} value={country.dialCode}>{country.dialCode}</option>
                                            )
                                        )
                                    }
                                </select>
                                <FloatingLabel labelName={"No, Hp"} id="phone_number" dataValue={currentUser.phone_number} onChange={handleChange} />
                            </div>
                        </div>
                        <div className="lg:flex lg:justify-end">
                            <GeneralBtn type="submit" className={"w-full py-[7px] px-[22px] bg-green-primary text-white font-family-dm-sans text-[14px] font-bold mt-3 rounded-md lg:w-[112px] lg:h-[46px] "} txtBtn={"Simpan"} />
                        </div>
                    </form>
                </div>

            </div>

        </>
    );
}

export default ChangeProfile;