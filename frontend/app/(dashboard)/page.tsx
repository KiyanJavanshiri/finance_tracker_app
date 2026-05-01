import PageTitle from "@/components/PageTitle";
import { getPeriodOfDay } from "@/utils/getPeriodOfDay";

export default function Home() {
  return (
    <div className="">
      <PageTitle title={`Good ${getPeriodOfDay()}!`} description="You can check your finances here"/>
    </div>
  )
}
