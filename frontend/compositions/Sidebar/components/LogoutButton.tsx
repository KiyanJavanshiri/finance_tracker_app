import { MdOutlineLogout } from "react-icons/md";
import Button from "@/components/buttons/Button";
import { actionLogout } from "@/utils/actions/validationActions";

const LogoutButton = () => {
  return (
    <form action={actionLogout}>
      <Button
        type="submit"
        className="flex justify-start items-center gap-x-3 px-3 py-2 rounded-lg bg-white text-gray-600 font-medium hover:text-red-500 hover:shadow-[0_0_10px_rgba(0,0,0,10%)] transition-all duration-150 ease-in-out w-full"
      >
        <MdOutlineLogout className="w-5 h-5 transition-colors duration-150 ease-in-out hover:text-red-500 shrink-0" />
        <span className="opacity-100 group-has-[input:checked]:opacity-0 group-has-[input:checked]:w-0">
          Logout
        </span>
      </Button>
    </form>
  );
};

export default LogoutButton;
