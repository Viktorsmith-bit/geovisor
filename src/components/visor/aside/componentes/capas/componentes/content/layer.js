import { useState } from "react";
import OpenCloseComponent from "./openCloseComponent";

export default function Layer({nombre, children}){
    const [layer, setLayer] = useState('close');
    function openClose(e) {
        e.preventDefault();
        setLayer(layer === 'open' ? 'close' : 'open');
    }
    return(
        <div className="px-4 mt-2">
            <div className="flex items-center gap-1">
                <OpenCloseComponent evento={openClose} estado={layer} />
                <h1 onClick={openClose} className="text-sm text-color cursor-pointer">{nombre}</h1>
            </div>
            <div className={`${layer === 'close'?'hidden':'bloque'}`}>{children}</div>
        </div>
    );
}
