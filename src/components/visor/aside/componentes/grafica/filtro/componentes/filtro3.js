import { Fragment } from "react";

export default function Filtro3(props){
    return(
        <div className={`${props.fuente === 'Calidad del Suelo'?'bloque':'hidden'}`}>
            <div className='flex gap-2'>
                <div className="section">
                    <h1 className="text-sm">Tipo</h1>
                    <select name="select" onChange={props.captarCambiosTipo} className='text-sm px-2 h-7 rounded-sm cursor-pointer input bg-gray-200'>
                        <option value="seleccione" defaultValue>Seleccione una opción</option>
                        <option value="calidad_suelo">Suelo</option>
                    </select>
                </div>
                <div className="flex items-center gap-2">
                    <div className="flex-1">
                        <h1 className="text-sm">Año</h1>
                        <select name="select" onChange={props.captarCambiosFecha} className={`bg-gray-200 text-sm px-2 h-7 rounded-sm cursor-pointer input`} >
                            <option value="todoAno" defaultValue>Todo</option>
                            <option value="2015">2015</option>
                            <option value="2017">2017</option>
                            <option value="2018">2018</option>
                        </select>
                    </div>
                </div>
                <div className="section">
                <h1 className="text-sm">Parámetros</h1>
                <select name="select" onChange={props.captarCambiosParam} className={`bg-gray-200 text-sm px-2 h-7 cursor-pointer input`}>
                    <option value="AS" defaultValue>1. AS</option>
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
            </div>
        </div>
    );
}