import { SymbolsBgContainer } from "../SymbolsBgContainer";

export const Testimonials = ({ feedback, name, avatar }) => {
    return <SymbolsBgContainer topFizzy={true}>
        <div className="w-[90%] lg:w-[80%] gap-8 lg:gap-0 max-w-7xl m-auto flex flex-col-reverse lg:flex-row mt-20 mb-20 lg:mb-0 justify-between">
            <div className="w-full lg:w-1/2 flex flex-col justify-center">
                <p className="font-georgia-italic text-xl text-primary font-[500]">
                    {feedback}
                </p>
                <p className="mt-14 mb-10 capitalize text-3xl font-bold text-muted">
                    {name}
                </p>
            </div>
            <div className="w-full flex justify-center lg:w-1/3">
                <img src={avatar} alt={name} className="md:w-[50%] lg:w-full" />
            </div>
        </div>
    </SymbolsBgContainer>
}
