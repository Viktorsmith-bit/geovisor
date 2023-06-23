'use client'
import { useState } from "react";
import {MapContainer, TileLayer, Marker, Popup} from "react-leaflet";
import Aside from "../components/visor/aside/asideRight";
import Geovisor from "@/components/visor/components/geovisor";
import Mensaje from "@/components/visor/components/mensaje";
import Departamentos from "../components/visor/database/departamentos"
import AreaEfectivaPoligono from "../components/visor/database/area_efectiva/area_efectiva_poligono"
import AreaInfluenciaAmbientalPoligono from "../components/visor/database/area_influencia/area_influencia_poligono";
import AreaEfectivaPuntos from "@/components/visor/database/area_efectiva/area_efectiva_puntos";
import AreaInfluenciaAmbientalPuntos from "@/components/visor/database/area_influencia/area_influencia_puntos";
import Em2016T2 from "@/components/visor/database/agua_subterranea/em_2016_t2";
import Em2017T2 from "@/components/visor/database/agua_subterranea/em_2017_t2";
import Em2018T1 from "@/components/visor/database/agua_subterranea/em_2018_t1";
import Em2018T3 from "@/components/visor/database/agua_subterranea/em_2018_t3";

export default function Home() {
    const [map, setMap] = useState(1)
    const [pdf, setPdf] = useState(false)
    const [estado, setEstado] = useState({em2016T2:'close', em2017T2:'close', em2018T1:'close', em2018T3:'close'})

    function openCloseEm2016T2(e){e.preventDefault(), setEstado({...estado, em2016T2:estado.em2016T2 === 'open'?'close':'open'})}
    function openCloseEm2017T2(e){e.preventDefault(), setEstado({...estado, em2017T2:estado.em2017T2 === 'open'?'close':'open'})}
    function openCloseEm2018T1(e){e.preventDefault(), setEstado({...estado, em2018T1:estado.em2018T1 === 'open'?'close':'open'})}
    function openCloseEm2018T3(e){e.preventDefault(), setEstado({...estado, em2018T3:estado.em2018T3 === 'open'?'close':'open'})}

    function openVisualizarPdf(e){e.preventDefault(), setPdf(true)}
    function closeVisualizarPdf(e){e.preventDefault(), setPdf(false)}
    function openMap(e){e.preventDefault(); setMap(e.target.id)}

    return (
        <div className="section">
            <Aside estado={estado} openCloseEm2016T2={openCloseEm2016T2} openCloseEm2017T2={openCloseEm2017T2} openCloseEm2018T1={openCloseEm2018T1} openCloseEm2018T3={openCloseEm2018T3} map={map} openMap={openMap} openVisualizarPdf={openVisualizarPdf} pdf={pdf} />
            <Geovisor />
            <Mensaje />
          
            <MapContainer center={[-12.114974922615183, -76.142071978681196]} zoom={8} scrollWheelZoom={true}>
                <TileLayer url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}" />
                <TileLayer attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors' url="https://stamen-tiles-{s}.a.ssl.fastly.net/toner-hybrid/{z}/{x}/{y}{r}.{ext}" ext='png' />
                <TileLayer attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors' url="https://stamen-tiles-{s}.a.ssl.fastly.net/toner-labels/{z}/{x}/{y}{r}.{ext}" ext='png' />
                {
                    map === "1"?<TileLayer url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}" />:null
                }
                {
                    map === "2"?<TileLayer attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png" />:null
                }
                {
                    map === "3"?<TileLayer attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />:null
                }
                {
                    map === "4"?<TileLayer attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors' url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png" />:null
                }
                {
                    map === "5"?<TileLayer attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors' url="https://tile.osm.ch/switzerland/{z}/{x}/{y}.png" />:null
                }

                {
                    map === "1"?<TileLayer attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors' url="https://stamen-tiles-{s}.a.ssl.fastly.net/toner-hybrid/{z}/{x}/{y}{r}.{ext}" ext='png' />:null
                }
                {
                    map === "1"?<TileLayer attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors' url="https://stamen-tiles-{s}.a.ssl.fastly.net/toner-labels/{z}/{x}/{y}{r}.{ext}" ext='png' />:null
                }
        
               
                <AreaInfluenciaAmbientalPoligono />
                <AreaEfectivaPoligono />
                <AreaInfluenciaAmbientalPuntos />
                <AreaEfectivaPuntos />
                {
                    estado.em2016T2 === 'close'?null:<Em2016T2 />
                }
                {
                    estado.em2017T2 === 'close'?null:<Em2017T2 />
                }
                {
                    estado.em2018T1 === 'close'?null:<Em2018T1 />
                }
                {
                    estado.em2018T3 === 'close'?null:<Em2018T3 />
                }
                {
                    pdf === false?null:<VisualizarPdf closeVisualizarPdf={closeVisualizarPdf} />
                }
            </MapContainer>
        </div>
    )
}


{/** attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' **/}

function VisualizarPdf(props){
    return(
        <div className="flex justify-center items-center absolute top-0 h-screen right-14 h-96 w-full opacity" style={{zIndex:"1000"}}>
            <div className="flex-1 max-w-2xl">
                <div className="w-full bg-white px-3 py-1 rounded-t-md border-b border-gray-300">
                    <svg onClick={props.closeVisualizarPdf} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" className="cursor-pointer bi bi-x-lg" viewBox="0 0 16 16">
                        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
                    </svg>
                </div>
                <embed src="https://docs.google.com/gview?url=http://www.educoas.org/portal/bdigital/contenido/valzacchi/ValzacchiCapitulo-2New.pdf&embedded=true" style={{width:'100%', height:'600px'}}/>
                <div className="w-full bg-white h-3 rounded-b-md border-t border-gray-300">
                </div>
            </div>
        </div>
    );
}