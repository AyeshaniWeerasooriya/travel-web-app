"use client";

import React from "react";
import { Check, X } from "lucide-react";
import { cn } from "@/lib/utils";

const includedItems: string[] = [
  "Round-trip transportation",
  "English & Chinese speaking staff",
  "Bottled water (optional example)",
];

const excludedItems: string[] = [
  "Meals",
  "Traveler's insurance",
  "Personal expenses (optional example)",
];

const WhatsIncludedSection = () => {
  return (
    <section id="whats-included" className={cn("mb-10 p-6")}>
      <div className={cn("flex flex-col md:flex-row md:space-x-12")}>
        <div className="flex-1 mb-6 md:mb-0">
          <h3 className="text-lg font-semibold text-white mb-3">Included</h3>
          <ul className="space-y-3">
            {includedItems.map((item, index) => (
              <li key={`included-${index}`} className={cn("flex items-start")}>
                <Check
                  size={18}
                  className={cn("text-green-600 mr-3 mt-1 flex-shrink-0")}
                />
                <span className="text-base text-white">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex-1">
          <h3 className="text-lg font-semibold text-white mb-3">Excluded</h3>
          <ul className="space-y-3">
            {excludedItems.map((item, index) => (
              <li key={`excluded-${index}`} className={cn("flex items-start")}>
                <X
                  size={18}
                  className={cn("text-red-500 mr-3 mt-1 flex-shrink-0")}
                />
                <span className="text-base text-white">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default WhatsIncludedSection;
