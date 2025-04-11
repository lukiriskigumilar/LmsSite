import { toast } from "react-toastify";

function ToasSuccses(successMessage) {
    return (
        toast.success(successMessage ,{
            position: "top-center",
        })
    );
}

export default ToasSuccses;