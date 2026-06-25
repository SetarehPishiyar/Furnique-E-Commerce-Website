import { allProducts } from "@/data/data";
import { RiFilterLine, RiSearchLine } from "@remixicon/react";
import ProductCard from "./ProductCard";

const ProductListSection = () => {
  return (
    <section>
      <div className="container space-y-10">
        <div className="bg-white border border-gray-200 grid gap-2 items-center justify-between mt-7 p-4 rounded-lg">
          <div className="border border-gray-200 flex focus-within:border-secondary rounded-md">
            <input
              type="text"
              placeholder="Search products"
              className="w-full h-full py-2 outline-none px-3.5 text-gray-700"
            />
            <button className="text-gray-700 h-auto w-10 flex items-center justify-center hover:text-secondary transition-colors">
              <RiSearchLine />
            </button>
          </div>

          <div className="flex border border-gray-300 rounded-md focus-within:border-secondary">
            <select
              name=""
              id=""
              className="appearance-none outline-none px-2.5 py-1.5 flex-1"
            >
              {[
                "Sort By",
                "Price: Low to High",
                "Price: High to Low",
                "Name: A to Z",
              ].map((label, index) => (
                <option key={index}>{label}</option>
              ))}
            </select>
            <button className="flex items-center justify-center w-7 text-primary focus-within:text-secondary transition">
              <RiFilterLine />
            </button>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-14 sm:mb-28">
          {allProducts.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductListSection;
