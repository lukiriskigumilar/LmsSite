import AuthLayout from "../../components/templates/auth_layout";
import NavAuth from "../../layouts/navbar_auth";
import InputTextField from "../../components/molecules/input_txt";
import InputPasswordField from "../../components/molecules/input_password";
import GenralBtn from "../../components/atoms/genral_button";
import AuthBtn from "../../components/molecules/auth_btn";
import GoogleImage from "../../assets/images/google.png";

function LoginPage({ registerWithGoogle, registerFunc }) {
    return (
        <>
            <NavAuth/>
            <section>
                <div className="bg-background-primary w-screen h-[800px] flex justify-center items-start ">
                    <AuthLayout tittle="Masuk ke Akun" description="Yuk, lanjutin belajarmu di videobelajar">
                        <div className="mt-[30px]">
                            <form action="#">
                                <div className="mt-2">
                                    <InputTextField id="email" txtLabel="Email" />
                                </div>
                                <div className="mt-2">
                                    <InputPasswordField id="password" txtLabel="Password" />
                                </div>
                                <a href="#" className="text-right block font-[500] text-[16px] mt-[10px] text-gray-main">
                                    Lupa Password?
                                </a>
                                <GenralBtn txtBtn="Masuk" className="bg-green-primary mt-[24px] text-white text-[16px] font-[700] w-full text-center block rounded-full py-[10px]" />
                            </form>
                            <AuthBtn
                                image_sso={GoogleImage}
                                onclickSsoFunc={registerWithGoogle}
                                txt_sso="Masuk dengan Google"
                                text_btn="Daftar"
                                onclickBtnFunc={registerFunc}
                            />
                        </div>
                    </AuthLayout>
                </div>
            </section>
        </>
    );
}

export default LoginPage;
