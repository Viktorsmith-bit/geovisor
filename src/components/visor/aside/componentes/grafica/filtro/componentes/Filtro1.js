import { AguaSubParam } from "../../parametros/parametros";
import { AguaSupParam } from "../../parametros/parametros";
import { PuntosVertimento } from "../../parametros/parametros";

export function Filtro1(props){
    return(
        <div className={`${props.fuente === 'Calidad de Agua y Efluentes'?'bloque':'hidden'}`}>
            <div className='flex gap-2'>
                <div className="section">
                    <h1 className="text-sm">Tipo</h1>
                    <select name="select" onChange={props.captarCambiosTipo} className='text-sm px-2 h-7 rounded-sm cursor-pointer input bg-gray-200'>
                        <option value="agua_subterranea">Agua subterránea</option>
                        <option value="agua_superficial">Agua superficial</option>
                        <option value="puntos_vertimento">Puntos de vertimento</option>
                    </select>
                </div>
                <div className={`${props.tipo.tipo1 === 'agua_superficial' && props.fuente === 'Calidad de Agua y Efluentes'?'bloque':'hidden'}`}>
                    <h1 className="text-sm">Sub tipo</h1>
                    <select name="select" onChange={props.captarCambiosSubTipo} className='text-sm px-2 h-7 rounded-sm cursor-pointer input bg-gray-200'>
                        <option value="Parámetro Microbiológico y Parasitológico" defaultValue>Parámetro Microbiológico y Parasitológico</option>
                        <option value="Parámetro Orgánico">Parámetro Orgánico</option>
                        <option value="Parámetro Fisicoquímico">Parámetro Fisicoquímico</option>
                        <option value="Parámetro In Situ">Parámetro In Situ</option>
                        <option value="Parámetro Inorgánico">Parámetro Inorgánico</option>
                    </select>
                </div>
                <div className="flex items-center gap-2">
                    <div className="flex-1">
                        <h1 className="text-sm">Año</h1>
                        <select name="select" onChange={props.captarCambiosFecha} className={`bg-gray-200 text-sm px-2 h-7 rounded-sm cursor-pointer input ${props.tipo.tipo1  === 'agua_subterranea'?'bloque':'hidden'}`} >
                            <option value="todoAno" defaultValue>Todo</option>
                            <option value="2016">2016</option>
                            <option value="2017">2017</option>
                            <option value="2018">2018</option>
                        </select>
                        <select name="select" onChange={props.captarCambiosFecha} className={`bg-gray-200 text-sm px-2 h-7 rounded-sm cursor-pointer input ${props.tipo.tipo1 === 'agua_superficial'?'bloque':'hidden'}`} >
                            <option value="todoAno" defaultValue>Todo</option>
                            <option value="2018">2018</option>
                            <option value="2019">2019</option>
                        </select>
                        <select name="select" onChange={props.captarCambiosFecha} className={`bg-gray-200 text-sm px-2 h-7 rounded-sm cursor-pointer input ${props.tipo.tipo1  === 'puntos_vertimento'?'bloque':'hidden'}`} >
                            <option value="todoAno" defaultValue>Todo</option>
                            <option value="2016" >2016</option>
                            <option value="2017">2017</option>
                            <option value="2018">2018</option>
                        </select>
                    </div>
                </div>
                <div className="section">
                    <h1 className="text-sm">Parámetros</h1>
                    <AguaSubParam captarCambiosParam={props.captarCambiosParam} tipo={props.tipo} />
                    <AguaSupParam captarCambiosParam={props.captarCambiosParam} tipo={props.tipo} subTipo={props.subTipo}/>
                    <PuntosVertimento captarCambiosParam={props.captarCambiosParam} tipo={props.tipo}/>
                </div>
            </div>
        </div>
    );
}

