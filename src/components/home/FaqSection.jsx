import { FaqCard } from "../cards/FaqCard";

export const FaqSection = ({ data }) => {
    return (
        <div className="w-full border-0 py-16 border-red-500 mt-10  flex flex-col items-center relative">
            <h2 className="font-georgia-bold text-3xl md:text-4xl text-primary font-[500] text-center z-10">
                Frequently Asked Questions
            </h2>
            <p className="text-[14px] md:text-base text-primary font-poppins text-center mt-8 font-[500] text-opacity-60 w-[95%] md-[60%] lg:w-[650px] z-10">
                Find answers to your questions in our FAQs, covering services, consultations, and astrology insights.
            </p>
            <div className="flex m-auto max-w-7xl gap-6 justify-center mt-10 lg:mt-20 w-[95%] md:w-[80%] z-10">
                <div className="w-[95%] md:w-[90%] lg:w-[50%]">
                    {data?.map((faq, index) => (
                        <FaqCard key={faq?._id} index={index} question={faq?.question} answer={faq?.answer} />
                    ))}
                </div>
                <div className="w-[50%] justify-end hidden lg:flex">
                    <img src={'/Images/patri.png'} alt={'Patri'} className={'w-[500px]'} />
                </div>
            </div>
        </div>
    );
};
