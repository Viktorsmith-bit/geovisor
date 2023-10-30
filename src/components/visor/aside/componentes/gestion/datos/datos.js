import Datos1 from "./componentes/datos1";
import Datos2 from "./componentes/datos2";
import Datos3 from "./componentes/datos3";
import Datos4 from "./componentes/datos4";
import Datos5 from "./componentes/datos5";
import Datos6 from "./componentes/datos6";

export default function Datos(props){
    return(
        <div className="px-4 py-2 overflow-y-auto overflow-x-hidden h-full">
            {props.tipo === 'Agua subterránea'?<Datos1 eca={props.eca} ano={props.ano} mes={props.mes} param={props.param} esta={props.esta} />:null}
            {props.tipo === 'Agua superficial'?<Datos2 temp={props.temp} eca={props.eca} ano={props.ano} mes={props.mes} param={props.param} subTipo={props.subTipo} esta={props.esta}/>:null}
            {props.tipo === 'Puntos de vertimento'?<Datos3 eca={props.eca} ano={props.ano} mes={props.mes} param={props.param} esta={props.esta}/>:null}
            {props.tipo === 'Aire'?<Datos4 eca={props.eca} ano={props.ano} mes={props.mes} param={props.param} esta={props.esta}/>:null}
            {props.tipo === 'Ruido'?<Datos5 eca={props.eca} ano={props.ano} mes={props.mes} param={props.param} esta={props.esta}/>:null}
            {props.tipo === 'Suelo'?<Datos6 eca={props.eca} ano={props.ano} mes={props.mes} param={props.param} esta={props.esta}/>:null}
        </div>
    );
}