'use client'
import { createContext, useState } from "react";

const contextApp = createContext('value');

export default function Context({children}){
    const [state, setState] = useState();
    
    return(
        <contextApp.Provider value={state}>
            {children}
        </contextApp.Provider>
    );
}
