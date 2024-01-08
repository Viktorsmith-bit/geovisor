import { useState } from "react";
import OpenCloseComponent from "./openCloseComponent";

export default function LayerHeader({nombre, children}){
    const [header, setHeader] = useState('close');
    function openClose(e) {
        e.preventDefault();
        setHeader(header === 'open' ? 'close' : 'open');
    }
    return(
        <div className={`px-4 border-b border-gray-200 py-3.5`}>
            <div className="flex items-center gap-1">
                <OpenCloseComponent evento={openClose} estado={header} />
                <h1 onClick={openClose} className="text-sm text-color cursor-pointer">{nombre}</h1>
            </div>

            <div className={`${header === 'close'?'hidden':'bloque'}`}>{children}</div>
        </div>
    );
}
