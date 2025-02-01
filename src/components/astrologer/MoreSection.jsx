import { CustomImage } from "../CustomImage";
import { SunFlareBgContainer } from "../SunFlareBgContainer";
import { TextDecorate } from "../TextDecorate";

const MoreSection = () => {
    return (
        <SunFlareBgContainer>
            <div className="w-full flex flex-col-reverse lg:flex-row justify-center border-0 border-red-500 pt-20 gap-10 lg:gap-[2%] relative overflow-hidden">
                {/* left content */}
                <div className="w-[95%] md:w-[90%] lg:w-[35%] border-0 border-green-500 flex items-start justify-center z-10">
                    <CustomImage src={'/Images/kundali2.png'} alt={'kundali2'} className={'w-[98%] md:w-[60%] lg:w-[450px]'} />
                </div>
                {/* right content */}
                <div className="w-[95%] md:w-[90%] lg:w-[43%] border-0 border-green-500 flex flex-col justify-start gap-12 z-10">
                    <h2 className="font-georgia-bold text-2xl md:text-4xl lg:text-5xl lg:leading-[64px] text-primary font-[500] text-center lg:text-left">There’s <TextDecorate>More</TextDecorate></h2>
                    <div className="flex flex-col lg:flex-row justify-center lg:justify-start gap-4 items-center ml-5 mt-4">
                        <CustomImage src={'/Icons/rocket-launch.png'} alt={'rocket'} className={'w-8'} />
                        <p className="text-[16px] md:text-xl text-primary font-[500] text-center lg:text-left">Boost Your Online Presence with Ease</p>
                    </div>
                    <div className="flex flex-col lg:flex-row justify-center lg:justify-start gap-4 items-center ml-5">
                        <CustomImage src={'/Icons/chart-arrow-grow.png'} alt={'chart-arrow-grow'} className={'w-8'} />
                        <p className="text-[16px] md:text-xl text-primary font-[500] text-center lg:text-left">Grow Your Client Base Internationally</p>
                    </div>
                    <div className="flex flex-col lg:flex-row justify-center lg:justify-start gap-4 items-center ml-5">
                        <CustomImage src={'/Icons/key.png'} alt={'chart-arrow-grow'} className={'w-8'} />
                        <p className="text-[16px] lg:text-xl text-primary font-[500] text-center lg:text-left">Exclusive Access to Advanced Astrology Tools</p>
                    </div>
                    <div className="flex flex-col lg:flex-row justify-center lg:justify-start gap-4 items-center ml-5">
                        <CustomImage src={'/Icons/clock-three.png'} alt={'chart-arrow-grow'} className={'w-8'} />
                        <p className="text-[16px] lg:text-xl text-primary font-[500] text-center lg:text-left">Flexible Work Schedule and Client Management</p>
                    </div>
                    <div className="flex flex-col lg:flex-row justify-center lg:justify-start gap-4 items-center ml-5">
                        <CustomImage src={'/Icons/money-coin-transfer.png'} alt={'chart-arrow-grow'} className={'w-8'} />
                        <p className="text-[16px] lg:text-xl text-primary font-[500] text-center lg:text-left">Increase Your Earning Potential with High-Demand Services</p>
                    </div>
                </div>
                {/* <CustomImage src={'/Images/zodiac.png'} alt={'zodiac'} className={'w-[400px] absolute -right-[150px] bottom-10 opacity-20'} /> */}
            </div>
        </SunFlareBgContainer>
    )
}

export { MoreSection };