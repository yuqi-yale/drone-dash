import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { OrderCard } from "@/components/OrderCard";
import { Orders } from "@/data/dataset";


export default function Home() {
  return (
    <>
      <MaxWidthWrapper className='pb-24 pt-10 lg:grid lg:grid-cols-3 sm:pb-32 lg:gap-x-0 xl:gap-x-8 lg:pt-24 xl:pt-32 lg:pb-52'>
        <div className="col-span-2 px-6 lg:px-0 lg:pt-4">
          <div className="font-bold !leading-tight text-gray-900 text-7xl">Orders</div>
          
          {Orders.map((order) => (
            <OrderCard orders={order} key={order.trackNumber}></OrderCard>
          ))}

        </div>
        
      </MaxWidthWrapper>
    </>
  );
}