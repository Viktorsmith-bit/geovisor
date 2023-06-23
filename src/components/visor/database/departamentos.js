import React, {useState, useEffect, Fragment} from 'react';
import {GeoJSON} from "react-leaflet";
import ReactDOMServer from 'react-dom/server';
import {app} from '../../../../firebase';
import {ref, onValue} from "firebase/database";
import Loading from '../loading/loading';

function Departamentos(){
    const [state, setState] = useState();
    useEffect(()=>{
        async function PromiseDB(){
            const starCountCor = ref(app, "departamentos");
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

    const blackOptionsPermafrost = {color:"black"}
    
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

    return(
        <Fragment>
            {
                data === undefined?<Loading />:<GeoJSON data={data} onEachFeature={onEachFeature} style={blackOptionsPermafrost} />
            }
        </Fragment>
    );
}

export default React.memo(Departamentos);