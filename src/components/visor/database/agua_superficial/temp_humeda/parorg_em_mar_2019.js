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
    const [estado, setEstado] = useState('bifenilos');

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

    const [bif, setBif] = useState({val:'', eca:''});
    const [par, setPar] = useState({val:'', eca:''});
    const [ald, setAld] = useState({val:'', eca:''});
    const [clor, setClor] = useState({val:'', eca:''});
    const [ddt, setDdt] = useState({val:'', eca:''});
    const [diel, setDiel] = useState({val:'', eca:''});
    const [endo, setEndo] = useState({val:'', eca:''});
    const [endr, setEndr] = useState({val:'', eca:''});
    const [hepta, setHepta] = useState({val:'', eca:''});
    const [lind, setLind] = useState({val:'', eca:''});
    const [aldi, setAldi] = useState({val:'', eca:''});

    useEffect(()=>{
        async function PromiseDB(){
            const starCountCor = ref(app, "temphumeda_parorg_em_mar_2019");
            onValue(starCountCor, (snapshot) => {
                if (snapshot.exists()) {
                    setBif({val:snapshot.val().features[2].properties.pcb.toString().replace("< ",""), eca:snapshot.val().features[1].properties.pcb_eca.toString().replace("< ","")})
                    setPar({val:snapshot.val().features[2].properties.paration.toString().replace("< ",""), eca:snapshot.val().features[1].properties.paration_e.toString().replace("< ","")})
                    setAld({val:snapshot.val().features[2].properties.aldrin.toString().replace("< ",""), eca:snapshot.val().features[1].properties.aldrin_eca.toString().replace("< ","")})
                    setClor({val:snapshot.val().features[2].properties.clordano.toString().replace("< ",""), eca:snapshot.val().features[1].properties.clordano_e.toString().replace("≥ ","")})
                    setDdt({val:snapshot.val().features[2].properties.dicloro_di.toString().replace("< ",""), eca:snapshot.val().features[1].properties.dicloro__1.toString().replace("< ","")})
                    setDiel({val:snapshot.val().features[2].properties.dieldrin.toString().replace("< ",""), eca:snapshot.val().features[1].properties.dieldrin_e.toString().replace("< ","")})
                    setEndo({val:snapshot.val().features[2].properties.endosulfan.toString().replace("< ",""), eca:snapshot.val().features[1].properties.endosulf_1.toString().replace("< ","")})
                    setEndr({val:snapshot.val().features[2].properties.endrin.toString().replace("< ",""), eca:snapshot.val().features[1].properties.endrin_eca.toString().replace("Δ ","")})
                    setHepta({val:snapshot.val().features[2].properties.heptacloro.toString().replace("< ",""), eca:snapshot.val().features[1].properties.heptaclo_1.toString().replace("< ","")})
                    setLind({val:snapshot.val().features[2].properties.lindano.toString().replace("< ",""), eca:snapshot.val().features[1].properties.lindano_ec.toString().replace("< ","")})
                    setAldi({val:snapshot.val().features[2].properties.aldicarb.toString().replace("< ",""), eca:snapshot.val().features[1].properties.aldicarb_e.toString().replace("< ","")})
                } else {
                    console.log('Error al obtener los datos')
                }
            });
        } 
        PromiseDB();
    }, [])

    let datos = [
        {id:1, capa:'bifenilos', data:[{name:'Bifenilos Policlorados', Monitoreo:bif.val, ECA:bif.eca}]},
        {id:2, capa:'paration', data:[{name:'Paration', Monitoreo:par.val, ECA:par.eca}]},
        {id:3, capa:'aldrin', data:[{name:'Aldrin', Monitoreo:ald.val, ECA:ald.eca}]},
        {id:4, capa:'clordano', data:[{name:'Clordano', Monitoreo:clor.val, ECA:clor.eca}]},
        {id:5, capa:'ddt', data:[{name:'DDT', Monitoreo:ddt.val, ECA:ddt.eca}]},
        {id:6, capa:'dieldrin', data:[{name:'Dieldrin', Monitoreo:diel.val, ECA:diel.eca}]},
        {id:7, capa:'endosulfan', data:[{name:'Endosulfán', Monitoreo:endo.val, ECA:endo.eca}]},
        {id:8, capa:'endrin', data:[{name:'Endrin', Monitoreo:endr.val, ECA:endr.eca}]},
        {id:9, capa:'heptacloro', data:[{name:'Heptacloro y Heptacloro Epóxido', Monitoreo:hepta.val, ECA:hepta.eca}]},
        {id:10, capa:'lindano', data:[{name:'Lindano', Monitoreo:lind.val, ECA:lind.eca}]},
        {id:11, capa:'aldicarb', data:[{name:'Aldicarb', Monitoreo:ald.val, ECA:ald.eca}]},
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
                                <tr className={`${parseFloat(feature.properties.pcb.toString().replace("< ","")) >= parseFloat(feature.properties.pcb_eca.toString().replace("< ",""))?'bg-red text-white':null}`}>
                                    <td className='border border-gray-300 p-1'>Bifenilos Policlorados</td><td className='border border-gray-300 p-1'>{feature.properties.pcb}</td><td className='border border-gray-300 p-1'>{feature.properties.uni}</td><td className='border border-gray-300 p-1'>{feature.properties.pcb_eca}</td>
                                </tr>
                                <tr className={`${parseFloat(feature.properties.paration.toString().replace("< ","")) >= parseFloat(feature.properties.paration_e.toString().replace("< ",""))?'bg-red text-white':null}`}>
                                    <td className='border border-gray-300 p-1'>Paration</td><td className='border border-gray-300 p-1'>{feature.properties.paration}</td><td className='border border-gray-300 p-1'>{feature.properties.uni}</td><td className='border border-gray-300 p-1'>{feature.properties.paration_eca}</td>
                                </tr>
                                <tr className={`${parseFloat(feature.properties.aldrin.toString().replace("< ","")) >= parseFloat(feature.properties.aldrin_eca.toString().replace("< ",""))?'bg-red text-white':null}`}>
                                    <td className='border border-gray-300 p-1'>Aldrin</td><td className='border border-gray-300 p-1'>{feature.properties.aldrin}</td><td className='border border-gray-300 p-1'>{feature.properties.uni}</td><td className='border border-gray-300 p-1'>{feature.properties.aldrin_eca}</td>
                                </tr>
                                <tr className={`${parseFloat(feature.properties.clordano.toString().replace("< ","")) >= parseFloat(feature.properties.clordano_e.toString().replace("< ",""))?'bg-red text-white':null}`}>
                                    <td className='border border-gray-300 p-1'>Clordano</td><td className='border border-gray-300 p-1'>{feature.properties.clordano}</td><td className='border border-gray-300 p-1'>{feature.properties.uni}</td><td className='border border-gray-300 p-1'>{feature.properties.clordano_e}</td>
                                </tr>
                                <tr className={`${parseFloat(feature.properties.dicloro_di.toString().replace("< ","")) >= parseFloat(feature.properties.dicloro__1.toString().replace("< ",""))?'bg-red text-white':null}`}>
                                    <td className='border border-gray-300 p-1'>DDT</td><td className='border border-gray-300 p-1'>{feature.properties.dicloro_di}</td><td className='border border-gray-300 p-1'>{feature.properties.uni}</td><td className='border border-gray-300 p-1'>{feature.properties.dicloro__1}</td>
                                </tr>
                                <tr className={`${parseFloat(feature.properties.dieldrin.toString().replace("< ","")) >= parseFloat(feature.properties.dieldrin_e.toString().replace("< ",""))?'bg-red text-white':null}`}>
                                    <td className='border border-gray-300 p-1'>Dieldrin</td><td className='border border-gray-300 p-1'>{feature.properties.dieldrin}</td><td className='border border-gray-300 p-1'>{feature.properties.uni}</td><td className='border border-gray-300 p-1'>{feature.properties.dieldrin_e}</td>
                                </tr>
                                <tr className={`${parseFloat(feature.properties.endosulfan.toString().replace("< ","")) >= parseFloat(feature.properties.endosulf_1.toString().replace("< ",""))?'bg-red text-white':null}`}>
                                    <td className='border border-gray-300 p-1'>Endosulfán</td><td className='border border-gray-300 p-1'>{feature.properties.endosulfan}</td><td className='border border-gray-300 p-1'>{feature.properties.uni}</td><td className='border border-gray-300 p-1'>{feature.properties.endosulf_1}</td>
                                </tr>
                                <tr className={`${parseFloat(feature.properties.endrin.toString().replace("< ","")) >= parseFloat(feature.properties.endrin_eca.toString().replace("< ",""))?'bg-red text-white':null}`}>
                                    <td className='border border-gray-300 p-1'>Endrin</td><td className='border border-gray-300 p-1'>{feature.properties.endrin}</td><td className='border border-gray-300 p-1'>{feature.properties.uni}</td><td className='border border-gray-300 p-1'>{feature.properties.endrin_eca}</td>
                                </tr>
                                <tr className={`${parseFloat(feature.properties.heptacloro.toString().replace("< ","")) >= parseFloat(feature.properties.heptaclo_1.toString().replace("< ",""))?'bg-red text-white':null}`}>
                                    <td className='border border-gray-300 p-1'>Heptacloro y Heptacloro Epóxido</td><td className='border border-gray-300 p-1'>{feature.properties.heptacloro}</td><td className='border border-gray-300 p-1'>{feature.properties.uni}</td><td className='border border-gray-300 p-1'>{feature.properties.heptaclo_1}</td>
                                </tr>
                                <tr className={`${parseFloat(feature.properties.lindano.toString().replace("< ","")) >= parseFloat(feature.properties.lindano_ec.toString().replace("< ",""))?'bg-red text-white':null}`}>
                                    <td className='border border-gray-300 p-1'>Lindano</td><td className='border border-gray-300 p-1'>{feature.properties.lindano}</td><td className='border border-gray-300 p-1'>{feature.properties.uni}</td><td className='border border-gray-300 p-1'>{feature.properties.lindano_ec}</td>
                                </tr>
                                <tr className={`${parseFloat(feature.properties.aldicarb.toString().replace("< ","")) >= parseFloat(feature.properties.aldicarb_e.toString().replace("< ",""))?'bg-red text-white':null}`}>
                                    <td className='border border-gray-300 p-1'>Aldicarb</td><td className='border border-gray-300 p-1'>{feature.properties.aldicarb}</td><td className='border border-gray-300 p-1'>{feature.properties.uni}</td><td className='border border-gray-300 p-1'>{feature.properties.aldicarb_e}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className='flex items-center gap-2 h-8'>
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
                                    <option value="bifenilos" defaultValue>1. Bifenilos Policlorados</option>
                                    <option value="paration">2. Paration</option>
                                    <option value="aldrin">3. Aldrin</option>
                                    <option value="clordano">4. Clordano</option>
                                    <option value="ddt">5. DDT</option>
                                    <option value="dieldrin">6. Dieldrin</option>
                                    <option value="endosulfan">7. Endosulfán</option>
                                    <option value="endrin">8. Endrin</option>
                                    <option value="heptacloro">9. Heptacloro y Heptacloro Epóxido</option>
                                    <option value="lindano">10. Lindano</option>
                                    <option value="aldicarb">11. Aldicarb</option>
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