/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { cn } from "@/utils/cn";
import { BackgroundGradient } from "../ui/background-gradient";
import { Logo } from "./logo";
import { Post } from "@/shared/types/post";

export default function PostContainer({
  className,
  data,
}: {
  className: React.ReactNode;
  data: Post;
}) {
  console.log(data.imageUrl);
  return (
    <div>
      <BackgroundGradient
        className={cn(
          className,
          "max-w-screen w-[20rem] lg:w-[30rem]  rounded-[22px]  p-4 sm:p-10 bg-white dark:bg-zinc-900"
        )}
      >
        <img
          src={data?.imageUrl || Logo}
          alt={data?.name}
          className="object-contain"
        />
        <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
          Air Jordan 4 Retro Reimagined
        </p>

        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          The Air Jordan 4 Retro Reimagined Bred will release on Saturday,
          February 17, 2024. Your best opportunity to get these right now is by
          entering raffles and waiting for the official releases.
        </p>
      </BackgroundGradient>
    </div>
  );
}
