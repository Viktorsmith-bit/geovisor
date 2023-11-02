import { Data } from './componentes/data';
import { Data2 } from './componentes/data';
import { Data3 } from './componentes/data';
export default function Datos(props){
    return(
        <div className="pr-4 overflow-y-auto overflow-x-hidden">
           {props.fuente === 'Calidad de Agua y Efluentes' && props.tipo.tipo1 === 'agua_subterranea'?<Data param={props.param.param1} ano={props.ano.ano1} valor={props.valor} state={props.state}/>:null}
           {props.fuente === 'Calidad de Agua y Efluentes' && props.tipo.tipo1 === 'agua_superficial'?<Data2 subTipo={props.subTipo} param={props.param.param2} ano={props.ano.ano2} valor={props.valor} state={props.state}/>:null}
           {props.fuente === 'Calidad de Agua y Efluentes' && props.tipo.tipo1 === 'puntos_vertimento'?<Data param={props.param.param3} ano={props.ano.ano3} valor={props.valor} state={props.state}/>:null}
           {props.fuente === 'Calidad del Aire' && props.tipo.tipo2 === 'calidad_aire'?<Data param={props.param.param4} ano={props.ano.ano4} valor={props.valor} state={props.state}/>:null}
           {props.fuente === 'Calidad del Aire' && props.tipo.tipo2 === 'calidad_ruido'?<Data3 param={props.param.param5} time={props.time} ano={props.ano.ano5} valor={props.valor} state={props.state}/>:null}
           {props.fuente === 'Calidad del Suelo' && props.tipo.tipo3 === 'calidad_suelo'?<Data param={props.param.param6} ano={props.ano.ano6} valor={props.valor} state={props.state}/>:null}
        </div>
    );
}