import { ButtonHTMLAttributes, ReactNode } from "react";

type TButtonProps = {
  onClick?: () => void;
  name?: string;
  type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
  children: ReactNode;
  className: string;
  disabled?: boolean;
};

const Button = (props: TButtonProps) => {
  const {
    onClick,
    name,
    type = "button",
    children,
    className,
    disabled,
  } = props;

  return (
    <button
      type={type}
      name={name}
      onClick={onClick}
      className={`cursor-pointer ${className}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
