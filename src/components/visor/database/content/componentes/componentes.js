import React, {useState, useEffect, Fragment,cache} from 'react';
import {GeoJSON} from "react-leaflet";
import ReactDOMServer from 'react-dom/server';
import { appVector } from '../../../../../../firebase/database_vector';
import {ref, onValue} from "firebase/database";
import Loading from '../../../components/loading';

function Componentes(props){
    const [state, setState] = useState();
    const [data, setData] = useState();

    useEffect(()=>{
        function PromiseFC(){
            const starCountCor = ref(appVector, 'componentes');
            onValue(starCountCor, (snapshot) => {
                if (snapshot.exists()) {
                    setState(snapshot.val())
                    setData(snapshot.val().features)
                } else {
                    console.log("error")
                }
            });
        }
        return PromiseFC()
    },[])
    
    const colorOptions = (atribute)=>{
        return atribute === "Área de Estudio" ? '#3498DB':
               atribute === "Área de Influencia Directa Ambiental" ? '#DC7633':
               atribute === "Área de Influencia Indirecta Ambiental" ? '#2ECC71 ':
               atribute === "Área del Proyecto" ? '#F7DC6F':
               atribute === "Áreas con CIRA" ? '#34495E':
               atribute === "Unidades de vegetación" ? '#AED6F1':
               atribute === "Unidades de vegetación 2" ? '#D2B4DE':
               atribute === "Restos Arqueológicos" ? '#AEB6BF':
               atribute === "Sitios Arqueológicos" ? '#D98880':
               atribute === "Área de componentes aprobados" ? '#873600':null
    }
    
    const Popup = ({ feature }) => {
        let popupContent;
        if (feature.properties && feature.properties.popupContent) {
          popupContent = feature.properties.popupContent;
        }
        return (
            <Fragment>
                <div className='section'>
                <h1><sapan className='font-bold'>Componente: </sapan> {feature.properties.comp}</h1>
                <h1><sapan className='font-bold'>Área (m2): </sapan> {feature.properties.area}</h1>
            </div>
            </Fragment>
        );
    };
    
    const onEachFeature = (feature, layer) => {
        const popupContent = ReactDOMServer.renderToString(
            <Popup feature={feature} />
        );
        layer.bindPopup(popupContent);
    };

    return(
        <Fragment>
            {
                state === undefined?<Loading />:<Fragment>
                    {
                        data.map((item)=>{
                            if(item.properties.comp === props.Component){
                                return <GeoJSON key={item.properties.id} data={item} onEachFeature={onEachFeature} style={(feature)=>{
                                    return {
                                            color:colorOptions(feature.properties.comp),
                                            weight: 2,
                                            dashArray: '3',
                                            fillOpacity: 0.6
                                        }
                                    }
                                }/>
                            }
                        })
                    }
                </Fragment>
            }
        </Fragment>
    );
}

export default React.memo(Componentes);