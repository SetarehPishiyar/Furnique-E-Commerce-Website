import { footerList } from "@/data/data";
import {
  RiFacebookFill,
  RiInstagramLine,
  RiTwitterLine,
} from "@remixicon/react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-primary text-white pt-10 pb-6">
      <div className="container space-y-6 divide-y divide-background/30">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 pb-11 sm:pb-16">
          <div>
            <span className="text-2xl font-bold font-cunia inline-flex">
              Furnique
            </span>
            <p className="text-gray-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus sapiente porro eligendi doloremque pariatur, odit culpa
              eum quo, labore similique id a.
            </p>
          </div>

          {footerList.map((item) => (
            <div key={item.id}>
              <p className="text-xl font-cunia">{item.title}</p>
              <ul className="space-y-2 mt-4">
                {item.links.map((link) => (
                  <li key={link}>
                    <Link href={""} className="text-gray-300 hover:underline">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <p className="text-xl font-cunia mb-3">Get in touch</p>
            <p>
              Email:{" "}
              <a href="" className="text-gray-300 hover:underline">
                support@furnique.com
              </a>
            </p>
            <p>
              Phone: <a href="">+1 234 567 890</a>
            </p>

            <div className="flex items-center gap-2 mt-7">
              {[RiFacebookFill, RiInstagramLine, RiTwitterLine].map(
                (Icon, index) => (
                  <a
                    key={index}
                    href=""
                    className="text-gray-300 hover:underline hover:text-secondary/70 focus:text-background transition-colors"
                  >
                    <Icon size={24} />
                  </a>
                ),
              )}
            </div>
          </div>
        </div>
        <p className="text-center text-background/30 font-light text-sm">
          &copy; Furnique. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
