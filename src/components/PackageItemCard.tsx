import React from "react";
import { cn } from "@/lib/utils";
import clsx from "clsx";

const PackageItemCard = ({
  title = "Base package details",
  details = "Eg: Southern Heritage & Galle Fort Tour",
  additionalFeature = "Eg: a guided bicycle ride along Galle Fort's ramparts",
  price = "55.20",
  isBestSeller = true,
  isSelected = false,
}) => {
  const cardClasses = cn(
    "p-6 rounded-lg relative",
    isSelected
      ? "border-2 border-blue-500 bg-blue-50"
      : "border border-gray-300 bg-white hover:shadow-lg transition-shadow duration-300"
  );

  return (
    <div className={cardClasses}>
      {isBestSeller && (
        <span
          className={cn(
            "absolute top-0 left-0 ml-4 mt-[-15px]",
            "px-3 py-1 text-xs font-semibold text-gray-800",
            "bg-yellow-300 rounded-full shadow-md"
          )}
        >
          Best Seller
        </span>
      )}

      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center">
        <div className="lg:w-3/5 mb-6 lg:mb-0">
          <h3 className={cn("text-xl font-bold text-gray-900 mb-2")}>
            {title}
          </h3>

          <p className={cn("text-sm text-gray-600 mb-4")}>{details}</p>

          <div
            className={cn(
              "flex flex-col items-start space-y-2 mt-4 pt-4",
              "border-t border-gray-200"
            )}
          >
            <span className={cn("text-2xl font-light text-gray-900")}>+</span>

            <p className={cn("text-base font-semibold text-gray-800")}>
              Other additional things
            </p>

            <p className={cn("text-sm italic text-gray-500")}>
              {additionalFeature}
            </p>
          </div>
        </div>
        <div className="lg:w-2/5 flex flex-col items-end space-y-4 w-full">
          <div
            className={cn(
              "p-4 border border-gray-300 rounded-lg w-full max-w-xs bg-white shadow-sm"
            )}
          >
            <span className={cn("text-sm text-gray-600 block mb-1")}>From</span>

            <div className="flex justify-between items-center mb-4">
              <span className={cn("text-2xl font-bold text-gray-900")}>
                USD {price}
              </span>

              <div className="w-1/2">
                <div
                  className={cn(
                    "border border-gray-300 rounded-lg flex text-sm"
                  )}
                >
                  <div
                    className={cn(
                      "p-1 text-center border-r border-gray-300 flex-1"
                    )}
                  >
                    <span className="block text-xs text-gray-500">Date</span>
                    <span className="font-semibold">Nov 7</span>
                  </div>

                  <div className={cn("p-1 text-center flex-1")}>
                    <span className="block text-xs text-gray-500">
                      Travelers
                    </span>
                    <span className="font-semibold">1</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={cn("flex space-x-3 w-full justify-end")}>
            <button
              className={cn(
                "flex-1 max-w-[140px] py-2",
                "border border-gray-400 text-gray-700 font-medium rounded-md",
                "hover:bg-gray-100 transition-colors"
              )}
            >
              Add to cart
            </button>

            <button
              className={cn(
                "flex-1 max-w-[140px] py-2",
                "bg-blue-600 text-white font-medium rounded-md",
                "hover:bg-blue-700 transition-colors"
              )}
            >
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackageItemCard;
