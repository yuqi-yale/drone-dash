import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { OrderCard } from "@/components/OrderCard";
import { Orders } from "@/data/dataset";
import { FaSearch } from 'react-icons/fa';


export default function Home() {
  return (
    <>
      <MaxWidthWrapper className='pb-24 pt-10 lg:grid lg:grid-cols-4'>
        <div className="col-span-3 px-6 lg:px-0 lg:pt-4">
          <div className="flex justify-between">
            <div className="font-bold !leading-tight text-gray-900 text-5xl">Your Orders</div>
            <div className="flex items-center">
              {/* Input field with search icon */}
              <div className="flex items-center border rounded-md px-2 py-1">
                <FaSearch className="text-gray-500 mr-2" />
                <input
                  type="text"
                  placeholder="Search all orders"
                  className="outline-none"
                />
              </div>

              {/* Search button */}
              <button className="ml-2 bg-gray-800 text-white rounded-full px-4 py-1">
                Search Orders
              </button>
            </div>
          </div>

          {Orders.map((order) => (
            <OrderCard orders={order} key={order.trackNumber}></OrderCard>
          ))}

        </div>

      </MaxWidthWrapper>
    </>
  );
}