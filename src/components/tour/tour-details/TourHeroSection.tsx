"use client";
import React from "react";
import { Star, Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import clsx from "clsx";

const TourHeroSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 lg:px-12 py-8" id="overview">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-3xl md:text-4xl font-bold text-white">Tour Name</h1>
        <button
          className={cn(
            "flex items-center transition-colors",
            "text-gray-600 hover:text-red-500"
          )}
        >
          <Heart size={20} className={cn("mr-1 text-white")} />
          <span className="text-sm text-white">Add to wishlist</span>
        </button>
      </div>

      <div className="flex items-center text-gray-600 mb-6">
        <Star size={16} className="text-yellow-500 mr-1" fill="currentColor" />
        <span className="text-sm font-semibold mr-1 text-white">4.6</span>
        <Link
          href="#traveler-reviews"
          className={cn("text-sm underline mr-3 text-white")}
        >
          100 Reviews
        </Link>
        <span className="text-sm text-white">100+ booked</span>
      </div>

      <div
        className={cn(
          "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 relative",
          "h-[400px] md:h-[500px]"
        )}
      >
        <div
          className={cn(
            "relative col-span-1 md:col-span-2 row-span-2 bg-gray-200 rounded-lg overflow-hidden",
            "flex items-center justify-center text-gray-500"
          )}
        >
          {/* <span className="text-xl">Main Tour Image</span> */}
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent" />
          <Image
            src=""
            alt="Main Tour Image"
            width={100}
            height={100}
            className="object-cover"
          />
        </div>

        {["Image 2", "Image 3", "Image 4", "Image 5"].map((name, idx) => {
          return (
            <div
              key={idx}
              className={clsx(
                "relative col-span-1 bg-gray-200 rounded-lg overflow-hidden",
                "flex items-center justify-center text-gray-500 h-[220px] md:h-auto"
              )}
            >
              {/* <span className="text-xl">{name}</span> */}
              <Image
                src=""
                alt={name}
                width={100}
                height={100}
                className="object-cover"
              />
            </div>
          );
        })}

        <button
          className={cn(
            "font-bold absolute bottom-4 right-4 px-6 py-2 rounded-md shadow-lg text-sm z-10",
            "bg-white border-2 border-gray-400 text-gray-800 hover:bg-gray-100 transition-colors"
          )}
          onClick={() => alert("Open full gallery")}
        >
          Gallery
        </button>
      </div>
    </section>
  );
};

export default TourHeroSection;
