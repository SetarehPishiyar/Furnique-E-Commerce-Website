import {
  RiAddLine,
  RiArrowLeftLine,
  RiArrowRightLine,
  RiDeleteBin6Line,
  RiSubtractLine,
} from "@remixicon/react";
import Image from "next/image";
import Link from "next/link";

const CartItems = () => {
  return (
    <div className="py-16 md:py-20">
      <div className="container">
        <div className="mb-8 space-y-1.5">
          {/* <h3 className="text-3xl">Shopping Cart</h3> */}
          <p className="text-primary">Your shopping cart is empty.</p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3 lg:items-start">
          <div className="lg:col-span-2">
            <div className="bg-white border border-gray-200 rounded-lg p-2 overflow-hidden">
              {/* Mobile Menu */}
              <div className="md:hidden divide-y divide-gray-200">
                <div className="p-4">
                  <div className="flex gap-4">
                    <div>
                      <Image
                        src="/images/product-1.png"
                        alt="product-1"
                        width={80}
                        height={80}
                        className="w-auto h-auto rounded-md object-contain"
                      />
                    </div>

                    <div className="flex-1">
                      <h3 className="font-medium mb-2">Modern Velvet Sofa</h3>
                      <p className="text-gray-600 mb-2">$850</p>

                      <div className="flex items-center gap-2 border border-gray-300 w-fit rounded-lg overflow-hidden">
                        <button className="p-2 hover:bg-gray-100 transition">
                          <RiSubtractLine size={18} />
                        </button>
                        <p>2</p>
                        <button
                          className="p-2 hover:bg-gray-100 transition"
                          title="Delete Item"
                        >
                          <RiAddLine size={18} />
                        </button>
                      </div>
                    </div>

                    <button className="text-rose-500 hover:text-rose-700 transition-colors">
                      <RiDeleteBin6Line size={20} />
                    </button>
                  </div>
                  <div className="mt-3 pt-3 border-t border-gray-100 flex justify-between">
                    <p className="text-gray-600 font-semibold">Subtotal:</p>
                    <p className="text-secondary font-cunia">$850</p>
                  </div>
                </div>
              </div>

              {/* Desktop Menu */}
              <div className="hidden md:block overflow-x-hidden">
                <table className="min-h-full text-left border-collapse">
                  <thead className="bg-gray-50 border-b border-gray-200">
                    <tr>
                      {["Product", "Price", "Quantity", "Total"].map(
                        (label) => (
                          <th key={label} className="p-4 font-semibold">
                            {label}
                          </th>
                        ),
                      )}
                    </tr>
                    <tr className="p-4"> </tr>
                  </thead>

                  {/* item */}
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="p-4">
                        <div className="flex items-center gap-4">
                          <div className="">
                            <Image
                              src={"/images/product-1.png"}
                              alt="item.name"
                              width={80}
                              height={80}
                              className="rounded-md w-auto h-auto object-contain"
                            />
                          </div>
                          <p className="font-medium">item.name</p>
                        </div>
                      </td>
                      <td className="text-gray-700 p-4">$300</td>

                      {/* Counter */}
                      <td className="p-4">
                        <div className="flex items-center gap-2 border border-gray-300 w-fit rounded-lg overflow-hidden">
                          <button className="p-2 hover:bg-gray-100 transition">
                            <RiSubtractLine size={18} />
                          </button>
                          <p>2</p>
                          <button
                            className="p-2 hover:bg-gray-100 transition"
                            title="Delete Item"
                          >
                            <RiAddLine size={18} />
                          </button>
                        </div>
                      </td>

                      {/* Total */}
                      <td className="p-4 font-semibold text-secondary">
                        ${1200}
                      </td>
                      <td className="p-4">
                        <button className="text-rose-500 hover:text-rose-700 transition-colors">
                          <RiDeleteBin6Line size={20} />
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Clear Cart */}
            <button className="mt-4 text-rose-500 hover:text-rose-700 transition-colors flex items-center gap-2">
              <RiDeleteBin6Line size={20} className="" />
              Clear Cart
            </button>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1 border border-gray-200 bg-white p-6 rounded-lg sticky top-24 space-y-2">
            <h3 className="underline mb-4 font-bold text-lg text-secondary">
              Order Summary
            </h3>
            <div className="space-y-3 mb-6">
              <div className="flex justify-between text-gray-600">
                <h4>Subtotal:</h4>
                <p>${1200}</p>
              </div>

              <div className="flex justify-between text-gray-600">
                <h4>Shipping:</h4>
                <p className="text-secondary font-semibold">{"free"}</p>
              </div>

              <div className="flex justify-between text-gray-600">
                <h4>Tax:</h4>
                <p>{"included"}</p>
              </div>
            </div>

            <div className="border-t border-gray-200 text-gray-700 pt-2 mb-6 flex justify-between items-center">
              <h4>Total:</h4>
              <p className="text-secondary font-semibold">${1200}</p>
            </div>

            <button className="btn-primary w-full mt-2">Checkout</button>
            <Link
              href={"/shop"}
              className="flex text-secondary cursor-pointer items-center gap-2 hover:text-primary"
            >
              Continue Shopping
              <RiArrowRightLine size={15} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
