import { useState } from "react";
import CalidadAgua from "./componentes/calidad_agua/calidadAgua";

export default function Capas(props){
    const [state, setState] = useState({caliAgua:'close',caliSuelo:'close',caliAire:'close',bio:'close',hidro:'close'});

    return(
        <div className="absolute top-0 right-14 h-screen w-96 " style={{zIndex:"1000", backgroundColor:"rgb(30,39,49)"}}>
            <div className="flex items-center px-4 h-10 " style={{backgroundColor:'rgb(69, 128, 94)'}}>
                <div className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="currentColor" class="bi bi-stack" viewBox="0 0 16 16">
                        <path d="m14.12 10.163 1.715.858c.22.11.22.424 0 .534L8.267 15.34a.598.598 0 0 1-.534 0L.165 11.555a.299.299 0 0 1 0-.534l1.716-.858 5.317 2.659c.505.252 1.1.252 1.604 0l5.317-2.66zM7.733.063a.598.598 0 0 1 .534 0l7.568 3.784a.3.3 0 0 1 0 .535L8.267 8.165a.598.598 0 0 1-.534 0L.165 4.382a.299.299 0 0 1 0-.535L7.733.063z"/>
                        <path d="m14.12 6.576 1.715.858c.22.11.22.424 0 .534l-7.568 3.784a.598.598 0 0 1-.534 0L.165 7.968a.299.299 0 0 1 0-.534l1.716-.858 5.317 2.659c.505.252 1.1.252 1.604 0l5.317-2.659z"/>
                    </svg>
                    <h1 className="text-base">Lista de capas</h1>
                </div>
            </div>
            <div className="flex items-center h-10 border-b border-gray-500 px-4">
                <h1 className="text-sm text-color">Estaciones de monitoreo</h1>
            </div>
            <div className="overflow-y-auto">
                <div className="overflow-y-auto">
                    <div className="px-4">
                        <div className="mt-2" onClick={(e)=>{ e.preventDefault(), setState({...state, caliAgua:state.caliAgua === 'open'?'close':'open'})}} >
                            <div className={`flex items-center gap-1 h-7`}>
                                {state.caliAgua === 'close'?<Close />:<Open />}
                                <h1 className="text-sm text-color cursor-pointer">Calidad del agua y efluentes</h1>
                            </div>
                        </div>
                        {state.caliAgua === 'close'?null:<CalidadAgua estado={props.estado} openCloseEm2016T2={props.openCloseEm2016T2} openCloseEm2017T2={props.openCloseEm2017T2} openCloseEm2018T1={props.openCloseEm2018T1} openCloseEm2018T3={props.openCloseEm2018T3} />}
                        <div className="" onClick={(e)=>{ e.preventDefault(), setState({...state, caliAire:state.caliAire === 'open'?'close':'open'})}}>
                            <div className={`flex items-center gap-1 h-7`}>
                                {state.caliAire === 'close'?<Close />:<Open />}
                                <h1 className="text-sm text-color cursor-pointer">Calidad del aire</h1>
                            </div>
                        </div>
                        <div className="" onClick={(e)=>{ e.preventDefault(), setState({...state, caliSuelo:state.caliSuelo=== 'open'?'close':'open'})}}>
                            <div className="flex items-center gap-1 h-7">
                                {state.caliSuelo === 'close'?<Close />:<Open />}
                                <h1 className="text-sm text-color cursor-pointer">Calidad del suelo</h1>
                            </div>
                        </div>
                        <div className="" onClick={(e)=>{e.preventDefault(), setState({...state, bio:state.bio === 'open'?'close':'open'})}}>
                            <div className="flex items-center gap-1 h-7">
                                {state.bio === 'close'?<Close />:<Open />}
                                <h1 className="text-sm text-color cursor-pointer">Biológico terrestre</h1>
                            </div>
                        </div>
                        <div className="" onClick={(e)=>{e.preventDefault(), setState({...state, hidro:state.hidro === 'open'?'close':'open'})}}>
                            <div className="flex items-center gap-1 h-7">
                                {state.hidro === 'close'?<Close />:<Open />}
                                <h1 className="text-sm text-color cursor-pointer">Hidrobiología</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function Open(){
    return(
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="rgb(185,192,198)" className="cursor-pointer bi bi-caret-down-fill" viewBox="0 0 16 16">
            <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
        </svg>
        
    );
}

function Close(){
    return(
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="rgb(185,192,198)" className="cursor-pointer bi bi-caret-right-fill" viewBox="0 0 16 16">
            <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
        </svg>
    );
}

