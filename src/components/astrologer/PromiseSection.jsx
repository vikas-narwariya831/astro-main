import { CustomImage } from "../CustomImage";
import { SunFlareBgContainer } from "../SunFlareBgContainer";
import { TextDecorate } from "../TextDecorate";

const PromiseSection = () => {
    return (
        <SunFlareBgContainer>
            <div className="w-full flex flex-col lg:flex-row justify-center gap-[5%] pt-16 lg:mt-10 relative">
                {/* left content */}
                <div className="w-[95%] md:w-[90%] lg:w-[50%] flex flex-col items-center lg:items-start lg:gap-16 gap-10 border-0 border-red-500 z-10">
                    <h2 className="font-georgia-bold text-3xl md:text-4xl lg:text-5xl lg:leading-[64px] text-primary font-[500] text-center lg:text-left">Astrovoice <TextDecorate>Promises</TextDecorate></h2>
                    <div className="w-full flex flex-col lg:flex-row gap-3 mt-5 justify-center items-center lg:items-start">
                        <CustomImage src={'/Icons/customer-care.png'} alt={'customer-care'} className={'w-10 lg:w-14 mt-2'} />
                        <div className="flex flex-col gap-2 items-center lg:items-start">
                            <p className="font-[500] text-primary font-poppins text-[16px] md:text-2xl text-center lg:text-left">Expand Your Client Reach</p>
                            <p className="text-[14px] md:text-xl text-primary font-[400] text-opacity-60 text-center lg:text-left">Tap into a global audience actively seeking astrological guidance, helping you grow your client base and increase bookings.</p>
                        </div>
                    </div>
                    <div className="w-full flex flex-col lg:flex-row gap-3 mt-5 justify-center items-center lg:items-start">
                        <CustomImage src={'/Icons/key.png'} alt={'customer-care'} className={'w-10 lg:w-14 mt-2'} />
                        <div className="flex flex-col gap-2 items-center lg:items-start">
                            <p className="font-[500] text-primary font-poppins text-[16px] md:text-2xl text-center lg:text-left">Access Exclusive Tools & Resources</p>
                            <p className="text-[14px] md:text-xl text-primary font-[400] text-opacity-60 text-center lg:text-left">Leverage professional tools, scheduling systems, and resources designed to streamline your practice and enhance your readings.</p>
                        </div>
                    </div>
                    <div className="w-full flex flex-col lg:flex-row gap-3 mt-5 justify-center items-center lg:items-start">
                        <CustomImage src={'/Icons/users-medical.png'} alt={'customer-care'} className={'w-10 lg:w-14 mt-2'} />
                        <div className="flex flex-col gap-2 items-center lg:items-start">
                            <p className="font-[500] text-primary font-poppins text-[16px] md:text-2xl text-center lg:text-left">Join a Supportive Expert Community</p>
                            <p className="text-[14px] md:text-xl text-primary font-[400] text-opacity-60 text-center lg:text-left">Connect with like-minded astrologers, collaborate, share insights, and continuously improve your skills in a thriving, supportive environment.</p>
                        </div>
                    </div>
                </div>
                {/* right content */}
                <div className="w-[95%] md:w-[90%] lg:w-[25%] border-0 border-green-500 flex flex-col
                items-center lg:items-end lg:gap-12 gap-16 z-10 mt-10 lg:mt-0">
                    <CustomImage src={'/Images/kundali.png'} alt={'kundali'} className={'w-[300px]'} />
                    <div className="relative bg-[url('/Images/zodiac.png')] bg-no-repeat bg-contain bg-center h-[240px] lg:h-[280px] w-full">
                        <CustomImage src={'/Images/promise-astrologer.png'} alt={'astrologer'} className={'w-[300px] lg:w-[340px] overflow-hidden absolute -top-10 right-10 object-contain'} />
                    </div>
                </div>
            </div>
        </SunFlareBgContainer>
    )
}

export { PromiseSection };