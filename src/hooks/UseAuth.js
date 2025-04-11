import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Cookies from "js-cookie";

import ToastError from "../components/atoms/ToastError";
import { getUsers } from "../services/useService";
import { useAuthStore } from "./authStore";

export default function useAuth() {
    const navigate = useNavigate();
    const setUser = useAuthStore((state) => state.setUser);
    const clearUser = useAuthStore((state) => state.clearUser);
    const [loginForm, setLoginForm] = useState({
        email: "",
        password: "",
    })


    const handleChange = (e) => {
        const { id, value } = e.target;
        setLoginForm((prevData) => ({
            ...prevData,
            [id]: value,
        }))
    }


    const loginFunc = async (e) => {
        e.preventDefault();

        try {
            const users = await getUsers();
            const foundUser = users.find(user => user.email === loginForm.email && user.password === loginForm.password);
            if (!foundUser) {
                const userExists = users.find(user => user.email === loginForm.email);
                ToastError(userExists ? "Yah, kata sandinya belum cocok. Coba diingat-ingat!"
                    : "Wah, akun ini belum terdaftar. Coba cek lagi ya." );
                return;
            }
            Cookies.set("Auth", foundUser.JWT, { expires: 1 }); // Set cookie JWT dengan masa berlaku 1 hari
            const {password,...showFoundUser} = foundUser
            setUser(showFoundUser);
            navigate("/home");
        } catch (err) {
            ToastError(err.message);
        }



    };

    const handleLogout = () => {
        Cookies.remove("Auth"); // Hapus cookie JWT saat logout
        clearUser(); // Hapus user dari authStore
        window.location.href("/login")
    }
    return {
        loginForm,
        handleChange,
        loginFunc,
        handleLogout
    }
}