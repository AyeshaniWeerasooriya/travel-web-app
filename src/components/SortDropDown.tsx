import React from "react";
import { ChevronDown, ArrowUpDown } from "lucide-react";

const SortDropDown = ({ currentSort = "Most Recent" }) => {
  return (
    <button className="flex items-center justify-between px-3 py-2 border border-gray-400 rounded-md bg-white text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 transition-colors">
      <ArrowUpDown size={16} className="mr-2 text-gray-500" />
      <span className="text-sm mr-2">Sort By :</span>
      <span className="font-semibold">{currentSort}</span>
      <ChevronDown size={16} className="ml-2 text-gray-500" />
    </button>
  );
};

export default SortDropDown;
