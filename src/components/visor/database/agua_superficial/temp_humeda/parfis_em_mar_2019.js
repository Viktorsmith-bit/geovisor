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
            const starCountCor = ref(app, "temphumeda_parfis_em_mar_2019");
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
                                <td className='border border-gray-300 p-1'>A & G</td><td className='border border-gray-300 p-1'>{feature.properties.a_g}</td><td className='border border-gray-300 p-1'>{feature.properties.so4_uni}</td><td className='border border-gray-300 p-1'>{feature.properties.a_g_eca}</td>
                            </tr>
                            <tr>
                                <td className='border border-gray-300 p-1'>HCO3-</td><td className='border border-gray-300 p-1'>{feature.properties.hco3}</td><td className='border border-gray-300 p-1'>{feature.properties.so4_uni}</td><td className='border border-gray-300 p-1'>{feature.properties.hco3_eca}</td>
                            </tr>
                            <tr>
                                <td className='border border-gray-300 p-1'>CN Wad</td><td className='border border-gray-300 p-1'>{feature.properties.cn_wad}</td><td className='border border-gray-300 p-1'>{feature.properties.so4_uni}</td><td className='border border-gray-300 p-1'>{feature.properties.cn_wad_eca}</td>
                            </tr>
                            <tr>
                                <td className='border border-gray-300 p-1'>Cloruro</td><td className='border border-gray-300 p-1'>{feature.properties.cloruro}</td><td className='border border-gray-300 p-1'>{feature.properties.so4_uni}</td><td className='border border-gray-300 p-1'>{feature.properties.cloruro_ec}</td>
                            </tr>
                            <tr>
                                <td className='border border-gray-300 p-1'>DBO5</td><td className='border border-gray-300 p-1'>{feature.properties.dbo5}</td><td className='border border-gray-300 p-1'>{feature.properties.so4_uni}</td><td className='border border-gray-300 p-1'>{feature.properties.dbo5}</td>
                            </tr>
                            <tr>
                                <td className='border border-gray-300 p-1'>DQO</td><td className='border border-gray-300 p-1'>{feature.properties.dqo}</td><td className='border border-gray-300 p-1'>{feature.properties.so4_uni}</td><td className='border border-gray-300 p-1'>{feature.properties.dqo_eca}</td>
                            </tr>
                            <tr>
                                <td className='border border-gray-300 p-1'>SAAM</td><td className='border border-gray-300 p-1'>{feature.properties.saam}</td><td className='border border-gray-300 p-1'>{feature.properties.so4_uni}</td><td className='border border-gray-300 p-1'>{feature.properties.saam_eca}</td>
                            </tr>
                            <tr>
                                <td className='border border-gray-300 p-1'>Fenoles</td><td className='border border-gray-300 p-1'>{feature.properties.fenoles}</td><td className='border border-gray-300 p-1'>{feature.properties.so4_uni}</td><td className='border border-gray-300 p-1'>{feature.properties.fenoles_ec}</td>
                            </tr>
                            <tr>
                                <td className='border border-gray-300 p-1'>Floruro</td><td className='border border-gray-300 p-1'>{feature.properties.floruro}</td><td className='border border-gray-300 p-1'>{feature.properties.so4_uni}</td><td className='border border-gray-300 p-1'>{feature.properties.floruro_ec}</td>
                            </tr>
                            <tr>
                                <td className='border border-gray-300 p-1'>NO3+NO2</td><td className='border border-gray-300 p-1'>{feature.properties.no3_no2}</td><td className='border border-gray-300 p-1'>{feature.properties.so4_uni}</td><td className='border border-gray-300 p-1'>{feature.properties.no3_no2}</td>
                            </tr>
                            <tr>
                                <td className='border border-gray-300 p-1'>NO2 -N</td><td className='border border-gray-300 p-1'>{feature.properties.no2_n}</td><td className='border border-gray-300 p-1'>{feature.properties.so4_uni}</td><td className='border border-gray-300 p-1'>{feature.properties.no2_n_eca}</td>
                            </tr>
                            <tr>
                                <td className='border border-gray-300 p-1'>SO4</td><td className='border border-gray-300 p-1'>{feature.properties.so4}</td><td className='border border-gray-300 p-1'>{feature.properties.so4_uni}</td><td className='border border-gray-300 p-1'>{feature.properties.so4_eca}</td>
                            </tr>
                            <tr>
                                <td className='border border-gray-300 p-1'>Color (b)</td><td className='border border-gray-300 p-1'>{feature.properties.color_b}</td><td className='border border-gray-300 p-1'>{feature.properties.color_b_un}</td><td className='border border-gray-300 p-1'>{feature.properties.color_ec}</td>
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