import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { OrderCardApi } from "@/components/OrderCardApi";
import { Orders } from "@/data/dataset";

export default function Home() {
  return (
    <MaxWidthWrapper className='pb-24 pt-10'>
        <div className="font-bold !leading-tight text-gray-900 text-5xl">Congratulations 🎉</div>
        <OrderCardApi orders={Orders[0]} key={Orders[0].trackNumber} href="/orders" button_info="Confirmed"/>
    </MaxWidthWrapper>
  );
}
