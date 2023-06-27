import React, {useState, useEffect, Fragment} from 'react';
import {GeoJSON} from "react-leaflet";
import {Icon} from "leaflet";
import ReactDOMServer from 'react-dom/server';
import {app} from '../../../../../../firebase';
import {ref, onValue} from "firebase/database";
import Loading from '../../../loading/loading';

function Index(){
    const [state, setState] = useState();
    useEffect(()=>{
        async function PromiseDB(){
            const starCountCor = ref(app, "temphumeda_parorg_em_mar_2019");
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
                                <td className='border border-gray-300 p-1'>Bifenilos Policlorados</td><td className='border border-gray-300 p-1'>{feature.properties.pcb}</td><td className='border border-gray-300 p-1'>{feature.properties.uni}</td><td className='border border-gray-300 p-1'>{feature.properties.pcb_eca}</td>
                            </tr>
                            <tr>
                                <td className='border border-gray-300 p-1'>Paration</td><td className='border border-gray-300 p-1'>{feature.properties.paration}</td><td className='border border-gray-300 p-1'>{feature.properties.uni}</td><td className='border border-gray-300 p-1'>{feature.properties.paration_eca}</td>
                            </tr>
                            <tr>
                                <td className='border border-gray-300 p-1'>Aldrin</td><td className='border border-gray-300 p-1'>{feature.properties.aldrin}</td><td className='border border-gray-300 p-1'>{feature.properties.uni}</td><td className='border border-gray-300 p-1'>{feature.properties.aldrin_eca}</td>
                            </tr>
                            <tr>
                                <td className='border border-gray-300 p-1'>Clordano</td><td className='border border-gray-300 p-1'>{feature.properties.clordano}</td><td className='border border-gray-300 p-1'>{feature.properties.uni}</td><td className='border border-gray-300 p-1'>{feature.properties.clordano_e}</td>
                            </tr>
                            <tr>
                                <td className='border border-gray-300 p-1'>DDT</td><td className='border border-gray-300 p-1'>{feature.properties.dicloro_di}</td><td className='border border-gray-300 p-1'>{feature.properties.uni}</td><td className='border border-gray-300 p-1'>{feature.properties.dicloro__1}</td>
                            </tr>
                            <tr>
                                <td className='border border-gray-300 p-1'>Dieldrin</td><td className='border border-gray-300 p-1'>{feature.properties.dieldrin}</td><td className='border border-gray-300 p-1'>{feature.properties.uni}</td><td className='border border-gray-300 p-1'>{feature.properties.dieldrin_e}</td>
                            </tr>
                            <tr>
                                <td className='border border-gray-300 p-1'>Endosulfán</td><td className='border border-gray-300 p-1'>{feature.properties.endosulfan}</td><td className='border border-gray-300 p-1'>{feature.properties.uni}</td><td className='border border-gray-300 p-1'>{feature.properties.endosulf_1}</td>
                            </tr>
                            <tr>
                                <td className='border border-gray-300 p-1'>Endrin</td><td className='border border-gray-300 p-1'>{feature.properties.endrin}</td><td className='border border-gray-300 p-1'>{feature.properties.uni}</td><td className='border border-gray-300 p-1'>{feature.properties.endrin_eca}</td>
                            </tr>
                            <tr>
                                <td className='border border-gray-300 p-1'>Heptacloro y Heptacloro Epóxido</td><td className='border border-gray-300 p-1'>{feature.properties.heptacloro}</td><td className='border border-gray-300 p-1'>{feature.properties.uni}</td><td className='border border-gray-300 p-1'>{feature.properties.heptaclo_1}</td>
                            </tr>
                            <tr>
                                <td className='border border-gray-300 p-1'>Lindano</td><td className='border border-gray-300 p-1'>{feature.properties.lindano}</td><td className='border border-gray-300 p-1'>{feature.properties.uni}</td><td className='border border-gray-300 p-1'>{feature.properties.lindano_ec}</td>
                            </tr>
                            <tr>
                                <td className='border border-gray-300 p-1'>Aldicarb</td><td className='border border-gray-300 p-1'>{feature.properties.aldicarb}</td><td className='border border-gray-300 p-1'>{feature.properties.uni}</td><td className='border border-gray-300 p-1'>{feature.properties.aldicarb_e}</td>
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