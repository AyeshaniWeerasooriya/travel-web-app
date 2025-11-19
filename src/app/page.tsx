import NavBar from "@/components/navigation/Navbar";
import SubNavBar from "@/components/navigation/SubNavbar";
import TourDetailPage from "@/components/TourMainContent";
import TourHeroSection from "@/components/tour/tour-details/TourHeroSection";
import TourItemCard from "@/components/tour/common/TourItemCard";

import Image from "next/image";
import TourMainContent from "@/components/TourMainContent";

export default function Home() {
  return (
    <div>
      {/* <NavBar />
      <SubNavBar /> */}
      <TourHeroSection />
      <TourMainContent />
    </div>
  );
}
