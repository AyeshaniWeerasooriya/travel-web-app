import React from "react";
import { Check } from "lucide-react";

const trustPoints = [
  "Trusted by millions of travellers",
  "Best price guarantee promise",
  "Choose from 200,000+ activities",
];

const TrustBadges = ({ websiteName = "our website name" }) => {
  return (
    <div className="px-6 pb-6 bg-white">
      <h3 className="text-base font-semibold text-gray-900 mb-3">
        Why {websiteName}?
      </h3>
      <ul className="space-y-2">
        {trustPoints.map((point, index) => (
          <li key={index} className="flex items-start">
            <Check
              size={18}
              className="text-green-500 mr-2 mt-0.5 flex-shrink-0"
            />
            <span className="text-sm text-gray-700">{point}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TrustBadges;
