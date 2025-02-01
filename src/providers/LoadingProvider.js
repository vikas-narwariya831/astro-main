'use client'
import { Loader } from "@/components/Loader";
import { createContext, useState } from "react";

export const LoadingContext = createContext();

const LoadingProvider = ({ children }) => {
    const [isLoading, setLoading] = useState(false);

    const onLoad = () => {
        setLoading(true);
    };

    const onFinish = () => {
        setLoading(false);
    };

    return (
        <LoadingContext.Provider value={{ onLoad, onFinish }} >
            {isLoading && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-white bg-opacity-50">
                    <div className="fade_in_fwd flex items-center gap-4">
                        <Loader bounce={false} />
                    </div>
                </div>
            )}
            {children}
        </LoadingContext.Provider >
    );
};

export { LoadingProvider };