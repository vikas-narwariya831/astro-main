'use client'

import { TextDecorate } from "../TextDecorate";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent } from "../ui/card";
import Link from "next/link";
import { MoveRight } from "lucide-react";

const servicesItems = [
    {
        icon: '/Icons/horoscope.png',
        title: 'Daily Horoscope',
        shortDescription: 'Stay informed with personalized daily horoscopes for guidance every day.'
    },
    {
        icon: '/Icons/diya.png',
        title: 'Festival 2024',
        shortDescription: 'Celebrate 2024’s festivals with astrological insights and guidance for auspicious beginnings and meaningful traditions.'
    },
    {
        icon: '/Icons/hearts.png',
        title: 'Compatibility',
        shortDescription: 'Explore relationship compatibility through astrology, revealing deeper connections and harmony between partners.'
    },
    {
        icon: '/Icons/earings.png',
        title: 'Kundali Matching',
        shortDescription: 'Find your perfect match with Kundali Matching, a trusted Vedic astrology service for harmonious relationships.'
    }

]

export const Services = () => {
    return (
        <div className="space-y-16 py-10">
            <div className="text-center space-y-6 px-4 max-w-3xl m-auto">
                <h2 className="text-3xl lg:text-4xl font-georgia-bold text-primary font-semibold">Complementary Astrology <TextDecorate>Services</TextDecorate></h2>
                <p className="text-primary">Unlock deeper insights with our complimentary astrology services, offering personalized horoscopes, birth charts, and guidance for every path.</p>
            </div>

            {/* ****Carousel**** */}
            <Carousel
                opts={{
                    align: "start",
                }}
                className="w-[80%] max-w-7xl m-auto"
            >
                <CarouselContent>
                    {servicesItems.map(({ title, icon, shortDescription }, index) => (
                        <CarouselItem key={index + title} className="basis-72 overflow-hidden">
                            <div className="p-1 relative">
                                <Card className="rounded-xl shadow-md" >
                                    <CardContent className="aspect-[4/5] select-none relative p-6 space-y-4 overflow-hidden">
                                        <div className="absolute -left-8 -top-10 opacity-20 pointer-events-none">
                                            <img
                                                src="/Vectors/zodiac-circle.png"
                                                alt="zodiac circle"
                                                className="w-60 object-left"
                                            />
                                        </div>
                                        <img src={icon} alt={title} />
                                        <p className="capitalize text-2xl text-primary font-georgia-regular">{title}</p>
                                        <p className="text-sm text-primary line-clamp-3">{shortDescription}</p>
                                        <Link className="text-purple-gradient absolute bottom-6 flex items-center gap-2 font-semibold uppercase text-sm" href={"/"}>Read More <MoveRight className="text-primary" /></Link>
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="bg-purple-gradient ml-4 md:m-0 text-primary-foreground opacity-100" />
                <CarouselNext className="bg-purple-gradient mr-4 md:m-0 text-primary-foreground opacity-100" />
            </Carousel>


        </div>
    )
}
