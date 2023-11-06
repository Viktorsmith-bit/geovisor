import { useContextCapas } from "@/app/provider/context";
import Departamentos from "./content/limites/departamentos";
import Provincia from "./content/limites/provincia";
import Distritos from "./content/limites/distritos";
import Componentes from "./content/componentes/componentes";
import Em from "./content/em/em";
import { Fragment } from "react";
export default function Vector(){
    const {lim,layer,tor} = useContextCapas()
    return(
        <Fragment>
            {lim.dep === 'close'?null:<Departamentos />}
            {lim.prov === 'close'?null:<Provincia />}
            {lim.dist === 'close'?null:<Distritos />}
            {tor.tor1 === 'close'?null:<Componentes Component={'Área de Estudio'} />}
            {tor.tor3 === 'close'?null:<Componentes Component={'Área de Influencia Indirecta Ambiental'} />}
            {tor.tor2 === 'close'?null:<Componentes Component={'Área de Influencia Directa Ambiental'} />}
            {tor.tor4 === 'close'?null:<Componentes Component={'Área del Proyecto'} />}
            {tor.tor5 === 'close'?null:<Componentes Component={'Áreas con CIRA'} />}
            {tor.tor6 === 'close'?null:<Componentes Component={'Unidades de vegetación'} />}
            {tor.tor7 === 'close'?null:<Componentes Component={'Unidades de vegetación 2'} />}
            {tor.tor8 === 'close'?null:<Componentes Component={'Restos Arqueológicos'} />}
            {tor.tor9 === 'close'?null:<Componentes Component={'Sitios Arqueológicos'} />}
            {tor.tor10 === 'close'?null:<Componentes Component={'Área de componentes aprobados'} />}
            {layer.layer1 === 'close'?null:<Em em={'TA-12'} />}
            {layer.layer2 === 'close'?null:<Em em={'R-1'} />}
            {layer.layer3 === 'close'?null:<Em em={'R-2'} />}
            {layer.layer4 === 'close'?null:<Em em={'R-3'} />}
            {layer.layer5 === 'close'?null:<Em em={'R-7'} />}
            {layer.layer6 === 'close'?null:<Em em={'PTARD T1'} />}
            {layer.layer7 === 'close'?null:<Em em={'PTARD T2'} />}
            {layer.layer8 === 'close'?null:<Em em={'Balcanes M-2'} />}
            {layer.layer9 === 'close'?null:<Em em={'Rumichaca M-3'} />}
            {layer.layer12 === 'close'?null:<Em em={'OPT-05-01'} />}
            {layer.layer13 === 'close'?null:<Em em={'OPT-05-02'} />}
            {layer.layer14 === 'close'?null:<Em em={'OPT-07-06'} />}
            {layer.layer15 === 'close'?null:<Em em={'OPT-07-08'} />}
            {layer.layer16 === 'close'?null:<Em em={'OPT-08-04'} />}
            {layer.layer17 === 'close'?null:<Em em={'OPT-08-06'} />}
            {layer.layer18 === 'close'?null:<Em em={'OPT-18-01'} />}
        </Fragment>
    );
}