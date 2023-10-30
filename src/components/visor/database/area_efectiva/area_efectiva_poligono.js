import React, {useState, useEffect, Fragment} from 'react';
import {GeoJSON} from "react-leaflet";
import ReactDOMServer from 'react-dom/server';
import {app} from '../../../../../firebase';
import {ref, onValue} from "firebase/database";
import Loading from '../../loading/loading';

function AreaEfectivaPoligono(){
    const [state, setState] = useState();
    useEffect(()=>{
        async function PromiseDB(){
            const starCountCor = ref(app, "comp_apro_poligonos");
            return new Promise((resolve)=>{
                onValue(starCountCor, (snapshot) => {
                    const dbRef = snapshot.val();
                    resolve(dbRef)
                })
            })
            .then((result)=>{
                setState(result)
            }).catch(()=>{
                console.log("Error al cargar los datos")
            })
        } 
        PromiseDB();
    }, [])

    const [data, setData] = useState();
    useEffect(()=>{
        function getStatic(){
            return setData(state)
        }
        getStatic();
    })

    const blackOptionsStyle= {color:"yellow"}
    
    const Popup = ({ feature }) => {
        let popupContent;
        if (feature.properties && feature.properties.popupContent) {
          popupContent = feature.properties.popupContent;
        }
        return (
            <Fragment>
                <p className=''>
                    {feature.properties.atributo}
                </p>
            </Fragment>
        );
    };
    
    const onEachFeature = (feature, layer) => {
        const popupContent = ReactDOMServer.renderToString(
            <Popup feature={feature} />
        );
        layer.bindPopup(popupContent);
    };

    const colorOptions = (atribute)=>{
        return atribute === "Area_Estudio" ? '#d6d6ff':
               atribute === "Area_Influencia_Directa_Ambiental" ? 'yellow':
               atribute === "Area_Influencia_Indirecta_Ambiental" ? 'orange':
               atribute === "AREA_PROYECTO" ? '#244ead':
               atribute === "Areas_CIRA" ? '#003994':null
    }

    return(
        <Fragment>
            {
                data === undefined?<Loading />:<GeoJSON data={data} onEachFeature={onEachFeature} style={(feature)=>{
                    return {
                            color:colorOptions(feature.properties.atributo),
                            weight: 2,
                            dashArray: '3',
                            fillOpacity: 0.3
                        }
                    }
                } />
            }
        </Fragment>
    );
}

export default React.memo(AreaEfectivaPoligono);