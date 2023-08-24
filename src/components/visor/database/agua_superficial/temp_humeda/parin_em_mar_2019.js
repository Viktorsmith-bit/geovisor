import React, {useState, useEffect, Fragment} from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import {GeoJSON} from "react-leaflet";
import {Icon} from "leaflet";
import ReactDOMServer from 'react-dom/server';
import {app} from '../../../../../../firebase';
import {ref, onValue} from "firebase/database";
import Loading from '../../../loading/loading';

function Index(){
    const [state, setState] = useState();
    const [estado, setEstado] = useState('od');

    useEffect(()=>{
        async function PromiseDB(){
            const starCountCor = ref(app, "temphumeda_parin_em_mar_2019");
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

    const [od, setOd] = useState({val:'', eca:''});
    const [ph, setPh] = useState({val:'', eca:''});
    const [temp, setTemp] = useState({val:'', eca:''});
    const [cond, setCond] = useState({val:'', eca:''});

    useEffect(()=>{
        async function PromiseDB(){
            const starCountCor = ref(app, "temphumeda_parin_em_mar_2019");
            onValue(starCountCor, (snapshot) => {
                if (snapshot.exists()) {
                    setOd({val:snapshot.val().features[3].properties.od.toString().replace("< ",""), eca:snapshot.val().features[1].properties.od_eca.toString().replace("≥ ","")})
                    setPh({val:snapshot.val().features[3].properties.ph.toString().replace("< ",""), eca:6.5})
                    setTemp({val:snapshot.val().features[3].properties.temp.toString().replace("< ",""), eca:snapshot.val().features[1].properties.temp_eca.toString().replace("Δ ","")})
                    setCond({val:snapshot.val().features[3].properties.conduc.toString().replace("< ",""), eca:snapshot.val().features[1].properties.conduc_eca.toString().replace("≥ ","")})
                } else {
                    console.log('Error al obtener los datos')
                }
            });
        } 
        PromiseDB();
    }, [])

    let datos = [
        {id:1, capa:'od', data:[{name:'Oxígeno Disuelto', Monitoreo:od.val, ECA:od.eca}]},
        {id:2, capa:'ph', data:[{name:'pH', Monitoreo:ph.val, ECA:ph.eca}]},
        {id:3, capa:'temperatura', data:[{name:'Temperatura', Monitoreo:temp.val, ECA:temp.eca}]},
        {id:4, capa:'conductividad', data:[{name:'Conductividad', Monitoreo:cond.val, ECA:cond.eca}]},
    ]

    function captarCambios(e){
        e.preventDefault();
        setEstado(e.target.value)
    }

    const blackOptionsStyle= {color:"yellow"}
    
    const Popup = ({ feature }) => {
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
                                <tr className={`${parseFloat(feature.properties.od.toString().replace("< ","")) >= parseFloat(feature.properties.od_eca.toString().replace("< ",""))?'bg-red text-white':null}`}>
                                    <td className='border border-gray-300 p-1'>Oxígeno Disuelto</td><td className='border border-gray-300 p-1'>{feature.properties.od}</td><td className='border border-gray-300 p-1'>{feature.properties.od_uni}</td><td className='border border-gray-300 p-1'>{feature.properties.od_eca}</td>
                                </tr>
                                <tr className={`${parseFloat(feature.properties.ph.toString().replace("< ","")) >= 6.5 & parseFloat(feature.properties.ph.toString().replace("< ","")) <= 8.5?null:'bg-red text-white'}`}>
                                    <td className='border border-gray-300 p-1'>pH</td><td className='border border-gray-300 p-1'>{feature.properties.ph}</td><td className='border border-gray-300 p-1'>{feature.properties.ph_uni}</td><td className='border border-gray-300 p-1'>{feature.properties.ph_eca}</td>
                                </tr>
                                <tr className={`${parseFloat(feature.properties.temp.toString().replace("< ","")) >= parseFloat(feature.properties.temp_eca.toString().replace("Δ ",""))?'bg-red text-white':null}`}>
                                    <td className='border border-gray-300 p-1'>Temperatura</td><td className='border border-gray-300 p-1'>{feature.properties.temp}</td><td className='border border-gray-300 p-1'>{feature.properties.temp_uni}</td><td className='border border-gray-300 p-1'>{feature.properties.temp_eca}</td>
                                </tr>
                                <tr className={`${parseFloat(feature.properties.conduc.toString().replace("< ","")) >= parseFloat(feature.properties.conduc_eca.toString().replace("< ",""))?'bg-red text-white':null}`}>
                                    <td className='border border-gray-300 p-1'>Conductividad</td><td className='border border-gray-300 p-1'>{feature.properties.conduc}</td><td className='border border-gray-300 p-1'>{feature.properties.conduc_uni}</td><td className='border border-gray-300 p-1'>{feature.properties.conduc_eca}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className='flex items-center gap-2'>
                    <h1 className='text-blue'>Temporada húmeda</h1>
                    <a target="_blank" href='https://walshperu-my.sharepoint.com/personal/vmedina_walshp_com_pe/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Fvmedina%5Fwalshp%5Fcom%5Fpe%2FDocuments%2FDocumentos%2FTOROMOCHO%2F3%2E2%2E5%2E4%2E1%20Calidad%20de%20Agua%20superficial%5F07012021%2Epdf&parent=%2Fpersonal%2Fvmedina%5Fwalshp%5Fcom%5Fpe%2FDocuments%2FDocumentos%2FTOROMOCHO'>
                        <h1 className='text-blue underline'>Ver ensayo</h1>
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
                state === undefined?<Loading />:<GeoJSON data={state} onEachFeature={onEachFeature} pointToLayer={pointToLayer} >
                    <div className="absolute bottom-6 left-6" style={{zIndex:"2000"}}>
                        <div className="bg-white text-sm rounded-sm" >
                            <div className='px-4 mb-5'>
                                <select name="select" onChange={captarCambios} className='w-full text-sm px-2 h-8 bg-gray-200 border border-gray-300 rounded-md mt-6 cursor-pointer'>
                                    <option value="od" defaultValue>1. Oxígeno Disuelto</option>
                                    <option value="ph">2. pH</option>
                                    <option value="temperatura">3. Temperatura</option>
                                    <option value="conductividad">4. Conductividad</option>
                                </select>
                            </div>
                            {
                                datos.map((item)=>{
                                    if(item.capa === estado){
                                        return <ResponsiveContainer key={item.id} width={400} height={300}>  
                                            <BarChart width={400} height={300} data={item.data}>
                                                <CartesianGrid strokeDasharray="3 3" />
                                                <Bar dataKey="Monitoreo" fill="rgb(0, 96, 150)" />
                                                <Bar dataKey="ECA" fill="#E74C3C" />
                                                <Tooltip cursor={false} />
                                                <XAxis dataKey="name" />
                                                <YAxis width={50} />
                                                <Legend verticalAlign="bottom" height={50}/>
                                            </BarChart>
                                        </ResponsiveContainer>
                                    }
                                })
                            }
                        </div>
                    </div>
                </GeoJSON>
            }
        </Fragment>
    );
}

export default React.memo(Index);