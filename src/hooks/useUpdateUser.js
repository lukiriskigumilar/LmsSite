import { useState, useEffect } from "react";
import useGetUser from "./useGetUser";
import { getUsers, updateUser } from "../services/useService";
import { useAuthStore } from "./authStore";
import { toast } from "react-toastify";

export default function useUpdateUser() {
    const { currentUser, setCurrentUser } = useGetUser(); // Pakai useGetUser untuk mendapatkan user
    const updatedUserlocal = useAuthStore((state) => state.setUser); //update data untuk zustand
    const userLocal = useAuthStore((state) => state.user);
    const [updatedData, setUpdatedData] = useState({
        full_name: userLocal.full_name,
        email: userLocal.email,
        phone_number: userLocal.phone_number,
        country_dial_code: "+62",
    });

    // Fungsi untuk menangani perubahan input
    const handleChange = (e) => {
        const { id, value } = e.target;
        setUpdatedData(prevData => ({
            ...prevData,
            [id]: value
        }));
    };

    // Fungsi untuk update data user berdasarkan currentUser
    const changeProfile = async (e) => {
        e.preventDefault();

        const toastId = toast.loading("Loading...", {
            position: "top-center",
            isLoading: true,
            autoClose: false,

        });

        const getUsersData = await getUsers();
        try {
            const existingUser = getUsersData.some(user => user.email === updatedData.email && user.id !== userLocal.id);
            if (existingUser) {
                toast.update(toastId, {
                    render: "Sepertinya email ini sudah terdaftar. Yuk, pakai email yang berbeda",
                    position: "top-center",
                    type: "error",
                    isLoading: false,
                    autoClose: 3000,
                });
                return;
            }
            const updateUserdata = await updateUser(userLocal.id, updatedData);
            updatedUserlocal({
                ...userLocal,
                ...updatedData,
            })

            toast.update(toastId, {
                render: "Berhasil mengubah data profile kamu",
                position: "top-center",
                type: "success",
                isLoading: false,
                autoClose: 2000,
            });


        } catch (error) {
            toast.update(toastId, {
                render: error.message,
                position: "top-center",
                type: "error",
                isLoading: false,
                autoClose: 3000,
            });


        };
    }

        return {
            updatedData,
            handleChange,
            changeProfile
        };
    }

