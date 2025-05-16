"use client";
import { cn } from "@/lib/utils";
import React, { PropsWithChildren, useEffect, useState } from "react";

type Props = PropsWithChildren;

const DesktopNavbar = (props: Props) => {
  const [scrollPosition, setScrollPosition] = useState<number>(0);

  const handleScroll = (): void => {
    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isScrollDown: boolean = scrollPosition > 10;
  return (
    <nav
      className={cn(
        "hidden fixed transition w-full z-50 text-white top-0 md:block",
        {
          "bg-white text-gray-700 shadow:md": isScrollDown,
        }
      )}
    >
      <div className="flex items-center px-4 py-4">
        {/*access the children which is comes from navbar component and render inside div tag here*/}
        {props.children}
      </div>
      <hr className="border-b border-gray-100 opacity-25" />
    </nav>
  );
};

export default DesktopNavbar;
