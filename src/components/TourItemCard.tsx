"use client";

import React from "react";
import { Star, Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

const TourItemCard = ({
  imageUrl = "https://via.placeholder.com/300x200?text=Tour+Image",
  tourName = "Tour Name",
  description = "Small Description about package",
  duration = "3 Days / 2 Nights",
  rating = 5.5,
  reviewsCount = 100,
  price = 73.2,
  currency = "USD",
  hasFreeCancellation = true,
  link = "#",
}) => {
  return (
    <div
      className={cn(
        "max-w-[250px] bg-white rounded-lg shadow-md overflow-hidden border border-gray-200",
        "hover:shadow-lg transition-shadow duration-300"
      )}
    >
      <Link href={link}>
        <div className="relative h-40 bg-gray-200 flex items-center justify-center">
          <Image
            src={imageUrl}
            alt={tourName}
            width={100}
            height={100}
            className="w-full h-full object-cover"
          />

          <button
            className={cn(
              "absolute top-3 right-3 bg-white p-2 rounded-full shadow-md text-black",
              "transition-colors z-10 hover:cursor-pointer"
            )}
            onClick={(e) => {
              e.preventDefault();
              console.log("Add to wishlist");
            }}
            aria-label="Add to wishlist"
          >
            <Heart
              size={18}
              className={cn("hover:fill-red-500 hover:text-red-500")}
            />
          </button>

          <div
            className={cn(
              "absolute bottom-3 left-3 bg-black bg-opacity-60 text-white text-xs",
              "px-2 py-1 rounded-full flex items-center"
            )}
          >
            <Star
              size={12}
              className="text-yellow-400 mr-1"
              fill="currentColor"
            />
            <span>
              {rating} ({reviewsCount})
            </span>
          </div>
        </div>

        <div className="p-4">
          <h3 className="text-md font-bold text-gray-900 mb-1 leading-tight">
            {tourName}
          </h3>

          <p className="text-xs text-gray-600 mb-2 line-clamp-2">
            {description}
          </p>

          <p className="text-xs text-gray-500 mb-4">Duration: {duration}</p>

          <div className="flex justify-between items-end mb-4">
            <div>
              <span className="text-xs text-gray-500 block">From</span>
              <span className="text-md font-bold text-gray-900">
                {currency} {price.toFixed(2)}
              </span>
            </div>

            {hasFreeCancellation && (
              <span className="text-xs text-green-500 font-medium">
                Free Cancellation
              </span>
            )}
          </div>
        </div>

        <div className="p-4 pt-0">
          <button
            className={cn(
              "w-full cursor-pointer py-2 bg-blue-600 text-white font-semibold text-sm rounded-md",
              "hover:bg-blue-700 transition-colors"
            )}
          >
            View More
          </button>
        </div>
      </Link>
    </div>
  );
};

export default TourItemCard;
