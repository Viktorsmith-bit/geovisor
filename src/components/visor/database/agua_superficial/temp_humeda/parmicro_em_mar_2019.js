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
    const [estado, setEstado] = useState('coliformes');

    useEffect(()=>{
        async function PromiseDB(){
            const starCountCor = ref(app, "temphumeda_parmicro_em_mar_2019");
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

    const [col, setCol] = useState({val:'', eca:''});
    const [hue, setHue] = useState({val:'', eca:''});

    useEffect(()=>{
        async function PromiseDB(){
            const starCountCor = ref(app, "temphumeda_parmicro_em_mar_2019");
            onValue(starCountCor, (snapshot) => {
                if (snapshot.exists()) {
                    setCol({val:snapshot.val().features[3].properties.colif_term.toString().replace("< ",""), eca:snapshot.val().features[1].properties.colif_te_1.toString().replace("< ","")})
                    setHue({val:snapshot.val().features[3].properties.huevos_hel.toString().replace("< ",""), eca:snapshot.val().features[1].properties.huevos_h_1.toString().replace("< ","")})
                } else {
                    console.log('Error al obtener los datos')
                }
            });
        } 
        PromiseDB();
    }, [])

    let datos = [
        {id:1, capa:'coliformes', data:[{name:'coliformes Termales', Monitoreo:col.val, ECA:col.eca}]},
        {id:2, capa:'huevos', data:[{name:'Huevos Helmintos', Monitoreo:hue.val, ECA:hue.eca}]},
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
                                <tr className={`${parseFloat(feature.properties.colif_term.toString().replace("< ","")) >= parseFloat(feature.properties.colif_te_1.toString().replace("< ",""))?'bg-red text-white':null}`}>
                                    <td className='border border-gray-300 p-1'>Coliformes Termales</td><td className='border border-gray-300 p-1'>{feature.properties.colif_term}</td><td className='border border-gray-300 p-1'>{feature.properties.colif_te_3}</td><td className='border border-gray-300 p-1'>{feature.properties.colif_te_1}</td>
                                </tr>
                                <tr className={`${parseFloat(feature.properties.huevos_hel.toString().replace("< ","")) >= parseFloat(feature.properties.huevos_h_1.toString().replace("< ",""))?'bg-red text-white':null}`}>
                                    <td className='border border-gray-300 p-1'>Huevos Helmintos</td><td className='border border-gray-300 p-1'>{feature.properties.huevos_hel}</td><td className='border border-gray-300 p-1'>{feature.properties.huevos_h_3}</td><td className='border border-gray-300 p-1'>{feature.properties.huevos_h_1}</td>
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
        iconUrl:"alfiler.png",
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
                                    <option value="coliformes" defaultValue>1. Coliformes Termales</option>
                                    <option value="huevos">2. Huevos Helmintos</option>
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