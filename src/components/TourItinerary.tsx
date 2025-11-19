import React from "react";
import { MapPin } from "lucide-react";

const itinerarySteps = [
  {
    title: "Starting Point with time",
    description:
      "This is a short description of the starting point, and since we want wrapping, we'll make this text long enough to certainly exceed one line on a smaller screen inside the grid.",
  },
  {
    title:
      "Destination 1: A Very Long Name That Will Force a Line Break in a Narrow Column",
    description:
      "Here is the descriptive text for the first major destination. Again, this content must wrap to ensure no information is hidden.",
  },
  {
    title: "Destination 2",
    description: "More details here.",
  },
  {
    title: "End Point with time",
    description: "Final stop details.",
  },
];

const TourItinerary = () => {
  return (
    <div className="p-6 ml-10">
      <div className="relative">
        {itinerarySteps.map((step, index) => (
          <div key={index} className="mb-8 last:mb-0 flex">
            <div className="flex flex-col items-center absolute left-0 -ml-10">
              <MapPin
                size={24}
                className="text-white  rounded-full p-0.5 z-10"
              />
              {index < itinerarySteps.length - 1 && (
                <div
                  className="w-0.5 h-full border-l border-dotted border-white absolute top-6"
                  style={{ height: "calc(100% + 2rem)" }}
                ></div>
              )}
            </div>
            <div className="ml-10 w-full ">
              <h3 className="text-lg font-semibold text-white mb-1">
                {step.title}
              </h3>
              <p className="text-sm text-white">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TourItinerary;
