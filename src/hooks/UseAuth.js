import { useNavigate } from "react-router-dom";
import { useState } from "react";
import ToastError from "../components/atoms/ToastError";

export default function useAuth() {
    const navigate = useNavigate();
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


    const loginFunc = (e) => {
        e.preventDefault();

        const users = JSON.parse(localStorage.getItem("user_data")) || []
        const foundUser = users.find(user => user.email === loginForm.email && user.password === loginForm.password);

        if (!foundUser) {
            const userExists = users.find(user => user.email === loginForm.email);
            if (!userExists) {
                ToastError("Wah, akun ini belum terdaftar. Coba cek lagi ya.")
            } else {
                ToastError("Yah, kata sandinya belum cocok. Coba diingat-ingat!")
            }
        } else {
            localStorage.setItem("currentUser", JSON.stringify(foundUser.id));
            navigate("/home"); 
        }

    };
    return{
        loginForm,
        handleChange, 
        loginFunc
    }
}