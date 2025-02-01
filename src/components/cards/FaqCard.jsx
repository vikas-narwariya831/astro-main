"use client";
import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa6";

const FaqCard = ({ question, answer, index }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className={`w-full border-b border-opacity-30 py-5 border-primary ${index === 0 && 'border-t'}`}>
            <div className="flex justify-between items-center text-primary">
                <p className="font-[500] text-[14px] md:text-lg">{question}</p>
                {isOpen ? <FaMinus fontSize={{ base: 16, md: 20 }} onClick={() => setIsOpen(!isOpen)} className="cursor-pointer" /> : <FaPlus fontSize={{ base: 16, md: 20 }} strokeWidth={1} onClick={() => setIsOpen(!isOpen)} className="cursor-pointer" />}

            </div>
            <p className={`text-primary text-opacity-60 text-[13px] md:text-base mt-2 ${isOpen ? "block" : "hidden"}`}>{answer}</p>
        </div>
    )
}

export { FaqCard }