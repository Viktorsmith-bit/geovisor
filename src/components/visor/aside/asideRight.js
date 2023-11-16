import { Fragment, useState} from "react";
import { useContextCapasMap } from "@/app/visor/map";
import Capas from "./componentes/capas/capas";
import Leyenda from "./componentes/leyenda/leyenda";
import Mapas from "./componentes/mapas/mapas";
import Pdf from "./componentes/pdf/pdf";
import Gestion from "./componentes/gestion/gestion";
import Grafica from "./componentes/grafica/grafica";

export default function Aside(){
    const [aside, setAside] = useState('close')
    const {openLog} = useContextCapasMap()
    const [capas, setCapas] = useState('openCap')
    const [leyen, setLeyen] = useState('closeLey')
    const [map, setMap] = useState('closeMap')
    const [pdf, setPdf] = useState('closePdf')
    const [ges, setGes] = useState('closeGes')
    const [gra, setGra] = useState('closeGra')
    const [min, setMin] = useState('closeMin')

    function abrirCapas(e){
        e.preventDefault();
        setCapas(capas === "openCap"?'closeCap':'openCap')
        setLeyen('closeLey')
        setMap('closeMap')
        setPdf('closePdf')
        setGes('closeGes')
        setGra('closeGra')
    }

    function abrirLeyenda(e){
        e.preventDefault();
        setLeyen(leyen === "openLey"?'closeLey':'openLey')
        setCapas('closeCap')
        setMap('closeMap')
        setPdf('closePdf')
        setGes('closeGes')
        setGra('closeGra')
    }

    function abrirMap(e){
        e.preventDefault();
        setMap(map === "openMap"?'closeMap':'openMap')
        setCapas('closeCap')
        setLeyen('closeLey')
        setPdf('closePdf')
        setGes('closeGes')
        setGra('closeGra')
    }

    function abrirPdf(e){
        e.preventDefault();
        setPdf(pdf === "openPdf"?'closePdf':'openPdf')
        setCapas('closeCap')
        setMap('closeMap')
        setLeyen('closeLey')
        setGes('closeGes')
        setGra('closeGra')
    }

    function abrirGestion(e){
        e.preventDefault();
        setGes(ges === "openGes"?'closeGes':'openGes')
        setCapas('closeCap')
        setMap('closeMap')
        setLeyen('closeLey')
        setPdf('closePdf')
        setGra('closeGra')
    }

    function abrirGrafica(e){
        e.preventDefault();
        setGra(gra === "openGra"?'closeGra':'openGra')
        setGes('closeGes')
        setCapas('closeCap')
        setMap('closeMap')
        setLeyen('closeLey')
        setPdf('closePdf')
    }

    function minimizarMax(e){
        e.preventDefault();
        setGra(gra === "openGra"?'closeGra':'openGra')
        setMin(min === "openMin"?'closeMin':'openMin')
    }
    function openCloseAside(e){
        e.preventDefault()
        setAside(aside === "open"?'close':'open')
    }
    return(
        <Fragment>
            <div className={`flex flex-col justify-between absolute top-0 right-0 bg-white h-screen ${aside === 'close'?'w-14':'w-44'}`} style={{zIndex:"2000"}} >
                <div className="section">
                    <div onClick={abrirCapas} className={`flex items-center hover:bg-gray-200 cursor-pointer ${capas === 'closeCap'?null:'bg-gray-200'}`}>
                        <div className={`flex justify-center items-center h-12 w-14 cursor-pointer`}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="rgb(40,40,40)" className="bi bi-layers" viewBox="0 0 16 16">
                                <path d="M8.235 1.559a.5.5 0 0 0-.47 0l-7.5 4a.5.5 0 0 0 0 .882L3.188 8 .264 9.559a.5.5 0 0 0 0 .882l7.5 4a.5.5 0 0 0 .47 0l7.5-4a.5.5 0 0 0 0-.882L12.813 8l2.922-1.559a.5.5 0 0 0 0-.882l-7.5-4zm3.515 7.008L14.438 10 8 13.433 1.562 10 4.25 8.567l3.515 1.874a.5.5 0 0 0 .47 0l3.515-1.874zM8 9.433 1.562 6 8 2.567 14.438 6 8 9.433z"/>
                            </svg>
                        </div>
                        <h1 className={`text-sm ${aside === 'close'?'hidden':'bloque'}`}>Capas</h1>
                    </div>
                    <div onClick={abrirGestion} className={`flex items-center hover:bg-gray-200 cursor-pointer ${ges === 'closeGes'?null:'bg-gray-200'}`}>
                        <div className={`flex justify-center items-center h-12 w-14 cursor-pointer`}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="rgb(40,40,40)" className="bi bi-sliders" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M11.5 2a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM9.05 3a2.5 2.5 0 0 1 4.9 0H16v1h-2.05a2.5 2.5 0 0 1-4.9 0H0V3h9.05zM4.5 7a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM2.05 8a2.5 2.5 0 0 1 4.9 0H16v1H6.95a2.5 2.5 0 0 1-4.9 0H0V8h2.05zm9.45 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm-2.45 1a2.5 2.5 0 0 1 4.9 0H16v1h-2.05a2.5 2.5 0 0 1-4.9 0H0v-1h9.05z"/>
                            </svg>
                        </div>
                        <h1 className={`text-sm ${aside === 'close'?'hidden':'bloque'}`}>Filtros</h1>
                    </div>
                    <div onClick={abrirLeyenda} className={`flex items-center hover:bg-gray-200 cursor-pointer ${leyen === 'closeLey'?'hover:bg-gray-200':'bg-gray-200'}`}>
                        <div className={`flex justify-center items-center h-12 w-14 cursor-pointer`}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="rgb(40,40,40)" className="bi bi-list-ul" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm-3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
                            </svg>
                        </div>
                        <h1 className={`text-sm ${aside === 'close'?'hidden':'bloque'}`}>Leyenda</h1>
                    </div>
                    <div onClick={abrirPdf} className={`flex items-center hover:bg-gray-200 cursor-pointer ${pdf === 'closePdf'?'hover:bg-gray-200':'bg-gray-200'}`}>
                        <div className={`flex justify-center items-center h-12 w-14 cursor-pointer`}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="rgb(40,40,40)" className="bi bi-postcard" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2ZM1 4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4Zm7.5.5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7ZM2 5.5a.5.5 0 0 1 .5-.5H6a.5.5 0 0 1 0 1H2.5a.5.5 0 0 1-.5-.5Zm0 2a.5.5 0 0 1 .5-.5H6a.5.5 0 0 1 0 1H2.5a.5.5 0 0 1-.5-.5Zm0 2a.5.5 0 0 1 .5-.5H6a.5.5 0 0 1 0 1H2.5a.5.5 0 0 1-.5-.5ZM10.5 5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3ZM13 8h-2V6h2v2Z"/>
                            </svg>
                        </div>
                        <h1 className={`text-sm ${aside === 'close'?'hidden':'bloque'}`}>Documentación</h1>
                    </div>
                    <div onClick={abrirMap} className={`flex items-center hover:bg-gray-200 cursor-pointer ${map === 'closeMap'?'hover:bg-gray-200':'bg-gray-200'}`}>
                        <div className={`flex justify-center items-center h-12 w-14 cursor-pointer`}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="21" fill="rgb(40,40,40)" className="bi bi-map" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M15.817.113A.5.5 0 0 1 16 .5v14a.5.5 0 0 1-.402.49l-5 1a.502.502 0 0 1-.196 0L5.5 15.01l-4.902.98A.5.5 0 0 1 0 15.5v-14a.5.5 0 0 1 .402-.49l5-1a.5.5 0 0 1 .196 0L10.5.99l4.902-.98a.5.5 0 0 1 .415.103zM10 1.91l-4-.8v12.98l4 .8V1.91zm1 12.98 4-.8V1.11l-4 .8v12.98zm-6-.8V1.11l-4 .8v12.98l4-.8z"/>
                            </svg>
                        </div>
                        <h1 className={`text-sm ${aside === 'close'?'hidden':'bloque'}`}>Mapas base</h1>
                    </div>
                    <div onClick={abrirGrafica} className={`flex items-center hover:bg-gray-200 cursor-pointer ${gra === 'closeGra'?'hover:bg-gray-200':'bg-gray-200'}`}>
                        <div className={`flex justify-center items-center h-12 w-14 cursor-pointer`}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="rgb(40,40,40)" className="bi bi-bar-chart-line" viewBox="0 0 16 16">
                                <path d="M11 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h1V7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7h1V2zm1 12h2V2h-2v12zm-3 0V7H7v7h2zm-5 0v-3H2v3h2z"/>
                            </svg>
                        </div>
                        <h1 className={`text-sm ${aside === 'close'?'hidden':'bloque'}`}>Gráfica</h1>
                    </div>
                </div>
                <div className="section">
                    <div onClick={openLog} className="flex items-center hover:bg-gray-200 cursor-pointer">
                        <div className={`flex items-center justify-center h-12 w-14 hover:bg-gray-200`}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="rgb(40,40,40)" className="bi bi-person" viewBox="0 0 16 16">
                                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z"/>
                            </svg>
                        </div>
                        <h1 className={`text-sm ${aside === 'close'?'hidden':'bloque'}`}>Sesión</h1>
                    </div>
                    <div onClick={openCloseAside} className="flex items-center hover:bg-gray-200 cursor-pointer">
                        <div className="flex items-center justify-center w-14 h-12">
                            {
                                aside === 'close'?<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="gb(40,40,40)" className="bi bi-chevron-double-left" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M8.354 1.646a.5.5 0 0 1 0 .708L2.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
                                    <path fill-rule="evenodd" d="M12.354 1.646a.5.5 0 0 1 0 .708L6.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
                                </svg>:<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-chevron-double-right" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708z"/>
                                    <path fill-rule="evenodd" d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708z"/>
                                </svg>
                            }
                        </div>
                        <h1 className={`text-sm ${aside === 'close'?'hidden':'bloque'}`}>Contraer</h1>
                    </div>
                </div>
                <Capas abrirCapas={abrirCapas} aside={aside} capas={capas} />
                <Leyenda abrirLeyenda={abrirLeyenda} aside={aside} leyen={leyen} />
                <Mapas abrirMap={abrirMap} aside={aside} map={map} />
                <Pdf abrirPdf={abrirPdf} aside={aside} pdf={pdf} />
                <Gestion abrirGestion={abrirGestion} aside={aside} ges={ges} />
                <Grafica aside={aside} abrirGrafica={abrirGrafica} minimizarMax={minimizarMax} gra={gra} />
            </div>
            <div onClick={minimizarMax} className={`absolute bottom-4 left-4 flex items-center justify-center gap-2 h-9 w-44 bg-white rounded-sm cursor-pointer ${min === 'closeMin'?'hidden':'bloque'}`} style={{zIndex:"1000"}}>
                <h1 className="text-xs">Análisis de tendencias</h1>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="rgb(40,40,40)" className="bi bi-copy" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V2Zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H6ZM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1H2Z"/>
                </svg>
            </div>
        </Fragment>
    );
}