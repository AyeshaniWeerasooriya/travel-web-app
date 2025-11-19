// TourMainContent.jsx
import Image from "next/image";
import React from "react";
import HighlightsItemCard from "./HighlightsItemCard";
import PackageItemCard from "./PackageItemCard";
import StickyBookingSidebar from "./StickyBookingSidebar";

const TourMainContent = () => {
  return (
    <div className="grid grid-cols-3 max-w-7xl mx-auto px-4 lg:px-12 py-8">
      <div className="col-span-2">
        <section id="overview" className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Overview (Description)</h2>
          <p className="text-white">
            This is where the detailed description of the tour goes. It will
            include information about what makes this tour special, the general
            schedule, and any must-know facts for travelers.
          </p>
        </section>

        <section id="highlights" className="mb-10">
          <h2 className="text-2xl font-bold mb-6">Highlights</h2>
          <HighlightsItemCard />
        </section>

        <section id="package-options" className="mb-10">
          <h2 className="text-2xl font-bold mb-6">Package Options</h2>
          <PackageItemCard />
        </section>
      </div>
      <div className="col-span-1 justify-self-end ">
        <StickyBookingSidebar />
      </div>
    </div>
  );
};

export default TourMainContent;
