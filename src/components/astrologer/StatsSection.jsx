import { CustomImage } from "../CustomImage";

const StatsSection = () => {
    return (
        <div className="w-[95%] md:w-[80%] mx-auto flex flex-col gap-10 justify-center lg:mt-10">
            <h2 className="font-georgia-regular text-2xl md:text-3xl md:leading-[44px] text-primary font-[400] text-center">Join the Fastest-Growing Astrology Network</h2>
            <div className="w-full flex flex-col lg:flex-row justify-center lg:justify-between items-center gap-20 lg:gap-0">
                <div className="flex gap-3">
                    <CustomImage src={'/Icons/career-growth.png'} alt={'career-growth'} className={'w-16'} />
                    <div>
                        <p className="text-transparent bg-purple-gradient bg-clip-text font-[700] text-4xl leading-[48px]">85%</p>
                        <p className="text-xl text-primary font-[400] text-opacity-60">Career Growth</p>
                    </div>
                </div>

                <hr aria-orientation="vertical" className="w-[1.5px] h-[70px] bg-primary bg-opacity-50 hidden lg:block" />

                <div className="flex gap-3">
                    <CustomImage src={'/Icons/people-network-partner.png'} alt={'career-growth'} className={'w-16'} />
                    <div>
                        <p className="text-transparent bg-purple-gradient bg-clip-text font-[700] text-4xl leading-[48px]">10K+</p>
                        <p className="text-xl text-primary font-[400] text-opacity-60">Global Connections</p>
                    </div>
                </div>

                <hr aria-orientation="vertical" className="w-[1.5px] h-[70px] bg-primary bg-opacity-50 hidden lg:block" />

                <div className="flex gap-3">
                    <CustomImage src={'/Icons/feedback-review.png'} alt={'career-growth'} className={'w-16'} />
                    <div>
                        <p className="text-transparent bg-purple-gradient bg-clip-text font-[700] text-4xl leading-[48px]">4.8/5</p>
                        <p className="text-xl text-primary font-[400] text-opacity-60">User Satisfaction</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { StatsSection };