import ProductCard from "@/components/ProductCard";
import { allProducts, categoryItems, testimonials } from "@/data/data";
import { RiDoubleQuotesL } from "@remixicon/react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="lg:mt-4 lg:px-4 w-full">
        <div
          className="container bg-center bg-cover bg-no-repeat min-h-[75svh] flex items-center justify-center flex-col w-full lg:rounded-2xl"
          style={{
            backgroundImage: "url('/images/hero-img.png')",
          }}
        >
          <p className="text-[#ebe3d8] font-light tracking-wide uppercase">
            Minimal Interior Design
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-white text-center">
            We minimize your waste <br />
            in every step of the process.
          </h1>
        </div>
      </section>

      {/* Category Section */}
      <section className="relative mt-16 z-10 lg:-mt-30 w-[90%]">
        <div className="container grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {categoryItems.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-primary/30 block hover:bg-[#ebe3d8] rounded-xl px-10 py-8 transition cursor-pointer"
            >
              <div>
                <h2 className="text-2xl">{item.title}</h2>
                <p className="text-gray-500">{item.quantity}</p>
              </div>

              <div className="max-w-max mx-auto mt-12">
                <Image
                  src={item.img}
                  alt={item.title}
                  width={item.width}
                  height={item.height}
                ></Image>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Products Section */}
      <section className="pt-28">
        <div className="container  flex flex-col justify-center items-center">
          <h2 className="section-title text-center">Explore All products</h2>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {allProducts.slice(0, 9).map((item) => (
              <ProductCard key={item.id} product={item} />
            ))}
          </div>

          <Link href={"/shop"} className="btn-primary block mt-14 max-w-max">
            View all products
          </Link>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-28">
        <div className="container">
          <h2 className="section-title text-center">What our Clients say</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mt-11 lg:mt-14">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white rounded-xl p-8 flex flex-col"
              >
                <span className="text-secondary mb-3">
                  <RiDoubleQuotesL />
                </span>
                <p className="text-gray-600 mb-6 italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div className="flex flex-col items-center mt-auto">
                  <div className="size-16">
                    <Image
                      src={testimonial.img}
                      alt={testimonial.name}
                      width={150}
                      height={150}
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>

                  <div className="mt-3 text-center">
                    <h3>{testimonial.name}</h3>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
