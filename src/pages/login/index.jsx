import AuthLayout from "../../components/templates/AuthLayout";
import NavbarAuth from "../../layouts/NavbarAuth";
import InputTextField from "../../components/molecules/InputTextField";
import InputPasswordField from "../../components/molecules/InputPasswordField";
import GeneralBtn from "../../components/atoms/GeneralBtn";
import AuthBtn from "../../components/molecules/AuthBtn";
import GoogleImage from "../../assets/images/google.png";
import useAuth from "../../hooks/UseAuth";
import { useNavigate } from "react-router";


function LoginPage() {
    const navigate = useNavigate();
    const {handleChange,loginForm,loginFunc} = useAuth();
    return (
        <>
            <title>Login Page</title>
            <NavbarAuth />
            <section>
                <AuthLayout tittle="Masuk ke Akun" description="Yuk, lanjutin belajarmu di videobelajar">
                    <form onSubmit={loginFunc}>
                        <InputTextField id="email" txtLabel="Email" handleChange={handleChange} />
                        <InputPasswordField id="password" txtLabel="Password" handleChange={handleChange} />
                        <a href="#" className=" font-family-dm-sans text-right block font-[500] text-[16px] mt-[10px] text-gray-main">
                            Lupa Password?
                        </a>
                        <GeneralBtn type="Submit" txtBtn="Masuk" className="cursor-pointer font-family-dm-sans  bg-green-primary mt-[24px] text-white text-[16px] font-[700] w-full text-center block rounded-full py-[10px]" />
                    </form>
                    <AuthBtn
                        image_sso={GoogleImage}
                        onclickSsoFunc={()=> alert("belum tersedia")}
                        txt_sso="Masuk dengan Google"
                        text_btn="Daftar"
                        onclickBtnFunc={() => navigate("/register")}
                    />
                </AuthLayout>

            </section>
        </>
    );
}

export default LoginPage;
