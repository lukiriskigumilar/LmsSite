import GenralBtn from "../atoms/genral_button";
import AuthBtn from "../molecules/auth_btn";
import InputPasswordField from "../molecules/input_password";
import InputTextField from "../molecules/input_txt";
import GoogleImage from "../../assets/images/google.png"


function LoginLayout({registerWithGoogle, registerFunc}) {
    return (
        <div className="bg-white w-full sm:max-w-[90%] lg:max-w-[600px] mx-4 sm:mx-auto p-6 rounded-2xl mt-[30px] mb-[60px]">
            <div className="mt-3">
                <h1 className="font-semibold text-3xl text-center ">Masuk ke Akun</h1>
                <p className="text-sm font-normal text-center text-textColorsecond">Yuk, lanjutin belajarmu di videobelajar</p>
            </div>
            <div className="mt-[30px]">
                <form action="#">
                    <div className="mt-2">
                        <InputTextField id={"email"} txtLabel={"Email"} />
                    </div>
                    <div className="mt-2">
                        <InputPasswordField id={"password"} txtLabel={"Password"} />
                    </div>
                    <a href="" target="_blank" className="text-right block font-[500] text-[16px] mt-[10px] text-gray-main">Lupa
                        Password?</a>
                    <GenralBtn txtBtn={"Masuk"}  className={"bg-green-primary mt-[24px] text-white text-[16px] font-[700] w-full text-center block rounded-full py-[10px]"}/>
                </form>
                <AuthBtn image_sso={GoogleImage} onclickSsoFunc={registerWithGoogle} txt_sso={"Masuk dengan Google"} text_btn={"Daftar"} onclickBtnFunc={registerFunc}  />
            </div>
        </div>

    );
}

export default LoginLayout;