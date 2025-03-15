import { toast } from "react-toastify";

toast

function ToasSuccses(successMessage) {
    return (
        toast.success(successMessage ,{
            position: "top-center",
        })
    );
}

export default ToasSuccses;