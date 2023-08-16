import React, {useState, useEffect, Fragment} from 'react';
import {GeoJSON} from "react-leaflet";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import {Icon, icon} from "leaflet";
import ReactDOMServer from 'react-dom/server';
import {app} from '../../../../../firebase';
import {ref, onValue, set} from "firebase/database";
import Loading from '../../loading/loading';

function Em2016T2(){
    const [state, setState] = useState();
    const [data, setData] = useState();

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

    function Popup({ feature }){
        let popupContent;
        if (feature.properties && feature.properties.popupContent) {
            popupContent = feature.properties.popupContent;
        }

        return (
            <div className='section'>
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
                                <tr className={`${feature.properties.Conductivi >= 2500?'bg-red text-white':null}`}>
                                    <td className='border border-gray-300 p-1'>Conductividad</td><td className='border border-gray-300 p-1'>{feature.properties.Conductivi}</td><td className='border border-gray-300 p-1'>{feature.properties.Uni_Con}</td><td className='border border-gray-300 p-1'>{feature.properties.ECA_Conduc}</td>
                                </tr>
                                <tr className={`${feature.properties.Conductivi >= 4?'bg-red text-white':null}`}>
                                    <td className='border border-gray-300 p-1'>Oxígeno Disuelto</td><td className='border border-gray-300 p-1'>{feature.properties.OD}</td><td className='border border-gray-300 p-1'>{feature.properties.Uni_OD}</td><td className='border border-gray-300 p-1'>{feature.properties.ECA_OD}</td>
                                </tr>
                                <tr className={`${feature.properties.Conductivi >= 6.5 & feature.properties.Conductivi <= 8.5?null:'bg-red text-white'}`}>
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
            </div>
        );
    };

    let date = [];

    const onEachFeature = (feature, layer) => {
        const popupContent = ReactDOMServer.renderToString(
            <Popup feature={feature} />
        );
        layer.bindPopup(popupContent);
        
        let datos = [
            {name:'A', Monitoreo:400, ECAs: 300}
        ]

        date.push.apply(date, datos)
        
    };

    console.log(date)
    console.log(data)

    const icono = new Icon({
        iconUrl:"marcador.png",
        iconSize:[35,35]
    })

    function pointToLayer (feature, latlng) {
        return L.marker(latlng, {icon:icono})
    }

    function captarCambios(e){
        e.preventDefault();
        setEstado(e.target.value)
    }

    return(
        <Fragment>
            {
                state === undefined?<Loading />:<GeoJSON data={state} onEachFeature={onEachFeature} pointToLayer={pointToLayer} >
                    <div className="absolute bottom-9 left-3 " style={{zIndex:"2000"}}>
                        <div className="bg-white text-sm rounded-sm" >
                            <div className='flex justify-end px-4 py-2'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="cursor-pointer bi bi-x-lg" viewBox="0 0 16 16">
                                    <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
                                </svg>
                            </div>
                            <div className='px-4'>
                                <select name="select" onChange={captarCambios} className='w-full text-sm px-2 h-8 bg-gray-200 border border-gray-300 rounded-md mt-6 cursor-pointer'>
                                    <option value="caudal" defaultValue>1. Caudal</option>
                                    <option value="entrada">2. Entrada al teletrabajo</option>
                                    <option value="horaA">3. Salida al refrigerio</option>
                                    <option value="retornoA">4. Retorno del refrigerio</option>
                                    <option value="salida">5. Salida del teletrabajo</option>
                                </select>
                            </div>
                            <ResponsiveContainer width={400} height={300} >  
                                <BarChart width={400} height={300} data={date}>
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
                </GeoJSON>
            }
        </Fragment>
    );
}

export default React.memo(Em2016T2);


{
    /**
     * 
     */
}