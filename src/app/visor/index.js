'use client'
import { useState } from "react";
import Image from 'next/image';
import Link from 'next/link';
import {MapContainer, TileLayer, useMapEvent, useMap, WMSTileLayer } from "react-leaflet";
import { ImageMapLayer, FeatureLayer } from "react-esri-leaflet";
import EsriLeafletGeoSearch from "react-esri-leaflet/plugins/EsriLeafletGeoSearch";
import SearchButton from '../../components/visor/components/search';
import HomeButton from '../../components/visor/components/home';
import Aside from "../../components/visor/aside/asideRight";
import Panoramicas from '../../components/visor/components/panoramicas/panoramicas';
import Coordenadas360 from '../../components/visor/components/panoramicas/coordenadas';
import Geovisor from "@/components/visor/components/geovisor";
import Mensaje from "@/components/visor/components/mensaje";

import Distritos from "@/components/visor/database/distritos";
import Provincia from "@/components/visor/database/provincia";
import Departamentos from "../../components/visor/database/departamentos"
import AreaEfectivaPoligono from "../../components/visor/database/area_efectiva/area_efectiva_poligono"
import AreaInfluenciaAmbientalPoligono from "../../components/visor/database/area_influencia/area_influencia_poligono";
import AreaEfectivaPuntos from "@/components/visor/database/area_efectiva/area_efectiva_puntos";
import AreaInfluenciaAmbientalPuntos from "@/components/visor/database/area_influencia/area_influencia_puntos";
import Em2016T2 from "@/components/visor/database/agua_subterranea/em_2016_t2";
import Em2017T2 from "@/components/visor/database/agua_subterranea/em_2017_t2";
import Em2018T1 from "@/components/visor/database/agua_subterranea/em_2018_t1";
import HumedaParMicro from '../../components/visor/database/agua_superficial/temp_humeda/parmicro_em_mar_2019';
import HumedaParOrg from '../../components/visor/database/agua_superficial/temp_humeda/parorg_em_mar_2019';
import HumedaParFis from '../../components/visor/database/agua_superficial/temp_humeda/parfis_em_mar_2019';
import HumedaParIn from '../../components/visor/database/agua_superficial/temp_humeda/parin_em_mar_2019';
import HumedaParIno from '../../components/visor/database/agua_superficial/temp_humeda/parino_em_mar_2019';

