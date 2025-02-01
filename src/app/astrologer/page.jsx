import { HeroSection } from "@/components/astrologer/HeroSection";
import { PromiseSection } from "@/components/astrologer/PromiseSection";
import { StatsSection } from "@/components/astrologer/StatsSection";
import { OnboardSection } from "@/components/astrologer/OnboardSection";
import { TestimonialSection } from "@/components/astrologer/TestimonialSection";
import { MoreSection } from "@/components/astrologer/MoreSection";
import { QuickEasySection } from "@/components/astrologer/QuickEasySection";
import { FaqSection } from "@/components/astrologer/FaqSection";

const astrologer = () => {
    const testimonials = [
        {
            name: 'Rahul Verma',
            designation: 'Vedic Astrologer, Jaipur',
            image: '/Images/testimonial-one-astrologer.png',
            description: 'Since joining, my practice has grown beyond India, connecting me with clients worldwide. The platform is easy to use, and my earnings have doubled! It’s been a game-changer for my career.'
        },
        {
            name: 'Rahul Verma',
            designation: 'Vedic Astrologer, Jaipur',
            image: '/Images/testimonial-two-astrologer.png',
            description: 'Since joining, my practice has grown beyond India, connecting me with clients worldwide. The platform is easy to use, and my earnings have doubled! It’s been a game-changer for my career.'
        }
    ]
    return (
        <div className="w-full flex flex-col justify-center gap-10">
            <HeroSection />
            <StatsSection />
            <PromiseSection />
            <OnboardSection />
            <TestimonialSection testimonial={testimonials[0]} />
            <MoreSection />
            <QuickEasySection />
            <TestimonialSection testimonial={testimonials[1]} />
            <FaqSection />
        </div>
    )
}

export default astrologer