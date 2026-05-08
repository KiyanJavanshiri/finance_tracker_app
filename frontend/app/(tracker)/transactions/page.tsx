import PageTitle from "@/components/PageTitle";
import TransactionsContainer from "@/compositions/TransactionsContainer/TransactionsContainer";
import { TransactionEnum } from "@/utils/types";
import { Suspense } from "react";

const TransactionsPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ type?: TransactionEnum }>;
}) => {
  const { type = TransactionEnum.Income } = await searchParams;
  return (
    <div>
      <PageTitle
        title={`Transaction Records`}
        description="Complete list of all financial transactions"
      />
      <Suspense>
        <TransactionsContainer type={type} />
      </Suspense>
    </div>
  );
};

export default TransactionsPage;
