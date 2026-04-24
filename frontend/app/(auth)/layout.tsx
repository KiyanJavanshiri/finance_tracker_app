import Image from "next/image";
import { ReactNode } from "react";
import { FaMoneyBillWheat } from "react-icons/fa6";

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="flex-3 flex justify-center items-center h-screen bg-white overflow-hidden">
        {children}
      </div>
      <div className="relative flex-1 flex flex-col justify-between h-screen px-16 py-20 select-none">
        <Image
          src="/images/auth-bg.jpg"
          alt="auth side background"
          priority
          fill
          sizes="100vw"
          className="object-cover -z-1"
        />
        <h1 className="flex justify-start items-center gap-x-2 text-black text-2xl leading-normal font-medium">
          <FaMoneyBillWheat />
          <span>FinTrack</span>
        </h1>
        <p className="italic text-base leading-normal font-normal text-black">
          “Saving money isn’t about having less - it’s about giving your future
          self more.”
        </p>
      </div>
    </div>
  );
};

export default AuthLayout;
