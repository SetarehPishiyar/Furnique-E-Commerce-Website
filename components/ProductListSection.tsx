"use client";
import { allProducts } from "@/data/data";
import { RiFilterLine, RiSearchLine } from "@remixicon/react";
import ProductCard from "./ProductCard";
import { useMemo, useState } from "react";

const ProductListSection = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("default");
  const filteredProducts = useMemo(() => {
    const filtered = allProducts.filter((product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase()),
    );

    switch (sortBy) {
      case "price-asc":
        return [...filtered].sort((a, b) => a.price - b.price);

      case "price-desc":
        return [...filtered].sort((a, b) => b.price - a.price);

      case "name-asc":
        return [...filtered].sort((a, b) => a.name.localeCompare(b.name));

      default:
        return filtered;
    }
  }, [searchQuery, sortBy]);

  return (
    <section>
      <div className="container space-y-10">
        <div className="bg-white border border-gray-200 lg:flex grid gap-2 items-center justify-between mt-7 p-4 rounded-lg">
          <div className="border border-gray-200 flex focus-within:border-secondary rounded-md">
            <input
              type="text"
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search products"
              className="w-full h-full lg:min-w-2xs py-2 outline-none px-3.5 text-gray-700"
            />
            <button className="text-gray-700 h-auto w-10 flex items-center justify-center hover:text-secondary transition-colors">
              <RiSearchLine />
            </button>
          </div>

          <div className="flex border lg:min-w-2xs border-gray-300 rounded-md focus-within:border-secondary">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="appearance-none outline-none px-2.5 py-1.5 flex-1"
            >
              <option value="default">Sort By</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="name-asc">Name: A to Z</option>
            </select>
            <button className="flex items-center justify-center w-7 text-primary focus-within:text-secondary transition">
              <RiFilterLine />
            </button>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-14 sm:mb-28">
          {filteredProducts.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductListSection;
