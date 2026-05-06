import {
  TransactionCategoryExpense,
  TransactionCategoryIncome,
  type TPathLink,
} from "./types";
import {
  MdSpaceDashboard,
  MdAnalytics,
  MdFastfood,
  MdOutlineEmojiTransportation,
  MdHouse,
  MdOutlineShoppingCart,
  MdVideogameAsset,
  MdHealthAndSafety,
  MdSchool,
  MdBusinessCenter,
  MdAttachMoney,
  MdWorkHistory,
  MdCardGiftcard,
  MdMore,
} from "react-icons/md";
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

export const CATEGORY_ICONS = {
  [TransactionCategoryExpense.Food]: MdFastfood,
  [TransactionCategoryExpense.Transport]: MdOutlineEmojiTransportation,
  [TransactionCategoryExpense.Housing]: MdHouse,
  [TransactionCategoryExpense.Shopping]: MdOutlineShoppingCart,
  [TransactionCategoryExpense.Entertainment]: MdVideogameAsset,
  [TransactionCategoryExpense.Health]: MdHealthAndSafety,
  [TransactionCategoryExpense.Education]: MdSchool,
  [TransactionCategoryIncome.Salary]: MdWorkHistory,
  [TransactionCategoryIncome.Freelance]: MdBusinessCenter,
  [TransactionCategoryIncome.Investment]: MdAttachMoney,
  [TransactionCategoryIncome.Gift]: MdCardGiftcard,
  [TransactionCategoryIncome.Other]: MdMore,
};
