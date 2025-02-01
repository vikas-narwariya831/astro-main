import { getLandingContext } from "@/actions/contexts.action";
import { BlogsSection } from "@/components/home/BlogsSection";
import { FaqSection } from "@/components/home/FaqSection";
import { HeroSection } from "@/components/home/HeroSection";
import { Services } from "@/components/home/Services";
import { TalkWithAstrologers } from "@/components/home/TalkWithAstrologers";
import { Testimonials } from "@/components/home/Testimonials";
import { WhyAstrovoice } from "@/components/home/WhyAstrovoice";


export default async function home() {

  let { data } = await getLandingContext();

  return (
    <div className="space-y-10">
      <HeroSection />
      <Services />
      <TalkWithAstrologers data={data?.astrologers} />
      <WhyAstrovoice />
      <Testimonials {...data?.testimonials} />
      <BlogsSection data={data?.blogs} />
      <FaqSection data={data?.faqs} />
    </div>
  );
}
