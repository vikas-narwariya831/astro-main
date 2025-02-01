'use client'
import { createContext, useState } from "react";

export const ClearContext = createContext();

export const ClearProvider = ({ children }) => {

    const [key, setKey] = useState(true);

    const onClear = () => {
        setKey((prev) => !prev)
    }

    return <ClearContext.Provider key={key} value={{ onClear }}>
        {children}
    </ClearContext.Provider>
} 