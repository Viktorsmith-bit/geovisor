import OpenCloseInput from "./openCloseInput";

export default function Input({estado, evento, nombre}){
    return(
        <div className="px-4 mt-2">
            <div className="flex items-center gap-1">
                <OpenCloseInput estado={estado} />
                <h1 onClick={evento} className="text-sm text-color cursor-pointer">{nombre}</h1>
            </div>
        </div>
    );
}