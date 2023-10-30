import { Fragment, useState} from "react";
import Filtro from './filtro/filtro';
import Datos from "./datos/datos";

export default function Leyenda(){
    const [filtro, setFiltro] = useState('closeFil')
    const [fuente, setFuente] = useState('Calidad de Agua y Efluentes');
    const [tipo, setTipo] = useState('Agua subterránea')
    const [subTipo, setSubTipo] = useState('todoSub');
    const [temp, setTemp] = useState('todoTemp');
    const [eca, setEca] = useState('todo');
    const [ano, setAno] = useState({ano1:'todoAno',ano2:'todoAno',ano3:'todoAno',ano4:'todoAno',ano5:'todoAno',ano6:'todoAno'});
    const [mes, setMes] = useState({mes1:'todoMes',mes2:'todoMes',mes3:'todoMes',mes4:'todoMes',mes5:'todoMes',mes6:'todoMes'});
    const [param, setParam] = useState({param1:'todoParam',param2:'todoParam',param3:'todoParam',param4:'todoParam',param5:'todoParam',param6:'todoParam'})
    const [esta, setEsta] = useState({esta1:'todoEm', esta2:'todoEm',esta3:'todoEm',esta4:'todoEm',esta5:'todoEm',esta6:'todoEm'})

    function captarCambiosFuente(e){e.preventDefault(), setFuente(e.target.value)}
    function captarCambiosTipo(e){e.preventDefault(),setTipo(e.target.value)}
    function captarCambiosTemp(e){e.preventDefault(), setTemp(e.target.value)}
    function captarCambiosEca(e){e.preventDefault(), setEca(e.target.value)}
    function captarCambiosSubTipo(e){e.preventDefault(), setSubTipo(e.target.value)}
    function captarCambiosFecha(e){
        e.preventDefault()
        if(tipo === 'Agua subterránea'){
            setAno({...ano,ano1:e.target.value})
        }if(tipo === 'Agua superficial'){
            setAno({...ano,ano2:e.target.value})
        }if(tipo === 'Puntos de vertimento'){
            setAno({...ano,ano3:e.target.value})
        }if(tipo === 'Aire'){
            setAno({...ano,ano4:e.target.value})
        }if(tipo === 'Ruido'){
            setAno({...ano,ano5:e.target.value})
        }if(tipo === 'Suelo'){
            setAno({...ano,ano6:e.target.value})
        }
    }
    function captarCambiosEsta(e){
        e.preventDefault()
        if(tipo === 'Agua subterránea'){
            setEsta({...esta,esta1:e.target.value})
        }if(tipo === 'Agua superficial'){
            setEsta({...esta,esta2:e.target.value})
        }if(tipo === 'Puntos de vertimento'){
            setEsta({...esta,esta3:e.target.value})
        }if(tipo === 'Aire'){
            setEsta({...esta,esta4:e.target.value})
        }if(tipo === 'Ruido'){
            setEsta({...esta,esta5:e.target.value})
        }if(tipo === 'Suelo'){
            setEsta({...esta,esta6:e.target.value})
        }
    }
    function captarCambiosMes(e){
        e.preventDefault()
        if(tipo === 'Agua subterránea'){
            setMes({...mes,mes1:e.target.value})
        }if(tipo === 'Agua superficial'){
            setMes({...mes,mes2:e.target.value})
        }if(tipo === 'Puntos de vertimento'){
            setMes({...mes,mes3:e.target.value})
        }if(tipo === 'Aire'){
            setMes({...mes,mes4:e.target.value})
        }if(tipo === 'Ruido'){
            setMes({...mes,mes5:e.target.value})
        }if(tipo === 'Suelo'){
            setMes({...mes,mes6:e.target.value})
        }
    }
    function captarCambiosParam(e){
        e.preventDefault()
        if(tipo === 'Agua subterránea'){
            setParam({...param,param1:e.target.value})
        }if(tipo === 'Agua superficial'){
            setParam({...param,param2:e.target.value})
        }if(tipo === 'Puntos de vertimento'){
            setParam({...param,param3:e.target.value})
        }if(tipo === 'Aire'){
            setParam({...param,param4:e.target.value})
        }if(tipo === 'Ruido'){
            setParam({...param,param5:e.target.value})
        }if(tipo === 'Suelo'){
            setParam({...param,param6:e.target.value})
        }
    }
    function openCloseFiltro(e){
        e.preventDefault();
        setFiltro(filtro === "openFil"?'closeFil':'openFil')
    }

    return(
        <Fragment>
            <Filtro filtro={filtro} captarCambiosFuente={captarCambiosFuente} captarCambiosEsta={captarCambiosEsta}
                captarCambiosTipo={captarCambiosTipo} captarCambiosFecha={captarCambiosFecha} captarCambiosSubTipo={captarCambiosSubTipo}
                captarCambiosEca={captarCambiosEca} captarCambiosTemp={captarCambiosTemp} captarCambiosMes={captarCambiosMes} 
                fuente={fuente} temp={temp} tipo={tipo} subTipo={subTipo} captarCambiosParam={captarCambiosParam}
            />
            <div className="absolute top-0 right-14 h-screen w-80 lg:w-96 bg-white border-r border-red-400 pt-52" style={{zIndex:"1000"}}>
                <div className="absolute top-0 right-0 h-52 w-full bg-white">
                    <div className="flex items-center h-10 background-color">
                        <div className="flex items-center w-full gap-2 h-6 px-4">
                            <h1 className="text-sm text-white">Gestión de monitoreos</h1>
                        </div>
                    </div>
                    <div className="flex items-center px-4 h-10 back-color">
                        <div onClick={openCloseFiltro} className="flex items-center w-full h-10 gap-2 cursor-pointer">
                            <div className="flex items-center justify-center h-7 w-7 bg-white rounded-full">
                                {
                                    filtro === 'closeFil'?<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="rgb(40, 40, 40)" className="bi bi-sliders2" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M10.5 1a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V4H1.5a.5.5 0 0 1 0-1H10V1.5a.5.5 0 0 1 .5-.5ZM12 3.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5Zm-6.5 2A.5.5 0 0 1 6 6v1.5h8.5a.5.5 0 0 1 0 1H6V10a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5ZM1 8a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2A.5.5 0 0 1 1 8Zm9.5 2a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V13H1.5a.5.5 0 0 1 0-1H10v-1.5a.5.5 0 0 1 .5-.5Zm1.5 2.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5Z"/>
                                    </svg>:<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="rgb(40, 40, 40)" className="bi bi-x-lg" viewBox="0 0 16 16">
                                        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
                                    </svg>
                                }
                                </div>
                            <h1 className="text-sm text-white">Ajustes de la búsqueda</h1>
                        </div>
                    </div>
                    <div className="section">
                        <h1 className="flex items-center px-4 h-10 text-sm border-b border-gray-200">{fuente}</h1>
                    </div>
                    <div className="flex items-center justify-center h-10 border-b border-gray-200">
                        <h1 className="flex-1 text-center text-sm border-r border-gray-200">{tipo}</h1>
                        <div className="flex flex-1 items-center justify-center cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="rgb(40,40,40)" class="bi bi-play-fill" viewBox="0 0 16 16">
                                <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/>
                            </svg>
                            <h1 className="text-sm">Estación TA-12</h1>
                        </div>
                    </div>
                    <div className="flex items-center h-10 px-4 border-b border-gray-200">
                        <h1 className="text-sm w-20">Año</h1>
                        <h1 className="text-sm w-48">Parámetro</h1>
                        <h1 className="text-sm w-32">Valor</h1>
                        <h1 className="text-sm w-32">ECA</h1>
                    </div>
                </div>
                <Datos temp={temp} tipo={tipo} eca={eca} ano={ano} mes={mes} param={param} subTipo={subTipo} esta={esta}/>
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