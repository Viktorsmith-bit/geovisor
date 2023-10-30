import { Fragment} from "react";

export default function Filtro2(props){
    return(
        <div className={`${props.fuente === 'Calidad del Aire'?'bloque':'hidden'}`}>
            <h1 className="text-white text-sm mt-5">Tipo</h1>
            <select name="select" onChange={props.captarCambiosTipo} className='w-full text-white text-sm px-2 h-8 rounded-sm mt-2 cursor-pointer input' style={{backgroundColor:'rgb(60,60,60)'}}>
                <option value="seleccion">Seleccione una opción</option>
                <option value="Aire" defaultValue>Aire</option>
                <option value="Ruido">Ruido</option>
            </select>
            <div className={`${props.tipo === 'Ruido'?'bloque':'hidden'}`}>
                <h1 className="text-white text-sm mt-5">Tiempo</h1>
                <select name="select" onChange={props.captarCambiosTemp} className='w-full text-white text-sm px-2 h-8 rounded-sm mt-2 cursor-pointer input' style={{backgroundColor:'rgb(60,60,60)'}}>
                    <option value="Temporada húmeda" defaultValue>Diurno</option>
                    <option value="Temporada seca">Nocturno</option>
                </select>
            </div>
            <div className="flex items-center gap-2 mt-5">
                <div className="flex-1">
                    <h1 className="text-white text-sm">ECA</h1>
                    <select name="select" onChange={props.captarCambiosEca} className='w-full text-white text-sm px-2 h-8 rounded-sm cursor-pointer input mt-2' style={{backgroundColor:'rgb(60,60,60)'}}>
                        <option value="todo" defaultValue>Todo</option>
                        <option value="excede" >Excede</option>
                        <option value="casi" >Próximo</option>
                        <option value="noExcede">No excede</option>
                    </select>
                </div>
                <div className="flex-1">
                    <h1 className="text-white text-sm">Estación</h1>
                    <select name="select" onChange={props.captarCambiosEsta} className={`w-full text-white text-sm px-2 h-8 rounded-sm cursor-pointer input mt-2 ${props.tipo === 'Aire'?'bloque':'hidden'}`} style={{backgroundColor:'rgb(60,60,60)'}}>
                        <option value="todoEm" defaultValue>Todo</option>
                        <option value="Balcanes M-2">Balcanes M-2</option>
                        <option value="Rumichaca M-3" >Rumichaca M-3</option>
                    </select>
                    <select name="select" onChange={props.captarCambiosEsta} className={`w-full text-white text-sm px-2 h-8 rounded-sm cursor-pointer input mt-2 ${props.tipo === 'Ruido'?'bloque':'hidden'}`} style={{backgroundColor:'rgb(60,60,60)'}}>
                        <option value="todoEm" defaultValue>Todo</option>
                        <option value="Balcanes M-2">Balcanes M-2</option>
                        <option value="Rumichaca M-3" >Rumichaca M-3</option>
                    </select>
                </div>
            </div>
            <div className="flex items-center gap-2 mt-5">
                <div className="flex-1">
                    <h1 className="text-white text-sm">Año</h1>
                    <select name="select" onChange={props.captarCambiosFecha} className={`w-full text-white text-sm px-2 h-8 rounded-sm cursor-pointer input mt-2 ${props.tipo === 'Aire'?'bloque':'hidden'}`} style={{backgroundColor:'rgb(60,60,60)'}}>
                        <option value="todoAno" defaultValue>Todo</option>
                        <option value="2012">2012</option>
                        <option value="2013">2013</option>
                        <option value="2014">2014</option>
                        <option value="2015">2015</option>
                        <option value="2016">2016</option>
                        <option value="2017">2017</option>
                        <option value="2018">2018</option>
                    </select>
                    <select name="select" onChange={props.captarCambiosFecha} className={`w-full text-white text-sm px-2 h-8 rounded-sm cursor-pointer input mt-2 ${props.tipo === 'Ruido'?'bloque':'hidden'}`} style={{backgroundColor:'rgb(60,60,60)'}}>
                        <option value="todoAno" defaultValue>Todo</option>
                        <option value="2012">2012</option>
                        <option value="2013">2013</option>
                        <option value="2014">2014</option>
                        <option value="2015">2015</option>
                        <option value="2016">2016</option>
                        <option value="2017">2017</option>
                        <option value="2018">2018</option>
                    </select>
                </div>
                <div className="flex-1">
                    <h1 className="text-white text-sm">Mes</h1>
                    <select name="select" onChange={props.captarCambiosMes} className={`w-full text-white text-sm px-2 h-8 rounded-sm cursor-pointer input mt-2 ${props.tipo === 'Aire'?'bloque':'hidden'}`} style={{backgroundColor:'rgb(60,60,60)'}}>
                        <option value="todoMes" defaultValue>Todo</option>
                        <option value="Enero">Enero</option>
                        <option value="Febrero">Febrero</option>
                        <option value="Marzo">Marzo</option>
                        <option value="Abril">Abril</option>
                        <option value="Mayo">Mayo</option>
                        <option value="Junio">Junio</option>
                        <option value="Julio">Julio</option>
                        <option value="Agosto">Agosto</option>
                        <option value="Setiembre">Setiembre</option>
                        <option value="Octubre">Octubre</option>
                        <option value="Noviembre">Noviembre</option>
                        <option value="Diciembre">Diciembre</option>
                    </select>
                    <select name="select" onChange={props.captarCambiosMes} className={`w-full text-white text-sm px-2 h-8 rounded-sm cursor-pointer input mt-2 ${props.tipo === 'Ruido'?'bloque':'hidden'}`} style={{backgroundColor:'rgb(60,60,60)'}}>
                        <option value="todoMes">Todo</option>
                        <option value="Enero">Enero</option>
                        <option value="Febrero">Febrero</option>
                        <option value="Marzo">Marzo</option>
                        <option value="Abril">Abril</option>
                        <option value="Mayo">Mayo</option>
                        <option value="Junio">Junio</option>
                        <option value="Julio">Julio</option>
                        <option value="Agosto">Agosto</option>
                        <option value="Setiembre">Setiembre</option>
                        <option value="Octubre">Octubre</option>
                        <option value="Noviembre">Noviembre</option>
                        <option value="Diciembre">Diciembre</option>
                    </select>
                </div>
            </div>
            <h1 className="text-white text-sm mt-5">Parámetros</h1>
            <select name="select" onChange={props.captarCambiosParam} className={`w-full text-sm px-2 h-8 text-white mt-2 cursor-pointer input ${props.tipo === 'Aire'?'bloque':'hidden'}`} style={{backgroundColor:'rgb(60,60,60)'}}>
                <option value="todoParam" defaultValue>Todo</option>
                <option value="PM10" >1. PM10</option>
                <option value="PM2.5">2. PM2.5</option>
                <option value="SO2">3. SO2</option>
                <option value="CO">4. CO</option>
                <option value="NO2">5. NO2</option>
                <option value="PB">6. PB</option>
                <option value="AS">7. AS</option>
            </select>
            <select name="select" onChange={props.captarCambiosParam} className={`w-full text-sm px-2 h-8 text-white mt-2 cursor-pointer input ${props.tipo === 'Ruido'?'bloque':'hidden'}`} style={{backgroundColor:'rgb(60,60,60)'}}>
                <option value="todoParam" defaultValue>Todo</option>
                <option value="LAeqT" >1. LAeqT</option>
            </select>
        </div>
    );
}