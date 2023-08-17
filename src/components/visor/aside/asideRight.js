import { useState } from "react";
import Capas from "./componentes/capas/capas";
import Leyenda from "./componentes/leyenda/leyenda";
import Mapas from "./componentes/mapas/mapas";
import Pdf from "./componentes/pdf/pdf";

export default function Aside(props){
    const [aside, setAside] = useState('')
    const [capas, setCapas] = useState('closeCap')
    const [leyen, setLeyen] = useState('closeLey')
    const [map, setMap] = useState('closeMap')
    const [pdf, setPdf] = useState('closePdf')

    function abrirCapas(e){
        e.preventDefault();
        setCapas(capas === "openCap"?'closeCap':'openCap')
        setAside('closeCap')
        setLeyen('closeLey')
        setMap('closeMap')
        setPdf('closePdf')
    }

    function abrirLeyenda(e){
        e.preventDefault();
        setLeyen(leyen === "openLey"?'closeLey':'openLey')
        setAside('closeLey')
        setCapas('closeCap')
        setMap('closeMap')
        setPdf('closePdf')
    }

    function abrirMap(e){
        e.preventDefault();
        setMap(map === "openMap"?'closeMap':'openMap')
        setCapas('closeCap')
        setLeyen('closeLey')
        setPdf('closePdf')
    }

    function abrirPdf(e){
        e.preventDefault();
        setPdf(pdf === "openPdf"?'closePdf':'openPdf')
        setCapas('closeCap')
        setMap('closeMap')
        setLeyen('closeLey')
    }

    function open(e){
        e.preventDefault();
        setLeyen('openLey')
    }

    function close(e){
        e.preventDefault();
        setLeyen('closeLey')
    }

    return(
        <div className="flex flex-col justify-between absolute top-0 right-0 bg-white z-40 h-screen w-14" style={{zIndex:"1000"}} >
            <div className="section">
                <OpenClose aside={aside} />
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
                <div onClick={abrirMap} className={`flex justify-center items-center h-10 w-14 cursor-pointer ${map === 'closeMap'?'hover:bg-gray-200':'bg-gray-200'}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" fill="rgb(40,40,40)" className="bi bi-map-fill" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M16 .5a.5.5 0 0 0-.598-.49L10.5.99 5.598.01a.5.5 0 0 0-.196 0l-5 1A.5.5 0 0 0 0 1.5v14a.5.5 0 0 0 .598.49l4.902-.98 4.902.98a.502.502 0 0 0 .196 0l5-1A.5.5 0 0 0 16 14.5V.5zM5 14.09V1.11l.5-.1.5.1v12.98l-.402-.08a.498.498 0 0 0-.196 0L5 14.09zm5 .8V1.91l.402.08a.5.5 0 0 0 .196 0L11 1.91v12.98l-.5.1-.5-.1z"/>
                    </svg>
                </div>
                <div onClick={abrirPdf} className={`flex justify-center items-center h-10 w-14 cursor-pointer ${pdf === 'closePdf'?'hover:bg-gray-200':'bg-gray-200'}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="rgb(40,40,40)" className="bi bi-file-earmark-text" viewBox="0 0 16 16">
                        <path d="M5.5 7a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zM5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z"/>
                        <path d="M9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.5L9.5 0zm0 1v2A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z"/>
                    </svg>
                </div>
            </div>
            <div onClick={props.openLog} className={`flex justify-center items-center h-10 w-14 cursor-pointer mb-4 hover:bg-gray-200`}>
                <div className="flex items-center justify-center rounded-full h-10 w-10 bg-gray-200">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                        <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                    </svg>
                </div>
            </div>
            {
                capas === "closeCap"?null:<Capas openCloseLimProv={props.openCloseLimProv} openCloseLimDist={props.openCloseLimDist} openCloseLimDep={props.openCloseLimDep} lim={props.lim} panam={props.panam} hundleClicClosePanam={props.hundleClicClosePanam} state={props.state} vic={props.vic} humeda={props.humeda} openCloseHumParFis={props.openCloseHumParFis} openCloseHumParIn={props.openCloseHumParIn} openCloseHumParIno={props.openCloseHumParIno} openCloseHumParMicro={props.openCloseHumParMicro} openCloseHumParOrg={props.openCloseHumParOrg} estado={props.estado} openCloseEm2016T2={props.openCloseEm2016T2} openCloseEm2017T2={props.openCloseEm2017T2} openCloseEm2018T1={props.openCloseEm2018T1} openCloseEm2018T3={props.openCloseEm2018T3} />
            }
            {
                leyen === "closeLey"?null:<Leyenda />
            }
            {
                map === "closeMap"?null:<Mapas map={props.map} openMap={props.openMap} />
            }
            {
                pdf === "closePdf"?null:<Pdf openVisualizarPdf={props.openVisualizarPdf} pdf={props.pdf} />
            }
        </div>
    );
}

function OpenClose({aside}){
    return(
        <div className="flex justify-center items-center h-10 w-14 cursor-pointer background-color">
            {
                aside === 'close'? <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-chevron-right" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                </svg>:<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-chevron-left" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
                </svg>
            }
        </div>
    );
}