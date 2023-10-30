import { Data } from './componentes/data';
import { Data2 } from './componentes/data';

export default function Datos(props){
    return(
        <div className="px-4 py-2 overflow-y-auto overflow-x-hidden">
           {props.tipo === 'agua_subterranea'?<Data param={props.param.param1} ano={props.ano.ano1} valor={props.valor} state={props.state}/>:null}
           {props.tipo === 'agua_superficial'?<Data2 subTipo={props.subTipo} param={props.param.param2} ano={props.ano.ano2} valor={props.valor} state={props.state}/>:null}
           {props.tipo === 'puntos_vertimento'?<Data param={props.param.param3} ano={props.ano.ano3} valor={props.valor} state={props.state}/>:null}
           {props.tipo === 'calidad_aire'?<Data param={props.param.param4} ano={props.ano.ano4} valor={props.valor} state={props.state}/>:null}
           {props.tipo === 'calidad_ruido'?<Data param={props.param.param5} ano={props.ano.ano5} valor={props.valor} state={props.state}/>:null}
           {props.tipo === 'calidad_suelo'?<Data param={props.param.param6} ano={props.ano.ano6} valor={props.valor} state={props.state}/>:null}
        </div>
    );
}