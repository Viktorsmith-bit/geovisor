import { useState } from "react";
import Filtro1 from "./componentes/filtro1";
import Filtro2 from "./componentes/filtro2";
import Filtro3 from "./componentes/filtro3";

export default function Filtro(props){
    const [fuente, setFuente] = useState('closeFuente')
    const [fill, setFill] = useState('agua')
    function openCloseFuente(e){e.preventDefault(),setFuente(fuente === 'openFuente'?'closeFuente':'openFuente')}
    function openCloseFill(e){e.preventDefault(),setFill(e.target.id)}
    return(
        <div className={`absolute top-0 right-96 ${props.aside === 'close'?'mr-16':'mr-44'} h-screen w-80 lg:w-96 py-12 ${props.filtro === 'closeFil'?'hidden':'bloque'}`} style={{zIndex:"1000"}}>
            <div className="w-80 lg:w-96 bg-white h-full overflow-y-auto overflow-x-hidden p-4 rounded-sm background-color">
                <div className='border-color'>
                    <h1 onClick={openCloseFuente} className="w-full px-2 py-2 rounded-sm cursor-pointer text-sm text-white text-sm back-gris">Fuente</h1>
                    <div className={`flex flex-col gap-2.5 p-3 ${fuente === 'closeFuente'?'hidden':'bloque'}`}>
                        <div className="flex items-center gap-2">
                            <div id="agua" onClick={openCloseFill} className={`w-4 h-4 rounded-sm border-color cursor-pointer ${fill === 'agua'?'back-gris':null}`}></div>
                            <h1 id="agua" onClick={openCloseFill} className="text-sm text-white text-sm cursor-pointer">Calidad de Agua y Efluentes</h1>
                        </div>
                        <div className="flex items-center gap-2">
                            <div id="aire" onClick={openCloseFill} className={`w-4 h-4 rounded-sm border-color cursor-pointer ${fill === 'aire'?'back-gris':null}`}></div>
                            <h1 id="aire" onClick={openCloseFill} className="text-sm text-white text-sm cursor-pointer">Calidad del Aire</h1>
                        </div>
                        <div className="flex items-center gap-2">
                            <div id="suelo" onClick={openCloseFill} className={`w-4 h-4 rounded-sm border-color cursor-pointer ${fill === 'suelo'?'back-gris':null}`}></div>
                            <h1 id="suelo" onClick={openCloseFill} className="text-sm text-white text-sm cursor-pointer">Calidad del Suelo</h1>
                        </div>
                    </div>
                </div>
                <Filtro1 openCloseTipo1={props.openCloseTipo1} tipo1={props.tipo1} fill={fill} tipo={props.tipo} subTipo={props.subTipo} captarCambiosTipo={props.captarCambiosTipo} captarCambiosSubTipo={props.captarCambiosSubTipo} captarCambiosEsta={props.captarCambiosEsta} captarCambiosTemp={props.captarCambiosTemp} captarCambiosEca={props.captarCambiosEca} captarCambiosFecha={props.captarCambiosFecha} captarCambiosMes={props.captarCambiosMes} captarCambiosParam={props.captarCambiosParam}/>
                <Filtro2 openCloseTipo2={props.openCloseTipo2} tipo2={props.tipo2} fill={fill} tipo={props.tipo} captarCambiosTipo={props.captarCambiosTipo} captarCambiosTemp={props.captarCambiosTemp} captarCambiosEca={props.captarCambiosEca} captarCambiosEsta={props.captarCambiosEsta} captarCambiosFecha={props.captarCambiosFecha} captarCambiosMes={props.captarCambiosMes} captarCambiosParam={props.captarCambiosParam} />
                <Filtro3 openCloseTipo3={props.openCloseTipo3} tipo3={props.tipo3} fill={fill} tipo={props.tipo} captarCambiosTipo={props.captarCambiosTipo} captarCambiosEca={props.captarCambiosEca} captarCambiosFecha={props.captarCambiosFecha} captarCambiosEsta={props.captarCambiosEsta} captarCambiosMes={props.captarCambiosMes} captarCambiosParam={props.captarCambiosParam}/>
            </div>
        </div>
    );
}