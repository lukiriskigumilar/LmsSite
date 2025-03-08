import InputPasswordField from "../../components/molecules/InputPasswordField";
import InputTextField from "../../components/molecules/InputTextField";
import PhoneField from "../../components/molecules/PhoneField";
import AuthLayout from "../../components/templates/AuthLayout";
import NavbarAuth from "../../layouts/NavbarAuth";
import GeneralBtn from "../../components/atoms/GeneralBtn";
import { Link, useNavigate } from "react-router-dom";
import AuthBtn from "../../components/molecules/AuthBtn";


function RegisterPage({ loginAccountWithGoogle, registerNewAccount }) {
    const navigate = useNavigate();
    return (
        <>
            <NavbarAuth />
            <AuthLayout
                tittle={"Pendaftaran Akun"}
                description={"Yuk, daftarkan akunmu sekarang juga!"}
                children={
                    <>
                        <form>
                            <InputTextField id={"nama_lengkap"} txtLabel={"Nama Lengkap"} type="text" />
                            <InputTextField id={"email"} txtLabel={"Email"} type="Email" />
                            <PhoneField id_input={"phone_number"} name_label={"No. Hp"} />
                            <InputPasswordField id={"password"} txtLabel={"Kata Sandi"} />
                            <InputPasswordField id={"password_confirmation"} txtLabel={"Konfirmasi Kata Sandi"} />
                            <Link to="/login" className="font-family-dm-sans text-right block font-[500] text-[16px] mt-[10px] text-gray-main">
                                Sudah punya akun?
                            </Link>
                            <GeneralBtn onClickFunc={registerNewAccount} txtBtn="Daftar" className="font-family-dm-sans cursor-pointer bg-green-primary mt-[24px] text-white text-[16px] font-[700] w-full text-center block rounded-full py-[10px]" />
                        </form>
                        <AuthBtn
                            image_sso={"/images/google.png"}
                            onclickSsoFunc={loginAccountWithGoogle}
                            txt_sso={"Masuk dengan Google"}

                            onclickBtnFunc={() => navigate("/login")}
                            text_btn={"Masuk"}

                        />
                    </>
                }
            />
        </>


    );
}

export default RegisterPage;