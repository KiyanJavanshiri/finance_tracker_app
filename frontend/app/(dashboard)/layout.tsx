import SideBar from "@/compositions/Sidebar/SideBar";
import { ReactNode } from "react";

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <SideBar />
      <div className="">{children}</div>
    </>
  );
};

export default DashboardLayout;
