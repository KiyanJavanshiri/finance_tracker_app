import { ReactNode } from "react";

const FormFieldWrapper = ({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) => {
  return (
    <fieldset>
      <label className="block w-full">
        <p className="text-sm leading-normal font-medium text-black mb-2 capitalize">
          {label}
        </p>
        {children}
      </label>
    </fieldset>
  );
};

export default FormFieldWrapper;
