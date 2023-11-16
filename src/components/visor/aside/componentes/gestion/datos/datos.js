import { Datos1 } from "./componentes/datos1";
import { Datos2 } from "./componentes/datos2";
import { Datos3 } from "./componentes/datos3";
import { Datos4 } from "./componentes/datos4";
import { Datos5 } from "./componentes/datos5";
import { Datos6 } from "./componentes/datos6";

export default function Datos(props){
    return(
        <div className="px-4 py-2 overflow-y-auto overflow-x-hidden h-full">
            {props.tipo1 === 'agua_subterranea'?<Datos1 eca={props.eca} ano={props.ano} mes={props.mes} param={props.param} esta={props.esta} />:null}
            {props.tipo1 === 'agua_superficial'?<Datos2 temp={props.temp} eca={props.eca} ano={props.ano} mes={props.mes} param={props.param} subTipo={props.subTipo} esta={props.esta}/>:null}
            {props.tipo1 === 'puntos_vertimento'?<Datos3 eca={props.eca} ano={props.ano} mes={props.mes} param={props.param} esta={props.esta}/>:null}
            {props.tipo2 === 'calidad_aire'?<Datos4 eca={props.eca} ano={props.ano} mes={props.mes} param={props.param} esta={props.esta}/>:null}
            {props.tipo2 === 'calidad_ruido'?<Datos5 eca={props.eca} ano={props.ano} mes={props.mes} param={props.param} esta={props.esta}/>:null}
            {props.tipo3 === 'calidad_suelo'?<Datos6 eca={props.eca} ano={props.ano} mes={props.mes} param={props.param} esta={props.esta}/>:null}
        </div>
    );
}