import { Fragment, useState } from "react";

export default function CalidadAgua(props){
    const [state1, setState1] = useState({aguaSub:'close',aguaSup:'close',puntVert:'close'})
    const [state2, setState2] = useState({ano2016:'close',ano2017:'close',ano2018:'close',eca:'close'})
    const [state3, setState3] = useState({tempH:'close',tempS:'close'})
    const [state4, setState4] = useState({vert2016:'close', vert2017:'close',vert2018:'close'})
    const [sup1, setSup1] = useState({parMic:'close',parOrg:'close',parFis:'close',parIn:'close',parIno:'close'})
    const [sup2, setSup2] = useState({parMic:'close',parOrg:'close',parFis:'close',parIn:'close',parIno:'close'})

    function openCloseAguaSub(e){e.preventDefault(), setState1({...state1, aguaSub:state1.aguaSub === 'open'?'close':'open'})}
    function openCloseAguaSup(e){e.preventDefault(), setState1({...state1, aguaSup:state1.aguaSup === 'open'?'close':'open'})}
    function openClosePuntVert(e){e.preventDefault(), setState1({...state1, puntVert:state1.puntVert === 'open'?'close':'open'})}
    function openCloseAno2016(e){e.preventDefault(), setState2({...state2, ano2016:state2.ano2016 === 'open'?'close':'open'})}
    function openCloseAno2017(e){e.preventDefault(), setState2({...state2, ano2017:state2.ano2017 === 'open'?'close':'open'})}
    function openCloseAno2018(e){e.preventDefault(), setState2({...state2, ano2018:state2.ano2018 === 'open'?'close':'open'})}
    function openCloseTempH(e){e.preventDefault(), setState3({...state3, tempH:state3.tempH === 'open'?'close':'open'})}
    function openCloseTempS(e){e.preventDefault(), setState3({...state3, tempS:state3.tempS === 'open'?'close':'open'})}
    
    function openCloseParMic(e){e.preventDefault(), setSup1({...sup1, parMic:sup1.parMic === 'open'?'close':'open'})}
    function openCloseParOrg(e){e.preventDefault(), setSup1({...sup1, parOrg:sup1.parOrg === 'open'?'close':'open'})}
    function openCloseParFis(e){e.preventDefault(), setSup1({...sup1, parFis:sup1.parFis === 'open'?'close':'open'})}
    function openCloseParIn(e){e.preventDefault(), setSup1({...sup1, parIn:sup1.parIn === 'open'?'close':'open'})}
    function openCloseParIno(e){e.preventDefault(), setSup1({...sup1, parIno:sup1.parIno === 'open'?'close':'open'})}

    return(
        <div className="section px-1.5">
            <div className="border-l border-gray-500">
                <Component nombre={'Agua subterránea'} estado={state1.aguaSub} evento={openCloseAguaSub} />
                {
                    state1.aguaSub === 'close'?null:<div className="px-6">
                        <div className="border-l border-gray-500">
                            <Component nombre={'2016'} estado={state2.ano2016} evento={openCloseAno2016} />
                            {
                                state2.ano2016 === 'close'?null:<div className="px-6">
                                    <div className="border-l border-gray-500">
                                        <Input nombre={'EM TA-12-Temporada 2'} estado={props.estado.em2016T2} evento={props.openCloseEm2016T2} /> 
                                    </div>
                                </div>
                            }
                            <Component nombre={'2017'} estado={state2.ano2017} evento={openCloseAno2017} /> 
                            {
                                state2.ano2017 === 'close'?null:<div className="px-6">
                                    <div className="border-l border-gray-500">
                                        <Input nombre={'EM TA-12-Temporada 2'} estado={props.estado.em2017T2} evento={props.openCloseEm2017T2} /> 
                                    </div>
                                </div>
                            }
                            <Component nombre={'2018'} estado={state2.ano2018} evento={openCloseAno2018} /> 
                            {
                                state2.ano2018 === 'close'?null:<div className="px-6">
                                    <div className="border-l border-gray-500">
                                        <Input nombre={'EM TA-12-Temporada 1'} estado={props.estado.em2018T1} evento={props.openCloseEm2018T1} /> 
                                    </div>
                                </div>
                            }
                        </div>
                    </div>
                }
                <Component nombre={'Agua superficial'} estado={state1.aguaSup} evento={openCloseAguaSup} />
                {
                    state1.aguaSup === 'close'?null:<div className="px-6">
                        <div className="border-l border-gray-500">
                            <Component nombre={'Temporada Húmeda'} estado={state3.tempH} evento={openCloseTempH} />
                            {
                                state3.tempH === 'close'?null:<div className="px-6">
                                    <div className="border-l border-gray-500">
                                        <Component nombre={'Parámetros microbiológicos'} estado={sup1.parMic} evento={openCloseParMic} /> 
                                        {
                                            sup1.parMic === 'close'?null:<div className="px-6">
                                                <div className="border-l border-gray-500">
                                                    <Input nombre={'EM R-2'} estado={props.humeda.parMicro} evento={props.openCloseHumParMicro} />
                                                </div>
                                            </div>
                                        }
                                        <Component nombre={'Parámetros orgánicos'} estado={sup1.parOrg} evento={openCloseParOrg} />
                                        {
                                            sup1.parOrg === 'close'?null:<div className="px-6">
                                                <div className="border-l border-gray-500">
                                                    <Input nombre={'EM R-2'} estado={props.humeda.parOrg} evento={props.openCloseHumParOrg} />
                                                </div>
                                            </div>
                                        }
                                        <Component nombre={'Parámetros fisicoquímicos'} estado={sup1.parFis} evento={openCloseParFis} /> 
                                        {
                                            sup1.parFis === 'close'?null:<div className="px-6">
                                                <div className="border-l border-gray-500">
                                                    <Input nombre={'EM R-2'} estado={props.humeda.parFis} evento={props.openCloseHumParFis} />
                                                </div>
                                            </div>
                                        }
                                        <Component nombre={'Parámetros in situ'} estado={sup1.parIn} evento={openCloseParIn} />
                                        {
                                            sup1.parIn === 'close'?null:<div className="px-6">
                                                <div className="border-l border-gray-500">
                                                    <Input nombre={'EM R-2'} estado={props.humeda.parIn} evento={props.openCloseHumParIn} />
                                                </div>
                                            </div> 
                                        }
                                        <Component nombre={'Parámetros inorgánicos'} estado={sup1.parIno} evento={openCloseParIno} /> 
                                        {
                                            sup1.parIno === 'close'?null:<div className="px-6">
                                                <div className="border-l border-gray-500">
                                                    <Input nombre={'EM R-2'} estado={props.humeda.parIno} evento={props.openCloseHumParIno} />
                                                </div>
                                            </div>
                                        }
                                    </div>
                                </div>
                            }
                            <Component nombre={'Temporada Seca'} estado={state3.tempS} evento={openCloseTempS} />
                            {
                                state3.tempS === 'close'?null:<div className="px-6">
                                    <div className="border-l border-gray-500">
                                        <Component nombre={'Parámetros microbiológicos'} estado={''} evento={openCloseAguaSub} /> 
                                        <Component nombre={'Parámetros orgánicos'} estado={''} evento={openCloseAguaSub} />
                                        <Component nombre={'Parámetros fisicoquímicos'} estado={''} evento={openCloseAguaSub} /> 
                                        <Component nombre={'Parámetros in situ'} estado={''} evento={openCloseAguaSub} /> 
                                        <Component nombre={'Parámetros inorgánicos'} estado={''} evento={openCloseAguaSub} /> 
                                    </div>
                                </div>
                            }
                        </div>
                    </div>
                }
                <Component nombre={'Puntos de vertimiento'} estado={state1.puntVert} evento={openClosePuntVert} /> 
                {
                    state1.puntVert === 'close'?null:<div className="px-6">
                    <div className="border-l border-gray-500">
                        <Component nombre={'2016'} estado={state1.puntVert} evento={openClosePuntVert} /> 
                        {
                            state4.vert2016 === 'close'?null:<div className="px-6">
                                    <div className="border-l border-gray-500 px-6">
                                        <Input nombre={'Enero'} estado={state2.eca} evento={''} />
                                        <Input nombre={'Febrero'} estado={state2.eca} evento={''} /> 
                                        <Input nombre={'Marzo'} estado={state2.eca} evento={''} /> 
                                        <Input nombre={'Abril'} estado={state2.eca} evento={''} /> 
                                        <Input nombre={'Mayo'} estado={state2.eca} evento={''} /> 
                                        <Input nombre={'Junio'} estado={state2.eca} evento={''} /> 
                                        <Input nombre={'Julio'} estado={state2.eca} evento={''} /> 
                                        <Input nombre={'Agosto'} estado={state2.eca} evento={''} /> 
                                        <Input nombre={'Setiembre'} estado={state2.eca} evento={''} />
                                        <Input nombre={'Octubre'} estado={state2.eca} evento={''} />
                                        <Input nombre={'Noviembre'} estado={state2.eca} evento={''} />
                                        <Input nombre={'Diciembre'} estado={state2.eca} evento={''} />   
                                    </div>
                                </div>  
                            }  
                            <Component nombre={'2017'} estado={state1.puntVert} evento={openClosePuntVert} /> 
                            {
                                state4.vert2017 === 'close'?null:<div className="px-6">
                                    <div className="border-l border-gray-500 px-6">
                                        <h1 className="text-color text-sm">Enero</h1>
                                        <h1 className="text-color text-sm">Febrero</h1>
                                        <h1 className="text-color text-sm">Marzo</h1>
                                        <h1 className="text-color text-sm">Abril</h1>
                                        <h1 className="text-color text-sm">Mayo</h1>
                                        <h1 className="text-color text-sm">Junio</h1>
                                        <h1 className="text-color text-sm">Julio</h1>
                                        <h1 className="text-color text-sm">Agosto</h1>
                                        <h1 className="text-color text-sm">Setiembre</h1>
                                        <h1 className="text-color text-sm">Octubre</h1>
                                        <h1 className="text-color text-sm">Noviembre</h1>
                                        <h1 className="text-color text-sm">Diciembre</h1>
                                    </div>
                                </div> 
                            }
                            <Component nombre={'2018'} estado={state1.puntVert} evento={openClosePuntVert} />
                            {
                                state4.vert2018 === 'close'?null:<div className="px-6">
                                    <div className="border-l border-gray-500 px-6">
                                        <h1 className="text-color text-sm">Enero</h1>
                                        <h1 className="text-color text-sm">Febrero</h1>
                                        <h1 className="text-color text-sm">Marzo</h1>
                                        <h1 className="text-color text-sm">Abril</h1>
                                        <h1 className="text-color text-sm">Mayo</h1>
                                        <h1 className="text-color text-sm">Junio</h1>
                                        <h1 className="text-color text-sm">Julio</h1>
                                        <h1 className="text-color text-sm">Agosto</h1>
                                        <h1 className="text-color text-sm">Setiembre</h1>
                                        <h1 className="text-color text-sm">Octubre</h1>
                                        <h1 className="text-color text-sm">Noviembre</h1>
                                        <h1 className="text-color text-sm">Diciembre</h1>
                                    </div>
                                </div>
                            }
                        <Component nombre={'Temporada seca'} estado={state1.puntVert} evento={openClosePuntVert} />
                    </div>
                </div>
                }
            </div>
        </div>
    );
}

