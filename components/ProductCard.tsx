"use client";
import useHydrated from "@/hooks/useHydrated";
import useCartStore from "@/store/cartStore";
import { ProductCardProps } from "@/types/types";
import { RiEyeLine, RiShoppingCart2Line, RiStarFill } from "@remixicon/react";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

const ProductCard = ({ product }: { product: ProductCardProps }) => {
  const { data: session } = useSession();
  const userId = session?.user?.email;
  const hydrated = useHydrated();
  const addToCart = useCartStore((state) => state.addToCart);
  const inCart = useCartStore((state) =>
    hydrated && userId
      ? state.carts[userId]?.some((item) => item.id === product.id)
      : false,
  );
  const handleAddToCart = () => {
    addToCart(userId!, {
      id: product.id,
      name: product.name,
      price: product.price,
      img: product.img,
    });
  };
  return (
    <div className="bg-white p-8 rounded-md flex flex-col relative group gap-2.5">
      <div className="py-10 relative flex items-center justify-center bg-secondary/20 h-full rounded-xl">
        <Link href={`/shop/${product.id}`}>
          <Image
            src={product.img}
            alt={product.name}
            width={200}
            height={200}
            className="transition-transform duration-300 hover:scale-105 w-auto h-auto"
          />
        </Link>
        <Link
          href={`/shop/${product.id}`}
          className="absolute top-2 right-2 bg-white gap-2 border border-secondary/50 p-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200"
          title="View product details"
        >
          <RiEyeLine />
        </Link>
      </div>

      <div>
        <button
          className="btn-primary flex items-center justify-center w-full"
          onClick={handleAddToCart}
          disabled={inCart}
        >
          <span>
            <RiShoppingCart2Line size={22} />
          </span>
          {inCart ? "In Cart" : "Add To Cart"}
        </button>

        <div className="space-y-1 mt-5">
          <h3 className="text-xl">{product.name}</h3>
          <p className="text-secondary font-semibold">${product.price}</p>
          <div className="flex items-center gap-0.5 text-secondary/70">
            {[1, 2, 3, 4, 5].map((item, index) => (
              <RiStarFill key={index} size={20} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
