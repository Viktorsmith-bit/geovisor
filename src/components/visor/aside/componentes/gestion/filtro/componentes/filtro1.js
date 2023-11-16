import { Fragment} from "react";

import { useState } from "react";
export default function Filtro1(props){
    const [tipo, setTipo] = useState('closeTipo')
    function openCloseTipo(e){e.preventDefault(),setTipo(tipo === 'openTipo'?'closeTipo':'openTipo')}

    return(
        <div className={`${props.fill === 'agua'?'bloque':'hidden'}`}>
            <div className='border-color mt-4'>
                <h1 onClick={openCloseTipo} className="w-full px-2 py-2 rounded-sm cursor-pointer text-sm text-white text-sm back-gris">Tipo</h1>
                <div className={`flex flex-col gap-2.5 p-3 ${tipo === 'closeTipo'?'hidden':'bloque'}`}>
                    <div className="flex items-center gap-2">
                        <div id="agua_subterranea" onClick={props.openCloseTipo1} className={`w-4 h-4 rounded-sm border-color cursor-pointer ${props.tipo1 === 'agua_subterranea'?'back-gris':null}`}></div>
                        <h1 id="agua_subterranea" onClick={props.openCloseTipo1} className="text-sm text-white text-sm cursor-pointer">Agua subterránea</h1>
                    </div>
                    <div className="flex items-center gap-2">
                        <div id="agua_superficial" onClick={props.openCloseTipo1} className={`w-4 h-4 rounded-sm border-color cursor-pointer ${props.tipo1 === 'agua_superficial'?'back-gris':null}`}></div>
                        <h1 id="agua_superficial" onClick={props.openCloseTipo1} className="text-sm text-white text-sm cursor-pointer">Agua superficial</h1>
                    </div>
                    <div className="flex items-center gap-2">
                        <div id="puntos_vertimento" onClick={props.openCloseTipo1} className={`w-4 h-4 rounded-sm border-color cursor-pointer ${props.tipo1 === 'puntos_vertimento'?'back-gris':null}`}></div>
                        <h1 id="puntos_vertimento" onClick={props.openCloseTipo1} className="text-sm text-white text-sm cursor-pointer">Puntos de vertimento</h1>
                    </div>
                </div>
            </div>
            <div className={`${props.tipo1 === 'agua_superficial'?'bloque':'hidden'}`}>
                <h1 className="text-white text-sm mt-5">Sub tipo</h1>
                <select name="select" onChange={props.captarCambiosSubTipo} className='w-full text-white text-sm px-2 h-8 rounded-sm mt-2 cursor-pointer input' style={{backgroundColor:'rgb(60,60,60)'}}>
                    <option value="todoSub" defaultValue>Todo</option>
                    <option value="Parámetro Microbiológico y Parasitológico">Parámetro Microbiológico y Parasitológico</option>
                    <option value="Parámetro Orgánico">Parámetro Orgánico</option>
                    <option value="Parámetro Fisicoquímico">Parámetro Fisicoquímico</option>
                    <option value="Parámetro In Situ">Parámetro In Situ</option>
                    <option value="Parámetro Inorgánico">Parámetro Inorgánico</option>
                </select>
            </div>
            <div className={`${props.tipo1 === 'agua_superficial'?'bloque':'hidden'}`}>
                <h1 className="text-white text-sm mt-5">Temporada</h1>
                <select name="select" onChange={props.captarCambiosTemp} className='w-full text-white text-sm px-2 h-8 rounded-sm mt-2 cursor-pointer input' style={{backgroundColor:'rgb(60,60,60)'}}>
                    <option value="todoTemp" defaultValue>Todo</option>
                    <option value="Temporada húmeda">Temporada húmeda</option>
                    <option value="Temporada seca">Temporada seca</option>
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
                    <select name="select" onChange={props.captarCambiosEsta} className={`w-full text-white text-sm px-2 h-8 rounded-sm cursor-pointer input mt-2 ${props.tipo1 === 'agua_subterranea'?'bloque':'hidden'}`} style={{backgroundColor:'rgb(60,60,60)'}}>
                        <option value="todoEm">Todo</option>
                        <option value="TA-12">TA-12</option>
                    </select>
                    <select name="select" onChange={props.captarCambiosEsta} className={`w-full text-white text-sm px-2 h-8 rounded-sm cursor-pointer input mt-2 ${props.tipo1 === 'agua_superficial'?'bloque':'hidden'}`} style={{backgroundColor:'rgb(60,60,60)'}}>
                        <option value="todoEm" defaultValue>Todo</option>
                        <option value="R-1">R-1</option>
                        <option value="R-2" >R-2</option>
                        <option value="R-3" >R-3</option>
                        <option value="R-7" >R-7</option>
                    </select>
                    <select name="select" onChange={props.captarCambiosEsta} className={`w-full text-white text-sm px-2 h-8 rounded-sm cursor-pointer input mt-2 ${props.tipo1  === 'puntos_vertimento'?'bloque':'hidden'}`} style={{backgroundColor:'rgb(60,60,60)'}}>
                        <option value="todoEm" defaultValue>Todo</option>
                        <option value="PTARD T1">PTARD T1</option>
                        <option value="PTARD T2" >PTARD T2</option>
                    </select>
                </div>
            </div>
            <div className="flex items-center gap-2 mt-5">
                <div className="flex-1">
                    <h1 className="text-white text-sm">Año</h1>
                    <select name="select" onChange={props.captarCambiosFecha} className={`w-full text-white text-sm px-2 h-8 rounded-sm cursor-pointer input mt-2 ${props.tipo1  === 'agua_subterranea'?'bloque':'hidden'}`} style={{backgroundColor:'rgb(60,60,60)'}}>
                        <option value="todoAno" defaultValue>Todo</option>
                        <option value="2016">2016</option>
                        <option value="2017">2017</option>
                        <option value="2018">2018</option>
                    </select>
                    <select name="select" onChange={props.captarCambiosFecha} className={`w-full text-white text-sm px-2 h-8 rounded-sm cursor-pointer input mt-2 ${props.tipo1  === 'agua_superficial'?'bloque':'hidden'}`} style={{backgroundColor:'rgb(60,60,60)'}}>
                        <option value="todoAno" defaultValue>Todo</option>
                        <option value="2018">2018</option>
                        <option value="2019">2019</option>
                    </select>
                    <select name="select" onChange={props.captarCambiosFecha} className={`w-full text-white text-sm px-2 h-8 rounded-sm cursor-pointer input mt-2 ${props.tipo1  === 'puntos_vertimento'?'bloque':'hidden'}`} style={{backgroundColor:'rgb(60,60,60)'}}>
                        <option value="todoAno" defaultValue>Todo</option>
                        <option value="2016" >2016</option>
                        <option value="2017">2017</option>
                        <option value="2018">2018</option>
                    </select>
                </div>
                <div className="flex-1">
                    <h1 className="text-white text-sm">{props.tipo1 === 'agua_subterranea'?'Trimestre':'Mes'}</h1>
                    <select name="select" onChange={props.captarCambiosMes} className={`w-full text-white text-sm px-2 h-8 rounded-sm cursor-pointer input mt-2 ${props.tipo1  === 'agua_subterranea'?'bloque':'hidden'}`} style={{backgroundColor:'rgb(60,60,60)'}}>
                        <option value="todoMes" defaultValue>Todo</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                    </select>
                    <select name="select" onChange={props.captarCambiosMes} className={`w-full text-white text-sm px-2 h-8 rounded-sm cursor-pointer input mt-2 ${props.tipo1  === 'agua_superficial'?'bloque':'hidden'}`} style={{backgroundColor:'rgb(60,60,60)'}}>
                        <option value="todoMes" defaultValue>Todo</option>
                        <option value="Setiembre">Setiembre</option>
                        <option value="Marzo">Marzo</option>
                    </select>
                    <select name="select" onChange={props.captarCambiosMes} className={`w-full text-white text-sm px-2 h-8 rounded-sm cursor-pointer input mt-2 ${props.tipo1  === 'puntos_vertimento'?'bloque':'hidden'}`} style={{backgroundColor:'rgb(60,60,60)'}}>
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
            <AguaSubParam captarCambiosParam={props.captarCambiosParam} tipo1={props.tipo1} />
            {props.tipo1  === 'agua_superficial'?<AguaSupParam captarCambiosParam={props.captarCambiosParam} tipo1={props.tipo1} subTipo={props.subTipo}/>:null}
            <PuntosVertimento captarCambiosParam={props.captarCambiosParam} tipo1={props.tipo1}/>
        </div>
    );
}

