import NavBar from "@/components/Navbar";
import SubNavBar from "@/components/SubNavbar";
import TourDetailPage from "@/components/TourMainContent";
import TourHeroSection from "@/components/TourHeroSection";
import TourItemCard from "@/components/TourItemCard";

import Image from "next/image";
import TourMainContent from "@/components/TourMainContent";

export default function Home() {
  return (
    <div>
      <NavBar />
      <SubNavBar />
      <TourHeroSection />
      <TourMainContent />
    </div>
  );
}
