"use client";
import { useState } from "react";
import Button from "@/components/buttons/Button";
import { FaPlus } from "react-icons/fa";
import CreateEditTransactionModal from "@/compositions/CreateEditTransactionModal/CreateEditTransactionModal";

const CreateTransactionButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Button
        className="flex justify-center items-center gap-x-2 px-3 py-2 rounded-sm text-white leading-normal bg-blue-500 text-sm font-medium hover:bg-blue-300"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <span>Add transaction</span>
        <FaPlus />
      </Button>
      {isOpen && <CreateEditTransactionModal onClose={handleCloseModal} />}
    </>
  );
};

export default CreateTransactionButton;
