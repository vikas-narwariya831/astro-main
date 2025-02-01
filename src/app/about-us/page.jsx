import { SunFlareBgContainer } from "@/components/SunFlareBgContainer";
import { SymbolsBgContainer } from "@/components/SymbolsBgContainer";
import { TextDecorate } from "@/components/TextDecorate";

const about_us = () => {
    return (
        <div className="space-y-16 ">
            <SymbolsBgContainer>
                <div className="space-y-16 w-[95%] lg:w-[80%] m-auto max-w-7xl pt-10">
                    <div className="text-center space-y-6 max-w-3xl m-auto">
                        <h2 className="text-3xl lg:text-4xl font-georgia-bold text-primary font-semibold"><TextDecorate>About</TextDecorate> Astrovoice</h2>
                        <p className="text-primary text-sm md:text-base">Unlock deeper insights with our complimentary astrology services, offering personalized horoscopes, birth charts, and guidance for every path.</p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 m-auto">
                        <img src="/Images/about-1.png" alt="about-astrovoice-1" />
                        <img className="mt-6" src="/Images/about-2.png" alt="about-astrovoice-2" />
                        <img src="/Images/about-3.png" alt="about-astrovoice-3" />
                        <img className="mt-6" src="/Images/about-4.png" alt="about-astrovoice-4" />
                    </div>
                </div>
            </SymbolsBgContainer>


            <div className="text-center space-y-6 max-w-3xl m-auto px-4">
                <h2 className="text-3xl lg:text-4xl font-georgia-bold text-primary font-semibold">
                    We Make Sure You <TextDecorate>Get</TextDecorate> The <TextDecorate>Best</TextDecorate> <TextDecorate>Cosultation</TextDecorate> For Your Destiny
                </h2>
                <p className="text-primary text-sm md:text-base">
                    "We’re dedicated to ensuring you receive the finest guidance tailored to your unique journey. With experienced astrologers and personalized consultations, we help you uncover insights and pathways that align with your destiny and aspirations."
                </p>
            </div>

            <SunFlareBgContainer>
                <div className="pt-10 flex flex-col lg:flex-row justify-center w-[95%] lg:w-[90%] m-auto gap-10">
                    <div className="w-full flex justify-center items-center z-10 lg:w-1/3">
                        <img src="/Images/boy-2.png" alt="boy-2" />
                    </div>
                    <div>
                        <div className="text-center lg:text-left space-y-10 max-w-3xl">
                            <h2 className="text-3xl lg:text-4xl font-georgia-bold text-primary font-semibold">
                                We Focus On <TextDecorate>Your</TextDecorate> <TextDecorate>Need</TextDecorate>
                            </h2>

                            <div className="p-4 text-justify rounded-xl  shadow-lg space-y-4">
                                <h3 className="text-2xl text-primary font-medium">Our Vision</h3>
                                <p className="text-sm text-primary opacity-80 md:text-base">
                                    Our vision is to create a world where individuals can find guidance and clarity through the wisdom of astrology. We aim to make astrological insights accessible, empowering people to navigate life’s complexities with confidence and self-awareness. By offering trusted consultations and meaningful support, we inspire personal growth, balance, and a deeper understanding of one’s life journey
                                </p>
                            </div>

                            <p className="text-primary text-left opacity-60 ml-4 font-georgia-bold text-xl">
                                Founder & CEO
                            </p>

                        </div>
                    </div>
                </div>
            </SunFlareBgContainer>


            <SunFlareBgContainer>
                <div className="py-10 space-y-6 w-[95%] lg:w-[80%] m-auto max-w-7xl">
                    <div className="text-center space-y-6 max-w-3xl m-auto">
                        <h2 className="text-3xl lg:text-4xl font-georgia-bold text-primary font-semibold">
                            We Want to  <TextDecorate>Give</TextDecorate> <TextDecorate>You</TextDecorate> <TextDecorate>The</TextDecorate> <TextDecorate>Best</TextDecorate></h2>
                        <p className="text-primary text-sm md:text-base">
                            We aim to provide the highest quality astrology services, ensuring insightful, personalized guidance that truly supports your life's path.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">

                        <div className="p-2 flex flex-col space-y-3 items-center justify-center">
                            <img className="w-26 h-16" src="/Icons/earings.png" alt="" />
                            <p className=" text-center capitalize text-primary font-semibold text-xl">Professional Team</p>
                            <p className="text-sm text-center">
                                Experienced astrologers dedicated to providing insightful and reliable guidance.
                            </p>
                        </div>
                        <div className="p-2 flex flex-col space-y-3 items-center justify-center">
                            <img className="w-26 h-16" src="/Icons/earings.png" alt="" />
                            <p className=" text-center capitalize text-primary font-semibold text-xl">Tech Oriented</p>
                            <p className="text-sm text-center">
                                Leveraging technology to deliver seamless, accessible, and accurate astrology services.
                            </p>
                        </div>
                        <div className="p-2 flex flex-col space-y-3 items-center justify-center">
                            <img className="w-26 h-16" src="/Icons/earings.png" alt="" />
                            <p className=" text-center capitalize text-primary font-semibold text-xl">Success Oriented </p>
                            <p className="text-sm text-center">
                                Committed to your satisfaction with accurate, insightful, and reliable guidance.
                            </p>
                        </div>

                    </div>
                </div>
            </SunFlareBgContainer>

            <SymbolsBgContainer topFizzy={true}>
                <div className="flex w-[90%] lg:w-[80%] m-auto max-w-7xl flex-col lg:flex-row gap-10 justify-center items-center  pt-10">

                    <div className="w-full lg:w-1/3 space-y-4">
                        <h2 className="text-primary font-georgia-bold text-3xl lg:text-4xl">
                            Experienced Experts Are Giving Advices
                        </h2>
                        <p className="text-sm lg:text-base">
                            Our team of experienced astrologers offers expert advice, drawing from years of knowledge and practice to provide accurate, insightful guidance tailored to your unique life path and challenges.
                        </p>
                    </div>

                    <div className="flex items-center flex-col-reverse lg:flex-row justify-center gap-10">
                        <img src="/Images/hero-astrologer.png" alt="astrologer" />

                        <div className="lg:space-y-8 flex flex-row lg:flex-col m-auto items-center lg:items-start justify-center gap-10">
                            <div>
                                <p className="text-purple-gradient font-bold text-2xl">85%</p>
                                <p className="text-primary opacity-80">Client Growth</p>
                            </div>
                            <div>
                                <p className="text-purple-gradient font-bold text-2xl">10K+</p>
                                <p className="text-primary opacity-80">Global COnnections</p>
                            </div>
                            <div>
                                <p className="text-purple-gradient font-bold text-2xl">4.8/5</p>
                                <p className="text-primary opacity-80">User Satisfaction</p>
                            </div>
                        </div>

                    </div>
                </div>
            </SymbolsBgContainer>

        </div>
    )
}

export default about_us;