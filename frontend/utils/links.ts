import type { TPathLink } from "./types";
import { MdSpaceDashboard, MdAnalytics } from "react-icons/md";
import { FaWallet } from "react-icons/fa";

export const PATHS: TPathLink[] = [
  {
    name: "Dashboard",
    path: "/",
    Icon: MdSpaceDashboard,
  },
  {
    name: "Analytics",
    path: "/analytics",
    Icon: MdAnalytics,
  },
  {
    name: "Transactions",
    path: "/transactions",
    Icon: FaWallet,
  },
];
