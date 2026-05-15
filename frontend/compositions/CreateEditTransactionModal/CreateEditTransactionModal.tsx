"use client";
import { TOperationType, TransactionEnum } from "@/utils/types";
import { createPortal } from "react-dom";
import { MdClose } from "react-icons/md";
import Button from "@/components/buttons/Button";
import FormFieldWrapper from "./components/FormFieldWrapper";
import SwitchTransactionType from "./components/SwitchTransactionType";
import CustomSelectInput from "@/components/inputs/CustomSelectInput";
import { getProperCategoryOption } from "@/utils/links";

type TCreateEditTransactionModalProps = {
  transaction?: TOperationType;
  onClose: () => void;
};

const CreateEditTransactionModal = (
  props: TCreateEditTransactionModalProps,
) => {
  const { transaction, onClose } = props;

  return createPortal(
    <div className="fixed inset-0 bg-gray-700">
      <div className="fixed top-1/2 left-1/2 -translate-1/2 p-2 rounded-md bg-white max-w-80">
        <div className="flex justify-between items-center gap-x-2">
          <h3 className="capitalize">
            {transaction ? "Edit a transaction" : "Add new transaction"}
          </h3>
          <Button className="" onClick={onClose}>
            <MdClose className="w-5 h-5" />
          </Button>
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const formData = new FormData(e.target);
            console.log(formData);
          }}
        >
          <SwitchTransactionType type={transaction?.type} />
          <FormFieldWrapper label="Description">
            <input
              className="px-4 py-3 rounded-sm border border-gray-300 transition-colors duration-150 ease-in-out hover:border-blue-500 outline-none text-sm leading-normal text-black placeholder:text-gray-500"
              name="description"
              placeholder="Enter description"
              defaultValue={transaction?.description}
            />
          </FormFieldWrapper>
          <FormFieldWrapper label="Amount">
            <input
              className="px-4 py-3 rounded-sm border border-gray-300 transition-colors duration-150 ease-in-out hover:border-blue-500 outline-none text-sm leading-normal text-black placeholder:text-gray-500"
              name="description"
              placeholder="Enter description"
              defaultValue={transaction?.description}
            />
          </FormFieldWrapper>
          <FormFieldWrapper label="Category">
            <CustomSelectInput
              name="category"
              options={getProperCategoryOption(transaction?.type)}
            />
          </FormFieldWrapper>
          <Button className="" type="submit">
            Submit
          </Button>
        </form>
      </div>
    </div>,
    document.getElementById("modals")!,
  );
};

export default CreateEditTransactionModal