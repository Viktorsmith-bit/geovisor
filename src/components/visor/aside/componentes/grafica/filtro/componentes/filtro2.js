
export function Filtro2(props){
    return(
        <div className={`${props.fuente === 'Calidad del Aire'?'bloque':'hidden'}`}>
            <div className='flex gap-2'>
                <div className="section">
                    <h1 className="text-sm">Tipo</h1>
                    <select name="select" onChange={props.captarCambiosTipo} className='bg-gray-200 text-sm px-2 h-7 rounded-sm cursor-pointer input'>
                        <option value="calidad_aire" >Aire</option>
                        <option value="calidad_ruido">Ruido</option>
                    </select>
                </div>
                <div className={`${props.tipo.tipo2 === 'calidad_ruido'?'bloque':'hidden'}`}>
                    <h1 className="text-sm">Tiempo</h1>
                    <select name="select" onChange={props.captarCambiosTime} className='bg-gray-200 text-sm px-2 h-7 rounded-sm cursor-pointer input'>
                        <option value="Diurno" defaultValue>Diurno</option>
                        <option value="Nocturno">Nocturno</option>
                    </select>
                </div>
                <div className="flex items-center gap-2">
                    <div className="flex-1">
                        <h1 className="text-sm">Año</h1>
                        <select name="select" onChange={props.captarCambiosFecha2} className={`bg-gray-200 text-sm px-2 h-7 rounded-sm cursor-pointer input ${props.tipo.tipo2 === 'calidad_aire'?'bloque':'hidden'}`} >
                            <option value="todoAno" defaultValue>Todo</option>
                            <option value="2012">2012</option>
                            <option value="2013">2013</option>
                            <option value="2014">2014</option>
                            <option value="2015">2015</option>
                            <option value="2016">2016</option>
                            <option value="2017">2017</option>
                            <option value="2018">2018</option>
                        </select>
                        <select name="select" onChange={props.captarCambiosFecha2} className={`bg-gray-200 text-sm px-2 h-7 rounded-sm cursor-pointer input ${props.tipo.tipo2 === 'calidad_ruido'?'bloque':'hidden'}`} >
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
                </div>
                <div className="section">
                    <h1 className="text-sm ">Parámetros</h1>
                    <select name="select" onChange={props.captarCambiosParam2} className={`bg-gray-200 text-sm px-2 h-7 cursor-pointer input ${props.tipo.tipo2 === 'calidad_aire'?'bloque':'hidden'}`}>
                        <option value="PM10" defaultValue>1. PM10</option>
                        <option value="PM2.5">2. PM2.5</option>
                        <option value="SO2">3. SO2</option>
                        <option value="CO">4. CO</option>
                        <option value="NO2">5. NO2</option>
                        <option value="PB">6. PB</option>
                        <option value="AS">7. AS</option>
                    </select>
                    <select name="select" onChange={props.captarCambiosParam2} className={`bg-gray-200 text-sm px-2 h-7 cursor-pointer input ${props.tipo.tipo2 === 'calidad_ruido'?'bloque':'hidden'}`}>
                        <option value="LAeqT" defaultValue>1. LAeqT</option>
                    </select>
                </div>
            </div>
        </div>
    );
}