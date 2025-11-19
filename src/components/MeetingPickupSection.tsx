import React from "react";
import { MapPin, Flag, ChevronRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const MeetingPickupSection = () => {
  return (
    <section id="meeting-pickup" className="mb-10">
      <div className="flex flex-col md:flex-row overflow-hidden">
        <div
          className={cn(
            "flex-1 p-6 border-b md:border-b-0 md:border-r border-gray-300"
          )}
        >
          <div className="flex flex-col justify-between h-full">
            <div>
              <div className="flex items-center mb-4">
                <MapPin size={24} className="text-white mr-3" />
                <h3 className="text-xl font-semibold text-white">
                  Meeting Points
                </h3>
              </div>

              <div className="mb-4">
                <button
                  className={cn(
                    "w-full py-3 px-4 border border-gray-400 text-white rounded-md text-left",
                    "hover:border-blue-500 transition-colors"
                  )}
                >
                  Select a meeting point
                </button>
              </div>
            </div>

            <Link
              href="#"
              className={cn(
                "flex items-center text-sm text-blue-600 hover:text-blue-700 font-medium mt-4"
              )}
              onClick={(e) => {
                e.preventDefault();
                console.log("Open Meeting Points in Maps");
              }}
            >
              Open in Google Maps
              <ChevronRight size={16} className="ml-1" />
            </Link>
          </div>
        </div>

        <div className={cn("flex-1 p-6")}>
          <div className="flex flex-col justify-between h-full">
            <div>
              <div className="flex items-center mb-4">
                <Flag size={24} className="text-white mr-3" />
                <h3 className="text-xl font-semibold text-white">End Point</h3>
              </div>

              <p className="text-sm text-white mb-4 pt-4">
                End location with relevant information
              </p>
            </div>

            <Link
              href="#"
              className={cn(
                "flex items-center text-sm text-blue-600 hover:text-blue-700 font-medium mt-4"
              )}
              onClick={(e) => {
                e.preventDefault();
                console.log("Open End Point in Maps");
              }}
            >
              Open in Google Maps
              <ChevronRight size={16} className="ml-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetingPickupSection;
