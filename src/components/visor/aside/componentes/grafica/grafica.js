import Filtro from "./filtro/filtro";

export default function Grafica(props){
    return(
        <div className={`absolute bottom-0 right-0 w-screen pr-14 ${props.gra === 'closeGra'?'hidden':'bloque'}`} style={{zIndex:"1000"}}>
            <div className="w-full h-96 bg-white border-r border-gray-800">
                <div className="flex justify-between items-center px-4 h-10 background-color">
                    <h1 className="text-base text-white">Análisis de tendencias</h1>
                    <div className="flex items-center gap-3">
                        <code onClick={props.minimizarMax} className="text-xl cursor-pointer text-white">-</code>
                        <svg onClick={props.abrirGrafica} xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="white" className="cursor-pointer bi bi-x-lg" viewBox="0 0 16 16">
                            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
                        </svg>
                    </div>
                </div>
                <Filtro />
            </div>
        </div>
    );
}