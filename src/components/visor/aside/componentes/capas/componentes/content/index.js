import { Fragment, useState } from "react";
import { useContextCapas } from "@/app/provider/context";
import { useContextCapasMap } from "@/app/visor/map";
export default function Index(props){
    const {lim,layer,tor,openCloseDep,openCloseProv,openCloseDist,
        openCloseLayer1,
        openCloseLayer2,
        openCloseLayer3,
        openCloseLayer4,
        openCloseLayer5,
        openCloseLayer6,
        openCloseLayer7,
        openCloseLayer8,
        openCloseLayer9,
        openCloseLayer12,
        openCloseLayer13,
        openCloseLayer14,
        openCloseLayer15,
        openCloseLayer16,
        openCloseLayer17,
        openCloseLayer18,
        openCloseTor1,
        openCloseTor2,
        openCloseTor3,
        openCloseTor4,
        openCloseTor5,
        openCloseTor6,
        openCloseTor7,
        openCloseTor8,
        openCloseTor9,
        openCloseTor10,} = useContextCapas()
    const {hundleClicOpenClosePanam, panam} = useContextCapasMap()
    const [proy, setProy] = useState('close')
    const [head, setHead] = useState({head1:'open',head2:'close',head3:'close'})
    const [capas, setCapas] = useState({capa1:'close',capa2:'close',capa3:'close',capa4:'close',capa5:'close',capa6:'close'})

    function openCloseHead1(e){e.preventDefault(), setHead({...head, head1:head.head1 === 'open'?'close':'open'})}
    function openCloseHead2(e){e.preventDefault(), setHead({...head, head2:head.head2 === 'open'?'close':'open'})}
    function openCloseHead3(e){e.preventDefault(), setHead({...head, head3:head.head3 === 'open'?'close':'open'})}
    function openCloseCapa1(e){e.preventDefault(), setCapas({...capas,capa1:capas.capa1 === 'open'?'close':'open'})}
    function openCloseCapa2(e){e.preventDefault(), setCapas({...capas,capa2:capas.capa2 === 'open'?'close':'open'})}
    function openCloseCapa3(e){e.preventDefault(), setCapas({...capas,capa3:capas.capa3 === 'open'?'close':'open'})}
    function openCloseCapa6(e){e.preventDefault(), setCapas({...capas,capa6:capas.capa6 === 'open'?'close':'open'})}
    function openCloseProy(e){e.preventDefault(), setProy(proy === 'open'?'close':'open')}

    return(
        <Fragment>
            <LayerGroup>
                <h1 className="flex items-center px-4 text-sm text-color bg-gray-200 w-full h-8">Límites políticos</h1>
                <Input nombre={'Departamentales'} estado={lim.dep} evento={openCloseDep} />
                <Input nombre={'Provinciales'} estado={lim.prov} evento={openCloseProv} />
                <Input nombre={'Distritales'} estado={lim.dist} evento={openCloseDist} />
            </LayerGroup>
            <LayerGroup>
                <h1 className="flex items-center px-4 text-sm text-color bg-gray-200 w-full h-8">Componentes</h1>
                <Layer nombre={'Unidad Minera Toromocho'} estado={proy} evento={openCloseProy}>
                    <Input nombre={'Área de Estudio'} estado={tor.tor1} evento={openCloseTor1} /> 
                    <Input nombre={'Área de Influencia Directa Ambiental'} estado={tor.tor2} evento={openCloseTor2} /> 
                    <Input nombre={'Área de Influencia Indirecta Ambiental'} estado={tor.tor3} evento={openCloseTor3} />
                    <Input nombre={'Área del Proyecto'} estado={tor.tor4} evento={openCloseTor4} /> 
                    <Input nombre={'Áreas con CIRA'} estado={tor.tor5} evento={openCloseTor5} /> 
                    <Input nombre={'Unidades de vegetación'} estado={tor.tor6} evento={openCloseTor6} /> 
                    <Input nombre={'Unidades de vegetación 2'} estado={tor.tor7} evento={openCloseTor7} /> 
                    <Input nombre={'Restos Arqueológicos'} estado={tor.tor8} evento={openCloseTor8} /> 
                    <Input nombre={'Sitios Arqueológicos'} estado={tor.tor9} evento={openCloseTor9} /> 
                    <Input nombre={'Área de componentes aprobados'} estado={tor.tor10} evento={openCloseTor10} /> 
                </Layer>
            </LayerGroup>
            <LayerGroup>
                <h1 className="flex items-center px-4 text-sm text-color bg-gray-200 w-full h-8">Fotografías panorámicas</h1>
                <Input nombre={'Ubicación en 360°'} estado={panam} evento={hundleClicOpenClosePanam} />
            </LayerGroup>
            <LayerGroup>
                <h1 className="flex items-center px-4 text-sm text-color bg-gray-200 w-full h-8">Estaciones de monitoreos</h1>
                <LayerHeader id="calidad" nombre={'Calidad del Agua y Efluentes'} estado={head.head1} evento={openCloseHead1}>
                    <Layer nombre={'Agua subterránea'} estado={capas.capa1} evento={openCloseCapa1}>
                        <Input nombre={'EM TA-12'} estado={layer.layer1} evento={openCloseLayer1} /> 
                    </Layer>
                    <Layer nombre={'Agua superficial'} estado={capas.capa2} evento={openCloseCapa2}>
                        <Input nombre={'EM R-1'} estado={layer.layer2} evento={openCloseLayer2} />
                        <Input nombre={'EM R-2'} estado={layer.layer3} evento={openCloseLayer3} />
                        <Input nombre={'EM R-3'} estado={layer.layer4} evento={openCloseLayer4} />
                        <Input nombre={'EM R-7'} estado={layer.layer5} evento={openCloseLayer5} />
                    </Layer>
                    <Layer nombre={'Puntos de vertimento'} estado={capas.capa3} evento={openCloseCapa3}>
                        <Input nombre={'PTARD T1'} estado={layer.layer6} evento={openCloseLayer6} />
                        <Input nombre={'PTARD T2'} estado={layer.layer7} evento={openCloseLayer7} />
                    </Layer>
                </LayerHeader>
                <LayerHeader nombre={'Calidad del Aire'} estado={head.head2} evento={openCloseHead2}>
                    <Input nombre={'Balcanes M-2'} estado={layer.layer8} evento={openCloseLayer8} /> 
                    <Input nombre={'Rumichaca M-3'} estado={layer.layer9} evento={openCloseLayer9} /> 
                </LayerHeader>
                <LayerHeader nombre={'Calidad del Suelo'} estado={head.head3} evento={openCloseHead3}>
                    <Layer nombre={'Suelo'} estado={capas.capa6} evento={openCloseCapa6}>
                        <Input nombre={'OPT-05-01'} estado={layer.layer10} evento={openCloseLayer12} />
                        <Input nombre={'OPT-05-02'} estado={layer.layer13} evento={openCloseLayer13} /> 
                        <Input nombre={'OPT-07-06'} estado={layer.layer14} evento={openCloseLayer14} /> 
                        <Input nombre={'OPT-07-08'} estado={layer.layer15} evento={openCloseLayer15} /> 
                        <Input nombre={'OPT-08-04'} estado={layer.layer16} evento={openCloseLayer16} /> 
                        <Input nombre={'OPT-08-06'} estado={layer.layer17} evento={openCloseLayer17} /> 
                        <Input nombre={'OPT-18-01'} estado={layer.layer18} evento={openCloseLayer18} /> 
                    </Layer>
                </LayerHeader>
            </LayerGroup>
        </Fragment>
    );
}

