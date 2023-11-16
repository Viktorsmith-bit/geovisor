import { useState, Fragment} from "react";
import Filtro from './filtro/filtro';
import Datos from "./datos/datos";
import Tablas from "./datos/tablas";

export default function Gestion(props){
    const [tabla, setTabla] = useState('close')
    const [tipo1, setTipo1] = useState('agua_subterranea')
    const [tipo2, setTipo2] = useState('')
    const [tipo3, setTipo3] = useState('')
    const [estado, setEstado] = useState('openGes')
    const [filtro, setFiltro] = useState('closeFil')
    const [subTipo, setSubTipo] = useState('todoSub');
    const [temp, setTemp] = useState('todoTemp');
    const [eca, setEca] = useState('todo');
    const [ano, setAno] = useState({ano1:'todoAno',ano2:'todoAno',ano3:'todoAno',ano4:'todoAno',ano5:'todoAno',ano6:'todoAno'});
    const [mes, setMes] = useState({mes1:'todoMes',mes2:'todoMes',mes3:'todoMes',mes4:'todoMes',mes5:'todoMes',mes6:'todoMes'});
    const [param, setParam] = useState({param1:'todoParam',param2:'todoParam',param3:'todoParam',param4:'todoParam',param5:'todoParam',param6:'todoParam'})
    const [esta, setEsta] = useState({esta1:'todoEm', esta2:'todoEm',esta3:'todoEm',esta4:'todoEm',esta5:'todoEm',esta6:'todoEm'})

    function captarCambiosTemp(e){e.preventDefault(), setTemp(e.target.value)}
    function captarCambiosEca(e){e.preventDefault(), setEca(e.target.value)}
    function captarCambiosSubTipo(e){e.preventDefault(), setSubTipo(e.target.value)}
    function openCloseTipo1(e){e.preventDefault(),setTipo1(e.target.id),setTipo2(''),setTipo3('')}
    function openCloseTipo2(e){e.preventDefault(),setTipo1(''),setTipo2(e.target.id),setTipo3('')}
    function openCloseTipo3(e){e.preventDefault(),setTipo1(''),setTipo2(''),setTipo3(e.target.id)}
    function captarCambiosFecha(e){
        e.preventDefault()
        if(tipo1 === 'agua_subterranea'){
            setAno({...ano,ano1:e.target.value})
        }if(tipo1 === 'agua_superficial'){
            setAno({...ano,ano2:e.target.value})
        }if(tipo1 === 'puntos_vertimento'){
            setAno({...ano,ano3:e.target.value})
        }if(tipo2 === 'calidad_aire'){
            setAno({...ano,ano4:e.target.value})
        }if(tipo2 === 'calidad_suelo'){
            setAno({...ano,ano5:e.target.value})
        }if(tipo3 === 'calidad_suelo'){
            setAno({...ano,ano6:e.target.value})
        }
    }
    function captarCambiosEsta(e){
        e.preventDefault()
        if(tipo1 === 'agua_subterranea'){
            setEsta({...esta,esta1:e.target.value})
        }if(tipo1 === 'agua_superficial'){
            setEsta({...esta,esta2:e.target.value})
        }if(tipo1 === 'puntos_vertimento'){
            setEsta({...esta,esta3:e.target.value})
        }if(tipo2 === 'calidad_aire'){
            setEsta({...esta,esta4:e.target.value})
        }if(tipo2 === 'calidad_ruido'){
            setEsta({...esta,esta5:e.target.value})
        }if(tipo3 === 'calidad_ruido'){
            setEsta({...esta,esta6:e.target.value})
        }
    }
    function captarCambiosMes(e){
        e.preventDefault()
        if(tipo1 === 'agua_subterranea'){
            setMes({...mes,mes1:e.target.value})
        }if(tipo1 === 'agua_superficial'){
            setMes({...mes,mes2:e.target.value})
        }if(tipo1 === 'puntos_vertimento'){
            setMes({...mes,mes3:e.target.value})
        }if(tipo2 === 'calidad_aire'){
            setMes({...mes,mes4:e.target.value})
        }if(tipo2 === 'calidad_ruido'){
            setMes({...mes,mes5:e.target.value})
        }if(tipo3 === 'calidad_suelo'){
            setMes({...mes,mes6:e.target.value})
        }
    }
    function captarCambiosParam(e){
        e.preventDefault()
        if(tipo1 === 'agua_subterranea'){
            setParam({...param,param1:e.target.value})
        }if(tipo1 === 'agua_superficial'){
            setParam({...param,param2:e.target.value})
        }if(tipo1 === 'puntos_vertimento'){
            setParam({...param,param3:e.target.value})
        }if(tipo2 === 'calidad_aire'){
            setParam({...param,param4:e.target.value})
        }if(tipo2 === 'calidad_ruido'){
            setParam({...param,param5:e.target.value})
        }if(tipo3 === 'calidad_suelo'){
            setParam({...param,param6:e.target.value})
        }
    }
    function openCloseFiltro(e){
        e.preventDefault();
        setFiltro(filtro === "openFil"?'closeFil':'openFil')
    }
    function openTabla(e){
        e.preventDefault()
        setTabla('open')
        setEstado('closeGes')
    }
    function closeTabla(e){
        e.preventDefault()
        setTabla('close')
        setEstado('openGes')
    }

    return(
        <Fragment>
            <Tablas closeTabla={closeTabla} ges={props.ges} tabla={tabla} temp={temp} tipo3={tipo3} tipo2={tipo2} tipo1={tipo1} eca={eca} ano={ano} mes={mes} param={param} subTipo={subTipo} esta={esta}/>
            <div className={`${props.ges === estado?'bloque':'hidden'}`}>
                <Filtro openCloseTipo1={openCloseTipo1} tipo1={tipo1} openCloseTipo2={openCloseTipo2} tipo2={tipo2}
                    openCloseTipo3={openCloseTipo3} tipo3={tipo3}
                    aside={props.aside} filtro={filtro} captarCambiosEsta={captarCambiosEsta}
                    captarCambiosFecha={captarCambiosFecha} captarCambiosSubTipo={captarCambiosSubTipo}
                    captarCambiosEca={captarCambiosEca} captarCambiosTemp={captarCambiosTemp} captarCambiosMes={captarCambiosMes} 
                    temp={temp} subTipo={subTipo} captarCambiosParam={captarCambiosParam}
                />
                <div className={`absolute top-0 ${props.aside === 'close'?'right-14':'right-44'} h-screen w-80 lg:w-96 bg-white border-r border-gray-200 pt-48`} style={{zIndex:"1000"}}>
                    <div className="absolute top-0 right-0 h-48 w-full bg-white">
                        <div className="flex items-center justify-between h-12 background-color">
                            <div className="flex items-center gap-2 h-6 px-4">
                                <h1 className="text-sm text-white">Gestión de monitoreos</h1>
                            </div>
                            <svg onClick={props.abrirGestion} xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" className="mr-2 cursor-pointer bi bi-x" viewBox="0 0 16 16">
                                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                            </svg>
                        </div>
                        <div onClick={openCloseFiltro} className="flex items-center px-4 h-12 border-b border-gray-200">
                            <div className="flex items-center w-full h-10 gap-2 cursor-pointer">
                                <div className="flex items-center justify-center h-7 w-7 border-l border-t border-r border-b border-gray-800 rounded-full">
                                    {
                                        filtro === 'closeFil'?<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-sliders2" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M10.5 1a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V4H1.5a.5.5 0 0 1 0-1H10V1.5a.5.5 0 0 1 .5-.5ZM12 3.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5Zm-6.5 2A.5.5 0 0 1 6 6v1.5h8.5a.5.5 0 0 1 0 1H6V10a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5ZM1 8a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2A.5.5 0 0 1 1 8Zm9.5 2a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V13H1.5a.5.5 0 0 1 0-1H10v-1.5a.5.5 0 0 1 .5-.5Zm1.5 2.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5Z"/>
                                        </svg>:<svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
                                            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
                                        </svg>
                                    }
                                    </div>
                                <h1 className="text-sm">Ajustes de la búsqueda</h1>
                            </div>
                        </div>
                        <div onClick={openTabla} className="flex flex-1 items-center justify-start px-4 border-b border-gray-200 h-12 cursor-pointer gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="rgb(40,40,40)" className="bi bi-window-fullscreen" viewBox="0 0 16 16">
                                <path d="M3 3.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm1.5 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm1 .5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z"/>
                                <path d="M.5 1a.5.5 0 0 0-.5.5v13a.5.5 0 0 0 .5.5h15a.5.5 0 0 0 .5-.5v-13a.5.5 0 0 0-.5-.5H.5ZM1 5V2h14v3H1Zm0 1h14v8H1V6Z"/>
                            </svg>
                            <h1 className="text-sm">Ver tabla</h1>
                        </div>
                        <div className="flex items-center h-12 pl-4 pr-8 border-b border-gray-200">
                            <h1 className="text-sm w-20 pl-2">Año</h1>
                            <h1 className="text-sm w-48 text-center">Parámetro</h1>
                            <h1 className="text-sm w-32 text-center">Valor</h1>
                            <h1 className="text-sm w-32 text-center">ECA</h1>
                        </div>
                    </div>
                    <Datos temp={temp} tipo3={tipo3} tipo2={tipo2} tipo1={tipo1} eca={eca} ano={ano} mes={mes} param={param} subTipo={subTipo} esta={esta}/>
                </div>
            </div>
        </Fragment>
    );
}

{
    /**
     * <div className="flex h-10 border-b border-gray-200">
    <div className="flex items-center justify-center flex-1 border-b border-gray-800 bg-gray-200 cursor-pointer">
        <h1 className="text-sm">Datos</h1>
    </div>
    <div className="flex items-center justify-center flex-1 border-l border-gray-200 cursor-pointer">
        <h1 className="text-sm">Estadísticas</h1>
    </div>
</div>
     */
}