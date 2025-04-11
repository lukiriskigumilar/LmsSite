import Swal from "sweetalert2"
import { toast } from "react-toastify"
import { useNavigate } from "react-router"
import Cookies from "js-cookie"
import { useState } from "react"

import { deleteUser, getUsers } from "../services/useService"
import { useAuthStore } from "./authStore"



export default function useDeleteAccount() {
  
    const navigate = useNavigate()
    const clearUser = useAuthStore((state) => state.clearUser)
    const userLocal = useAuthStore((state) => state.user)
    const [ password, setPassword ] = useState({
        password: "",
    })

    const handleChange = (e) => {
        const { id, value } = e.target
        setPassword((prevData) => ({
            ...prevData,
            [id]: value,
        }))
        console.log(password)
    }

    const deleteAccount = async (e) => {
     

        const toastId = toast.loading("Loading...", {
            position: "top-center",
            isLoading: true,
            autoClose: false,
        });

        const isTruePassword = await getUsers()
            .then(users => users.some(user => user.password === password.password && user.id === userLocal.id))
            .catch(err => {
                toast.update(toastId, {
                    render: err.message,
                    position: "top-center",
                    type: "error",
                    isLoading: false,
                    autoClose: 3000,
                });
            })

        if (!isTruePassword) {
            toast.update(toastId, {
                render: "kata sandinya belum cocok. Coba diingat-ingat!",
                position: "top-center",
                type: "error",
                isLoading: false,
                autoClose: 3000,
            });
            return;
        }
        try {
            toast.dismiss(toastId)
            const result = await Swal.fire({
                title: 'Sedih deh kalo kamu pergi...',
                text: "Tapi kalo emang mau, data-datanya kamu bakal kehapus ya",
                showCancelButton: true,
                confirmButtonColor: '#ef4444', // Red 500
                confirmButtonText: 'Hapus aja!',
                cancelButtonText: 'Nggak jadi deh',
            })

            if (result.isConfirmed) {
                await deleteUser(userLocal.id)
                Cookies.remove("Auth")
                clearUser()
                toast.update(toastId, {
                    render: "Akun kamu berhasil dihapus",
                    position: "top-center",
                    type: "success",
                    isLoading: false,
                    autoClose: 3000,
                });
                navigate("/login")
            }
        } catch (err) {
            toast.update(toastId, {
                render: err.message,
                position: "top-center",
                type: "error",
                isLoading: false,
                autoClose: 3000,
            });
        }
    }


    return {
        password,
        setPassword,
        deleteAccount,
        handleChange
    }
}