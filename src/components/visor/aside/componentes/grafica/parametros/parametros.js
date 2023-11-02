import { Fragment } from "react";

export function AguaSubParam(props){
    return(
        <Fragment>
            <select name="select" onChange={props.captarCambiosParam} className={`text-sm px-2 h-7 bg-gray-200 cursor-pointer input ${props.tipo.tipo1 === 'agua_subterranea'?'bloque':'hidden'} `}>
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

export function AguaSupParam(props){
    return(
        <div className={`${props.tipo.tipo1 === 'agua_superficial'?'bloque':'hidden'}`} >
            <select name="select" onChange={props.captarCambiosParam} className={`bg-gray-200 text-sm px-2 h-7 cursor-pointer input ${props.subTipo === 'Parámetro Microbiológico y Parasitológico'?'bloque':'hidden'}`}>
                <option value="Coliformes Termales" defaultValue>1. Coliformes Termales</option>
                <option value="Huevos Helmintos" >2. Huevos Helmintos</option>
            </select>
            <select name="select" onChange={props.captarCambiosParam} className={`bg-gray-200 text-sm px-2 h-7 cursor-pointer input ${props.subTipo === 'Parámetro Orgánico'?'bloque':'hidden'}`}>
                <option value="Bifenilos Policlorados" defaultValue>1. Bifenilos Policlorados</option>
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
            <select name="select" onChange={props.captarCambiosParam} className={`bg-gray-200 text-sm px-2 h-7 cursor-pointer input ${props.subTipo === 'Parámetro Fisicoquímico'?'bloque':'hidden'}`}>
                <option value="A & G" defaultValue>1. A & G</option>
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
            <select name="select" onChange={props.captarCambiosParam} className={`bg-gray-200 text-sm px-2 h-7 cursor-pointer input ${props.subTipo === 'Parámetro In Situ'?'bloque':'hidden'}`}>
                <option value="Oxígeno Disuelto" defaultValue>1. Oxígeno Disuelto</option>
                <option value="pH">2. pH</option>
                <option value="Temperatura">3. Temperatura</option>
                <option value="Conductividad">4. Conductividad</option>
            </select>
            <select name="select" onChange={props.captarCambiosParam} className={`bg-gray-200 text-sm px-2 h-7 cursor-pointer input ${props.subTipo === 'Parámetro Inorgánico'?'bloque':'hidden'}`}>
                <option value="Aluminio" defaultValue>1. Aluminio</option>
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
        </div>
    );
}

export function PuntosVertimento(props){
    return(
        <Fragment>
            <select name="select" onChange={props.captarCambiosParam} className={`bg-gray-200 text-sm px-2 h-7 cursor-pointer input ${props.tipo.tipo1 === 'puntos_vertimento'?'bloque':'hidden'} `}>
                <option value="pH" defaultValue>1. pH</option>
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