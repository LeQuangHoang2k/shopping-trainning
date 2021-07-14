import swal from "sweetalert2";

const Alert = ({ message, warning, error }) => {
    if (message) return swal.fire({ position: "center", text: message });

    if (warning)
        return swal.fire({
            icon: "info",
            title: "Warning",
            text: warning,
        });

    if (error)
        return swal.fire({
            icon: "error",
            title: "Oops...",
            text: error,
        });
};

export default Alert;
