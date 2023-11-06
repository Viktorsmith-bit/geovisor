'use client'
import { useState , createContext, useContext, useCallback, useMemo} from "react";
import {MapContainer, TileLayer, useMapEvent, useMap, WMSTileLayer } from "react-leaflet";
import ContextMap from "../provider/context";
import Vector from "@/components/visor/database/vector";
import SearchButton from '../../components/visor/components/search';
import HomeButton from '../../components/visor/components/home';
import Aside from "../../components/visor/aside/asideRight";
import Panoramicas from '../../components/visor/components/panoramicas/panoramicas';
import Coordenadas360 from '../../components/visor/components/panoramicas/coordenadas';
import Geovisor from "@/components/visor/components/geovisor";
import Logout from "@/components/visor/components/logout";

const ContextCapas = createContext()
export function useContextCapasMap(){
    return useContext(ContextCapas)
}
export default function Home(props) {
    const [map, setMap] = useState(1)
    const [vic, setVic] = useState(false)
    const [state, setState] = useState()
    const [panam, setPanam] = useState('close')
    const [log, setLog] = useState('close')

    const openMap = useCallback((e)=>{e.preventDefault(); setMap(e.target.id)},[map])
    const hundleClicClose360 = useCallback((e)=>{e.preventDefault(), setVic(false)},[vic])
    const hundleClicOpenClosePanam = useCallback((e)=>{e.preventDefault(), setPanam(panam === 'open'?'close':'open')},[panam])
    const hundleClicOpen360 = (e)=>{e.preventDefault(), setState(e.target.id), setVic(true)}
    const openLog = useCallback((e)=>{e.preventDefault(),setLog('open')},[log])
    const closeLog = useCallback((e)=>{e.preventDefault(),setLog('close')},[log])

    const contextValue = useMemo(()=>({
        panam,
        state,
        openMap,
        hundleClicClose360,
        hundleClicOpenClosePanam,
        hundleClicOpen360,
        openLog,
        closeLog
    }),[panam,state,openMap,hundleClicClose360,hundleClicOpenClosePanam,hundleClicOpen360,openLog,closeLog])

    return (
        <ContextMap>
            <ContextCapas.Provider value={contextValue}>
                <Aside />
                <Geovisor />
                {vic === false?null:<Panoramicas />}
                <MapContainer id="leaflet-container" center={[-11.65, -76.142071978681196]} zoom={8} scrollWheelZoom={true}>
                    <TileLayer url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}" />
                    <TileLayer attribution='Developed by Wlash Perú' url="https://stamen-tiles-{s}.a.ssl.fastly.net/toner-hybrid/{z}/{x}/{y}{r}.{ext}" ext='png' />
                    <TileLayer attribution='Developed by Wlash Perú' url="https://stamen-tiles-{s}.a.ssl.fastly.net/toner-labels/{z}/{x}/{y}{r}.{ext}" ext='png' />
                    <WMSTileLayer url="https://geo.serfor.gob.pe/geoservicios/services/Servicios_OGC/Zonificacion_Forestal/MapServer/WMSServer?request=GetCapabilities&service=WMS" layers='TOPO-WMS' />
                    
                    {map === "1"?<TileLayer url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}" />:null}
                    {map === "2"?<TileLayer attribution='Developed by Wlash Perú' url="https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png" />:null}
                    {map === "3"?<TileLayer attribution='Developed by Wlash Perú' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />:null}
                    {map === "4"?<TileLayer attribution='Developed by Wlash Perú' url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png" />:null}
                    {map === "5"?<TileLayer attribution='Developed by Wlash Perú' url="https://tile.osm.ch/switzerland/{z}/{x}/{y}.png" />:null}
                    {map === "1"?<TileLayer attribution='Developed by Wlash Perú' url="https://stamen-tiles-{s}.a.ssl.fastly.net/toner-hybrid/{z}/{x}/{y}{r}.{ext}" ext='png' />:null}
                    {map === "1"?<TileLayer attribution='Developed by Wlash Perú' url="https://stamen-tiles-{s}.a.ssl.fastly.net/toner-labels/{z}/{x}/{y}{r}.{ext}" ext='png' />:null}

                    {panam === "close"?null:<Coordenadas360 />}
                    <SearchButton />
                    <HomeButton />
                    <Vector />
                </MapContainer>
                {log === 'close'?null:<Logout />}
            </ContextCapas.Provider>
        </ContextMap>
    )
}
