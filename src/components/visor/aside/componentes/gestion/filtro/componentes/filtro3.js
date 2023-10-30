import { Fragment} from "react";

export default function Filtro3(props){
    return(
        <div className={`${props.fuente === 'Calidad del Suelo'?'bloque':'hidden'}`}>
            <h1 className="text-white text-sm mt-5">Tipo</h1>
            <select name="select" onChange={props.captarCambiosTipo} className='w-full text-white text-sm px-2 h-8 rounded-sm mt-2 cursor-pointer input' style={{backgroundColor:'rgb(60,60,60)'}}>
                <option value="seleccion">Seleccione una opción</option>
                <option value="Suelo">Suelo</option>
            </select>
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
                    <select name="select" onChange={props.captarCambiosEsta} className={`w-full text-white text-sm px-2 h-8 rounded-sm cursor-pointer input mt-2`} style={{backgroundColor:'rgb(60,60,60)'}}>
                        <option value="todoEm" defaultValue>Todo</option>
                        <option value="OPT-05-01">OPT-05-01</option>
                        <option value="OPT-05-02">OPT-05-02</option>
                        <option value="OPT-07-06">OPT-07-06</option>
                        <option value="OPT-07-08">OPT-07-08</option>
                        <option value="OPT-08-04">OPT-08-04</option>
                        <option value="OPT-08-06">OPT-08-06</option>
                        <option value="OPT-18-01">OPT-18-01</option>
                    </select>
                </div>
            </div>
            <div className="flex items-center gap-2 mt-5">
                <div className="flex-1">
                    <h1 className="text-white text-sm">Año</h1>
                    <select name="select" onChange={props.captarCambiosFecha} className={`w-full text-white text-sm px-2 h-8 rounded-sm cursor-pointer input mt-2`} style={{backgroundColor:'rgb(60,60,60)'}}>
                        <option value="todoAno" defaultValue>Todo</option>
                        <option value="2015">2015</option>
                        <option value="2017">2017</option>
                        <option value="2018">2018</option>
                    </select>
                </div>
            </div>
            <h1 className="text-white text-sm mt-5">Parámetros</h1>
            <select name="select" onChange={props.captarCambiosParam} className={`w-full text-sm px-2 h-8 text-white mt-2 cursor-pointer input`} style={{backgroundColor:'rgb(60,60,60)'}}>
                <option value="todoParam" defaultValue>Todo</option>
                <option value="AS" >1. AS</option>
                <option value="BA">2. BA</option>
                <option value="CD">3. CD</option>
                <option value="CR">4. CR</option>
                <option value="CR VI">5. CR VI</option>
                <option value="HG">6. HG</option>
                <option value="PB">7. PB</option>
                <option value="Cianuro Libre">8. Cianuro Libre</option>
                <option value="FH1">9. FH1</option>
                <option value="FH2">10. FH2</option>
                <option value="FH3">11. FH3</option>
            </select>
        </div>
    );
}
{
    /**
     *  <div className="flex-1">
            <h1 className="text-white text-sm">Mes</h1>
            <select name="select" onChange={props.captarCambiosMes} className={`w-full text-white text-sm px-2 h-8 rounded-sm cursor-pointer input mt-2 ${props.tipo === 'Puntos de vertimento'?'bloque':'hidden'}`} style={{backgroundColor:'rgb(60,60,60)'}}>
                <option value="todoMes">Todo</option>
                <option value="Enero">Enero</option>
                <option value="Febero">Febero</option>
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
     */
}