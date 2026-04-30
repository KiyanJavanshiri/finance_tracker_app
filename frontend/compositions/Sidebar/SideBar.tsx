import { PATHS } from "@/utils/links";
import Link from "next/link";
import { FaMoneyBillWheat } from "react-icons/fa6";
import { MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md";
import LogoutButton from "./components/LogoutButton";

const SideBar = () => {
  return (
    <aside className="w-50 group has-[input:checked]:w-20 transition-[width] duration-150 ease-in-out fixed left-0 top-0 bottom-0 p-4 border-r border-gray-200 bg-white flex flex-col justify-between">
      <div className="relative h-full">
        <h1 className="flex justify-start items-center gap-x-4 mb-8 pl-3">
          <FaMoneyBillWheat className="w-5 h-5 shrink-0" />
          <span className="opacity-100 transition-opacity duration-150 ease-in-out group-has-[input:checked]:opacity-0 text-base leading-normal font-medium text-black group-has-[input:checked]:w-0">
            FinTrack
          </span>
        </h1>
        <nav>
          <ul className="flex flex-col gap-y-4">
            {PATHS.map(({ name, path, Icon }, i) => (
              <li key={i}>
                <Link
                  href={path}
                  className="flex justify-start items-center gap-x-3 px-3 py-2 rounded-lg bg-white text-gray-600 font-medium hover:text-black hover:shadow-[0_0_10px_rgba(0,0,0,10%)] transition-all duration-150 ease-in-out"
                >
                  <Icon className="w-5 h-5 shrink-0" />
                  <span className="opacity-100 group-has-[input:checked]:opacity-0 group-has-[input:checked]:w-0">
                    {name}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <label
          htmlFor="hideSidebar"
          className="absolute -right-7 bottom-4 inline-block cursor-pointer p-0.5 rounded-sm border border-gray-200 bg-white"
        >
          <div className="relative">
            <input
              id="hideSidebar"
              type="checkbox"
              className="opacity-0 absolute"
            />
          </div>
          <MdOutlineKeyboardDoubleArrowLeft className="w-4 h-4 text-gray-600 group-has-[input:checked]:rotate-180" />
        </label>
      </div>
      <LogoutButton />
    </aside>
  );
};

export default SideBar;
