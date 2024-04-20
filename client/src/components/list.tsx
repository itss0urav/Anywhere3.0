/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { BackgroundGradient } from "./ui/background-gradient";
import { cn } from "@/utils/cn";
// import { Post } from "@/shared/types/post";
import { IoMdArrowRoundForward } from "react-icons/io";
import { Link } from "react-router-dom";
export default function List({
  className,
  data,
  title,
}: {
  className?: React.ReactNode;
  data: any;
  title: string;
}) {
  return (
    <BackgroundGradient
      className={cn(
        className,
        "max-w-64 w-[30rem] rounded-[22px]  bg-white dark:bg-zinc-900 "
      )}
    >
      <Link className="flex justify-end py-2" to="/communities">
        <span className=" flex items-center mx-3 px-2 py-1 text-sm text-cyan-400 animate-pulse cursor-pointer transition-all hover:bg-neutral-800  rounded-lg">
          View More <IoMdArrowRoundForward />
        </span>
      </Link>
      <div className="px-4  text-center flex flex-col justify-center items-center">
        <span className="text-fuchsia-300 ">{title}</span>
        <ul className="text-center w-fit my-4">
          {data.map((data: any) => (
            <li
              className="text-white hover:text-cyan-400 transition-all cursor-pointer my-2 hover:bg-neutral-800 px-2 py-0.5 rounded-lg"
              key={data.title}
            >
              <a href={data.href}>{data.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </BackgroundGradient>
  );
}
