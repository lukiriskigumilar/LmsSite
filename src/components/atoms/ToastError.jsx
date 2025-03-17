import { toast } from "react-toastify";

function ToastError(errorMessage) {
    return ( 
        toast.error(errorMessage, {
            position:"top-center",
        })
    );
}

export default ToastError;