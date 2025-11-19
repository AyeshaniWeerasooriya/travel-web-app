/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React from "react";
import { Star, Flag, ThumbsUp } from "lucide-react";
import SortDropdown from "./SortDropDown";
import { cn } from "@/lib/utils";

const reviewDistribution = [
  { stars: 5, count: 40 },
  { stars: 4, count: 40 },
  { stars: 3, count: 15 },
  { stars: 2, count: 5 },
  { stars: 1, count: 0 },
];

const sampleReviews = [
  {
    heading: "Excellent Experience!",
    travelerName: "John Doe",
    content:
      "The tour guides were knowledgeable, and the itinerary was perfect. Highly recommended!",
    rating: 5,
    helpful: 12,
  },
  {
    heading: "Worth the Price",
    travelerName: "Jane Smith",
    content:
      "A few minor hiccups with the pickup, but overall a memorable experience.",
    rating: 4,
    helpful: 5,
  },
];

const calculateBarWidth = (count: number) => `${(count / 100) * 100}%`;

const TravelerReviewsSection = () => {
  const ReviewCard = ({ review }: any) => (
    <div className={cn("border-b border-gray-200 pb-6 mb-6")}>
      <div className="flex justify-between items-start">
        <div>
          <div className="flex mb-2">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={20}
                className={cn(
                  i < review.rating
                    ? "text-yellow-500 fill-current"
                    : "text-gray-300"
                )}
              />
            ))}
          </div>

          <h4 className="text-xl font-semibold mb-1">{review.heading}</h4>

          <p className="text-sm italic text-gray-500 mb-2">
            {review.travelerName}
          </p>
        </div>

        <div className="flex space-x-3 text-gray-400">
          <button className="hover:text-gray-700 transition-colors">
            <Flag size={20} />
          </button>

          <button className="hover:text-gray-700 transition-colors flex items-center">
            <ThumbsUp size={20} />
          </button>
        </div>
      </div>

      <p className="text-gray-700">{review.content}</p>
    </div>
  );

  return (
    <section id="traveler-reviews" className={cn("mb-10 p-6")}>
      <div
        className={cn(
          "flex flex-col md:flex-row md:space-x-10 mb-8 pb-8 border-b border-gray-200 justify-end"
        )}
      >
        <div className="flex items-baseline mb-4 md:mb-0">
          <span className="text-4xl font-bold mr-2">4.6</span>
          <span className="text-lg text-gray-600">100 Verified Reviews</span>
        </div>

        <div className="flex-1 space-y-2 max-w-sm">
          {reviewDistribution.map((item) => (
            <div key={item.stars} className="flex items-center text-sm">
              <span className="w-4 text-gray-600">{item.stars}</span>

              <div className="flex-1 h-2 bg-white/10 rounded-full mx-2">
                <div
                  className="h-full bg-white"
                  style={{ width: calculateBarWidth(item.count) }}
                ></div>
              </div>

              <span className="w-6 text-right text-white">{item.count}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-end mb-8">
        <SortDropdown />
      </div>

      <div className="space-y-6">
        {sampleReviews.map((review, index) => (
          <ReviewCard key={index} review={review} />
        ))}
      </div>

      <div className="flex justify-center mt-8">
        <button
          className={cn(
            "px-6 py-2 border border-white text-white font-medium rounded-lg",
            "hover:bg-gray-100 hover:text-black transition-colors shadow-sm"
          )}
        >
          Show more reviews
        </button>
      </div>
    </section>
  );
};

export default TravelerReviewsSection;
