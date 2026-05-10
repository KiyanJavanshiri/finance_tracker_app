"use client";
import { useState } from "react";
import Button from "@/components/buttons/Button";
import { MdKeyboardArrowDown } from "react-icons/md";

type TransactionsSortDropdownProps = {
  handleChangeSort: (type: "DESC" | "ASC") => void;
  type: "DESC" | "ASC";
};

const OPTIONS: { title: string; value: "DESC" | "ASC" }[] = [
  {
    title: "High to Low",
    value: "DESC",
  },
  {
    title: "Low to High",
    value: "ASC",
  },
];

const TransactionsSortDropdown = ({
  handleChangeSort,
  type,
}: TransactionsSortDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex justify-center items-center gap-x-3 relative">
      <span className="leading-normal text-gray-600 font-normal text-sm">
        Sort by Amount:
      </span>
      <Button
        className="flex justify-center items-center gap-x-2 px-3 py-2 rounded-md border border-gray-300 transition-colors duration-150 ease-in-out hover:bg-gray-200 bg-white"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <span className="text-black text-sm leading-normal font-medium">
          {type === "DESC" ? "High to Low" : "Low to High"}
        </span>
        <MdKeyboardArrowDown
          className={`transition-transform duration-150 ease-in-out ${isOpen ? "rotate-180" : "rotate-0"}`}
        />
      </Button>
      {isOpen && (
        <ul className="absolute -bottom-2 translate-y-full left-0 right-0 rounded-sm bg-white shadow-[0_0_10px_rgba(0,0,0,10px)] border border-gray-300">
          {OPTIONS.map(({ title, value }, i) => (
            <li
              key={i}
              onClick={() => {
                handleChangeSort(value);
                setIsOpen(false);
              }}
              className="not-first:border-t not-first:border-t-gray-300 first:rounded-t-sm last:rounded-b-sm px-3 py-2 transition-colors duration-150 ease-in-out hover:bg-gray-200 text-sm leading-normal font-medium text-black text-center cursor-pointer"
            >
              {title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TransactionsSortDropdown;
