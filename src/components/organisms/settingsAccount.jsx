
import InputField from "../atoms/InputField";
import GeneralBtn from "../atoms/GeneralBtn";
import Swal from "sweetalert2";
import ToastError from "../atoms/ToastError";


function SettingsAccount() {
    
    function handleDeleteAccount(){
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        showCancelButton: true,
        confirmButtonColor: '#ef4444', // Red 500
        confirmButtonText: 'Yes, delete it!'
    }).then((result) =>{
        if(result.isConfirmed){
            return ToastError("Berhasil menghapus akun")
        }
    }

    )
    ;
    
    }
    return (
        <>
            <div className=" w-full  md:w-full lg:w-[550px] xl:w-[770px]  h-fit border-[1px] border-gray-secondary rounded-md bg-white py-[24px] px-[24px] ">
                <h1 className="text-[20px] font-bold text-gray-main">Pengaturan akun</h1>
                <div className="w-full h-fit mt-3 px-1 py-1 flex flex-col gap-1">
                    <div className="w-full h-fit flex flex-col gap-1 bg-red-100 rounded-xl p-3">
                        <h2 className="text-[18px] font-semibold text-red-500">Danger Zone</h2>
                            {/* part delete account */}
                            <div className="mt-3">
                                <p className="text-[15px] font-semibold text-black">Hapus akun</p>
                                <p className="text-[12px] font-normal text-text-secondary mt-1">Masukkan kata sandi akun kamu, buat mastiin kamu beneran mau hapus akun.</p>
                                <form action={handleDeleteAccount}>
                                    <div className="flex xl:flex-row md:flex-col sm: flex-col w-full gap-3">
                                        <div className="flex flex-col w-full xl:w-[80%]">
                                            <InputField required  />
                                        </div>
                                        <GeneralBtn txtBtn={"Hapus akun"} className={" cursor-pointer bg-red-500 text-white py-2 px-2 rounded-xl"} />
                                    </div>
                                </form>
                                <p className="text-[12px] font-normal text-text-secondary mt-4">*Jika akun dihapus, semua data kamu akan terhapus permanen dan tidak bisa dipulihkan. Pastikan kamu memahami konsekuensinya ya</p>
                            </div>
                            {/* end part delete account */}
                    </div>

                </div>
            </div>

        </>
    );
}

export default SettingsAccount;