function AguaSubParam(props){
    return(
        <Fragment>
            <select name="select" onChange={props.captarCambiosParam} className={`w-full text-sm px-2 h-8 text-white mt-2 cursor-pointer input ${props.tipo1  === 'agua_subterranea'?'bloque':'hidden'} `} style={{backgroundColor:'rgb(60,60,60)'}}>
                <option value="todoParam" defaultValue>Todo</option>
                <option value="Caudal" >1. Caudal</option>
                <option value="Conductividad">2. Conductividad</option>
                <option value="Oxígeno Disuelto">3. Oxígeno Disuelto</option>
                <option value="pH campo">4. pH campo</option>
                <option value="Temperatura">5. Temperatura</option>
                <option value="Cianuro">6. Cianuro</option>
                <option value="DBO5">7. DBO5</option>
                <option value="DQO">8. DQO</option>
                <option value="Nitratos">9. Nitratos</option>
                <option value="Nitritos">10. Nitritos</option>
                <option value="Sulfatos">11. Sulfatos</option>
                <option value="Arsénico Total">12. Arsénico Total</option>
                <option value="Cadmio Total">13. Cadmio Total</option>
                <option value="Cobre Total">14. Cobre Total</option>
                <option value="Cromo Total">15. Cromo Total</option>
                <option value="Hierro Total">16. Hierro Total</option>
                <option value="Manganeso Total">17. Manganeso Total</option>
                <option value="Mercurio Total">18. Mercurio Total</option>
                <option value="Níquel Total">19. Níquel Total</option>
                <option value="Plomo Total">20. Plomo Total</option>
                <option value="Selenio Total">21. Selenio Total</option>
                <option value="Zinc Total">22. Zinc Total</option>
                <option value="Coliformes fecales">22. Coliformes fecales</option>
            </select>
        </Fragment>
    );
}