export default function Home() {
    const [map, setMap] = useState(1)
    const [vic, setVic] = useState('close')
    const [state, setState] = useState()
    const [panam, setPanam] = useState('close')
    const [log, setLog] = useState('close')
    const [pdf, setPdf] = useState(false)
    const [lim, setLim] = useState({dep:'close', prov:'close', dist:'close'})
    const [estado, setEstado] = useState({em2016T2:'close', em2017T2:'close', em2018T1:'close', em2018T3:'close'})
    const [humeda, setHumeda] = useState({parMicro:'close', parOrg:'close', parFis:'close', parIn:'close', parIno:'close'})
    const [seca, setSeca] = useState({parMicro:'close', parOrg:'close', parFis:'close', parIn:'close', parIno:'close'})

    function openCloseVic(e){e.preventDefault(), setVic('open')}

    function openCloseLimDep(e){e.preventDefault(), setLim({...lim, dep:lim.dep === 'open'?'close':'open'})}
    function openCloseLimProv(e){e.preventDefault(), setLim({...lim, prov:lim.prov === 'open'?'close':'open'})}
    function openCloseLimDist(e){e.preventDefault(), setLim({...lim, dist:lim.dist === 'open'?'close':'open'})}

    function openCloseHumParMicro(e){e.preventDefault(), setHumeda({...humeda, parMicro:humeda.parMicro === 'open'?'close':'open'})}
    function openCloseHumParOrg(e){e.preventDefault(), setHumeda({...humeda, parOrg:humeda.parOrg === 'open'?'close':'open'})}
    function openCloseHumParFis(e){e.preventDefault(), setHumeda({...humeda, parFis:humeda.parFis=== 'open'?'close':'open'})}
    function openCloseHumParIn(e){e.preventDefault(), setHumeda({...humeda, parIn:humeda.parIn=== 'open'?'close':'open'})}
    function openCloseHumParIno(e){e.preventDefault(), setHumeda({...humeda, parIno:humeda.parIno === 'open'?'close':'open'})}
    
    function openCloseSecParMicro(e){e.preventDefault(), setHumeda({...humeda, parMicro:humeda.parMicro === 'open'?'close':'open'})}
    function openCloseSecParOrg(e){e.preventDefault(), setHumeda({...humeda, parMicro:humeda.parMicro === 'open'?'close':'open'})}
    function openCloseSecParFis(e){e.preventDefault(), setHumeda({...humeda, parMicro:humeda.parMicro === 'open'?'close':'open'})}
    function openCloseSecParIn(e){e.preventDefault(), setHumeda({...humeda, parMicro:humeda.parMicro === 'open'?'close':'open'})}
    function openCloseSecParIno(e){e.preventDefault(), setHumeda({...humeda, parMicro:humeda.parMicro === 'open'?'close':'open'})}

    function openCloseEm2016T2(e){e.preventDefault(), setEstado({...estado, em2016T2:estado.em2016T2 === 'open'?'close':'open'})}
    function openCloseEm2017T2(e){e.preventDefault(), setEstado({...estado, em2017T2:estado.em2017T2 === 'open'?'close':'open'})}
    function openCloseEm2018T1(e){e.preventDefault(), setEstado({...estado, em2018T1:estado.em2018T1 === 'open'?'close':'open'})}
    function openCloseEm2018T3(e){e.preventDefault(), setEstado({...estado, em2018T3:estado.em2018T3 === 'open'?'close':'open'})}

    function openVisualizarPdf(e){e.preventDefault(), setPdf(true)}
    function closeVisualizarPdf(e){e.preventDefault(), setPdf(false)}
    function openMap(e){e.preventDefault(); setMap(e.target.id)}

    function hundleClicClose360(e){e.preventDefault(), setVic(true)}
    function hundleClicClosePanam(e){e.preventDefault(), setPanam(panam === 'open'?'close':'open')}
    function hundleClicOpen360(e){e.preventDefault(), setState(e.target.id), setVic(false)}

    function openLog(e){
        e.preventDefault();
        setLog('open')
    }

    function closeLog(e){
        e.preventDefault();
        setLog('close')
    }

    return (
        <div className="section">
            <Aside 
                estado={estado} humeda={humeda} openCloseLimDep={openCloseLimDep} lim={lim} panam={panam}
                openLog={openLog} state={state} hundleClicClosePanam={hundleClicClosePanam} openCloseLimProv={openCloseLimProv} openCloseLimDist={openCloseLimDist}
                openCloseEm2016T2={openCloseEm2016T2} openCloseEm2017T2={openCloseEm2017T2} openCloseEm2018T1={openCloseEm2018T1} 
                openCloseEm2018T3={openCloseEm2018T3} map={map} openMap={openMap} openVisualizarPdf={openVisualizarPdf} pdf={pdf} 
                openCloseHumParFis={openCloseHumParFis} openCloseHumParIn={openCloseHumParIn} openCloseHumParIno={openCloseHumParIno} openCloseHumParMicro={openCloseHumParMicro} openCloseHumParOrg={openCloseHumParOrg}
            />
            <Geovisor />
            {vic?null:<Panoramicas hundleClicClose360={hundleClicClose360} state={state}/>}
            <MapContainer id="leaflet-container" center={[-11.65, -76.142071978681196]} zoom={6} scrollWheelZoom={true}>
                <TileLayer url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}" />
                <TileLayer attribution='Developed by Wlash Perú' url="https://stamen-tiles-{s}.a.ssl.fastly.net/toner-hybrid/{z}/{x}/{y}{r}.{ext}" ext='png' />
                <TileLayer attribution='Developed by Wlash Perú' url="https://stamen-tiles-{s}.a.ssl.fastly.net/toner-labels/{z}/{x}/{y}{r}.{ext}" ext='png' />
                
                <WMSTileLayer url="https://geo.serfor.gob.pe/geoservicios/services/Servicios_OGC/Zonificacion_Forestal/MapServer/WMSServer?request=GetCapabilities&service=WMS" layers='TOPO-WMS' />
                
                {
                    map === "1"?<TileLayer url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}" />:null
                }
                {
                    map === "2"?<TileLayer attribution='Developed by Wlash Perú' url="https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png" />:null
                }
                {
                    map === "3"?<TileLayer attribution='Developed by Wlash Perú' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />:null
                }
                {
                    map === "4"?<TileLayer attribution='Developed by Wlash Perú' url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png" />:null
                }
                {
                    map === "5"?<TileLayer attribution='Developed by Wlash Perú' url="https://tile.osm.ch/switzerland/{z}/{x}/{y}.png" />:null
                }

                {
                    map === "1"?<TileLayer attribution='Developed by Wlash Perú' url="https://stamen-tiles-{s}.a.ssl.fastly.net/toner-hybrid/{z}/{x}/{y}{r}.{ext}" ext='png' />:null
                }
                {
                    map === "1"?<TileLayer attribution='Developed by Wlash Perú' url="https://stamen-tiles-{s}.a.ssl.fastly.net/toner-labels/{z}/{x}/{y}{r}.{ext}" ext='png' />:null
                }

                {panam === "close"?null:<Coordenadas360 hundleClicOpen360={hundleClicOpen360}/>}
                <SearchButton />
                <HomeButton />
                {estado.em2016T2 === 'close'?<AreaEfectivaPoligono />:null}
                {estado.em2016T2 === 'close'?null:<Em2016T2 openCloseVic={openCloseVic} />}
                {estado.em2017T2 === 'close'?null:<Em2017T2 />}
                {estado.em2018T1 === 'close'?null:<Em2018T1 />}
                {humeda.parMicro === 'close'?null:<HumedaParMicro />}
                {humeda.parOrg === 'close'?null:<HumedaParOrg/>}
                {humeda.parFis === 'close'?null:<HumedaParFis />}
                {humeda.parIn === 'close'?null:<HumedaParIn />}
                {humeda.parIno === 'close'?null:<HumedaParIno />}
                {lim.dist === 'close'?null:<Distritos />}
                {lim.prov === 'close'?null:<Provincia />}
                {lim.dep === 'close'?null:<Departamentos />}
            </MapContainer>
            {pdf === false?null:<VisualizarPdf closeVisualizarPdf={closeVisualizarPdf} />}
            {log === 'close'?null:<Login closeLog={closeLog} />}
        </div>
    )
}

function VisualizarPdf(props){
    return(
        <div className="flex justify-center items-center absolute top-0 h-screen right-14 h-96 w-full opacity" style={{zIndex:"2000"}}>
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

function Login(props){
    return(
        <div className="flex justify-center items-center absolute top-0 h-screen w-full opacity px-4 lg:px-0" style={{zIndex:"2000"}}>
            <div className="flex-1 max-w-md bg-white p-5">
                <div className='flex items-center justify-between'>
                    <h1>Geovisor</h1>
                    <Image width={67.5} height={50}  src='/Chinalco.png' alt={'Chinalco'} />
                </div>
                <div className='border border-gray-200 p-5 mt-10 bg-white'>
                    <h1 className='text-black text-center'>¿Seguro que desea cerrar la sesión?</h1>
                    <Link href={"/"} >
                        <button className="mt-10 py-2 px-3 w-full back-color text-white">Cerrar sesión</button>
                    </Link>
                    <button onClick={props.closeLog} className="mt-3 py-2 px-3 w-full" style={{backgroundColor:'rgb(243, 244, 241)'}}>Cancelar</button>
                </div>
            </div>
        </div>
    );
}