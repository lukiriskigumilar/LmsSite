import InputTextField from "../../components/molecules/InputTextField";
import AuthLayout from "../../components/templates/AuthLayout";
import NavbarAuth from "../../layouts/NavbarAuth";

function RegisterPage() {
    return (
    <>
     <NavbarAuth />
     <AuthLayout 
     tittle={"Pendaftaran Akun"}
     description={"Yuk, daftarkan akunmu sekarang juga!"}
     children={
        <>
            <form action="">
                <div>

                </div>
            </form>
        </>
     }
     />
    </>
   
    
    );
}

export default RegisterPage;