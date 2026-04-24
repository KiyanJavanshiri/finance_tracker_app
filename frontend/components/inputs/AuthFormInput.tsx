"use client";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Button from "../buttons/Button";

type TAuthFormInputProps<T extends object> = {
  placeholder: string;
  name: keyof T;
  id: string;
  label: string;
  error?: string;
  type?: HTMLInputElement["type"];
  defaultValue?: string;
};

const AuthFormInput = <T extends object>(props: TAuthFormInputProps<T>) => {
  const {
    placeholder,
    name,
    id,
    label,
    error,
    type = "text",
    defaultValue = "",
  } = props;
  const [isVisible, setIsVisible] = useState(false);

  return (
    <fieldset className="w-full">
      <label htmlFor={id} className="w-full">
        <p className="mb-2 text-sm leading-normal font-semibold text-black">
          {label}
        </p>
        <div className="relative">
          <input
            className="w-full outline-none leading-normal px-4 py-2 text-black text-sm font-normal placeholder:text-gray-500 border border-gray-200 focus:border-blue-500 rounded-lg transition-colors duration-100 ease-in-out"
            placeholder={placeholder}
            name={name as string}
            id={id}
            type={type !== "password" ? type : isVisible ? "text" : type}
            defaultValue={defaultValue}
          />
          {type === "password" && (
            <Button
              className="absolute top-1/2 right-4 -translate-y-1/2 cursor-pointer"
              onClick={() => setIsVisible((prev) => !prev)}
            >
              {isVisible ? <FaEye /> : <FaEyeSlash />}
            </Button>
          )}
        </div>
        {error && (
          <p className="mt-1 text-red-500 text-[12px] leading-normal font-normal">
            {error}
          </p>
        )}
      </label>
    </fieldset>
  );
};

export default AuthFormInput;
