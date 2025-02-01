import { FaQuoteLeft } from "react-icons/fa";

const Quote = ({ text, caption }) => {
    return (
        <div className="border rounded-lg overflow-hidden p-4 mt-4 shadow-sm">
            <FaQuoteLeft fontSize={20} />
            <p
                className="text-gray-600 text-lg font-[500] my-2"
                dangerouslySetInnerHTML={{ __html: `${text}` }}
            />
            <p className="mt-2 text-center italic">- {caption}</p>
        </div>
    );
};

export { Quote };