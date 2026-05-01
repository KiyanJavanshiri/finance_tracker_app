import { ReactNode } from "react";

const InnerContainer = ({ children }: { children: ReactNode }) => {
  return <div className="max-w-300 mx-auto pl-60 pr-16">{children}</div>;
};

export default InnerContainer;
