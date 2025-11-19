"use client";
import React, { useState } from "react";
import Image from "next/image";
import HighlightsItemCard from "./HighlightsItemCard";
import PackageItemCard from "./PackageItemCard";
import StickyBookingSidebar from "./StickyBookingSidebar";
import TourItinerary from "./TourItinerary";
import { ChevronDown, ChevronUp } from "lucide-react";

import { cn } from "@/lib/utils";
import TourMap from "./TourMap";
import WhatsIncludedSection from "./WhatsIncludedSecton";
import MeetingPickupSection from "./MeetingPickupSection";
import TravelerReviewsSection from "./TravelReviewSection";
import FAQ from "./FAQ";
import TourItemCard from "./TourItemCard";

const tours = [
  {
    id: 1,
    imageUrl: "/file.svg",
    tourName: "Ancient City Exploration",
    description:
      "Discover the hidden gems and rich history of the ancient city with our expert guides.",
    duration: "Full Day",
    rating: 4.8,
    reviewsCount: 250,
    price: 85.0,
    hasFreeCancellation: true,
    link: "/tours/ancient-city-exploration",
  },

  {
    id: 1,
    imageUrl: "/file.svg",
    tourName: "Ancient City Exploration",
    description:
      "Discover the hidden gems and rich history of the ancient city with our expert guides.",
    duration: "Full Day",
    rating: 4.8,
    reviewsCount: 250,
    price: 85.0,
    hasFreeCancellation: true,
    link: "/tours/ancient-city-exploration",
  },

  {
    id: 1,
    imageUrl: "/file.svg",
    tourName: "Ancient City Exploration",
    description:
      "Discover the hidden gems and rich history of the ancient city with our expert guides.",
    duration: "Full Day",
    rating: 4.8,
    reviewsCount: 250,
    price: 85.0,
    hasFreeCancellation: true,
    link: "/tours/ancient-city-exploration",
  },
];

const TourMainContent = () => {
  const [isItineraryOpen, setIsItineraryOpen] = useState(true);
  const [isTourMapOpen, setIsTourMapOpen] = useState(false);
  const [isFAQOpen, setIsFAQOpen] = useState(false);

  return (
    <div
      className={cn("grid grid-cols-3 max-w-7xl mx-auto px-4 lg:px-12 py-8")}
    >
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

        <section id="itinerary" className="mb-10">
          <div
            className={cn(
              "flex justify-between items-center cursor-pointer mb-6"
            )}
            onClick={() => setIsItineraryOpen(!isItineraryOpen)}
          >
            <h2 className="text-2xl font-bold">Itinerary</h2>
            {isItineraryOpen ? (
              <ChevronUp
                size={28}
                className="text-white transition-transform duration-300"
              />
            ) : (
              <ChevronDown
                size={28}
                className="text-white transition-transform duration-300"
              />
            )}
          </div>
          <div
            className={cn(
              "transition-all duration-500 ease-out overflow-hidden",
              isItineraryOpen
                ? "max-h-[2000px] opacity-100 translate-y-0"
                : "max-h-0 opacity-0 -translate-y-4"
            )}
          >
            <TourItinerary />
          </div>
        </section>
        <section id="tourmap" className="mb-10">
          <div
            className={cn(
              "flex justify-between items-center cursor-pointer mb-6"
            )}
            onClick={() => setIsTourMapOpen(!isTourMapOpen)}
          >
            <h2 className="text-2xl font-bold">Tour Map</h2>
            {isTourMapOpen ? (
              <ChevronUp
                size={28}
                className="text-white transition-transform duration-300"
              />
            ) : (
              <ChevronDown
                size={28}
                className="text-white transition-transform duration-300"
              />
            )}
          </div>
          <div
            className={cn(
              "transition-all duration-500 ease-out overflow-hidden",
              isTourMapOpen
                ? "max-h-[2000px] opacity-100 translate-y-0"
                : "max-h-0 opacity-0 -translate-y-4"
            )}
          >
            <TourMap />
          </div>
        </section>

        <section id="whats-included" className="mb-10">
          <h2 className="text-2xl font-bold mb-6">What&apos;s Included</h2>
          <WhatsIncludedSection />
        </section>
        <section id="meeting-pickup" className="mb-10">
          <h2 className="text-2xl font-bold mb-6">Meeting and Pickup</h2>
          <MeetingPickupSection />
        </section>
        <section id="travellers-reviews" className="mb-10">
          <h2 className="text-2xl font-bold mb-6">Travellers Reviews</h2>
          <TravelerReviewsSection />
        </section>

        <section id="FAQ" className="mb-10">
          <div
            className={cn(
              "flex justify-between items-center cursor-pointer mb-6"
            )}
            onClick={() => setIsFAQOpen(!isFAQOpen)}
          >
            <h2 className="text-2xl font-bold">FAQ</h2>
            {isFAQOpen ? (
              <ChevronUp
                size={28}
                className="text-white transition-transform duration-300"
              />
            ) : (
              <ChevronDown
                size={28}
                className="text-white transition-transform duration-300"
              />
            )}
          </div>
          <div
            className={cn(
              "transition-all duration-500 ease-out overflow-hidden",
              isFAQOpen
                ? "max-h-[2000px] opacity-100 translate-y-0"
                : "max-h-0 opacity-0 -translate-y-4"
            )}
          >
            <FAQ />
          </div>
        </section>

        <section id="travellers-reviews" className="mb-10">
          <h2 className="text-2xl font-bold mb-6">You might also like..</h2>
          <div className="flex justify-between">
            {tours.map((tour) => (
              <TourItemCard
                key={tour.id}
                imageUrl={tour.imageUrl}
                tourName={tour.tourName}
                description={tour.description}
                duration={tour.duration}
                rating={tour.rating}
                reviewsCount={tour.reviewsCount}
                price={tour.price}
                hasFreeCancellation={tour.hasFreeCancellation}
                link={tour.link}
              />
            ))}
          </div>
        </section>
      </div>

      <div className={cn("col-span-1 justify-self-end")}>
        <StickyBookingSidebar />
      </div>
    </div>
  );
};

export default TourMainContent;
