"use client";

import { cn } from "@/lib/utils";
import React, { PropsWithChildren, ReactNode, useRef, useState } from "react";
import { useOnClickOutside } from "usehooks-ts";

type Props = PropsWithChildren<{
  triggerIcon: ReactNode;
  triggerClassName?: string;
}>;

const SideBar = (props: Props) => {
  const [show, setShow] = useState<boolean>(false);
  const ref = useRef(null!);

  useOnClickOutside(ref, () => setShow(false));
  return (
    <>
      <button
        className={props.triggerClassName}
        onClick={() => setShow((prev: boolean) => !prev)}
      >
        {props.triggerIcon}
      </button>
      <div
        ref={ref}
        className={cn(
          "w-60 absolute top-0 z-10 transition-all duration-300 bg-white rounded-r-md min-h-screen",
          { "-left-full": !show, "left-0": show }
        )}
      >
        {props.children}
      </div>
    </>
  );
};

export default SideBar;
