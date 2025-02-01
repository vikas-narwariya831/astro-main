import { MdOutlineCheckBox } from "react-icons/md";
import { IoMdCloseCircleOutline } from "react-icons/io";

const CheckList = ({ items }) => {
    return (
        <ul className="space-y-3">
            {items.map(({ text, checked }, index) => (
                <li className="flex items-center gap-4" key={`${text}-${index}`}>
                    {checked ? (
                        <MdOutlineCheckBox
                            size={"22px"}
                            strokeWidth={2.5}
                            className="bg-primary p-1 rounded-full text-white"
                        />
                    ) : (
                        <IoMdCloseCircleOutline
                            size={"22px"}
                            strokeWidth={2.5}
                            className="bg-red-500 p-1 rounded-full text-white"
                        />
                    )}

                    {text}
                </li>
            ))}
        </ul>
    );
};

export { CheckList };