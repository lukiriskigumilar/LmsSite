import GeneralBtn from "../atoms/GeneralBtn";
import SsoBtn from "../atoms/Ssobtn";

function AuthBtn({ onclickBtnFunc, text_btn, image_sso, txt_sso, onclickSsoFunc }) {
    return (
        <>
            <GeneralBtn className={"bg-green-primary-100 mt-[10px] text-green-primary text-[16px] font-[700] w-full text-center block rounded-full py-[10px]"} onClickFunc={onclickBtnFunc} txtBtn={text_btn} />
            <div className="flex items-center mt-[24px]">
                <hr className="flex-grow border-t border-gray-300" />
                <span className="px-4 text-gray-main">atau</span>
                <hr className="flex-grow border-t border-gray-300" />
            </div>
            <SsoBtn image_sso={image_sso} txt_sso={txt_sso} onclickSsoFunc={onclickSsoFunc} />
        </>
    );
}

export default AuthBtn;