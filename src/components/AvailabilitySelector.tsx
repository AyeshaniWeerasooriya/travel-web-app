"use client";
import React from "react";
import { ChevronDown, User } from "lucide-react";
import { cn } from "@/lib/utils";
import clsx from "clsx";

const AvailabilitySelector = () => {
  return (
    <div
      className={cn(
        "flex w-full max-w-sm rounded-lg overflow-hidden shadow-sm mb-3",
        "border border-gray-400"
      )}
    >
      <div
        className={cn(
          "flex-1 p-3 cursor-pointer transition-colors",
          "hover:bg-gray-50"
        )}
        onClick={() => console.log("Open Date Picker")}
      >
        <div className="flex justify-between items-center">
          <div>
            <span className={cn("text-xs font-medium text-gray-500 block")}>
              Date
            </span>
            <span className={cn("text-lg font-semibold text-gray-900")}>
              Fri, Nov 7
            </span>
          </div>
          <ChevronDown size={20} className={cn("text-gray-600 ml-2")} />
        </div>
      </div>

      <div className={clsx("w-[1px] bg-gray-300")} />

      <div
        className={cn(
          "flex-1 p-3 cursor-pointer transition-colors",
          "hover:bg-gray-50"
        )}
        onClick={() => console.log("Open Travelers Selector")}
      >
        <div className="flex justify-between items-center">
          <div>
            <span className={cn("text-xs font-medium text-gray-500 block")}>
              Travelers
            </span>

            <div
              className={cn(
                "flex items-center justify-center text-lg font-semibold text-gray-900"
              )}
            >
              <User size={20} className={cn("mr-3 text-gray-600")} />
              <span>1</span>
            </div>
          </div>

          <ChevronDown size={20} className={cn("text-gray-600 ml-2")} />
        </div>
      </div>
    </div>
  );
};

export default AvailabilitySelector;
