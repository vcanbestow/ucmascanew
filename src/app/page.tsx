import HomeBanner from "@/components/Pages/Home/HomeBanner";
import StatsSlider from "@/components/Pages/Home/StatsSlider";
import CognitiveCalculator from "@/components/Pages/Home/CognitiveCalculator";
import FranchiseSection from "@/components/Pages/Home/FranchiseSection";
import AwardsAccreditation from "@/components/Pages/Home/AwardsAccreditation";
import UpcomingWorkshops from "@/components/Pages/Home/UpcomingWorkshops";
import FlagshipPrograms from "@/components/Pages/Home/FlagshipPrograms";
import ParentsWorryAbout from "@/components/Pages/Home/ParentsWorryAbout";
import CtaSection from "@/components/Pages/Home/CtaSection";


export default function Home() {
  return (
    <>
      <div className="">
        {/* Hero Section Banner Slider */}
        <div className="w-full">
          <HomeBanner />
          <StatsSlider />
        </div>

      </div>
      <ParentsWorryAbout />
      <CognitiveCalculator />
      <FlagshipPrograms />
      <CtaSection />
      <UpcomingWorkshops />
      {/* <FranchiseSection />
      <AwardsAccreditation /> */}
    </>
  );
}