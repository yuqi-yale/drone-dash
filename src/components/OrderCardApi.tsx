import { Order, Address } from "@/data/dataset";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { MapProvider } from "@/app/providers/map-provider";
import { MapComponent } from "./Maps";

interface Props {
  orders: Order;
  href: string;
}

const findStreetFromOrder = (order: Order, address: any[]) => {
  const senderAddress = address.find(address => address.addressNumber === order.From);
  return senderAddress ? senderAddress : 'Street not found';
};
const findStreetToOrder = (order: Order, address: any[]) => {
  const senderAddress = address.find(address => address.addressNumber === order.To);
  return senderAddress ? senderAddress : 'Street not found';
};

export const OrderCardApi = ({ orders, href }: Props) => {
  const AddressFrom = findStreetFromOrder(orders, Address);
  const AddressTo = findStreetToOrder(orders, Address);
  return (
    <div className="grid-cols-6">
      <div className="col-span-5">
        <div className="max-w-4xl mx-auto bg-white border rounded-lg shadow-md p-4 mt-5">
          <div className="flex justify-between mb-4">
            <div>
              <p className="text-gray-600">ORDER PLACED</p>
              <p>{orders.createTime}</p>
            </div>
            <div>
              <p className="text-gray-600">TOTAL</p>
              <p>${orders.price}</p>
            </div>
            <div>
              <p className="text-gray-600">SHIP TO</p>
              <p>{orders.nameTo}</p>
            </div>
          </div>

          <div className="border-b pb-4">
            <p className="text-green-600 font-bold">{orders.status}</p>
          </div>

          <div className="flex py-4 justify-start mx-auto">
            <div className="w-1/2 text-left">
              <p className="text-green-600 font-bold">From</p>
              <p className="text-black font-bold">{AddressFrom.street1}</p>
              <p className="text-black font-bold">{AddressFrom.city}</p>
              <p className="text-black font-bold">{AddressFrom.zip}</p>
            </div>

            <div className="w-4"></div>

            <div className="w-1/2 text-left">
              <p className="text-green-600 font-bold">To</p>
              <p className="text-black font-bold">{AddressTo.street1}</p>
              <p className="text-black font-bold">{AddressTo.city}</p>
              <p className="text-black font-bold">{AddressTo.zip}</p>
            </div>
          </div>

          <MapProvider>
            <MapComponent />
          </MapProvider>


          <div className="flex text-lg space-x-4 pt-4 border-t justify-end">
            <Link
              href={href}
              className={buttonVariants({
                size: 'lg',
                className: 'hidden lg:flex items-center gap-1'
              })}>
              Continue
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
};