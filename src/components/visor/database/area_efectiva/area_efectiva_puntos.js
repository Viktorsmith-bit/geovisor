import React, {useState, useEffect, Fragment} from 'react';
import {GeoJSON} from "react-leaflet";
import ReactDOMServer from 'react-dom/server';
import {app} from '../../../../../firebase';
import {ref, onValue} from "firebase/database";
import Loading from '../../loading/loading';

function AreaEfectivaPuntos(){
    const [state, setState] = useState();
    useEffect(()=>{
        async function PromiseDB(){
            const starCountCor = ref(app, "area_efectiva_puntos");
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
        fillColor: "yellow",
        color: "#ff7800",
        borderColor:"#ff7800",
        weight: 1,
        opacity: 1,
        fillOpacity: 0.8
    };
    
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

export default React.memo(AreaEfectivaPuntos);