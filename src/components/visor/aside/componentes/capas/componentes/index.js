import { Fragment} from "react";
import { useContextCapas } from "@/app/provider/context";
import { useContextCapasMap } from "@/app/visor/map";
import LayerGroup from "./content/layerGroup";
import LayerHeader from "./content/layerHeader";
import Layer from "./content/layer";
import Input from "./content/input";

export default function Index(){
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

    return(
        <Fragment>
            <LayerGroup>
                <LayerHeader nombre={'Límites políticos'}>
                    <Input nombre={'Departamentales'} estado={lim.dep} evento={openCloseDep} />
                    <Input nombre={'Provinciales'} estado={lim.prov} evento={openCloseProv} />
                    <Input nombre={'Distritales'} estado={lim.dist} evento={openCloseDist} />
                </LayerHeader>
            </LayerGroup>
            <LayerGroup>
                <LayerHeader nombre={'Unidad Minera Toromocho'}>
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
                </LayerHeader>
            </LayerGroup>
            <LayerGroup>
                <LayerHeader nombre={'Fotografías panorámicas'}>
                    <Input nombre={'Ubicación en 360°'} estado={panam} evento={hundleClicOpenClosePanam} />
                </LayerHeader>
            </LayerGroup>
            <LayerGroup>
                <LayerHeader nombre={'Calidad del Agua y Efluentes'}>
                    <Layer nombre={'Agua subterránea'}>
                        <Input nombre={'EM TA-12'} estado={layer.layer1} evento={openCloseLayer1} /> 
                    </Layer>
                    <Layer nombre={'Agua superficial'}>
                        <Input nombre={'EM R-1'} estado={layer.layer2} evento={openCloseLayer2} />
                        <Input nombre={'EM R-2'} estado={layer.layer3} evento={openCloseLayer3} />
                        <Input nombre={'EM R-3'} estado={layer.layer4} evento={openCloseLayer4} />
                        <Input nombre={'EM R-7'} estado={layer.layer5} evento={openCloseLayer5} />
                    </Layer>
                    <Layer nombre={'Puntos de vertimento'}>
                        <Input nombre={'PTARD T1'} estado={layer.layer6} evento={openCloseLayer6} />
                        <Input nombre={'PTARD T2'} estado={layer.layer7} evento={openCloseLayer7} />
                    </Layer>
                </LayerHeader>
                <LayerHeader nombre={'Calidad del Aire'}>
                    <Input nombre={'Balcanes M-2'} estado={layer.layer8} evento={openCloseLayer8} /> 
                    <Input nombre={'Rumichaca M-3'} estado={layer.layer9} evento={openCloseLayer9} /> 
                </LayerHeader>
                <LayerHeader nombre={'Calidad del Suelo'} >
                    <Layer nombre={'Suelo'}>
                        <Input nombre={'OPT-05-01'} estado={layer.layer12} evento={openCloseLayer12} />
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
