import { useState, useEffect } from "react";
import ToasSuccses from "../components/atoms/ToasSuccess";
import ToastError from "../components/atoms/ToastError";
import useGetUser from "./useGetUser";

export default function useUpdateUser() {
    const { currentUser, setCurrentUser } = useGetUser(); // Pakai useGetUser untuk mendapatkan user
    const [updatedData, setUpdatedData] = useState({
        full_name: "",
        email: "",
        phone_number: "",
        country_dial_code: "+62",
    });

    useEffect(() => {
        if (currentUser) {
            setUpdatedData({
                full_name: currentUser.full_name,
                email: currentUser.email,
                phone_number: currentUser.phone_number,
                country_dial_code: currentUser.country_dial_code,
            });
        }
    }, [currentUser]); // Update otomatis ketika currentUser berubah

    // Fungsi untuk menangani perubahan input
    const handleChange = (e) => {
        const { id, value } = e.target;
        setUpdatedData(prevData => ({
            ...prevData,
            [id]: value
        }));
    };

    // Fungsi untuk update data user berdasarkan currentUser
    const changeProfile = (e) => {
        e.preventDefault();
        if (!currentUser) {
            ToastError("User tidak ditemukan!");
            return;
        }

        let users = JSON.parse(localStorage.getItem("user_data")) || [];

        // Cek apakah email sudah digunakan oleh user lain
        const existingUser = users.some(user => user.email === updatedData.email && user.id !== currentUser.id);
        if (existingUser) {
            ToastError("Sepertinya email ini sudah terdaftar. Yuk, pakai email yang berbeda");
            return;
        }

        // Update hanya data tertentu (full_name, email, phone_number, country_dial_code)
        const updatedUsers = users.map(user =>
            user.id === currentUser.id
                ? { ...user, ...updatedData }
                : user
        );

        // Simpan ke localStorage
        localStorage.setItem("user_data", JSON.stringify(updatedUsers));

        // Update state currentUser agar langsung berubah di UI
        const updatedUser = updatedUsers.find(user => user.id === currentUser.id);
        setCurrentUser(updatedUser);

        ToasSuccses("Profil berhasil diperbarui!");
    };

    return {
        updatedData,
        handleChange,
        changeProfile
    };
}
