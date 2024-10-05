import { Order, Address } from "@/data/dataset";

interface Props {
  orders: Order;
}

const findStreetFromOrder = (order: Order, address: any[]) => {
  const senderAddress = address.find(address => address.addressNumber === order.From);
  return senderAddress ? senderAddress.Street1 : 'Street not found';
};
const findStreetToOrder = (order: Order, address: any[]) => {
  const senderAddress = address.find(address => address.addressNumber === order.To);
  return senderAddress ? senderAddress.Street1 : 'Street not found';
};

export const OrderCard = ({ orders }: Props) => {
  const AddressFrom = findStreetFromOrder(orders, Address);
  const AddressTo = findStreetToOrder(orders, Address);
  return (
    <div className="grid-cols-6">
      <div className="col-span-5">
        <div className="max-w-lg mx-auto bg-white border rounded-lg shadow-md p-4 mt-5">
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

          <div className="flex items-center py-4 justify-between">
            {/* From Section */}
            <div className="">
              <p className="text-green-600 font-bold">From</p>
              <p className="text-black font-bold">{AddressFrom}</p>
            </div>

            {/* To Section */}
            <div className="">
              <p className="text-green-600 font-bold">To</p>
              <p className="text-black font-bold">{AddressTo}</p>
            </div>
          </div>


          <div className="flex space-x-4 pt-4 border-t">
            <button className="border px-4 py-2 rounded-lg hover:bg-gray-100">
              View details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};