import React, {useState, useEffect, Fragment, cache} from 'react';
import {GeoJSON} from "react-leaflet";
import ReactDOMServer from 'react-dom/server';
import { appVector } from '../../../../../../firebase/database_vector';
import {ref, onValue} from "firebase/database";
import Loading from '../../../components/loading';

function Departamentos(){
    const [state, setState] = useState();
    const [data, setData] = useState();
    
    useEffect(()=>{
        function PromiseFC(){
            const starCountCor = ref(appVector, 'departamentos');
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
    
    const Popup = ({ feature }) => {
        let popupContent;
        if (feature.properties && feature.properties.popupContent) {
          popupContent = feature.properties.popupContent;
        }
        return (
            <Fragment>
                <p className=''>
                    <span className='font-bold text-sm'>DEPARTAMENTO:</span> {feature.properties.DEPARTAMEN}
                    <br></br>
                    <span className='font-bold text-sm'>CAPITAL:</span> {feature.properties.CAPITAL}
                    <br></br>
                    <span className='font-bold text-sm'>FUENTE:</span> {feature.properties.FUENTE}
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

    const styleOptions = {color:"white",weight:2,fillOpacity: 0.1}

    return(
        <Fragment>
            {
                state === undefined?<Loading />:<GeoJSON data={data} onEachFeature={onEachFeature} style={styleOptions} />
            }
        </Fragment>
    );
}

export default Departamentos;