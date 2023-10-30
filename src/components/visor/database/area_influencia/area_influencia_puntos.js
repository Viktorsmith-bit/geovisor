import React, {useState, useEffect, Fragment} from 'react';
import {GeoJSON} from "react-leaflet";
import {Icon, icon} from "leaflet";
import ReactDOMServer from 'react-dom/server';
import {app} from '../../../../../firebase';
import {ref, onValue} from "firebase/database";
import Loading from '../../loading/loading';

function AreaInfluenciaAmbientalPuntos(){
    const [state, setState] = useState();
    useEffect(()=>{
        async function PromiseDB(){
            const starCountCor = ref(app, "comp_apro_puntos");
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
                <span className='font-bold text-sm'>EM:</span> {feature.properties.name}
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

    var geojsonMarkerOptions = {
        radius: 4,
        fillColor: "blue",
        color: "#ff7800",
        borderColor:"#ff7800",
        weight: 1,
        opacity: 1,
        fillOpacity: 0.8
    };
    
    const icono = new Icon({
        iconUrl:"alfiler.png",
        iconSize:[20,20]
    })

    function pointToLayer (feature, latlng) {
        return L.circleMarker(latlng, geojsonMarkerOptions)
    }

    return(
        <Fragment>
            {
                data === undefined?<Loading />:<GeoJSON data={data} onEachFeature={onEachFeature} style={blackOptionsStyle} pointToLayer={pointToLayer}/>
            }
        </Fragment>
    );
}

export default React.memo(AreaInfluenciaAmbientalPuntos);