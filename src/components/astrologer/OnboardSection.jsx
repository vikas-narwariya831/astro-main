import Link from "next/link";
import { SunFlareBgContainer } from "../SunFlareBgContainer";
import { Button } from "../ui/button";
import { TextDecorate } from "../TextDecorate";

const OnboardSection = () => {
    return (
        <SunFlareBgContainer>
            <div className="w-full flex flex-col items-center gap-5 relative mt-10">
                <h2 className="font-georgia-bold text-2xl md:text-4xl lg:text-5xl lg:leading-[64px] text-primary font-[500] text-center lg:text-left z-10">Get Onboard and Enhance Your Earning</h2>
                <div className="flex gap-4 items-center mt-5">
                    <TextDecorate className="font-[500] text-6xl md:text-7xl lg:text-8xl font-lemon-milk-medium decoration-4 bg-purple-gradient text-transparent bg-clip-text text-center">5000+</TextDecorate>
                    <div className="text-base text-primary font-[400] text-opacity-70 flex flex-col -rotate-12">
                        <i>People</i>
                        <i>joined so far</i>
                    </div>

                </div>
                <p className="font-[400] text-[14px] md:text-xl text-primary text-opacity-60 w-[98%] lg:w-[530px] text-center z-10 mt-3 lg:mt-8">Take your astrology practice to the next level, connect with clients worldwide, and unlock the potential</p>
                <Link href="/astrologer/application" className="z-10 mt-10">
                    <Button size="lg" className="min-w-72" variant="gradientPurple">Join us Now</Button>
                </Link>
            </div>
        </SunFlareBgContainer>
    )
}

export { OnboardSection };