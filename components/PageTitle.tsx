"use client";
import { usePathname } from "next/navigation";

const PageTitle = () => {
  const pathName = usePathname();
  return (
    <div className="bg-[#ebe3d8] text-center flex flex-col gap-1 items-center justify-center min-h-56">
      <h2 className="text-3xl text-primary">
        {pathName === "/shop" && "Shop"}
        {pathName === "/shoping-cart" && "Shopping Cart"}
      </h2>
      <p className="text-gray-600 max-w-md">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, nobis!
      </p>
    </div>
  );
};

export default PageTitle;
