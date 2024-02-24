"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";

const MenuItems = [
  { id: 1, link: "/About", name: "About" },
  { id: 2, link: "/Services", name: "Services" },
  { id: 3, link: "/CaseStudy", name: "Case Study" },
  { id: 4, link: "/Pricing", name: "Pricing" },
];

const Navbar = () => {
  const pathname = usePathname();
  return (
    <div className="bg-slate-950 h-16 flex items-center sticky top-0 shadow-md z-10">
      <div className="flex justify-between items-stretch container">
        <div className="text-3xl text-white font-extrabold w-[250px]">
          <Link href="/">Logo</Link>
        </div>
        <div className="flex gap-3 pt-2 font-mono text-lg text-white w-full">
          {MenuItems.map((item) => {
            return (
              <Link href={item.link} key={item.id}>
                <div
                  className={`hover:cursor-pointer hover:underline transition ${
                    pathname == item.link ? "font-bold " : ""
                  }`}
                >
                  {item.name}
                </div>
              </Link>
            );
          })}
        </div>
        <div className="flex items-stretch gap-3">
          <Button
            className="px-7 text-lg font-mono text-white hover:underline"
            variant="ghost"
          >
            Toggle night
          </Button>
          <Button className="px-10 text-lg font-mono" variant="secondary">
            Contact
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
