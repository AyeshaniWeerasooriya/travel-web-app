import Image from "next/image";
import React from "react";
import { cn } from "@/lib/utils";
import clsx from "clsx";

function HighlightsItemCard() {
  return (
    <div className={cn("flex space-x-4 overflow-x-auto pb-2")}>
      {[...Array(5)].map((_, index) => (
        <div
          key={index}
          className={cn(
            "flex-shrink-0 w-32 md:w-40 p-2 text-center rounded-lg transition-shadow",
            "border border-gray-300 hover:shadow-lg"
          )}
        >
          <Image
            className={cn(
              "w-full h-20 rounded-md mb-2",
              "flex items-center justify-center"
            )}
            src=""
            alt="Main Tour Image"
            width={50}
            height={50}
          />

          <p className={cn("text-sm font-medium text-white")}>
            Name of the place
          </p>
        </div>
      ))}
    </div>
  );
}

export default HighlightsItemCard;
