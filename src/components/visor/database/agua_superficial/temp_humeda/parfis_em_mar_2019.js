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
    const [estado, setEstado] = useState('ag');

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

    const [ag, setAg] = useState({val:'', eca:''});
    const [hco, setHco] = useState({val:'', eca:''});
    const [cia, setCia] = useState({val:'', eca:''});
    const [clo, setClo] = useState({val:'', eca:''});
    const [dbo, setDbo] = useState({val:'', eca:''});
    const [dqo, setDqo] = useState({val:'', eca:''});
    const [sam, setSam] = useState({val:'', eca:''});
    const [fen, setFen] = useState({val:'', eca:''});
    const [flo, setFlo] = useState({val:'', eca:''});
    const [no3, setNo3] = useState({val:'', eca:''});
    const [no2, setNo2] = useState({val:'', eca:''});
    const [so4, setSo4] = useState({val:'', eca:''});
    const [color, setColor] = useState({val:'', eca:''});

    useEffect(()=>{
        async function PromiseDB(){
            const starCountCor = ref(app, "temphumeda_parfis_em_mar_2019");
            onValue(starCountCor, (snapshot) => {
                if (snapshot.exists()) {
                    setAg({val:snapshot.val().features[3].properties.a_g.toString().replace("< ",""), eca:snapshot.val().features[1].properties.a_g_eca.toString().replace("< ","")})
                    setHco({val:snapshot.val().features[3].properties.hco3.toString().replace("< ",""), eca:snapshot.val().features[1].properties.hco3_eca.toString().replace("< ","")})
                    setCia({val:snapshot.val().features[3].properties.cn_wad.toString().replace("< ",""), eca:snapshot.val().features[1].properties.cn_wad_eca.toString().replace("< ","")})
                    setClo({val:snapshot.val().features[3].properties.cloruro.toString().replace("< ",""), eca:snapshot.val().features[1].properties.cloruro_ec.toString().replace("≥ ","")})
                    setDbo({val:snapshot.val().features[3].properties.dbo5.toString().replace("< ",""), eca:snapshot.val().features[1].properties.dbo5_eca.toString().replace("< ","")})
                    setDqo({val:snapshot.val().features[3].properties.dqo.toString().replace("< ",""), eca:snapshot.val().features[1].properties.dqo_eca.toString().replace("< ","")})
                    setSam({val:snapshot.val().features[3].properties.saam.toString().replace("< ",""), eca:snapshot.val().features[1].properties.saam_eca.toString().replace("< ","")})
                    setFen({val:snapshot.val().features[3].properties.fenoles.toString().replace("< ",""), eca:snapshot.val().features[1].properties.fenoles_ec.toString().replace("Δ ","")})
                    setFlo({val:snapshot.val().features[3].properties.floruro.toString().replace("< ",""), eca:snapshot.val().features[1].properties.floruro_ec.toString().replace("< ","")})
                    setNo3({val:snapshot.val().features[3].properties.no3_no2.toString().replace("< ",""), eca:snapshot.val().features[1].properties.no3_no2_ec.toString().replace("< ","")})
                    setNo2({val:snapshot.val().features[3].properties.no2_n.toString().replace("< ",""), eca:snapshot.val().features[1].properties.no2_n_eca.toString().replace("< ","")})
                    setSo4({val:snapshot.val().features[3].properties.so4.toString().replace("< ",""), eca:snapshot.val().features[1].properties.so4_eca.toString().replace("< ","")})
                    setColor({val:snapshot.val().features[3].properties.color_b.toString().replace("< ",""), eca:snapshot.val().features[1].properties.color_b_ec.toString().replace("< ","")})
                } else {
                    console.log('Error al obtener los datos')
                }
            });
        } 
        PromiseDB();
    }, [])

    let datos = [
        {id:1, capa:'ag', data:[{name:'A & G', Monitoreo:ag.val, ECA:ag.eca}]},
        {id:2, capa:'hco', data:[{name:'HCO3', Monitoreo:hco.val, ECA:hco.eca}]},
        {id:3, capa:'cianuro', data:[{name:'CN Wad', Monitoreo:cia.val, ECA:cia.eca}]},
        {id:4, capa:'cloruro', data:[{name:'Cloruro', Monitoreo:clo.val, ECA:clo.eca}]},
        {id:5, capa:'dbo', data:[{name:'DBO5', Monitoreo:dbo.val, ECA:dbo.eca}]},
        {id:6, capa:'dqo', data:[{name:'DQO', Monitoreo:dqo.val, ECA:dqo.eca}]},
        {id:7, capa:'sam', data:[{name:'SAAM', Monitoreo:sam.val, ECA:sam.eca}]},
        {id:8, capa:'fenoles', data:[{name:'Fenoles', Monitoreo:fen.val, ECA:fen.eca}]},
        {id:9, capa:'floruro', data:[{name:'Floruro', Monitoreo:flo.val, ECA:flo.eca}]},
        {id:10, capa:'no3', data:[{name:'NO3 + NO2', Monitoreo:no3.val, ECA:no3.eca}]},
        {id:11, capa:'no2', data:[{name:'NO2 -N', Monitoreo:no2.val, ECA:no2.eca}]},
        {id:12, capa:'so4', data:[{name:'SO4', Monitoreo:so4.val, ECA:so4.eca}]},
        {id:13, capa:'color', data:[{name:'Color (b)', Monitoreo:color.val, ECA:color.eca}]},
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
                                <tr className={`${parseFloat(feature.properties.a_g.toString().replace("< ","")) >= parseFloat(feature.properties.a_g_eca.toString().replace("< ",""))?'bg-red text-white':null}`}>
                                    <td className='border border-gray-300 p-1'>A & G</td><td className='border border-gray-300 p-1'>{feature.properties.a_g}</td><td className='border border-gray-300 p-1'>{feature.properties.so4_uni}</td><td className='border border-gray-300 p-1'>{feature.properties.a_g_eca}</td>
                                </tr>
                                <tr className={`${parseFloat(feature.properties.hco3.toString().replace("< ","")) >= parseFloat(feature.properties.hco3_eca.toString().replace("< ",""))?'bg-red text-white':null}`}>
                                    <td className='border border-gray-300 p-1'>HCO3-</td><td className='border border-gray-300 p-1'>{feature.properties.hco3}</td><td className='border border-gray-300 p-1'>{feature.properties.so4_uni}</td><td className='border border-gray-300 p-1'>{feature.properties.hco3_eca}</td>
                                </tr>
                                <tr className={`${parseFloat(feature.properties.cn_wad.toString().replace("< ","")) >= parseFloat(feature.properties.cn_wad_eca.toString().replace("< ",""))?'bg-red text-white':null}`}>
                                    <td className='border border-gray-300 p-1'>CN Wad</td><td className='border border-gray-300 p-1'>{feature.properties.cn_wad}</td><td className='border border-gray-300 p-1'>{feature.properties.so4_uni}</td><td className='border border-gray-300 p-1'>{feature.properties.cn_wad_eca}</td>
                                </tr>
                                <tr className={`${parseFloat(feature.properties.cloruro.toString().replace("< ","")) >= parseFloat(feature.properties.cloruro_ec.toString().replace("< ",""))?'bg-red text-white':null}`}>
                                    <td className='border border-gray-300 p-1'>Cloruro</td><td className='border border-gray-300 p-1'>{feature.properties.cloruro}</td><td className='border border-gray-300 p-1'>{feature.properties.so4_uni}</td><td className='border border-gray-300 p-1'>{feature.properties.cloruro_ec}</td>
                                </tr>
                                <tr className={`${parseFloat(feature.properties.dbo5.toString().replace("< ","")) >= parseFloat(feature.properties.dbo5_eca.toString().replace("< ",""))?'bg-red text-white':null}`}>
                                    <td className='border border-gray-300 p-1'>DBO5</td><td className='border border-gray-300 p-1'>{feature.properties.dbo5}</td><td className='border border-gray-300 p-1'>{feature.properties.so4_uni}</td><td className='border border-gray-300 p-1'>{feature.properties.dbo5_eca}</td>
                                </tr>
                                <tr className={`${parseFloat(feature.properties.dqo.toString().replace("< ","")) >= parseFloat(feature.properties.dqo_eca.toString().replace("< ",""))?'bg-red text-white':null}`}>
                                    <td className='border border-gray-300 p-1'>DQO</td><td className='border border-gray-300 p-1'>{feature.properties.dqo}</td><td className='border border-gray-300 p-1'>{feature.properties.so4_uni}</td><td className='border border-gray-300 p-1'>{feature.properties.dqo_eca}</td>
                                </tr>
                                <tr className={`${parseFloat(feature.properties.saam.toString().replace("< ","")) >= parseFloat(feature.properties.saam_eca.toString().replace("< ",""))?'bg-red text-white':null}`}>
                                    <td className='border border-gray-300 p-1'>SAAM</td><td className='border border-gray-300 p-1'>{feature.properties.saam}</td><td className='border border-gray-300 p-1'>{feature.properties.so4_uni}</td><td className='border border-gray-300 p-1'>{feature.properties.saam_eca}</td>
                                </tr>
                                <tr className={`${parseFloat(feature.properties.fenoles.toString().replace("< ","")) >= parseFloat(feature.properties.fenoles_ec.toString().replace("< ",""))?'bg-red text-white':null}`}>
                                    <td className='border border-gray-300 p-1'>Fenoles</td><td className='border border-gray-300 p-1'>{feature.properties.fenoles}</td><td className='border border-gray-300 p-1'>{feature.properties.so4_uni}</td><td className='border border-gray-300 p-1'>{feature.properties.fenoles_ec}</td>
                                </tr>
                                <tr className={`${parseFloat(feature.properties.floruro.toString().replace("< ","")) >= parseFloat(feature.properties.floruro_ec.toString().replace("< ",""))?'bg-red text-white':null}`}>
                                    <td className='border border-gray-300 p-1'>Floruro</td><td className='border border-gray-300 p-1'>{feature.properties.floruro}</td><td className='border border-gray-300 p-1'>{feature.properties.so4_uni}</td><td className='border border-gray-300 p-1'>{feature.properties.floruro_ec}</td>
                                </tr>
                                <tr className={`${parseFloat(feature.properties.no3_no2.toString().replace("< ","")) >= parseFloat(feature.properties.no3_no2_ec.toString().replace("< ",""))?'bg-red text-white':null}`}>
                                    <td className='border border-gray-300 p-1'>NO3+NO2</td><td className='border border-gray-300 p-1'>{feature.properties.no3_no2}</td><td className='border border-gray-300 p-1'>{feature.properties.so4_uni}</td><td className='border border-gray-300 p-1'>{feature.properties.no3_no2_ec}</td>
                                </tr>
                                <tr className={`${parseFloat(feature.properties.no2_n.toString().replace("< ","")) >= parseFloat(feature.properties.no2_n_eca.toString().replace("< ",""))?'bg-red text-white':null}`}>
                                    <td className='border border-gray-300 p-1'>NO2 -N</td><td className='border border-gray-300 p-1'>{feature.properties.no2_n}</td><td className='border border-gray-300 p-1'>{feature.properties.so4_uni}</td><td className='border border-gray-300 p-1'>{feature.properties.no2_n_eca}</td>
                                </tr>
                                <tr className={`${parseFloat(feature.properties.so4.toString().replace("< ","")) >= parseFloat(feature.properties.so4_eca.toString().replace("< ",""))?'bg-red text-white':null}`}>
                                    <td className='border border-gray-300 p-1'>SO4</td><td className='border border-gray-300 p-1'>{feature.properties.so4}</td><td className='border border-gray-300 p-1'>{feature.properties.so4_uni}</td><td className='border border-gray-300 p-1'>{feature.properties.so4_eca}</td>
                                </tr>
                                <tr className={`${parseFloat(feature.properties.color_b.toString().replace("< ","")) >= parseFloat(feature.properties.color_b_ec.toString().replace(" (a)",""))?'bg-red text-white':null}`}>
                                    <td className='border border-gray-300 p-1'>Color (b)</td><td className='border border-gray-300 p-1'>{feature.properties.color_b}</td><td className='border border-gray-300 p-1'>{feature.properties.color_b_un}</td><td className='border border-gray-300 p-1'>{feature.properties.color_b_ec}</td>
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
                                    <option value="ag" defaultValue>1. A & G</option>
                                    <option value="hco">2. HCO3-</option>
                                    <option value="cianuro">3. CN Wad</option>
                                    <option value="cloruro">4. Cloruro</option>
                                    <option value="dbo">5. DBO5</option>
                                    <option value="dqo">6. DQO</option>
                                    <option value="sam">7. SAAM</option>
                                    <option value="fenoles">8. Fenoles</option>
                                    <option value="floruro">9. Floruro</option>
                                    <option value="no3">10. NO3+NO2</option>
                                    <option value="no2">11. NO2 -N</option>
                                    <option value="so4">12. SO4</option>
                                    <option value="color">13. Color (b)</option>
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