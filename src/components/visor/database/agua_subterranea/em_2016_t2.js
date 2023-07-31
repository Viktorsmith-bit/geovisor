import React, {useState, useEffect, Fragment} from 'react';
import {GeoJSON} from "react-leaflet";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import {Icon, icon} from "leaflet";
import ReactDOMServer from 'react-dom/server';
import {app} from '../../../../../firebase';
import {ref, onValue} from "firebase/database";
import Loading from '../../loading/loading';

function Em2016T2(){
    const [state, setState] = useState();
    const [vis, setVis] = useState('close')

    useEffect(()=>{
        async function PromiseDB(){
            const starCountCor = ref(app, "em_2016_t2");
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

    let datos = [];

    const Popup = ({ feature }) => {
        let popupContent;
        if (feature.properties && feature.properties.popupContent) {
          popupContent = feature.properties.popupContent;
        }
        let datos1 = [
            {name: 'A', ECAs: 4000, Monitoreo: 2400},
            {name: 'B', ECAs: 3000, Monitoreo: 1398},
            {name: 'C', ECAs: 2000, Monitoreo: 9800},
            {name: 'D', ECAs: 2780, Monitoreo: 3908},
            {name: 'E', ECAs: 1890, Monitoreo: 4800},
            {name: 'F', ECAs: 2390, Monitoreo: 3800},
            {name: 'G', ECAs: 3490, Monitoreo: 4300},
        ];

        datos.push.apply(datos, datos1);

        return (
            <div>
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
                                    <td className='border border-gray-300 p-1'>Caudal</td><td className='border border-gray-300 p-1'>{feature.properties.Caudal}</td><td className='border border-gray-300 p-1'>{feature.properties.Uni_Cau}</td><td className='border border-gray-300 p-1'>{feature.properties.ECA_Caudal}</td>
                                </tr>
                                <tr>
                                    <td className='border border-gray-300 p-1'>Conductividad</td><td className='border border-gray-300 p-1'>{feature.properties.Conductivi}</td><td className='border border-gray-300 p-1'>{feature.properties.Uni_Con}</td><td className='border border-gray-300 p-1'>{feature.properties.ECA_Conduc}</td>
                                </tr>
                                <tr>
                                    <td className='border border-gray-300 p-1'>Oxígeno Disuelto</td><td className='border border-gray-300 p-1'>{feature.properties.OD}</td><td className='border border-gray-300 p-1'>{feature.properties.Uni_OD}</td><td className='border border-gray-300 p-1'>{feature.properties.ECA_OD}</td>
                                </tr>
                                <tr>
                                    <td className='border border-gray-300 p-1'>PH Campo</td><td className='border border-gray-300 p-1'>{feature.properties.pH_Campo}</td><td className='border border-gray-300 p-1'>{feature.properties.Uni_Ph}</td><td className='border border-gray-300 p-1'>{feature.properties.ECA_pH}</td>
                                </tr>
                                <tr>
                                    <td className='border border-gray-300 p-1'>Temperatura</td><td className='border border-gray-300 p-1'>{feature.properties.Temperatur}</td><td className='border border-gray-300 p-1'>{feature.properties.Uni_t}</td><td className='border border-gray-300 p-1'>{feature.properties.ECA_t}</td>
                                </tr>
                                <tr>
                                    <td className='border border-gray-300 p-1'>Cianuro</td><td className='border border-gray-300 p-1'>{feature.properties.Cianuro_Wa}</td><td className='border border-gray-300 p-1'>{feature.properties.Uni_ZT}</td><td className='border border-gray-300 p-1'>{feature.properties.ECA_Cia}</td>
                                </tr>
                                <tr>
                                    <td className='border border-gray-300 p-1'>DBO5</td><td className='border border-gray-300 p-1'>{feature.properties.DBO5}</td><td className='border border-gray-300 p-1'>{feature.properties.Uni_ZT}</td><td className='border border-gray-300 p-1'>{feature.properties.ECA_DBO5}</td>
                                </tr>
                                <tr>
                                    <td className='border border-gray-300 p-1'>DQO</td><td className='border border-gray-300 p-1'>{feature.properties.DQO}</td><td className='border border-gray-300 p-1'>{feature.properties.Uni_DQO}</td><td className='border border-gray-300 p-1'>{feature.properties.ECA_DQO}</td>
                                </tr>
                                <tr>
                                    <td className='border border-gray-300 p-1'>Nitratos</td><td className='border border-gray-300 p-1'>{feature.properties.N_Nitratos}</td><td className='border border-gray-300 p-1'>{feature.properties.Uni_ZT}</td><td className='border border-gray-300 p-1'>{feature.properties.ECA_Nitrat}</td>
                                </tr>
                                <tr>
                                    <td className='border border-gray-300 p-1'>Nitritos</td><td className='border border-gray-300 p-1'>{feature.properties.N_Nitritos}</td><td className='border border-gray-300 p-1'>{feature.properties.Uni_ZT}</td><td className='border border-gray-300 p-1'>{feature.properties.ECA_N_Nitr}</td>
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
                                    <td className='border border-gray-300 p-1'>Manganeso Total</td><td className='border border-gray-300 p-1'>{feature.properties.ECA_Mangan}</td><td className='border border-gray-300 p-1'>{feature.properties.Uni_ZT}</td><td className='border border-gray-300 p-1'>{feature.properties.ECA_Mang_1}</td>
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
                <h1 onClick={VisualizarGrafica} className='flex items-center justify-center h-6 w-24 text-white mt-3 back-color cursor-pointer'>Ver gráfica</h1>
            </div>
        );
    };
    
    const onEachFeature = (feature, layer) => {
        const popupContent = ReactDOMServer.renderToString(
            <Popup feature={feature} />
        );
        layer.bindPopup(popupContent);
    };
    
    function VisualizarGrafica(e){
        e.preventDefault()
        setVis('open')
    }
    
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
         
                <div className="absolute bottom-9 left-3 " style={{zIndex:"2000"}}>
                    <div className="bg-white text-sm rounded-sm" >
                        <h1 className="text-end px-4  py-2">X</h1>
                        <ResponsiveContainer width={400} height={300} >  
                            <BarChart width={400} height={300} data={datos}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <Bar dataKey="Monitoreo" fill="rgb(0, 96, 150)" />
                                <Bar dataKey="ECAs" fill="#E74C3C" />
                                <XAxis dataKey="name" />
                                <YAxis width={50} />
                                <Legend verticalAlign="top" height={50}/>
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>
     
        </Fragment>
    );
}

export default React.memo(Em2016T2);