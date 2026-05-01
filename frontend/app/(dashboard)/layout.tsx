import { ReactNode } from "react";
import { actionGetUserDetails } from "@/utils/actions/validationActions";
import SideBar from "@/compositions/Sidebar/SideBar";
import InnerContainer from "@/layout/InnerContainer";
import Header from "@/compositions/Header";

const DashboardLayout = async ({ children }: { children: ReactNode }) => {
  const userDetails = await actionGetUserDetails();
  return (
    <div>
      <SideBar />
      <div className="flex flex-col h-screen">
        <Header user={userDetails} />
        <main className="flex-1 py-10">
          <InnerContainer>{children}</InnerContainer>
        </main>
        <footer>
          <InnerContainer>footer</InnerContainer>
        </footer>
      </div>
    </div>
  );
};

export default DashboardLayout;
