import Link from "next/link"
import { CustomImage } from "../CustomImage"
import { TextDecorate } from "../TextDecorate"
import { Button } from "../ui/button"
import { SymbolsBgContainer } from "../SymbolsBgContainer"

const HeroSection = () => {
    return (
        <SymbolsBgContainer>
            <div className="w-full flex flex-col md:flex-col lg:flex-row justify-center items-center md:items-center lg:items-start pt-24  relative border-0 border-red-500 gap-24 lg:gap-4">
                {/* left content */}
                <div className="border-0 border-green-500 w-[95%] lg:w-[45%] md:w-[90%] flex flex-col gap-5 z-10 items-center lg:items-start">
                    <h1 className="font-georgia-bold text-4xl md:text-5xl lg:text-6xl lg:leading-[72px] text-primary font-[500] z-10 text-center lg:text-left">Join the <TextDecorate>Fastest</TextDecorate>-<TextDecorate>Growing</TextDecorate> Astrology Network</h1>
                    <p className="text-base text-primary font-[400] text-opacity-60 z-10 text-center lg:text-left">Connect with a global audience, share your insights, and grow your astrology practice with the support of a platform built for professionals like you.</p>
                    <Link href="/astrologer/onboard" className="mt-10 mb-0 lg:mb-20">
                        <Button size="lg" className="min-w-72 z-10" variant="gradientPurple">Join us Now</Button>
                    </Link>
                </div>
                {/* right content */}
                <div className="border-0 border-blue-500 w-[95%] lg:w-[40%] md:w-[90%] relative mb-10 lg:mb-0">
                    <div className="relative bg-[url('/Images/zodiac.png')] bg-no-repeat bg-contain bg-center h-[250px] md:h-[300px] lg:h-[450px] w-full">
                        <CustomImage src={'/Images/hero-astrologer.png'} alt={'astrologer'} className={'w-full overflow-hidden h-[350px] md:h-[400px] lg:h-[530px] absolute -top-16 object-contain'} />
                    </div>
                </div>
            </div>
        </SymbolsBgContainer>
    )
}

export { HeroSection }