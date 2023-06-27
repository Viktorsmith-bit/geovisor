import React, {useState, useEffect, Fragment} from 'react';
import {GeoJSON} from "react-leaflet";
import {Icon} from "leaflet";
import ReactDOMServer from 'react-dom/server';
import {app} from '../../../../../firebase';
import {ref, onValue} from "firebase/database";
import Loading from '../../loading/loading';

function Index(){
    const [state, setState] = useState();
    useEffect(()=>{
        async function PromiseDB(){
            const starCountCor = ref(app, "tempseca_parin_em_mar_2018");
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
            <div className='overFlow-hidden h-96'>
                <div className='overflow-auto overscroll-auto h-96'>
                    <table>
                        <thead>
                            <tr>
                                <th className='border border-gray-300 p-1'>Parámetro</th><th className='border border-gray-300 p-1'>Valor</th><th className='border border-gray-300 p-1'>Unidad</th><th className='border border-gray-300 p-1'>ECA</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className='border border-gray-300 p-1'>Oxígeno Disuelto</td><td className='border border-gray-300 p-1'>{feature.properties.od}</td><td className='border border-gray-300 p-1'>{feature.properties.od_uni}</td><td className='border border-gray-300 p-1'>{feature.properties.od_Eca}</td>
                            </tr>
                            <tr>
                                <td className='border border-gray-300 p-1'>pH</td><td className='border border-gray-300 p-1'>{feature.properties.ph}</td><td className='border border-gray-300 p-1'>{feature.properties.ph_uni}</td><td className='border border-gray-300 p-1'>{feature.properties.ph_eca}</td>
                            </tr>
                            <tr>
                                <td className='border border-gray-300 p-1'>Temperatura</td><td className='border border-gray-300 p-1'>{feature.properties.temp}</td><td className='border border-gray-300 p-1'>{feature.properties.temp_uni}</td><td className='border border-gray-300 p-1'>{feature.properties.temp_eca}</td>
                            </tr>
                            <tr>
                                <td className='border border-gray-300 p-1'>Conductividad</td><td className='border border-gray-300 p-1'>{feature.properties.conduc}</td><td className='border border-gray-300 p-1'>{feature.properties.conduc_uni}</td><td className='border border-gray-300 p-1'>{feature.properties.conduc_eca}</td>
                            </tr>
                        </tbody>
                    </table>
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
        iconUrl:"alfiler.png",
        iconSize:[35,35]
    })

    function pointToLayer (feature, latlng) {
        return L.marker(latlng, {icon:icono})
    }

    return(
        <Fragment>
            {
                data === undefined?<Loading />:<GeoJSON data={data} onEachFeature={onEachFeature} pointToLayer={pointToLayer}/>
            }
        </Fragment>
    );
}

export default React.memo(Index);