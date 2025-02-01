import Link from "next/link";
import { CustomImage } from "../CustomImage";
import { SunFlareBgContainer } from "../SunFlareBgContainer";
import { Button } from "../ui/button";
import { TextDecorate } from "../TextDecorate";

const QuickEasySection = () => {
    return (
        <SunFlareBgContainer>
            <div className="w-full flex flex-col lg:flex-row justify-center items-center border-0 border-red-500 pt-5 mt-10 gap-[2%] relative">
                {/* left content */}
                <div className="w-[95%] md:w-[90%] lg:w-[35%] border-0 border-green-500 z-10 flex flex-col items-center lg:items-start">
                    <h2 className="font-georgia-bold text-2xl md:text-4xl lg:text-5xl lg:leading-[64px] text-primary font-[500] text-center lg:text-left">It’s <TextDecorate>Quick & Easy</TextDecorate></h2>
                    {/* first step */}
                    <div className="mt-10 flex flex-col items-center lg:items-start">
                        <div className="flex items-center">
                            <div className="h-[60px] w-[10px] rounded-bl-[10px] rounded-tl-[10px] bg-purple-gradient-verticle"></div>
                            <div className="pl-6 h-[60px] border-0 border-red-500 flex items-center font-[500] text-[16px] md:text-xl text-primary">
                                Login/Signup into the platform
                            </div>
                        </div>
                        <div className="border-l border-dashed border-primary ml-[9px] h-[35px]"></div>
                    </div>
                    {/* second step */}
                    <div className="flex flex-col items-center lg:items-start">
                        <div className="flex items-center">
                            {/* <div className="h-[60px] w-[10px] rounded-bl-[10px] rounded-tl-[10px] bg-purple-gradient-verticle"></div> */}
                            <div className="pl-6 h-[60px] border-0 border-red-500 flex items-center font-[500] text-[16px] md:text-xl text-primary">
                                Fill the primary details and give an interview
                            </div>
                        </div>
                        <div className="border-l border-dashed border-primary ml-[9px] h-[35px]"></div>
                    </div>
                    {/* third step  */}
                    <div className="flex flex-col items-center lg:items-start">
                        <div className="flex items-center">
                            {/* <div className="h-[60px] w-[10px] rounded-bl-[10px] rounded-tl-[10px] bg-purple-gradient-verticle"></div> */}
                            <div className="pl-6 h-[60px] border-0 border-red-500 flex items-center font-[500] text-[16px] md:text-xl text-primary">
                                Upload documents for verification
                            </div>
                        </div>
                        <div className="border-l border-dashed border-primary ml-[9px] h-[35px]"></div>
                    </div>
                    {/* fourth step */}
                    <div className="flex flex-col items-center lg:items-start">
                        <div className="flex items-center">
                            {/* <div className="h-[60px] w-[10px] rounded-bl-[10px] rounded-tl-[10px] bg-purple-gradient-verticle"></div> */}
                            <div className="pl-6 h-[60px] border-0 border-red-500 flex items-center font-[500] text-[16px] md:text-xl text-primary">
                                After verification you are in!
                            </div>
                        </div>
                    </div>
                    {/* join us now button */}
                    <Link href="/astrologer/application">
                        <Button size="lg" className="min-w-72 mt-8 lg:mt-2" variant="gradientPurple">Join us Now</Button>
                    </Link>
                </div>
                {/* right content */}
                <div className="w-[95%] md:w-[90%] lg:w-[43%] hidden lg:block border-0 border-green-500 z-10">
                    <CustomImage src={'/Images/quick-easy.png'} alt={'Quick'} className={'w-full'} />
                </div>
            </div>
        </SunFlareBgContainer>
    )
}

export { QuickEasySection };