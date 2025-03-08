import { useNavigate } from "react-router-dom";

export default function useAuth() {
    const navigate = useNavigate();

    function loginFunc() {
        
    }

    function loginWithGoogle() {
    }
    return [ loginFunc, loginWithGoogle]
}