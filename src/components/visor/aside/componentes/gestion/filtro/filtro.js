import Filtro1 from "./componentes/filtro1";
import Filtro2 from "./componentes/filtro2";
import Filtro3 from "./componentes/filtro3";

export default function Filtro(props){
    return(
        <div className={`absolute top-0 right-96 mr-16 h-screen w-80 lg:w-96 py-10 ${props.filtro === 'closeFil'?'hidden':'bloque'}`} style={{zIndex:"1000"}}>
            {/**<div className="absolute top-12 right-0 rigin-center rotate-45 h-8 w-8" style={{backgroundColor:'rgb(40,40,40)'}}></div> */}
            <div className="w-80 lg:w-96 bg-white h-full overflow-y-auto overflow-x-hidden px-4 py-8 rounded-sm" style={{backgroundColor:'rgb(40,40,40)'}}>
                <h1 className="text-white text-sm">Fuente</h1>
                <select name="select" onChange={props.captarCambiosFuente} className='w-full text-white text-sm px-2 h-8 mt-2 rounded-sm cursor-pointer input' style={{backgroundColor:'rgb(60,60,60)'}}>
                    <option value="Calidad de Agua y Efluentes" defaultValue>Calidad de Agua y Efluentes</option>
                    <option value="Calidad del Aire">Calidad del Aire</option>
                    <option value="Calidad del Suelo">Calidad del Suelo</option>
                </select>
                <Filtro1 fuente={props.fuente} tipo={props.tipo} subTipo={props.subTipo} captarCambiosTipo={props.captarCambiosTipo} captarCambiosSubTipo={props.captarCambiosSubTipo} captarCambiosEsta={props.captarCambiosEsta} captarCambiosTemp={props.captarCambiosTemp} captarCambiosEca={props.captarCambiosEca} captarCambiosFecha={props.captarCambiosFecha} captarCambiosMes={props.captarCambiosMes} captarCambiosParam={props.captarCambiosParam}/>
                <Filtro2 fuente={props.fuente} tipo={props.tipo} captarCambiosTipo={props.captarCambiosTipo} captarCambiosTemp={props.captarCambiosTemp} captarCambiosEca={props.captarCambiosEca} captarCambiosEsta={props.captarCambiosEsta} captarCambiosFecha={props.captarCambiosFecha} captarCambiosMes={props.captarCambiosMes} captarCambiosParam={props.captarCambiosParam} />
                <Filtro3 fuente={props.fuente} tipo={props.tipo} captarCambiosTipo={props.captarCambiosTipo} captarCambiosEca={props.captarCambiosEca} captarCambiosFecha={props.captarCambiosFecha} captarCambiosEsta={props.captarCambiosEsta} captarCambiosMes={props.captarCambiosMes} captarCambiosParam={props.captarCambiosParam}/>
            </div>
        </div>
    );
}