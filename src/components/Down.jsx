'use client';
import { MdDangerous } from "react-icons/md";

const DownPage = () => {

    const contactUrl = "https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=arunshaw433%40gmail.com";
    const message = "This site is temporarily down due to non-payment of developers. This site will again start working after receiving the payment";

    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
            <div className="space-y-6 text-center">
                <MdDangerous className="text-red-600 text-8xl mx-auto" />
                <h1 className="text-4xl font-bold text-red-600">
                    Jara Advisors Pvt. Ltd.
                </h1>
                <p className="text-lg md:text-2xl text-gray-700 max-w-2xl mx-auto">
                    {message}
                </p>
                <button
                    className="font-medium text-white bg-green-500 rounded-full px-8 py-3 text-lg"
                    onClick={() => window.location.href = contactUrl}
                >
                    Contact Developers
                </button>
            </div>
        </div>
    );
};

export default DownPage;
