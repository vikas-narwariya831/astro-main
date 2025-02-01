import { faqList } from "@/constants/faqList";
import { FaqCard } from "../cards/FaqCard";
import { CustomImage } from "../CustomImage";

const FaqSection = () => {
    return (
        <div className="w-full border-0 border-red-500 mt-10 flex flex-col items-center relative">
            <h2 className="font-georgia-bold text-2xl md:text-4xl lg:text-5xl text-primary font-[500] text-center z-10">Frequently Asked Questions</h2>
            <p className="text-[14px] md:text-base text-primary font-poppins text-center mt-8 font-[500] text-opacity-60 w-[95%] md-[60%] lg:w-[650px] z-10">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum .</p>
            <div className="flex justify-center mt-10 lg:mt-20 w-[95%] md:w-[80%] z-10">
                <div className="w-[95%] md:w-[90%] lg:w-[50%]">
                    {faqList?.map((faq, index) => <FaqCard key={faq?.id} index={index} question={faq?.question} answer={faq?.answer} />)}
                </div>
                <div className="w-[50%] justify-end hidden lg:flex">
                    <CustomImage src={'/Images/patri.png'} alt={'Patri'} className={'w-[500px]'} />
                </div>
            </div>
        </div>
    )
}

export { FaqSection };