function AguaSupParam(props){
    return(
        <Fragment>
            <select name="select" onChange={props.captarCambiosParam} className={`w-full text-sm px-2 h-8 text-white mt-2 cursor-pointer input ${props.subTipo === 'Parámetro Microbiológico y Parasitológico'?'bloque':'hidden'}`} style={{backgroundColor:'rgb(60,60,60)'}}>
                <option value="todoParam" defaultValue>Todo</option>
                <option value="Coliformes Termales" >1. Coliformes Termales</option>
                <option value="Huevos Helmintos" >2. Huevos Helmintos</option>
            </select>
            <select name="select" onChange={props.captarCambiosParam} className={`w-full text-sm px-2 h-8 text-white mt-2 cursor-pointer input ${props.subTipo === 'Parámetro Orgánico'?'bloque':'hidden'}`} style={{backgroundColor:'rgb(60,60,60)'}}>
                <option value="todoParam" defaultValue>Todo</option>
                <option value="Bifenilos Policlorados" >1. Bifenilos Policlorados</option>
                <option value="Paration">2. Paration</option>
                <option value="Aldrin">3. Aldrin</option>
                <option value="Clordano">4. Clordano</option>
                <option value="Dicloro Difenil Tricloroetano">5. Dicloro Difenil Tricloroetano</option>
                <option value="Dieldrin">6. Dieldrin</option>
                <option value="Endosulfán">7. Endosulfán</option>
                <option value="Endrin">8. Endrin</option>
                <option value="Heptacloro y Heptacloro Epóxido">9. Heptacloro y Heptacloro Epóxido</option>
                <option value="Lindano">10. Lindano</option>
                <option value="Aldicarb">11. Aldicarb</option>
            </select>
            <select name="select" onChange={props.captarCambiosParam} className={`w-full text-sm px-2 h-8 text-white mt-2 cursor-pointer input ${props.subTipo === 'Parámetro Fisicoquímico'?'bloque':'hidden'}`} style={{backgroundColor:'rgb(60,60,60)'}}>
                <option value="todoParam" defaultValue>Todo</option>
                <option value="A & G" >1. A & G</option>
                <option value="HCO3-">2. HCO3-</option>
                <option value="CN Wad">3. CN Wad</option>
                <option value="Cloruro">4. Cloruro</option>
                <option value="DBO5">5. DBO5</option>
                <option value="DQO">6. DQO</option>
                <option value="SAAM">7. SAAM</option>
                <option value="Fenoles">8. Fenoles</option>
                <option value="Floruro">9. Floruro</option>
                <option value="NO3+NO2">10. NO3+NO2</option>
                <option value="NO2 -N">11. NO2 -N</option>
                <option value="SO4">12. SO4</option>
                <option value="Color (b)">13. Color (b)</option>
            </select>
            <select name="select" onChange={props.captarCambiosParam} className={`w-full text-sm px-2 h-8 text-white mt-2 cursor-pointer input ${props.subTipo === 'Parámetro In Situ'?'bloque':'hidden'}`} style={{backgroundColor:'rgb(60,60,60)'}}>
                <option value="todoParam" defaultValue>Todo</option>
                <option value="Oxígeno Disuelto" >1. Oxígeno Disuelto</option>
                <option value="pH">2. pH</option>
                <option value="Temperatura">3. Temperatura</option>
                <option value="Conductividad">4. Conductividad</option>
            </select>
            <select name="select" onChange={props.captarCambiosParam} className={`w-full text-sm px-2 h-8 text-white mt-2 cursor-pointer input ${props.subTipo === 'Parámetro Inorgánico'?'bloque':'hidden'}`} style={{backgroundColor:'rgb(60,60,60)'}}>
                <option value="todoParam" defaultValue>Todo</option>
                <option value="Aluminio" >1. Aluminio</option>
                <option value="Arsénico">2. Arsénico</option>
                <option value="Bario">3. Bario</option>
                <option value="Berilio">4. Berilio</option>
                <option value="Boro">5. Boro</option>
                <option value="Cadmio">6. Cadmio</option>
                <option value="Cobre">7. Cobre</option>
                <option value="Cobalto">8. Cobalto</option>
                <option value="Cromo Total">9. Cromo Total</option>
                <option value="Hierro">10. Hierro</option>
                <option value="Litio">11. Litio</option>
                <option value="Manganeso">12. Manganeso</option>
                <option value="Mercurio">13. Mercurio</option>
                <option value="Níquel">13. Níquel</option>
                <option value="Plomo">13. Plomo</option>
                <option value="Selenio">13. Selenio</option>
                <option value="Zinc">13. Zinc</option>
            </select>
        </Fragment>
    );
}

function PuntosVertimento(props){
    return(
        <Fragment>
            <select name="select" onChange={props.captarCambiosParam} className={`w-full text-sm px-2 h-8 text-white mt-2 cursor-pointer input ${props.tipo1 === 'puntos_vertimento'?'bloque':'hidden'} `} style={{backgroundColor:'rgb(60,60,60)'}}>
                <option value="todoParam" defaultValue>Todo</option>
                <option value="pH" >1. pH </option>
                <option value="Temperatura">2. Temperatura</option>
                <option value="Conductividad">3. Conductividad</option>
                <option value="DBO5">4. DBO5</option>
                <option value="DQO">5. DQO</option>
                <option value="SST">6. SST</option>
                <option value="Cloro Residual">7. Cloro Residual</option>
                <option value="A & G">8. A & G</option>
                <option value="CF">9. CF</option>
                <option value="CT">10. CT</option>
            </select>
        </Fragment>
    );
}