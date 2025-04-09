import { useState } from "react";
import { useNavigate } from "react-router";

import ToasSuccses from "../components/atoms/ToasSuccess";
import ToastError from "../components/atoms/ToastError";
import { getUsers, createUser } from "../services/useService";

export default function useRegister(){
    const navigate = useNavigate();
    const [dialCode, setDialCode] = useState("+62");
    
    const [formData, setFormData] = useState({
        custom_id: Math.floor(Math.random() * Date.now()), // Gunakan uuid untuk ID yang lebih unik
        full_name: "",
        email: "",
        phone_number: "",
        password: "",
        password_confirmation: "",
        country_dial_code: "+62",
        //fake jwt karena menggunakan mock api yang belom bisa auto generate
        JWT: "",
       
    });

    const {password_confirmation, ...userToSubmit} = formData

    // Fungsi untuk mengubah kode negara
    const handleCountrySelect = (code) => {
        setDialCode(code);
        setFormData((prevData) => ({
            ...prevData,
            country_dial_code: code,
        }));
    };

    // Fungsi untuk menangani input form
    const handleChange = (e) => {
        const jwt = `${formData.custom_id}${formData.email}`
        const { id, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [id]: value,
            JWT: jwt,
        }));
    };

    // Fungsi untuk menangani submit form pendaftaran
    const handleRegister = async (e) => {
        e.preventDefault();
        
        if (formData.password !== formData.password_confirmation) {
            ToastError("Konfirmasi kata sandi kamu belum cocok. Pastikan kata sandi sama")
            return;
        }
        try {
            const user = await getUsers();
            const isEmailTaken = user.some(user => user.email === formData.email)
            if(isEmailTaken){
                ToastError("Sepertinya email ini sudah terdaftar. Yuk, pakai email yang berbeda")
                return; 
            }
            const newUser = await createUser(userToSubmit);
            ToasSuccses("Akunmu sudah siap digunakan. Yuk, login dulu")
            navigate("/login");
            
        } catch (error) {
            console.error("Error creating user:", error);
            ToastError(error.message);
            
        }
    };
    return{
        dialCode, 
        formData, 
        handleCountrySelect, 
        handleChange, 
        handleRegister,
    }
}