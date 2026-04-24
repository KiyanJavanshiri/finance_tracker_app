import Image from "next/image";
import { ReactNode } from "react";

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="flex-3 flex justify-center items-center h-screen bg-white overflow-hidden">
        {children}
      </div>
      <div className="relative flex-1 h-screen px-16 py-20">
        <Image
          src="/images/auth-bg.jpg"
          alt="auth side background"
          priority
          fill
          sizes="100vw"
          className="object-cover -z-1"
        />
      </div>
    </div>
  );
};

export default AuthLayout;
