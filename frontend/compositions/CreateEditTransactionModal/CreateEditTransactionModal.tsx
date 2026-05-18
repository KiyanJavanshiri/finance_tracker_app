"use client";
import { useState, useActionState, useEffect } from "react";
import { TOperationType, TransactionEnum } from "@/utils/types";
import { createPortal } from "react-dom";
import { MdClose } from "react-icons/md";
import Button from "@/components/buttons/Button";
import FormFieldWrapper from "./components/FormFieldWrapper";
import SwitchTransactionType from "./components/SwitchTransactionType";
import CustomSelectInput from "@/components/inputs/CustomSelectInput";
import { getProperCategoryOption } from "@/utils/links";
import { actionCreateTransaction } from "@/utils/actions/transactionActions";

type TCreateEditTransactionModalProps = {
  transaction?: TOperationType;
  onClose: () => void;
};

const CreateEditTransactionModal = (
  props: TCreateEditTransactionModalProps,
) => {
  const { transaction, onClose } = props;
  const [state, action, isPending] = useActionState(
    actionCreateTransaction,
    undefined,
  );
  const [type, setType] = useState<TransactionEnum>(
    () => transaction?.type || state?.fields.type || TransactionEnum.Income,
  );

  const handleSwitchType = (type: TransactionEnum) => {
    setType(type);
  };

  useEffect(() => {
    console.log(state);
  }, [state]);

  return createPortal(
    <div className="fixed inset-0 bg-[rgba(0,0,0,30%)]">
      <div className="fixed top-1/2 left-1/2 -translate-1/2 px-4 py-3 rounded-md bg-white min-w-86">
        <div className="flex justify-between items-center gap-x-2">
          <h3 className="capitalize text-base leading-normal font-medium text-black">
            {transaction ? "Edit a transaction" : "Add new transaction"}
          </h3>
          <Button className="" onClick={onClose}>
            <MdClose className="w-5 h-5" />
          </Button>
        </div>
        <form action={action}>
          <SwitchTransactionType
            type={type}
            handleSwitchType={handleSwitchType}
          />
          <div className="flex flex-col gap-y-3">
            <FormFieldWrapper label="Description">
              <input
                className="px-4 py-3 rounded-sm border border-gray-300 transition-colors duration-150 ease-in-out focus:border-blue-500 outline-none text-sm leading-normal text-black placeholder:text-gray-500 w-full"
                name="description"
                placeholder="Enter description"
                defaultValue={transaction?.description || state?.fields.description}
              />
            </FormFieldWrapper>
            <FormFieldWrapper label="Amount">
              <input
                className="px-4 py-3 rounded-sm border border-gray-300 transition-colors duration-150 ease-in-out focus:border-blue-500 outline-none text-sm leading-normal text-black placeholder:text-gray-500 w-full"
                name="amount"
                placeholder="Enter description"
                defaultValue={transaction?.amount || state?.fields.amount}
              />
            </FormFieldWrapper>
            <FormFieldWrapper label="Category">
              <CustomSelectInput
                name="category"
                options={getProperCategoryOption(type)}
                defaultValue={transaction?.category || state?.fields.category}
              />
            </FormFieldWrapper>
          </div>
          <Button
            className="w-full text-center py-3 rounded-sm text-white text-sm font-medium leading-normal bg-black hover:bg-gray-700 mt-6 disabled:bg-gray-600 disabled:cursor-not-allowed"
            type="submit"
            disabled={isPending}
          >
            {transaction ? "Edit" : "Create"}
          </Button>
        </form>
      </div>
    </div>,
    document.getElementById("modals")!,
  );
};

export default CreateEditTransactionModal;
