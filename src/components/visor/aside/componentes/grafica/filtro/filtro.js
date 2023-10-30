import { cache, useEffect } from 'react'
import {Fragment, useRef, useState} from "react";
import {ref, onValue, set} from "firebase/database";
import {app} from '../../../../../../../firebase/database';
import Datos from '../data/datos';
import Filtro1 from './componentes/Filtro1';
import Filtro2 from './componentes/filtro2';
import Filtro3 from './componentes/filtro3';

export default function Filtro(){
    
    const [valor, setValor] = useState()
    const [fuente, setFuente] = useState('Calidad de Agua y Efluentes');
    const [tipo, setTipo] = useState('agua_subterranea')
    const [ruta, setRuta] = useState('agua_subterranea')
    const [subTipo, setSubTipo] = useState('todoSub');
    const [state, setState] = useState();
    const [temp, setTemp] = useState('todoTemp');
    const [param, setParam] = useState({param1:'Caudal',param2:'Coliformes Termales',param3:'pH',param4:'PM10',param5:'LAeqT',param6:'AS'})
    const [ano, setAno] = useState({ano1:'todoAno',ano2:'todoAno',ano3:'todoAno',ano4:'todoAno',ano5:'todoAno',ano6:'todoAno'});

    function captarCambiosTipo(e){
        e.preventDefault()
        setTipo(e.target.value)
        setRuta(e.target.value)
    }
    function captarCambiosFuente(e){e.preventDefault(),setFuente(e.target.value)}
    function captarCambiosSubTipo(e){e.preventDefault(),setSubTipo(e.target.value)}
    function captarCambiosTemp(e){e.preventDefault(), setTemp(e.target.value)}
    
    useEffect(()=>{
        function PromiseFC(){
            getOtenerDatos({ruta})
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

    console.log(state)

    function captarCambiosFecha(e){
        e.preventDefault()
        if( tipo === 'agua_subterranea'){
            setAno({...ano,ano1:e.target.value})
        }if(tipo === 'agua_superficial'){
            setAno({...ano,ano2:e.target.value})
        }if(tipo === 'puntos_vertimento'){
            setAno({...ano,ano3:e.target.value})
        }if(tipo === 'calidad_aire'){
            setAno({...ano,ano4:e.target.value})
        }if(tipo === 'calidad_ruido'){
            setAno({...ano,ano5:e.target.value})
        }if(tipo === 'calidad_suelo'){
            setAno({...ano,ano6:e.target.value})
        }
    }
    function captarCambiosParam(e){
        e.preventDefault()
        if(tipo === 'agua_subterranea'){
            setParam({...param,param1:e.target.value})
        }if(tipo === 'agua_superficial'){
            setParam({...param,param2:e.target.value})
        }if(tipo === 'puntos_vertimento'){
            setParam({...param,param3:e.target.value})
        }if(tipo === 'calidad_aire'){
            setParam({...param,param4:e.target.value})
        }if(tipo === 'calidad_ruido'){
            setParam({...param,param5:e.target.value})
        }if(tipo === 'calidad_suelo'){
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
                <Filtro2 fuente={fuente} tipo={tipo} captarCambiosTipo={captarCambiosTipo} captarCambiosTemp={captarCambiosTemp} captarCambiosFecha={captarCambiosFecha} captarCambiosParam={captarCambiosParam} />
                <Filtro3 fuente={fuente} tipo={tipo} captarCambiosTipo={captarCambiosTipo} captarCambiosFecha={captarCambiosFecha} captarCambiosParam={captarCambiosParam} />
            </div>
            <Datos fuente={fuente} tipo={tipo} subTipo={subTipo} valor={valor} state={state} param={param} ano={ano}/>
        </Fragment>
    );
}