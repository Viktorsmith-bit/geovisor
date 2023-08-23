import { Fragment, useState } from "react";

export default function CalidadAgua(props){

    const [state1, setState1] = useState({aguaSub:'close',aguaSup:'close',puntVert:'close', ano2016:'close',ano2017:'close',ano2018:'close',eca:'close'})
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
        <LayerGroup>
            <Layer id="" nombre={'Agua subterránea'} estado={state1.aguaSub} evento={openCloseAguaSub}>
                <Layer nombre={'2016'} estado={state2.ano2016} evento={openCloseAno2016}>
                    <Input nombre={'EM TA-12'} estado={props.estado.em2016T2} evento={props.openCloseEm2016T2} /> 
                </Layer>
                <Layer nombre={'2017'} estado={state2.ano2017} evento={openCloseAno2017}>
                    <Input nombre={'EM TA-12'} estado={props.estado.em2017T2} evento={props.openCloseEm2017T2} /> 
                </Layer>
                <Layer nombre={'2018'} estado={state2.ano2018} evento={openCloseAno2018}>
                    <Input nombre={'EM TA-12'} estado={props.estado.em2018T1} evento={props.openCloseEm2018T1} /> 
                </Layer>
            </Layer>
            <Layer id="" nombre={'Agua superficial'} estado={state1.aguaSup} evento={openCloseAguaSup}>
                <Layer nombre={'Temporada húmeda'} estado={state3.tempH} evento={openCloseTempH}>
                    <Layer nombre={'Parámetros microbiológicos'} estado={sup1.parMic} evento={openCloseParMic}>
                        <Input nombre={'EM R-2'} estado={props.humeda.parMicro} evento={props.openCloseHumParMicro} />
                    </Layer>
                    <Layer nombre={'Parámetros orgánicos'} estado={sup1.parOrg} evento={openCloseParOrg}>
                        <Input nombre={'EM R-2'} estado={props.humeda.parOrg} evento={props.openCloseHumParOrg} />
                    </Layer>
                    <Layer nombre={'Parámetros fisicoquímicos'} estado={sup1.parFis} evento={openCloseParFis} >
                        <Input nombre={'EM R-2'} estado={props.humeda.parFis} evento={props.openCloseHumParFis} />
                    </Layer>
                    <Layer nombre={'Parámetros in situ'} estado={sup1.parIn} evento={openCloseParIn} >
                        <Input nombre={'EM R-2'} estado={props.humeda.parIn} evento={props.openCloseHumParIn} />
                    </Layer>
                    <Layer nombre={'Parámetros inorgánicos'} estado={sup1.parIno} evento={openCloseParIno} >
                        <Input nombre={'EM R-2'} estado={props.humeda.parIno} evento={props.openCloseHumParIno} />
                    </Layer>
                </Layer>
                <Layer nombre={'Temporada seca'} estado={state3.tempS} evento={openCloseTempS}>
                    <Layer nombre={'Parámetros microbiológicos'} estado={sup1.parMic} evento={openCloseParMic}>
                        <Input nombre={'EM R-2'} estado={props.humeda.parMicro} evento={props.openCloseHumParMicro} />
                    </Layer>
                    <Layer nombre={'Parámetros orgánicos'} estado={sup1.parOrg} evento={openCloseParOrg}>
                        <Input nombre={'EM R-2'} estado={props.humeda.parOrg} evento={props.openCloseHumParOrg} />
                    </Layer>
                    <Layer nombre={'Parámetros fisicoquímicos'} estado={sup1.parFis} evento={openCloseParFis} >
                        <Input nombre={'EM R-2'} estado={props.humeda.parFis} evento={props.openCloseHumParFis} />
                    </Layer>
                    <Layer nombre={'Parámetros in situ'} estado={sup1.parIn} evento={openCloseParIn} >
                        <Input nombre={'EM R-2'} estado={props.humeda.parIn} evento={props.openCloseHumParIn} />
                    </Layer>
                    <Layer nombre={'Parámetros inorgánicos'} estado={sup1.parIno} evento={openCloseParIno} >
                        <Input nombre={'EM R-2'} estado={props.humeda.parIno} evento={props.openCloseHumParIno} />
                    </Layer>
                </Layer>
            </Layer>
        </LayerGroup>
    );
}

function LayerGroup({children}){
    return(
        <Fragment>
            {children}
        </Fragment>
    );
}

function Layer({estado, evento, nombre, children}){
    return(
        <div className="border-dashed border-l border-gray-500 ml-5">
            <div className="flex items-center">
                <div className="w-4 border-dashed border-b border-gray-500"></div>
                <div className="flex items-center gap-1 h-7">
                    <OpenCloseComponent evento={evento} estado={estado} />
                    <h1 onClick={evento} className="text-sm text-color cursor-pointer">{nombre}</h1>
                </div>
            </div>
            {
                estado === 'close'?null:<div>{children}</div>
            }
        </div>
    );
}

function OpenCloseComponent(props){
    return(
        <Fragment>
            {
                props.estado === 'close'?<svg onClick={props.evento} xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="cursor-pointer bi bi-plus-square" viewBox="0 0 16 16">
                    <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                </svg>:<svg onClick={props.evento} xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="cursor-pointer bi bi-dash-square" viewBox="0 0 16 16">
                    <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
                    <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>
                </svg>
            }
        </Fragment>
    );
}

function Input({estado, evento, nombre}){
    return(
        <div className="border-dashed border-l border-gray-500 ml-5">
            <div className="flex items-center gap-1">
                <div className="w-4 border-dashed border-b border-gray-500"></div>
                <div className="flex items-center gap-1 h-7">
                    <OpenCloseInput estado={estado} />
                    <h1 onClick={evento} className="text-sm text-color cursor-pointer">{nombre}</h1>
                </div>
            </div>
        </div>
    );
}

function OpenCloseInput(props){
    return(
        <Fragment>
            {
                props.estado === 'close'?<div className="h-3.5 w-3.5 rounded-sm border border-gray-500"></div>:<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="rgb(0, 96, 150)" class="bi bi-check-square-fill" viewBox="0 0 16 16">
                    <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm10.03 4.97a.75.75 0 0 1 .011 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.75.75 0 0 1 1.08-.022z"/>
                </svg>
            }
        </Fragment>
    );
}