import About from "@/components/About/About";
import FromTheBlog from "@/components/BlogSection/BlogSection";
import { FeaturedSection } from "@/components/Featured/Featured";
import Hero from "@/components/Hero/Hero";
import Reviews from "@/components/Reviews/Reviews";
import Sponsors from "@/components/Sponsors/Sponsors";
import Volunteer from "@/components/Volunteer/Volunteer";

export default function Home() {
  return (
    <div>
      {/* // hero section */}
      <div>
        <Hero />
        <About />
        <FeaturedSection />
        <Reviews />
        <Volunteer />
        <FromTheBlog />
        <Sponsors />
      </div>
    </div>
  );
}