function LayerGroup({children}){
    return(
        <div className="pb-2 mt-2 border-r border-t  border-l  border-b border-gray-400">
            {children}
        </div>
    );
}

function LayerHeader({estado, evento, nombre, children}){
    return(
        <div className="px-4 mt-2">
            <div className="flex items-center gap-1">
                <OpenCloseComponent evento={evento} estado={estado} />
                <h1 onClick={evento} className="text-sm text-color cursor-pointer">{nombre}</h1>
            </div>
            {
                estado === 'close'?null:<div>{children}</div>
            }
        </div>
    );
}

function Layer({estado, evento, nombre, children}){
    return(
        <div className="px-4 mt-2">
            <div className="flex items-center gap-1">
                <OpenCloseComponent evento={evento} estado={estado} />
                <h1 onClick={evento} className="text-sm text-color cursor-pointer">{nombre}</h1>
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
        <div className="px-4 mt-2">
            <div className="flex items-center gap-1">
                <OpenCloseInput estado={estado} />
                <h1 onClick={evento} className="text-sm text-color cursor-pointer">{nombre}</h1>
            </div>
        </div>
    );
}

function OpenCloseInput(props){
    return(
        <Fragment>
            {
                props.estado === 'close'?<div className="h-3.5 w-3.5 rounded-sm border-r border-l border-t border-b border-gray-500"></div>:<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="rgb(0, 96, 150)" className="bi bi-check-square-fill" viewBox="0 0 16 16">
                    <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm10.03 4.97a.75.75 0 0 1 .011 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.75.75 0 0 1 1.08-.022z"/>
                </svg>
            }
        </Fragment>
    );
}