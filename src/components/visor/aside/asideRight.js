import { Fragment, useState} from "react";
import Capas from "./componentes/capas/capas";
import Leyenda from "./componentes/leyenda/leyenda";
import Mapas from "./componentes/mapas/mapas";
import Pdf from "./componentes/pdf/pdf";
import Gestion from "./componentes/gestion/gestion";
import Grafica from "./componentes/grafica/grafica";

export default function Aside(props){
    const [capas, setCapas] = useState('closeCap')
    const [leyen, setLeyen] = useState('closeLey')
    const [map, setMap] = useState('closeMap')
    const [pdf, setPdf] = useState('closePdf')
    const [ges, setGes] = useState('openGes')
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
        setGes(ges === "closeGes"?'openGes':'closeGes')
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

    return(
        <Fragment>
            <div className="flex flex-col justify-between absolute top-0 right-0 bg-white z-40 h-screen w-14" style={{zIndex:"2000"}} >
                <div className="section">
                    <div onClick={abrirGestion} className={`flex justify-center items-center h-10 w-14 cursor-pointer ${ges === 'closeGes'?'hover:bg-gray-200':'bg-gray-200'}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="rgb(40,40,40)" class="bi bi-sliders" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M11.5 2a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM9.05 3a2.5 2.5 0 0 1 4.9 0H16v1h-2.05a2.5 2.5 0 0 1-4.9 0H0V3h9.05zM4.5 7a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM2.05 8a2.5 2.5 0 0 1 4.9 0H16v1H6.95a2.5 2.5 0 0 1-4.9 0H0V8h2.05zm9.45 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm-2.45 1a2.5 2.5 0 0 1 4.9 0H16v1h-2.05a2.5 2.5 0 0 1-4.9 0H0v-1h9.05z"/>
                        </svg>
                    </div>
                    <div onClick={abrirCapas} className={`flex justify-center items-center h-10 w-14 cursor-pointer ${capas === 'closeCap'?'hover:bg-gray-200':'bg-gray-200'}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="rgb(40,40,40)" className="bi bi-stack" viewBox="0 0 16 16">
                            <path d="m14.12 10.163 1.715.858c.22.11.22.424 0 .534L8.267 15.34a.598.598 0 0 1-.534 0L.165 11.555a.299.299 0 0 1 0-.534l1.716-.858 5.317 2.659c.505.252 1.1.252 1.604 0l5.317-2.66zM7.733.063a.598.598 0 0 1 .534 0l7.568 3.784a.3.3 0 0 1 0 .535L8.267 8.165a.598.598 0 0 1-.534 0L.165 4.382a.299.299 0 0 1 0-.535L7.733.063z"/>
                            <path d="m14.12 6.576 1.715.858c.22.11.22.424 0 .534l-7.568 3.784a.598.598 0 0 1-.534 0L.165 7.968a.299.299 0 0 1 0-.534l1.716-.858 5.317 2.659c.505.252 1.1.252 1.604 0l5.317-2.659z"/>
                        </svg>
                    </div>
                    <div onClick={abrirLeyenda} className={`flex justify-center items-center h-10 w-14 cursor-pointer ${leyen === 'closeLey'?'hover:bg-gray-200':'bg-gray-200'}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="rgb(40,40,40)" className="bi bi-justify" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M2 12.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"/>
                        </svg>
                    </div>
                    <div onClick={abrirPdf} className={`flex justify-center items-center h-10 w-14 cursor-pointer ${pdf === 'closePdf'?'hover:bg-gray-200':'bg-gray-200'}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="rgb(40,40,40)" class="bi bi-journal-text" viewBox="0 0 16 16">
                            <path d="M5 10.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5zm0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z"/>
                            <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2z"/>
                            <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1z"/>
                        </svg>
                    </div>
                    <div onClick={abrirMap} className={`flex justify-center items-center h-10 w-14 cursor-pointer ${map === 'closeMap'?'hover:bg-gray-200':'bg-gray-200'}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" fill="rgb(40,40,40)" className="bi bi-map-fill" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M16 .5a.5.5 0 0 0-.598-.49L10.5.99 5.598.01a.5.5 0 0 0-.196 0l-5 1A.5.5 0 0 0 0 1.5v14a.5.5 0 0 0 .598.49l4.902-.98 4.902.98a.502.502 0 0 0 .196 0l5-1A.5.5 0 0 0 16 14.5V.5zM5 14.09V1.11l.5-.1.5.1v12.98l-.402-.08a.498.498 0 0 0-.196 0L5 14.09zm5 .8V1.91l.402.08a.5.5 0 0 0 .196 0L11 1.91v12.98l-.5.1-.5-.1z"/>
                        </svg>
                    </div>
                    <div onClick={abrirGrafica} className={`flex justify-center items-center h-10 w-14 cursor-pointer ${gra === 'closeGra'?'hover:bg-gray-200':'bg-gray-200'}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="rgb(40,40,40)" class="bi bi-graph-up" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M0 0h1v15h15v1H0V0Zm14.817 3.113a.5.5 0 0 1 .07.704l-4.5 5.5a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61 4.15-5.073a.5.5 0 0 1 .704-.07Z"/>
                        </svg>
                    </div>
                </div>
                <div onClick={props.openLog} className={`flex justify-center items-center h-10 w-14 cursor-pointer mb-4 hover:bg-gray-200`}>
                    <div className="flex items-center justify-center rounded-full h-10 w-10 bg-gray-200">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="rgb(40,40,40)" className="bi bi-person-circle" viewBox="0 0 16 16">
                            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                            <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                        </svg>
                    </div>
                </div>
                <Capas capas={capas} openCloseLimProv={props.openCloseLimProv} openCloseLimDist={props.openCloseLimDist} openCloseLimDep={props.openCloseLimDep} lim={props.lim} panam={props.panam} hundleClicClosePanam={props.hundleClicClosePanam} state={props.state} vic={props.vic} humeda={props.humeda} openCloseHumParFis={props.openCloseHumParFis} openCloseHumParIn={props.openCloseHumParIn} openCloseHumParIno={props.openCloseHumParIno} openCloseHumParMicro={props.openCloseHumParMicro} openCloseHumParOrg={props.openCloseHumParOrg} estado={props.estado} openCloseEm2016T2={props.openCloseEm2016T2} openCloseEm2017T2={props.openCloseEm2017T2} openCloseEm2018T1={props.openCloseEm2018T1} openCloseEm2018T3={props.openCloseEm2018T3} />
                {leyen === "closeLey"?null:<Leyenda />}
                {map === "closeMap"?null:<Mapas map={props.map} openMap={props.openMap} />}
                {pdf === "closePdf"?null:<Pdf openVisualizarPdf={props.openVisualizarPdf} pdf={props.pdf} />}
                {ges === "openGes"?<Gestion />:null}
                <Grafica abrirGrafica={abrirGrafica} minimizarMax={minimizarMax} gra={gra} />
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