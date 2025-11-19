import NavBar from "@/components/Navbar";
import SubNavBar from "@/components/SubNavbar";
import TourDetailPage from "@/components/TourDetailPage";
import TourHeroSection from "@/components/TourHeroSection";

import Image from "next/image";

export default function Home() {
  return (
    <div>
      <NavBar />
      {/* <SubNavBar /> */}
      <TourHeroSection />
      <TourDetailPage />
    </div>
  );
}
