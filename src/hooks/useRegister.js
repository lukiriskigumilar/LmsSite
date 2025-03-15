import { useState } from "react";
import { useNavigate } from "react-router";

import ToasSuccses from "../components/atoms/ToasSuccess";
import ToastError from "../components/atoms/ToastError";

export default function useRegister(){
    const navigate = useNavigate();
    const [dialCode, setDialCode] = useState("+62");
    const [formData, setFormData] = useState({
        id: Math.floor(Math.random() * Date.now()), // Gunakan uuid untuk ID yang lebih unik
        full_name: "",
        email: "",
        phone_number: "",
        password: "",
        password_confirmation: "",
        country_dial_code: "+62",
    });

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

        const { id, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [id]: value,
        }));
    };

    // Fungsi untuk menangani submit form pendaftaran
    const handleRegister = (e) => {
        e.preventDefault();
        const existingUsers = JSON.parse(localStorage.getItem("user_data")) || [];
        if (formData.password !== formData.password_confirmation) {
            ToastError("Konfirmasi kata sandi kamu belum cocok. Pastikan kata sandi sama")
            return;
        }
        const isEmailTaken = existingUsers.some(user => user.email === formData.email)
        if(isEmailTaken){
            ToastError("Sepertinya email ini sudah terdaftar. Yuk, pakai email yang berbeda")
            return; 
        }
        const newUser = {
            ...formData,
        };
        const updatedUsers = [...existingUsers, newUser];
        localStorage.setItem("user_data", JSON.stringify(updatedUsers));
        ToasSuccses("Akunmu sudah siap digunakan. Yuk, login dulu")
        navigate("/login");
    };
    return{
        dialCode, 
        formData, 
        handleCountrySelect, 
        handleChange, 
        handleRegister,
    }
}