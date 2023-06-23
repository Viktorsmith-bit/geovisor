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
        <div className="absolute top-0 right-0 bg-white z-40 h-screen w-14" style={{zIndex:"1000", backgroundColor:"rgb(24,30,37)"}} >
            <div onClick={abrirCapas} className={`flex justify-center items-center h-10 w-14 cursor-pointer ${capas === 'closeCap'?'hover:bg-blue-900':'bg-blue-900'}`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="rgb(185,192,198)" class="bi bi-stack" viewBox="0 0 16 16">
                    <path d="m14.12 10.163 1.715.858c.22.11.22.424 0 .534L8.267 15.34a.598.598 0 0 1-.534 0L.165 11.555a.299.299 0 0 1 0-.534l1.716-.858 5.317 2.659c.505.252 1.1.252 1.604 0l5.317-2.66zM7.733.063a.598.598 0 0 1 .534 0l7.568 3.784a.3.3 0 0 1 0 .535L8.267 8.165a.598.598 0 0 1-.534 0L.165 4.382a.299.299 0 0 1 0-.535L7.733.063z"/>
                    <path d="m14.12 6.576 1.715.858c.22.11.22.424 0 .534l-7.568 3.784a.598.598 0 0 1-.534 0L.165 7.968a.299.299 0 0 1 0-.534l1.716-.858 5.317 2.659c.505.252 1.1.252 1.604 0l5.317-2.659z"/>
                </svg>
            </div>
            <div onClick={abrirLeyenda} className={`flex justify-center items-center h-10 w-14 cursor-pointer ${leyen === 'closeLey'?'hover:bg-blue-900':'bg-blue-900'}`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="rgb(185,192,198)" class="bi bi-justify" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M2 12.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"/>
                </svg>
            </div>
            <div onClick={abrirPdf} className={`flex justify-center items-center h-10 w-14 cursor-pointer ${pdf === 'closePdf'?'hover:bg-blue-900':'bg-blue-900'}`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="rgb(185,192,198)" class="bi bi-file-earmark-pdf-fill" viewBox="0 0 16 16">
                    <path d="M5.523 12.424c.14-.082.293-.162.459-.238a7.878 7.878 0 0 1-.45.606c-.28.337-.498.516-.635.572a.266.266 0 0 1-.035.012.282.282 0 0 1-.026-.044c-.056-.11-.054-.216.04-.36.106-.165.319-.354.647-.548zm2.455-1.647c-.119.025-.237.05-.356.078a21.148 21.148 0 0 0 .5-1.05 12.045 12.045 0 0 0 .51.858c-.217.032-.436.07-.654.114zm2.525.939a3.881 3.881 0 0 1-.435-.41c.228.005.434.022.612.054.317.057.466.147.518.209a.095.095 0 0 1 .026.064.436.436 0 0 1-.06.2.307.307 0 0 1-.094.124.107.107 0 0 1-.069.015c-.09-.003-.258-.066-.498-.256zM8.278 6.97c-.04.244-.108.524-.2.829a4.86 4.86 0 0 1-.089-.346c-.076-.353-.087-.63-.046-.822.038-.177.11-.248.196-.283a.517.517 0 0 1 .145-.04c.013.03.028.092.032.198.005.122-.007.277-.038.465z"/>
                    <path fill-rule="evenodd" d="M4 0h5.293A1 1 0 0 1 10 .293L13.707 4a1 1 0 0 1 .293.707V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zm5.5 1.5v2a1 1 0 0 0 1 1h2l-3-3zM4.165 13.668c.09.18.23.343.438.419.207.075.412.04.58-.03.318-.13.635-.436.926-.786.333-.401.683-.927 1.021-1.51a11.651 11.651 0 0 1 1.997-.406c.3.383.61.713.91.95.28.22.603.403.934.417a.856.856 0 0 0 .51-.138c.155-.101.27-.247.354-.416.09-.181.145-.37.138-.563a.844.844 0 0 0-.2-.518c-.226-.27-.596-.4-.96-.465a5.76 5.76 0 0 0-1.335-.05 10.954 10.954 0 0 1-.98-1.686c.25-.66.437-1.284.52-1.794.036-.218.055-.426.048-.614a1.238 1.238 0 0 0-.127-.538.7.7 0 0 0-.477-.365c-.202-.043-.41 0-.601.077-.377.15-.576.47-.651.823-.073.34-.04.736.046 1.136.088.406.238.848.43 1.295a19.697 19.697 0 0 1-1.062 2.227 7.662 7.662 0 0 0-1.482.645c-.37.22-.699.48-.897.787-.21.326-.275.714-.08 1.103z"/>
                </svg>
            </div>
            <div onClick={abrirMap} className={`flex justify-center items-center h-10 w-14 cursor-pointer ${map === 'closeMap'?'hover:bg-blue-900':'bg-blue-900'}`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" fill="rgb(185,192,198)" class="bi bi-map-fill" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M16 .5a.5.5 0 0 0-.598-.49L10.5.99 5.598.01a.5.5 0 0 0-.196 0l-5 1A.5.5 0 0 0 0 1.5v14a.5.5 0 0 0 .598.49l4.902-.98 4.902.98a.502.502 0 0 0 .196 0l5-1A.5.5 0 0 0 16 14.5V.5zM5 14.09V1.11l.5-.1.5.1v12.98l-.402-.08a.498.498 0 0 0-.196 0L5 14.09zm5 .8V1.91l.402.08a.5.5 0 0 0 .196 0L11 1.91v12.98l-.5.1-.5-.1z"/>
                </svg>
            </div>
            {
                capas === "closeCap"?null:<Capas estado={props.estado} openCloseEm2016T2={props.openCloseEm2016T2} openCloseEm2017T2={props.openCloseEm2017T2} openCloseEm2018T1={props.openCloseEm2018T1} openCloseEm2018T3={props.openCloseEm2018T3} />
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