import { CustomImage } from "../CustomImage";
import { SymbolsBgContainer } from "../SymbolsBgContainer";

const TestimonialSection = ({ testimonial }) => {
    return (
        <SymbolsBgContainer topFizzy={true}>
            <div className="w-full flex flex-col lg:flex-row justify-center relative">
                {/* left content */}
                <div className="w-[95%] md:w-[90%] lg:w-[40%] flex flex-col justify-center z-10 pt-20 lg:pt-0">
                    <p className="font-georgia-italic text-[16px] md:text-2xl text-primary font-[500] text-center lg:text-left">{testimonial?.description}</p>
                    <p className="font-[500] text-primary font-poppins text-[16px] md:text-xl mt-16 lg:mt-20 text-center lg:text-left">{testimonial?.name}</p>
                    <p className="font-[400] text-[14px] md:text-base text-primary text-opacity-70 mt-2 text-center lg:text-left">{testimonial?.designation}</p>
                </div>
                {/* right content */}
                <div className="w-[95%] md:w-[90%] lg:w-[40%] border-0 border-red-500 flex items-center lg:items-end justify-center lg:justify-end mt-20">
                    <div className="relative bg-[url('/Images/zodiac.png')] bg-no-repeat bg-contain bg-center h-[260px] md:h-[450px] w-full mb-0 lg:mb-0">
                        <CustomImage src={testimonial?.image} alt={'astrologer'} className={'w-[330px] md:w-[550px] overflow-hidden absolute flex items-center justify-center -right-0 md:right-10 -top-10 lg:-top-12'} />
                    </div>
                </div>
            </div>
        </SymbolsBgContainer>
    )
}

export { TestimonialSection };