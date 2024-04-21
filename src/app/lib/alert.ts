import Swal from "sweetalert2";

const fireAlert = (options: {
  title?: string;
  text?: string;
  icon?: "success" | "error" | "warning" | "info" | "question";
}) => {
  Swal.fire({
    showConfirmButton: true,
    title: options.title ?? "Default Title",
    text: options.text ?? "Default Text",
    icon: options.icon ?? "info",
  });
};

export default fireAlert;
