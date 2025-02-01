'use client';

import { createContext } from "react";

const SessionContext = createContext();

const SessionProvider = ({ session, children }) => {
    return (
        <SessionContext.Provider value={session}>
            {children}
        </SessionContext.Provider>
    )
}

export { SessionProvider, SessionContext }
