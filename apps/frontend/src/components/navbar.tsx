import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <>
      {/**
       * 1) Why empty fragment or React.Fragment?
       * 2) Reason - to prevent add unneccessary div in DOM which can cause breaking in styling
       * 3) If you want to replace with div also possible but you might have to give the div a classname for that
       * 4) This component already wrapped with nav tag inside DesktopNavbar component
       * 5) [&>a]:class-name --------> means `[&>a]:` is for selector in HTML tag, and `class-name` is for className value
       */}
      <h1 className="text-2xl font-bold p-2">OwlBlog</h1>
      <div className="flex flex-col md:flex-row gap-2 ml-auto [&>a]:py-2 [&>a]:px-4 [&>a]:transition [&>a]:rounded-md [&>a:hover]:text-sky-100 [&>a:hover]:bg-sky-500">
        <Link href="/" className="">
          Blog
        </Link>
        <Link href="/about" className="">
          About
        </Link>
        <Link href="/contact" className="">
          Contact
        </Link>
      </div>
    </>
  );
};

export default Navbar;
