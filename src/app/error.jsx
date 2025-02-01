'use client';

import { Button } from "@/components/ui/button";
import { BiSolidError } from "react-icons/bi";

const Error = ({ reset }) => {
    return (
        <div className="flex flex-col mx-auto p-2 h-[80vh] justify-center items-center space-y-4 text-center">
            <BiSolidError className="text-yellow-400" size={60} />
            <p className="text-brand-accent text-lg font-semibold">
                Oops! Something went wrong...
            </p>
            <p className="text-sm">
                If the error persists, contact us at <strong>1800-8848-4848</strong>
            </p>
            <Button onClick={reset}>Refresh</Button>
        </div>
    );
}

export default Error;
