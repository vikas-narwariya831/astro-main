'use client'

import Link from "next/link"
import { Loader } from "../Loader"
import { SymbolsBgContainer } from "../SymbolsBgContainer"
import { TextDecorate } from "../TextDecorate"
import { Button } from "../ui/button"

export const HeroSection = () => {

    return (
        <SymbolsBgContainer>
            <div className="flex flex-col-reverse lg:flex-row justify-between items-center max-w-7xl w-[90%] lg:w-[80%] gap-24 m-auto py-20 md:pt-28 lg:pt-20 md:pb-28">
                <div className="max-w-xl flex flex-col gap-5 z-10 items-center lg:items-start">
                    <h1 className="font-georgia-bold text-4xl md:text-5xl lg:text-6xl leading-snug lg:leading-[72px] text-primary font-[500] z-10 text-center lg:text-left">
                        Start <TextDecorate>Control</TextDecorate> of <TextDecorate> Your </TextDecorate> Professional <TextDecorate>Destiny</TextDecorate> </h1>
                    <p className="text-base text-primary font-[400] text-opacity-60 z-10 text-center lg:text-left">
                        Discover guidance and insights tailored to your journey. Our astrology consultancy connects you with expert astrologers for personalized readings,
                        helping you navigate life’s questions with clarity and confidence.
                    </p>
                    <Link href={process.env.NEXT_PUBLIC_USER_PLATFORM}>
                        <Button size="lg" className="z-10" variant="gradientPurple">
                            Talk with Astrologer Now
                        </Button>
                    </Link>
                </div>
                <Loader zodiacSize='w-60 h-60 md: lg:w-[25em] lg:h-[25em]' logoSize='w-28 h-28 lg:w-40 lg:h-40' />
            </div>
        </SymbolsBgContainer>
    )
}