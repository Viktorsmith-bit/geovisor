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
            const starCountCor = ref(app, "temphumeda_parino_em_mar_2019");
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
                                <td className='border border-gray-300 p-1'>Aluminio</td><td className='border border-gray-300 p-1'>{feature.properties.aluminio}</td><td className='border border-gray-300 p-1'>{feature.properties.uni}</td><td className='border border-gray-300 p-1'>{feature.properties.aluminio_e}</td>
                            </tr>
                            <tr>
                                <td className='border border-gray-300 p-1'>Arsénico</td><td className='border border-gray-300 p-1'>{feature.properties.arsenico}</td><td className='border border-gray-300 p-1'>{feature.properties.uni}</td><td className='border border-gray-300 p-1'>{feature.properties.arsenico_e}</td>
                            </tr>
                            <tr>
                                <td className='border border-gray-300 p-1'>Bario</td><td className='border border-gray-300 p-1'>{feature.properties.bario}</td><td className='border border-gray-300 p-1'>{feature.properties.uni}</td><td className='border border-gray-300 p-1'>{feature.properties.bario_eca}</td>
                            </tr>
                            <tr>
                                <td className='border border-gray-300 p-1'>Berilio</td><td className='border border-gray-300 p-1'>{feature.properties.berilio}</td><td className='border border-gray-300 p-1'>{feature.properties.uni}</td><td className='border border-gray-300 p-1'>{feature.properties.berilio_ec}</td>
                            </tr>
                            <tr>
                                <td className='border border-gray-300 p-1'>Boro</td><td className='border border-gray-300 p-1'>{feature.properties.boro}</td><td className='border border-gray-300 p-1'>{feature.properties.uni}</td><td className='border border-gray-300 p-1'>{feature.properties.boro_eca}</td>
                            </tr>
                            <tr>
                                <td className='border border-gray-300 p-1'>Cadmio</td><td className='border border-gray-300 p-1'>{feature.properties.cadmio}</td><td className='border border-gray-300 p-1'>{feature.properties.uni}</td><td className='border border-gray-300 p-1'>{feature.properties.cadmio_eca}</td>
                            </tr>
                            <tr>
                                <td className='border border-gray-300 p-1'>Cobre</td><td className='border border-gray-300 p-1'>{feature.properties.cobre}</td><td className='border border-gray-300 p-1'>{feature.properties.uni}</td><td className='border border-gray-300 p-1'>{feature.properties.cobre_eca}</td>
                            </tr>
                            <tr>
                                <td className='border border-gray-300 p-1'>Cobalto</td><td className='border border-gray-300 p-1'>{feature.properties.cobalto}</td><td className='border border-gray-300 p-1'>{feature.properties.uni}</td><td className='border border-gray-300 p-1'>{feature.properties.cobalto_ec}</td>
                            </tr>
                            <tr>
                                <td className='border border-gray-300 p-1'>Cromo Total</td><td className='border border-gray-300 p-1'>{feature.properties.cromo_tota}</td><td className='border border-gray-300 p-1'>{feature.properties.uni}</td><td className='border border-gray-300 p-1'>{feature.properties.cromo_to_1}</td>
                            </tr>
                            <tr>
                                <td className='border border-gray-300 p-1'>Hierro</td><td className='border border-gray-300 p-1'>{feature.properties.hierro}</td><td className='border border-gray-300 p-1'>{feature.properties.uni}</td><td className='border border-gray-300 p-1'>{feature.properties.hierro_eca}</td>
                            </tr>
                            <tr>
                                <td className='border border-gray-300 p-1'>Litio</td><td className='border border-gray-300 p-1'>{feature.properties.litio}</td><td className='border border-gray-300 p-1'>{feature.properties.uni}</td><td className='border border-gray-300 p-1'>{feature.properties.litio_eca}</td>
                            </tr>
                            <tr>
                                <td className='border border-gray-300 p-1'>Manganeso</td><td className='border border-gray-300 p-1'>{feature.properties.manganeso}</td><td className='border border-gray-300 p-1'>{feature.properties.uni}</td><td className='border border-gray-300 p-1'>{feature.properties.manganeso_}</td>
                            </tr>
                            <tr>
                                <td className='border border-gray-300 p-1'>Mercurio</td><td className='border border-gray-300 p-1'>{feature.properties.mercurio}</td><td className='border border-gray-300 p-1'>{feature.properties.uni}</td><td className='border border-gray-300 p-1'>{feature.properties.mercurio_e}</td>
                            </tr>
                            <tr>
                                <td className='border border-gray-300 p-1'>Niquel</td><td className='border border-gray-300 p-1'>{feature.properties.niquel}</td><td className='border border-gray-300 p-1'>{feature.properties.uni}</td><td className='border border-gray-300 p-1'>{feature.properties.niquel_eca}</td>
                            </tr>
                            <tr>
                                <td className='border border-gray-300 p-1'>Plomo</td><td className='border border-gray-300 p-1'>{feature.properties.plomo}</td><td className='border border-gray-300 p-1'>{feature.properties.uni}</td><td className='border border-gray-300 p-1'>{feature.properties.plomo_eca}</td>
                            </tr>
                            <tr>
                                <td className='border border-gray-300 p-1'>Selenio</td><td className='border border-gray-300 p-1'>{feature.properties.selenio}</td><td className='border border-gray-300 p-1'>{feature.properties.uni}</td><td className='border border-gray-300 p-1'>{feature.properties.selenio_eca}</td>
                            </tr>
                            <tr>
                                <td className='border border-gray-300 p-1'>Zinc</td><td className='border border-gray-300 p-1'>{feature.properties.zinc}</td><td className='border border-gray-300 p-1'>{feature.properties.uni}</td><td className='border border-gray-300 p-1'>{feature.properties.zinc_eca}</td>
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