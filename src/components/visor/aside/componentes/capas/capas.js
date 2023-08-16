import { Fragment, useState } from "react";
import CalidadAgua from "./componentes/calidad_agua/calidadAgua";

export default function Capas(props){
    const [state, setState] = useState({caliAgua:'close',caliSuelo:'close',caliAire:'close',bio:'close',hidro:'close'});

    return(
        <div className="absolute top-0 right-14 h-screen w-96 bg-white border-r border-gray-200 overflow-y-auto overflow-x-hidden" style={{zIndex:"1000"}}>
            <div className="flex w-96 h-10">
                <div className="fixed flex items-center w-96 h-10 background-color">
                    <div className="flex items-center w-full gap-2 h-6 px-4 border-r-2 border-blue-500">
                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="white" class="bi bi-stack" viewBox="0 0 16 16">
                            <path d="m14.12 10.163 1.715.858c.22.11.22.424 0 .534L8.267 15.34a.598.598 0 0 1-.534 0L.165 11.555a.299.299 0 0 1 0-.534l1.716-.858 5.317 2.659c.505.252 1.1.252 1.604 0l5.317-2.66zM7.733.063a.598.598 0 0 1 .534 0l7.568 3.784a.3.3 0 0 1 0 .535L8.267 8.165a.598.598 0 0 1-.534 0L.165 4.382a.299.299 0 0 1 0-.535L7.733.063z"/>
                            <path d="m14.12 6.576 1.715.858c.22.11.22.424 0 .534l-7.568 3.784a.598.598 0 0 1-.534 0L.165 7.968a.299.299 0 0 1 0-.534l1.716-.858 5.317 2.659c.505.252 1.1.252 1.604 0l5.317-2.659z"/>
                        </svg>
                        <h1 className="text-sm text-white">Lista de capas</h1>
                    </div>
                </div>
            </div>
            <div className="flex items-center px-4 h-10 back-color ">
                <div className="flex w-full h-6 ">
                    <div className="flex items-center justify-center bg-gray-200 h-6 w-10">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                        </svg>
                    </div>
                    <input className="input w-full h-6 " />
                </div>
            </div>
            <div className="px-4">
                <h1 className="flex items-center text-sm text-color border-b border-gray-500 w-full h-10">Estaciones de monitoreo</h1>
            </div>
            <div className="">
                <Input nombre={'Estaciones de muestreo'} estado={props.panam} evento={props.hundleClicClosePanam} />
                <div className="px-4" onClick={(e)=>{ e.preventDefault(), setState({...state, caliAgua:state.caliAgua === 'open'?'close':'open'})}} >
                    <div className={`flex items-center gap-1 h-7`}>
                        {state.caliAgua === 'close'?<Close />:<Open />}
                        <h1 className="text-sm text-color cursor-pointer">Calidad del agua y efluentes</h1>
                    </div>
                </div>
                {state.caliAgua === 'close'?null:<CalidadAgua humeda={props.humeda} openCloseHumParFis={props.openCloseHumParFis} openCloseHumParIn={props.openCloseHumParIn} openCloseHumParIno={props.openCloseHumParIno} openCloseHumParMicro={props.openCloseHumParMicro} openCloseHumParOrg={props.openCloseHumParOrg} estado={props.estado} openCloseEm2016T2={props.openCloseEm2016T2} openCloseEm2017T2={props.openCloseEm2017T2} openCloseEm2018T1={props.openCloseEm2018T1} openCloseEm2018T3={props.openCloseEm2018T3} />}
                <div className="px-4" onClick={(e)=>{ e.preventDefault(), setState({...state, caliAire:state.caliAire === 'open'?'close':'open'})}}>
                    <div className={`flex items-center gap-1 h-7`}>
                        {state.caliAire === 'close'?<Close />:<Open />}
                        <h1 className="text-sm text-color cursor-pointer">Calidad del aire</h1>
                    </div>
                </div>
                <div className="px-4" onClick={(e)=>{ e.preventDefault(), setState({...state, caliSuelo:state.caliSuelo=== 'open'?'close':'open'})}}>
                    <div className="flex items-center gap-1 h-7">
                        {state.caliSuelo === 'close'?<Close />:<Open />}
                        <h1 className="text-sm text-color cursor-pointer">Calidad del suelo</h1>
                    </div>
                </div>
            </div>
        </div>
    );
}


function Open(){
    return(
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="bi bi-dash-square" viewBox="0 0 16 16">
            <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
            <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>
        </svg>
        
    );
}

function Close(){
    return(
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="bi bi-plus-square" viewBox="0 0 16 16">
            <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
        </svg>
    );
}

function Input({estado, evento, nombre}){
    return(
        <div className="px-4">
            <div className="flex items-center gap-1 h-7">
                <OpenCloseInput input={estado} />
                <h1 onClick={evento} className="text-sm text-color cursor-pointer">{nombre}</h1>
            </div>
        </div>
    );
}

function OpenCloseInput({input}){
    return(
        <Fragment>
            {
                input === 'close'?<div className="h-3.5 w-3.5 rounded-sm border border-gray-500"></div>:<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="rgb(0, 96, 150)" className="bi bi-check-square-fill" viewBox="0 0 16 16">
                    <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm10.03 4.97a.75.75 0 0 1 .011 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.75.75 0 0 1 1.08-.022z"/>
                </svg>
            }
        </Fragment>
    );
}