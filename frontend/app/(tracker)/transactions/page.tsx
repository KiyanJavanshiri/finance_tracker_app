import PageTitle from "@/components/PageTitle";
import TransactionsContainer from "@/compositions/TransactionsContainer/TransactionsContainer";
import { TransactionEnum } from "@/utils/types";
import { Suspense } from "react";

const TransactionsPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ type?: TransactionEnum; page?: number }>;
}) => {
  const {type = TransactionEnum.Income, page = 1} = await searchParams;
  return (
    <div>
      <PageTitle
        title={`Transaction Records`}
        description="Complete list of all financial transactions"
      />
      <Suspense>
        <TransactionsContainer type={type} page={page} />
      </Suspense>
    </div>
  );
};

export default TransactionsPage;
