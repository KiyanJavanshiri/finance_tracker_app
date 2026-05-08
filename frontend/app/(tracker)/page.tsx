import PageTitle from "@/components/PageTitle";
import DashboardContainer from "@/compositions/DashboardContainer/DashboardContainer";
import { getPeriodOfDay } from "@/utils/getPeriodOfDay";

const DashboardPage = () => {
  return (
    <div className="">
      <PageTitle
        title={`Good ${getPeriodOfDay()}!`}
        description="You can check your finances here"
      />

      <DashboardContainer />
    </div>
  );
};

export default DashboardPage;
