import React, {useState, useEffect, Fragment} from 'react';
import {GeoJSON} from "react-leaflet";
import {Icon, icon} from "leaflet";
import ReactDOMServer from 'react-dom/server';
import {app} from '../../../../../firebase';
import {ref, onValue} from "firebase/database";
import Loading from '../../loading/loading';

function Em2018T3(){
    const [state, setState] = useState();
    useEffect(()=>{
        async function PromiseDB(){
            const starCountCor = ref(app, "em_2018_t1");
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
                                <td className='border border-gray-300 p-1'>Caudal</td><td className='border border-gray-300 p-1'>{feature.properties.Caudal}</td><td className='border border-gray-300 p-1'>{feature.properties.Uni_cau}</td><td className='border border-gray-300 p-1'>{feature.properties.ECA_Caudal}</td>
                            </tr>
                            <tr>
                                <td className='border border-gray-300 p-1'>Conductividad</td><td className='border border-gray-300 p-1'>{feature.properties.Conductivi}</td><td className='border border-gray-300 p-1'>{feature.properties.Uni_con}</td><td className='border border-gray-300 p-1'>{feature.properties.ECA_Conduc}</td>
                            </tr>
                            <tr>
                                <td className='border border-gray-300 p-1'>Oxígeno Disuelto</td><td className='border border-gray-300 p-1'>{feature.properties.OD}</td><td className='border border-gray-300 p-1'>{feature.properties.Uni_OD}</td><td className='border border-gray-300 p-1'>{feature.properties.ECA_OD}</td>
                            </tr>
                            <tr>
                                <td className='border border-gray-300 p-1'>PH Campo</td><td className='border border-gray-300 p-1'>{feature.properties.pH_Campo}</td><td className='border border-gray-300 p-1'>{feature.properties.Uni_ph}</td><td className='border border-gray-300 p-1'>{feature.properties.ECA_pH_Cam}</td>
                            </tr>
                            <tr>
                                <td className='border border-gray-300 p-1'>Temperatura</td><td className='border border-gray-300 p-1'>{feature.properties.Temperatur}</td><td className='border border-gray-300 p-1'>{feature.properties.Uni_t}</td><td className='border border-gray-300 p-1'>{feature.properties.ECA_Temper}</td>
                            </tr>
                            <tr>
                                <td className='border border-gray-300 p-1'>Cianuro</td><td className='border border-gray-300 p-1'>{feature.properties.Cianuro_Wa}</td><td className='border border-gray-300 p-1'>{feature.properties.Uni_ZT}</td><td className='border border-gray-300 p-1'>{feature.properties.ECA_Cianur}</td>
                            </tr>
                            <tr>
                                <td className='border border-gray-300 p-1'>DBO5</td><td className='border border-gray-300 p-1'>{feature.properties.DBO5}</td><td className='border border-gray-300 p-1'>{feature.properties.Uni_ZT}</td><td className='border border-gray-300 p-1'>{feature.properties.ECA_DBO5}</td>
                            </tr>
                            <tr>
                                <td className='border border-gray-300 p-1'>DQO</td><td className='border border-gray-300 p-1'>{feature.properties.DQO}</td><td className='border border-gray-300 p-1'>{feature.properties.Uni_DQO}</td><td className='border border-gray-300 p-1'>{feature.properties.ECA_DQO}</td>
                            </tr>
                            <tr>
                                <td className='border border-gray-300 p-1'>Nitratos</td><td className='border border-gray-300 p-1'>{feature.properties.N_Nitratos}</td><td className='border border-gray-300 p-1'>{feature.properties.Uni_ZT}</td><td className='border border-gray-300 p-1'>{feature.properties.ECA_N_Nitr}</td>
                            </tr>
                            <tr>
                                <td className='border border-gray-300 p-1'>Nitritos</td><td className='border border-gray-300 p-1'>{feature.properties.N_Nitritos}</td><td className='border border-gray-300 p-1'>{feature.properties.Uni_ZT}</td><td className='border border-gray-300 p-1'>{feature.properties.ECA_N_Ni_1}</td>
                            </tr>
                            <tr>
                                <td className='border border-gray-300 p-1'>Sulfatos</td><td className='border border-gray-300 p-1'>{feature.properties.Sulfatos}</td><td className='border border-gray-300 p-1'>{feature.properties.Uni_ZT}</td><td className='border border-gray-300 p-1'>{feature.properties.ECA_Sulfat}</td>
                            </tr>
                            <tr>
                                <td className='border border-gray-300 p-1'>Arsénico Total</td><td className='border border-gray-300 p-1'>{feature.properties.Arsenico_T}</td><td className='border border-gray-300 p-1'>{feature.properties.Uni_ZT}</td><td className='border border-gray-300 p-1'>{feature.properties.ECA_Arseni}</td>
                            </tr>
                            <tr>
                                <td className='border border-gray-300 p-1'>Cadmio Total</td><td className='border border-gray-300 p-1'>{feature.properties.Cadmio_Tot}</td><td className='border border-gray-300 p-1'>{feature.properties.Uni_ZT}</td><td className='border border-gray-300 p-1'>{feature.properties.ECA_Cadmio}</td>
                            </tr>
                            <tr>
                                <td className='border border-gray-300 p-1'>Cobre Total</td><td className='border border-gray-300 p-1'>{feature.properties.Cobre_Tota}</td><td className='border border-gray-300 p-1'>{feature.properties.Uni_ZT}</td><td className='border border-gray-300 p-1'>{feature.properties.ECA_Cobre_}</td>
                            </tr>
                            <tr>
                                <td className='border border-gray-300 p-1'>Cromo Total</td><td className='border border-gray-300 p-1'>{feature.properties.Cromo_Tota}</td><td className='border border-gray-300 p-1'>{feature.properties.Uni_ZT}</td><td className='border border-gray-300 p-1'>{feature.properties.ECA_Cromo_}</td>
                            </tr>
                            <tr>
                                <td className='border border-gray-300 p-1'>Hierro Total</td><td className='border border-gray-300 p-1'>{feature.properties.Hierro_Tot}</td><td className='border border-gray-300 p-1'>{feature.properties.Uni_ZT}</td><td className='border border-gray-300 p-1'>{feature.properties.ECA_Hierro}</td>
                            </tr>
                            <tr>
                                <td className='border border-gray-300 p-1'>Manganeso Total</td><td className='border border-gray-300 p-1'>{feature.properties.Manganeso_}</td><td className='border border-gray-300 p-1'>{feature.properties.Uni_ZT}</td><td className='border border-gray-300 p-1'>{feature.properties.ECA_Mangan}</td>
                            </tr>
                            <tr>
                                <td className='border border-gray-300 p-1'>Mercurio Total</td><td className='border border-gray-300 p-1'>{feature.properties.Mercurio_T}</td><td className='border border-gray-300 p-1'>{feature.properties.Uni_ZT}</td><td className='border border-gray-300 p-1'>{feature.properties.ECA_Mercur}</td>
                            </tr>
                            <tr>
                                <td className='border border-gray-300 p-1'>Níquel Total</td><td className='border border-gray-300 p-1'>{feature.properties.Niquel_Tot}</td><td className='border border-gray-300 p-1'>{feature.properties.Uni_ZT}</td><td className='border border-gray-300 p-1'>{feature.properties.ECA_Niquel}</td>
                            </tr>
                            <tr>
                                <td className='border border-gray-300 p-1'>Plomo Total</td><td className='border border-gray-300 p-1'>{feature.properties.Plomo_Tota}</td><td className='border border-gray-300 p-1'>{feature.properties.Uni_ZT}</td><td className='border border-gray-300 p-1'>{feature.properties.ECA_Plomo_}</td>
                            </tr>
                            <tr>
                                <td className='border border-gray-300 p-1'>Selenio Total</td><td className='border border-gray-300 p-1'>{feature.properties.Selenio_To}</td><td className='border border-gray-300 p-1'>{feature.properties.Uni_ZT}</td><td className='border border-gray-300 p-1'>{feature.properties.ECA_Seleni}</td>
                            </tr>
                            <tr>
                                <td className='border border-gray-300 p-1'>Zinc Total</td><td className='border border-gray-300 p-1'>{feature.properties.Zinc_Total}</td><td className='border border-gray-300 p-1'>{feature.properties.Uni_ZT}</td><td className='border border-gray-300 p-1'>{feature.properties.ECA_Zinc_T}</td>
                            </tr>
                            <tr>
                                <td className='border border-gray-300 p-1'>Coliformes</td><td className='border border-gray-300 p-1'>{feature.properties.Coliformes}</td><td className='border border-gray-300 p-1'>{feature.properties.Uni_CF}</td><td className='border border-gray-300 p-1'>{feature.properties.ECA_Colifo}</td>
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

export default React.memo(Em2018T3);