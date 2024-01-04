import Link from "next/link";
import React from "react";
//  hasBorderBottom ? "border-b text-black" : "text-white"
export const Navbar = ({ hasBorderBottom }: { hasBorderBottom?: boolean }) => {
  // TODO: Add a border bottom to the navbar if hasBorderBottom is true
  return (
    <nav
      className={`z-20 absolute top-0 left-0 w-full flex items-center justify-between py-6 px-8 text-md font-bold ${
        hasBorderBottom ? "border-b border-b-black text-black" : "text-white"
      }`}
    >
      <div className="left space-x-12">
        <Link href="#">Albums</Link>
        <Link href="#">Projects</Link>
        <Link href="#">Tour</Link>
        <Link href="/products">Shop All</Link>
      </div>
      <Link href="/" className="center -ml-72">
        Drake Unrelated
      </Link>
      <div className="right">Cart ( 0 ) </div>
    </nav>
  );
};
