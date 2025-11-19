import React from "react";
import { Check } from "lucide-react";
import AvailabilitySelector from "./AvailabilitySelector";
import PackageSummary from "./PackageSummary";
import TrustBadges from "./TrustBadges";

const StickyBookingSidebar = () => {
  return (
    <div className="p-5 border border-gray-300 rounded-lg shadow-md bg-white w-sm max-w-xs">
      <div className="pb-4 border-b border-gray-200 mb-4">
        <h3 className="text-sm font-medium text-gray-500 mb-2">From</h3>
        <div className="flex items-baseline mb-2">
          <span className="text-3xl font-bold text-gray-900 mr-2">
            USD 45.20
          </span>
          <span className="text-sm text-gray-600">Per Person</span>
        </div>
        <p className="text-xs text-gray-500 mb-4">
          (Base Package Option Details)
        </p>
        <AvailabilitySelector />
        <PackageSummary />
        <button className="w-full py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-colors">
          Check Availability
        </button>
      </div>
      <TrustBadges />
    </div>
  );
};

export default StickyBookingSidebar;