function Component(props){
    return(
        <div className="flex items-center">
            <div className="w-4 border-b border-gray-500"></div>
            <div className="flex items-center gap-1 h-7">
                <OpenCloseComponent estado={props.estado} />
                <h1 onClick={props.evento} className="text-sm text-color cursor-pointer">{props.nombre}</h1>
            </div>
        </div>
    );
}

function OpenCloseComponent(props){
    return(
        <Fragment>
            {
                props.estado === 'close'?<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="rgb(185,192,198)" className="cursor-pointer bi bi-caret-right-fill" viewBox="0 0 16 16">
                    <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
                </svg>:<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="rgb(185,192,198)" className="cursor-pointer bi bi-caret-down-fill" viewBox="0 0 16 16">
                    <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                </svg>
            }
        </Fragment>
    );
}

function Input(props){
    return(
        <div className="flex items-center gap-1">
            <div className="w-4 border-b border-gray-500"></div>
            <div className="flex items-center gap-1 h-7">
                <OpenCloseInput estado={props.estado} />
                <h1 onClick={props.evento} className="text-sm text-color cursor-pointer">{props.nombre}</h1>
            </div>
        </div>
    );
}

function OpenCloseInput(props){
    return(
        <Fragment>
            {
                props.estado === 'close'?<div className="h-3 w-3 rounded-sm border border-gray-500"></div>:<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="rgb(69, 128, 94)" class="bi bi-check-square-fill" viewBox="0 0 16 16">
                    <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm10.03 4.97a.75.75 0 0 1 .011 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.75.75 0 0 1 1.08-.022z"/>
                </svg>
            }
        </Fragment>
    );
}