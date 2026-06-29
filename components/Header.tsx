"use client";
import { navItems } from "@/data/data";
import useCartStore from "@/store/cartStore";
import { RiCloseLine, RiMenuLine, RiShoppingCart2Line } from "@remixicon/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import useHydrated from "@/hooks/useHydrated";
import { useState } from "react";
import { useSession, signOut, signIn } from "next-auth/react";

const Header = () => {
  const { data: session, status } = useSession();
  const userId = session?.user?.email;
  const isLoading = status === "loading";
  const isLoggedIn = status === "authenticated";
  const [openMenu, setOpenMenu] = useState(false);
  const pathName = usePathname();
  const hydrated = useHydrated();
  const totalItems = useCartStore((state) => {
    if (!userId) return 0;

    return (
      state.carts[userId]?.reduce((total, item) => total + item.quantity, 0) ||
      0
    );
  });

  const handleClick = () => {
    setOpenMenu((prev) => !prev);
  };
  return (
    <header className="sticky top-0 border-b border-gray-200 w-full py-3 bg-white z-50 font-cunia">
      <div className="container flex items-center justify-between">
        <Link
          href="/"
          className="text-3xl font-bold bg-gradient-to-r from-primary via-secondary to-secondary/80 bg-clip-text text-transparent"
        >
          Furnique
        </Link>

        {/* Desktop menu */}
        <nav className="hidden lg:flex items-center justify-between w-full">
          <ul className="mx-auto flex items-center gap-9 justify-center">
            {navItems.map((item) => (
              <li
                key={item.id}
                className={`hover:text-secondary focus:text-secondary transition-colors ${pathName === item.href ? "text-secondary" : "text-primary"}`}
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
                className="text-primary hover:text-secondary focus:text-secondary transition-all"
              />
              <span className="absolute top-0 right-0 bg-secondary flex items-center size-5 rounded-full text-white justify-center text-xs">
                {hydrated ? totalItems : 0}
              </span>
            </Link>
            {isLoading ? null : isLoggedIn ? (
              <div className="flex items-center gap-3">
                <span className="text-sm text-primary">
                  {session?.user?.name ?? "User"}
                </span>

                <button onClick={() => signOut()} className="btn-primary">
                  Logout
                </button>
              </div>
            ) : (
              <Link href="/login" className="btn-primary">
                Log In
              </Link>
            )}
          </div>
        </nav>

        {/* Mobile menu */}
        <nav className="relative lg:hidden">
          <div className="flex items-center gap-2">
            <Link
              href={"/shopping-cart"}
              className="size-10 inline-flex items-center justify-center rounded-sm relative"
            >
              <RiShoppingCart2Line className="hover:text-secondary focus:text-secondary transition-colors text-primary" />
              <span className="size-5 bg-secondary text-white flex items-center justify-center rounded-full text-sm absolute top-0 right-0">
                {hydrated ? totalItems : 0}
              </span>
            </Link>
            <button onClick={handleClick} className="text-primary">
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
                    className={` block p-1.5 hover:text-secondary focus:text-secondary transition-colors ${pathName === item.href ? "text-secondary" : "text-primary"}`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            {isLoading ? null : isLoggedIn ? (
              <button
                onClick={() => {
                  signOut();
                  handleClick();
                }}
                className="btn-primary w-full"
              >
                Logout
              </button>
            ) : (
              <Link
                href="/login"
                className="btn-primary w-full"
                onClick={handleClick}
              >
                Log In
              </Link>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
