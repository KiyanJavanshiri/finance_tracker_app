"use client";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { createPagination } from "@/utils/createPagination";
import Button from "@/components/buttons/Button";
import {
  MdOutlineKeyboardDoubleArrowLeft,
  MdOutlineKeyboardDoubleArrowRight,
} from "react-icons/md";

type PaginationBarProps = {
  totalTransactions: number;
};

const PaginationBar = ({ totalTransactions }: PaginationBarProps) => {
  const params = useSearchParams();
  const [perPage, setPerPage] = useState(10);
  const [page, setPage] = useState(Number(params.get("page")) || 1);
  const router = useRouter();
  const totalPages = Math.ceil(totalTransactions / perPage);

  const handleChangePage = (action: "inc" | "dec") => {
    if (page >= totalPages || page <= 1) return;
    setPage((prev) => (action === "inc" ? prev++ : prev--));

    const searchParams = new URLSearchParams(params);
    searchParams.set("page", String(page));
    router.push(`/transactions?${searchParams.toString()}`);
  };

  useEffect(() => {
    const currentPage = params.get("page");
    if (currentPage) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setPage(+currentPage);
    }
  }, [params]);

  return (
    <div className="flex justify-center items-center gap-x-3">
      <Button
        className="p-1 rounded-full border border-gray-200"
        onClick={() => handleChangePage("dec")}
      >
        <MdOutlineKeyboardDoubleArrowLeft
          className={`${page <= 1 ? "text-gray-400" : "text-black"}`}
        />
      </Button>
      <div className="flex justify-center items-center gap-x-2">
        {createPagination(page, totalPages).map((el, i) => (
          <p
            className={`px-2.5 py-1 rounded-full text-sm leading-normal font-normal border border-gray-200 ${+el === page ? "bg-blue-500 text-white" : "bg-white text-black"}`}
            key={i}
          >
            {el}
          </p>
        ))}
      </div>
      <Button
        className="p-1 rounded-full border border-gray-200"
        onClick={() => handleChangePage("inc")}
      >
        <MdOutlineKeyboardDoubleArrowRight
          className={`${page >= totalPages ? "text-gray-400" : "text-black"}`}
        />
      </Button>
    </div>
  );
};

export default PaginationBar;
