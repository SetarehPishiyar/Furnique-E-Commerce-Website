"use client";
import PageTitle from "@/components/PageTitle";
import { allProducts, productFeatures } from "@/data/data";
import {
  RiArrowLeftLine,
  RiShoppingCart2Line,
  RiStarFill,
} from "@remixicon/react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

const ProductDetails = () => {
  const { id } = useParams();
  const product = allProducts.find((item) => item.id === Number(id));
  console.log(product);
  return (
    <div>
      <PageTitle
        title="Product Details"
        description="Explore product specifications and features."
      />

      <div className="py-20">
        <div className="container">
          <div className="flex items-center gap-2 text-sm text-gray-600 mb-6">
            <Link href="/" className="hover:text-secondary transition">
              Home
            </Link>
            <span>/</span>
            <Link href="/shop" className="hover:text-secondary transition">
              Shop
            </Link>
            <span>/</span>
            <span>product</span>
          </div>

          <Link
            href="/shop"
            className="text-secondary/80 inline-flex items-center gap-2 hover:text-secondary mb-8 font-medium"
          >
            <RiArrowLeftLine />
            Back to product list
          </Link>

          {!product && (
            <div className="text-center mt-20">Product Not Found.</div>
          )}

          {product && (
            <div className="grid gap-12 lg:grid-cols-2">
              <div className="aspect-auto bg-secondary/40 rounded-2xl overflow-hidden p-5">
                <Image
                  src={product.img}
                  alt={product.name}
                  width={200}
                  height={200}
                  loading="eager"
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="space-y-4">
                <p className="text-sm text-secondary font-medium">
                  {product.category}
                </p>
                <h3 className="text-2xl text-gray-800">{product.name}</h3>
                <div className="flex items-center gap-3">
                  {[1, 2, 3, 4, 5].map((index) => (
                    <RiStarFill key={index} size={20} />
                  ))}
                  <p className="font-semibold text-secondary">
                    {product.star}
                    {"/5 "}
                    <span className="font-light text-gray-600 ">
                      180 reviews
                    </span>
                  </p>
                </div>

                <p className="text-2xl font-bold font-cunia text-secondary">
                  ${product.price}
                </p>
                <p>{product.desc}</p>
                <button className="btn-primary flex items-center gap-1">
                  <span>
                    <RiShoppingCart2Line size={20} />
                  </span>
                  Add to Cart
                </button>

                <div className="grid grid-cols-2 gap-4 pt-6 border-t border-gray-200">
                  {productFeatures.map((feature) => (
                    <div key={feature.id} className="flex items-center gap-3">
                      <span className="shrink-0 text-secondary">
                        <feature.icon />
                      </span>
                      <div>
                        <p className="font-cunia">{feature.title}</p>
                        <p className="text-sm text-gray-600">{feature.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
