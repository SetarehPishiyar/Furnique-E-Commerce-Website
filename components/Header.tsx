"use client";
import { navItems } from "@/data/data";
import { RiCloseLine, RiMenuLine, RiShoppingCart2Line } from "@remixicon/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const pathName = usePathname();
  const handleClick = () => {
    setOpenMenu((prev) => !prev);
  };
  return (
    <header className="sticky top-0 border-b border-gray-200 w-full py-3 bg-white z-50 font-cunia">
      <div className="container flex items-center justify-between">
        <Link href={"/"} className="text-3xl font-semibold text-amber-600">
          Furnique
        </Link>

        {/* Desktop menu */}
        <nav className="hidden lg:flex items-center justify-between w-full">
          <ul className="mx-auto flex items-center gap-9 justify-center">
            {navItems.map((item) => (
              <li
                key={item.id}
                className={`hover:text-amber-600 focus:text-amber-600 transition-colors ${pathName === item.href ? "text-amber-600" : "text-black"}`}
              >
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3.5">
            <Link
              href={"/shopping-cart"}
              className="size-10 relative inline-flex items-center justify-center rounded-sm"
            >
              <RiShoppingCart2Line
                size={26}
                className="text-black hover:text-amber-600 focus:text-amber-600 transition-all"
              />
              <span className="absolute top-0 right-0 bg-amber-600 flex items-center size-5 rounded-full text-white justify-center text-xs">
                2
              </span>
            </Link>
            <button className="btn-primary">Log In</button>
          </div>
        </nav>

        {/* Mobile menu */}
        <nav className="relative lg:hidden">
          <div className="flex items-center gap-2">
            <Link
              href={"/shopping-cart"}
              className="size-10 inline-flex items-center justify-center rounded-sm relative"
            >
              <RiShoppingCart2Line className="hover:text-amber-600 focus:text-amber-600 transition-colors text-black" />
              <span className="size-5 bg-amber-600 text-white flex items-center justify-center rounded-full text-sm absolute top-0 right-0">
                2
              </span>
            </Link>
            <button onClick={handleClick} className="text-black">
              {openMenu ? <RiCloseLine size={28} /> : <RiMenuLine size={28} />}
            </button>
          </div>
          <div
            className={`absolute top-full right-0 bg-white p-3 min-w-50 w-full shadow mt-2.5 rounded-lg space-y-2.5
          transition ${openMenu ? "visible grid" : " hidden invisible"}`}
          >
            <ul>
              {navItems.map((item) => (
                <li key={item.id}>
                  <Link
                    href={item.href}
                    onClick={handleClick}
                    className={` block p-1.5 hover:text-amber-600 focus:text-amber-600 transition-colors ${pathName === item.href ? "text-amber-600" : "text-black"}`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <button className="btn-primary w-full" onClick={handleClick}>
              Log In
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
