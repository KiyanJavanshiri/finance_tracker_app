"use client";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa6";

type TCustomSelectInput = {
  name: string;
  options: {
    title: string;
    value: string;
  }[];
  defaultValue?: string;
};

const CustomSelectInput = (props: TCustomSelectInput) => {
  const { name, options, defaultValue = "" } = props;
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(() => defaultValue);
  const handleSelectOption = (opt: (typeof options)[number]["value"]) => {
    setSelectedValue(opt);
    setIsOpen(false);
  };
  return (
    <div className="relative">
      <div
        className={`flex justify-between items-center px-4 py-3 rounded-sm border ${isOpen ? "border-blue-500" : "border-gray-300"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <input type="hidden" value={selectedValue} name={name} />
        <p>{selectedValue ? selectedValue : `Select ${name}`}</p>
        <FaChevronDown className={`${isOpen ? "rotate-180" : ""}`} />
      </div>
      {isOpen && (
        <ul className="absolute -bottom-2 left-0 right-0 -translate-y-full bg-white border border-gray-300 rounded-sm p-2 flex flex-col gap-y-2 cursor-pointer">
          {options.map(({ title, value }, i) => (
            <li
              className="p-1 rounded-md hover:bg-gray-400 text-black text-sm leading-normal font-medium"
              key={i}
              onClick={() => handleSelectOption(value)}
            >
              {title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CustomSelectInput;
