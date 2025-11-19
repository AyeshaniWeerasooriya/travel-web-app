import { Home, Clock, CheckCircle, Users, Truck } from "lucide-react";
import Link from "next/link";

const packageFeatures = [
  {
    icon: Home,
    text: "Book now, pay later",
    link: true,
  },
  {
    icon: CheckCircle,
    text: "Free cancellation",
    link: true,
  },
  {
    icon: Clock,
    text: "Total Duration",
    link: false,
  },
  {
    icon: Users,
    text: "Guided tour",
    link: false,
  },
  {
    icon: Truck,
    text: "Transfers Included",
    link: false,
  },
];

const PackageSummary = () => {
  return (
    <div className="px-6 bg-white max-w-sm mx-auto">
      <ul className="space-y-3 mb-5">
        {packageFeatures.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <li key={index} className="flex items-center text-gray-700">
              <Icon size={20} className="text-gray-500 mr-3" />
              {feature.link ? (
                <Link
                  href="#"
                  className="text-blue-600 underline hover:text-blue-700 transition-colors"
                >
                  {feature.text}
                </Link>
              ) : (
                <span className="text-sm">{feature.text}</span>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default PackageSummary;
