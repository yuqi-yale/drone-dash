import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <MaxWidthWrapper className='pb-24 pt-10'>

      <form className=" p-8 shadow-lg rounded-lg w-full max-w-4xl">
        <div className="grid grid-cols-2 gap-6">
          {/* From Address */}
          <div>
            <h2 className="text-green-600 text-lg font-bold mb-4">From Address</h2>
            <div className="mb-4">
              <label className="block text-gray-700">Your Name</label>
              <input
                type="text"
                className="border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Country / Location</label>
              <select className="border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring">
                <option>United States</option>
                {/* Add more countries as options */}
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Address</label>
              <input
                type="text"
                placeholder="Street address"
                className="border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring"
              />
              <input
                type="text"
                placeholder="Apt, Floor, Suite, etc. (optional)"
                className="border rounded w-full py-2 px-3 mt-2 text-gray-700 focus:outline-none focus:ring"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">ZIP</label>
              <input
                type="text"
                className="border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">City</label>
              <input
                type="text"
                className="border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">State</label>
              <select className="border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring">
                <option value="NN">Select</option>
                <option value="CT">Connecticut</option>
                <option value="NY">New York</option>
                {/* Add more states */}
              </select>
            </div>
          </div>

          {/* To Address */}
          <div>
            <h2 className="text-green-600 text-lg font-bold mb-4">To Address</h2>
            <div className="mb-4">
              <label className="block text-gray-700">Recipient Name</label>
              <input
                type="text"
                className="border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Country / Location</label>
              <select className="border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring">
                <option>United States</option>
                {/* Add more countries as options */}
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Address</label>
              <input
                type="text"
                placeholder="Street address"
                className="border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring"
              />
              <input
                type="text"
                placeholder="Apt, Floor, Suite, etc. (optional)"
                className="border rounded w-full py-2 px-3 mt-2 text-gray-700 focus:outline-none focus:ring"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">ZIP</label>
              <input
                type="text"
                className="border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">City</label>
              <input
                type="text"
                className="border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">State</label>
              <select className="border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring">
                <option value="NN">Select</option>
                <option value="CT">Connecticut</option>
                <option value="NY">New York</option>
              </select>
            </div>
          </div>
        </div>

        {/* Continue button */}
        <div className="flex justify-end mt-4">
          <Link
            href='/case/preview'
            className={buttonVariants({
              size: 'lg',
              className: 'hidden lg:flex items-center gap-1'
            })}>
            Continue
          </Link>
        </div>



      </form>
    </MaxWidthWrapper>
  );
}