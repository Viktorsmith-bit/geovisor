import { cache, useEffect } from 'react'
import {Fragment, useRef, useState} from "react";
import {ref, onValue, set} from "firebase/database";
import {app} from '../../../../../../../firebase/database';
import Datos from '../data/datos';
import {Filtro1} from './componentes/filtro1';
import {Filtro2} from './componentes/filtro2';
import {Filtro3} from './componentes/filtro3';

export default function Filtro(){
    const [valor, setValor] = useState()
    const [fuente, setFuente] = useState('Calidad de Agua y Efluentes');
    const [tipo, setTipo] = useState({tipo1:'agua_subterranea',tipo2:'calidad_aire',tipo3:'calidad_suelo'})
    const [ruta, setRuta] = useState('agua_subterranea')
    const [subTipo, setSubTipo] = useState('todoSub');
    const [state, setState] = useState();
    const [time, setTime] = useState('Diurno');
    const [param, setParam] = useState({param1:'Caudal',param2:'Coliformes Termales',param3:'pH',param4:'PM10',param5:'LAeqT',param6:'AS'})
    const [ano, setAno] = useState({ano1:'todoAno',ano2:'todoAno',ano3:'todoAno',ano4:'todoAno',ano5:'todoAno',ano6:'todoAno'});

    function captarCambiosTipo(e){
        e.preventDefault()
        if(fuente === 'Calidad de Agua y Efluentes'){
            setTipo({...tipo,tipo1:e.target.value})
            setRuta(e.target.value) 
            
        }if(fuente === 'Calidad del Aire'){
            setTipo({...tipo,tipo2:e.target.value})
            setRuta(e.target.value) 
        }if(fuente === 'Calidad del Suelo'){
            setTipo({...tipo,tipo3:e.target.value})
            setRuta(e.target.value) 
        }
    }
    function captarCambiosFuente(e){e.preventDefault(),setFuente(e.target.value)}
    function captarCambiosSubTipo(e){e.preventDefault(),setSubTipo(e.target.value)}
    function captarCambiosTime(e){e.preventDefault(), setTime(e.target.value)}

    useEffect(()=>{
        function PromiseFC(){
            getOtenerDatos()
        }
        return PromiseFC()
    },[ruta])

    const getOtenerDatos = cache(async (e)=>{
        const starCountCor = ref(app, `${ruta}`);
        onValue(starCountCor, (snapshot) => {
            if (snapshot.exists()) {
                setState(snapshot.val())
                setValor(snapshot.val().features)
            } else {
                console.log("error")
            }
        });
    })
    function captarCambiosFecha(e){
        e.preventDefault()
        if( tipo.tipo1 === 'agua_subterranea'){
            setAno({...ano,ano1:e.target.value})
            console.log(ano.ano1)
        }if(tipo.tipo1 === 'agua_superficial'){
            setAno({...ano,ano2:e.target.value})
        }if(tipo.tipo1 === 'puntos_vertimento'){
            setAno({...ano,ano3:e.target.value})
        }
    }
    function captarCambiosFecha2(e){
        e.preventDefault()
        if(tipo.tipo2 === 'calidad_aire'){
            setAno({...ano,ano4:e.target.value})
        }if(tipo.tipo2 === 'calidad_ruido'){
            setAno({...ano,ano5:e.target.value})
        }
    }
    function captarCambiosFecha3(e){
        e.preventDefault()
        if(tipo.tipo2 === 'calidad_ruido'){
            setAno({...ano,ano5:e.target.value})
        }
    }
    function captarCambiosParam(e){
        e.preventDefault()
        if(tipo.tipo1 === 'agua_subterranea'){
            setParam({...param,param1:e.target.value})
        }if(tipo.tipo1 === 'agua_superficial'){
            setParam({...param,param2:e.target.value})
        }if(tipo.tipo1 === 'puntos_vertimento'){
            setParam({...param,param3:e.target.value})
        }
    }
    function captarCambiosParam2(e){
        e.preventDefault()
        if(tipo.tipo2 === 'calidad_aire'){
            setParam({...param,param4:e.target.value})
        }if(tipo.tipo2 === 'calidad_ruido'){
            setParam({...param,param5:e.target.value})
        }
    }
    function captarCambiosParam3(e){
        e.preventDefault()
        if(tipo.tipo3 === 'calidad_suelo'){
            setParam({...param,param6:e.target.value})
        }
    }
    return(
        <Fragment>
            <div className="flex items-center gap-3 overflow-y-auto overflow-x-hidden px-4 border-b border-gray-800 h-16" >
                <div className='section'>
                    <h1 className="text-sm">Fuente</h1>
                    <select name="select" onChange={captarCambiosFuente} className='text-sm px-2 h-7 rounded-sm cursor-pointer input bg-gray-200'>
                        <option value="Calidad de Agua y Efluentes" defaultValue>Calidad de Agua y Efluentes</option>
                        <option value="Calidad del Aire">Calidad del Aire</option>
                        <option value="Calidad del Suelo">Calidad del Suelo</option>
                    </select>
                </div>
                <Filtro1 fuente={fuente} tipo={tipo} subTipo={subTipo} captarCambiosTipo={captarCambiosTipo} captarCambiosSubTipo={captarCambiosSubTipo} captarCambiosFecha={captarCambiosFecha} captarCambiosParam={captarCambiosParam} />
                <Filtro2 fuente={fuente} tipo={tipo} captarCambiosTipo={captarCambiosTipo} captarCambiosTime={captarCambiosTime} captarCambiosFecha2={captarCambiosFecha2} captarCambiosParam2={captarCambiosParam2} />
                <Filtro3 fuente={fuente} tipo={tipo} captarCambiosTipo={captarCambiosTipo} captarCambiosFecha3={captarCambiosFecha3} captarCambiosParam3={captarCambiosParam3} />
            </div>
            <Datos fuente={fuente} tipo={tipo} subTipo={subTipo} time={time} valor={valor} state={state} param={param} ano={ano}/>
        </Fragment>
    );
}