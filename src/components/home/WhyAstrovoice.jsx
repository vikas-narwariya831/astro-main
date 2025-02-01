'use client'
import Link from 'next/link';
import { SunFlareBgContainer } from '../SunFlareBgContainer'
import { TextDecorate } from '../TextDecorate'
import { Button } from '../ui/button';

const whyAstrovoiceList = [
    {
        icon: '/Icons/rocket-launch.png',
        point: 'Easy Chat, Video, or Voice Consultations'
    },
    {
        icon: '/Icons/chart-arrow-grow.png',
        point: 'Personalized Readings for Your Life Path'
    },
    {
        icon: '/Icons/key.png',
        point: 'Instant Access to Professional Astrologers'
    },
    {
        icon: '/Icons/clock-three.png',
        point: 'Trusted Insights from Verified Experts'
    },
    {
        icon: '/Icons/money-coin-transfer.png',
        point: 'Connect Anytime, Anywhere for Guidance'
    }
]

export const WhyAstrovoice = () => {
    return <SunFlareBgContainer>
        <div className="w-[90%] lg:w-[80%] m-auto max-w-7xl flex flex-col lg:flex-row gap-10 justify-between items-center">
            <img src="/Images/redgirl.png" alt="red girl" className="w-full md:w-96 lg:w-[500px] ml-10 lg:m-0" />

            <div className="w-full lg:w-1/2 space-y-10">
                <h2 className="text-3xl lg:text-4xl text-primary font-semibold font-georgia-bold">Why <TextDecorate>Astrovoice</TextDecorate></h2>
                <div className="shadow-lg space-y-10 rounded-xl p-6">
                    {whyAstrovoiceList?.map(({ icon, point }, index) => <div className="flex items-center gap-4" key={index}>
                        <img src={icon} alt={index + icon} />
                        <p className="text-base lg:text-lg text-primary font-medium">{point}</p>
                    </div>)}
                    <Link style={{ display: 'block' }} href={process.env.NEXT_PUBLIC_USER_PLATFORM}>
                        <Button size="lg" variant="gradientPurple">Login to Get Started</Button>
                    </Link>
                </div>
            </div>
        </div>
    </SunFlareBgContainer>
}
