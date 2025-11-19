/* eslint-disable prefer-const */
"use client";
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";

const subMenuItems = [
  { name: "Overview", href: "#overview" },
  { name: "Highlights", href: "#highlights" },
  { name: "Package Options", href: "#package-options" },
  { name: "Itinerary", href: "#itinerary" },
  { name: "Tour Places", href: "#tour-places" },
  { name: "What's Included", href: "#whats-included" },
  { name: "Meeting & Pickup", href: "#meeting-pickup" },
  { name: "Additional Information", href: "#additional-information" },
  { name: "Traveler's Reviews", href: "#traveler-reviews" },
  { name: "FAQ", href: "#faq-section" },
];

const SubNavBar = () => {
  const [activeSection, setActiveSection] = useState("#overview");
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 180;
      let currentActive = "";
      for (let item of subMenuItems) {
        const section = document.querySelector(item.href);
        if (section) {
          const offsetTop = (section as HTMLElement).offsetTop;
          const offsetHeight = (section as HTMLElement).offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            currentActive = item.href;
          }
        }
      }
      if (currentActive) {
        setActiveSection(currentActive);
      }

      const componentElement = document.getElementById("sub-nav-anchor");
      if (componentElement) {
        const componentTop =
          componentElement.getBoundingClientRect().top + window.scrollY;
        setIsSticky(window.scrollY > componentTop - 130);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const renderSubMenuItems = () =>
    subMenuItems.map((item) => {
      const isActive = activeSection === item.href;
      return (
        <Link
          key={item.name}
          href={item.href}
          className={cn(
            "relative px-4 py-2 whitespace-nowrap text-sm font-normal text-gray-700 transition-colors",
            "hover:text-black",
            isActive && "font-semibold text-black"
          )}
        >
          {item.name}
          <span
            className={cn(
              "absolute bottom-0 left-0 h-[3px] bg-black transition-all duration-300",
              isActive ? "w-full" : "w-0"
            )}
          />
        </Link>
      );
    });

  return (
    <>
      <div id="sub-nav-anchor" className="h-0 w-full" />
      <div
        className={cn(
          "w-full bg-white border-b border-gray-300 transition-all duration-300",
          isSticky
            ? "fixed top-[128px] md:top-[128px] shadow-lg z-40"
            : "relative z-30"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 lg:px-12 py-3 overflow-x-auto">
          <div className="flex space-x-4">{renderSubMenuItems()}</div>
        </div>
      </div>
      {isSticky && <div className="h-[50px] w-full" />}
    </>
  );
};

export default SubNavBar;
