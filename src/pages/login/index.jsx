

import AuthLayout from "../../components/templates/AuthLayout";
import NavbarAuth from "../../layouts/NavbarAuth";
import InputTextField from "../../components/molecules/InputTextField";
import InputPasswordField from "../../components/molecules/InputPasswordField";
import GeneralBtn from "../../components/atoms/GeneralBtn";
import AuthBtn from "../../components/molecules/AuthBtn";
import GoogleImage from "../../assets/images/google.png";

function LoginPage({ loginWithGoogle, registerFunc, LoginFunc }) {
    return (
        <>
            <title>Login Page</title>
            <NavbarAuth />
            <section>
                <AuthLayout tittle="Masuk ke Akun" description="Yuk, lanjutin belajarmu di videobelajar">
                    <form action="#">
                        <InputTextField id="email" txtLabel="Email" />
                        <InputPasswordField id="password" txtLabel="Password" />
                        <a href="#" className="text-right block font-[500] text-[16px] mt-[10px] text-gray-main">
                            Lupa Password?
                        </a>
                        <GeneralBtn onClickFunc={LoginFunc} txtBtn="Masuk" className="bg-green-primary mt-[24px] text-white text-[16px] font-[700] w-full text-center block rounded-full py-[10px]" />
                    </form>
                    <AuthBtn
                        image_sso={GoogleImage}
                        onclickSsoFunc={loginWithGoogle}
                        txt_sso="Masuk dengan Google"
                        text_btn="Daftar"
                        onclickBtnFunc={registerFunc}
                    />
                </AuthLayout>

            </section>
        </>
    );
}

export default LoginPage;
