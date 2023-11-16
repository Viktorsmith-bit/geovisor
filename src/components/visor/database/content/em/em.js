import React, {useState, useEffect, Fragment, cache} from 'react';
import ReactDOMServer from 'react-dom/server';
import {GeoJSON} from "react-leaflet";
import {Icon} from "leaflet";
import {appVector} from '../../../../../../firebase/database_vector';
import {ref, onValue, set} from "firebase/database";
import Loading from '../../../components/loading';

function Em(props){
    const [state, setState] = useState();
    const [data, setData] = useState();

    useEffect(()=>{
        function PromiseFC(){
            const starCountCor = ref(appVector, 'em');
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

    function Popup({ feature }){
        let popupContent;
        if (feature.properties && feature.properties.popupContent) {
            popupContent = feature.properties.popupContent;
        }

        return (
            <div className='section'>
                <h1><sapan className='font-bold'>Fuente: </sapan> {feature.properties.fuente}</h1>
                <h1><sapan className='font-bold'>Tipo: </sapan> {feature.properties.tipo}</h1>
                <h1><sapan className='font-bold'>Estación: </sapan> {feature.properties.em}</h1>
                <h1><sapan className='font-bold'>Altitud: </sapan> {feature.properties.alt}</h1>
                <div className='flex items-center gap-2 h-8'>
                    <a target="_blank" href='https://walshperu-my.sharepoint.com/personal/vmedina_walshp_com_pe/_layouts/15/guestaccess.aspx?share=ERD5sTevkIRKg0j0PwHO4hIB6CIn2jgCMzChIK6Zeo0K3A&e=Rbn0ob'>
                        <h1 className='text-blue underline'>Ver informe ensayo</h1>
                    </a>
                </div>
            </div>
        );
    };

    const onEachFeature = (feature, layer) => {
        const popupContent = ReactDOMServer.renderToString(
            <Popup feature={feature} />
        );
        layer.bindPopup(popupContent);
    };

    const icono = new Icon({
        iconUrl:"marcador.png",
        iconSize:[35,35]
    })

    function pointToLayer (feature, latlng) {
        return L.marker(latlng, {icon:icono})
    }
    
    return(
        <Fragment>
            {
                state === undefined?<Loading />:<Fragment>
                    {
                        data.map((item)=>{
                            if(item.properties.em === props.em){
                                return <GeoJSON key={item.properties.id} data={item} onEachFeature={onEachFeature} pointToLayer={pointToLayer} />
                            }
                        })
                    }
                </Fragment>
            }
        </Fragment>
    );
}

export default Em
