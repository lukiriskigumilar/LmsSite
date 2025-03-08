function SsoBtn({image_sso, txt_sso, onclickSsoFunc}) {
    return (
        <>
        <button
        onClick={onclickSsoFunc}
        className="font-family-dm-sans cursor-pointer mt-[20px] mb-[20px] flex items-center justify-center text-center gap-2 px-4 py-2 bg-transparent border border-gray-300 text-white w-full rounded-full">
        <img src={image_sso} alt="" className="bg-center" />
        <span className="text-black">{txt_sso}</span>
    </button>
    </>
    );
}

export default SsoBtn;