import React, {useState, useEffect, Fragment} from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import {GeoJSON} from "react-leaflet";
import {Icon, bounds} from "leaflet";
import ReactDOMServer from 'react-dom/server';
import {app} from '../../../../../../firebase';
import {ref, onValue} from "firebase/database";
import Loading from '../../../loading/loading';

function Index(){
    const [state, setState] = useState();
    const [estado, setEstado] = useState('aluminio');

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

    const [alu, setAlu] = useState({val:'', eca:''});
    const [ars, setArs] = useState({val:'', eca:''});
    const [bar, setBar] = useState({val:'', eca:''});
    const [ber, setBer] = useState({val:'', eca:''});
    const [bor, setBor] = useState({val:'', eca:''});
    const [cad, setCad] = useState({val:'', eca:''});
    const [cob, setCob] = useState({val:'', eca:''});
    const [coba, setCoba] = useState({val:'', eca:''});
    const [cro, setCro] = useState({val:'', eca:''});
    const [hie, setHie] = useState({val:'', eca:''});
    const [lit, setLit] = useState({val:'', eca:''});
    const [man, setMan] = useState({val:'', eca:''});
    const [mer, setMer] = useState({val:'', eca:''});
    const [niq, setNiq] = useState({val:'', eca:''});
    const [plo, setPlo] = useState({val:'', eca:''});
    const [sel, setSel] = useState({val:'', eca:''});
    const [zin, setZin] = useState({val:'', eca:''});

    useEffect(()=>{
        async function PromiseDB(){
            const starCountCor = ref(app, "temphumeda_parino_em_mar_2019");
            onValue(starCountCor, (snapshot) => {
                if (snapshot.exists()) {
                    setAlu({val:snapshot.val().features[3].properties.aluminio.toString().replace("< ",""), eca:snapshot.val().features[1].properties.aluminio_e.toString().replace("< ","")})
                    setArs({val:snapshot.val().features[3].properties.arsenico.toString().replace("< ",""), eca:snapshot.val().features[1].properties.arsenico_e.toString().replace("< ","")})
                    setBar({val:snapshot.val().features[3].properties.bario.toString().replace("< ",""), eca:snapshot.val().features[1].properties.bario_eca.toString().replace("< ","")})
                    setBer({val:snapshot.val().features[3].properties.berilio.toString().replace("< ",""), eca:snapshot.val().features[1].properties.berilio_ec.toString().replace("≥ ","")})
                    setBor({val:snapshot.val().features[3].properties.boro.toString().replace("< ",""), eca:snapshot.val().features[1].properties.boro_eca.toString().replace("< ","")})
                    setCad({val:snapshot.val().features[3].properties.cadmio.toString().replace("< ",""), eca:snapshot.val().features[1].properties.cadmio_eca.toString().replace("< ","")})
                    setCob({val:snapshot.val().features[3].properties.cobre.toString().replace("< ",""), eca:snapshot.val().features[1].properties.cobre_eca.toString().replace("< ","")})
                    setCoba({val:snapshot.val().features[3].properties.cobalto.toString().replace("< ",""), eca:snapshot.val().features[1].properties.cobalto_ec.toString().replace("Δ ","")})
                    setCro({val:snapshot.val().features[3].properties.cromo_tota.toString().replace("< ",""), eca:snapshot.val().features[1].properties.cromo_to_1.toString().replace("< ","")})
                    setHie({val:snapshot.val().features[3].properties.hierro.toString().replace("< ",""), eca:snapshot.val().features[1].properties.hierro_eca.toString().replace("< ","")})
                    setLit({val:snapshot.val().features[3].properties.litio.toString().replace("< ",""), eca:snapshot.val().features[1].properties.litio_eca.toString().replace("< ","")})
                    setMan({val:snapshot.val().features[3].properties.manganeso.toString().replace("< ",""), eca:snapshot.val().features[1].properties.manganeso_.toString().replace("< ","")})
                    setMer({val:snapshot.val().features[3].properties.mercurio.toString().replace("< ",""), eca:snapshot.val().features[1].properties.mercurio_e.toString().replace("< ","")})
                    setNiq({val:snapshot.val().features[3].properties.niquel.toString().replace("< ",""), eca:snapshot.val().features[1].properties.niquel_eca.toString().replace("< ","")})
                    setPlo({val:snapshot.val().features[3].properties.plomo.toString().replace("< ",""), eca:snapshot.val().features[1].properties.plomo_eca.toString().replace("< ","")})
                    setSel({val:snapshot.val().features[3].properties.selenio.toString().replace("< ",""), eca:snapshot.val().features[1].properties.selenio_ec.toString().replace("< ","")})
                    setZin({val:snapshot.val().features[3].properties.zinc.toString().replace("< ",""), eca:snapshot.val().features[1].properties.zinc_eca.toString().replace("< ","")})
                } else {
                    console.log('Error al obtener los datos')
                }
            });
        } 
        PromiseDB();
    }, [])

    let datos = [
        {id:1, capa:'aluminio', data:[{name:'Aluminio', Monitoreo:alu.val, ECA:alu.eca}]},
        {id:2, capa:'arsenico', data:[{name:'Arsénico', Monitoreo:ars.val, ECA:ars.eca}]},
        {id:3, capa:'bario', data:[{name:'Bario', Monitoreo:bar.val, ECA:bar.eca}]},
        {id:4, capa:'berilio', data:[{name:'Berilio', Monitoreo:ber.val, ECA:ber.eca}]},
        {id:5, capa:'boro', data:[{name:'Boro', Monitoreo:bor.val, ECA:bor.eca}]},
        {id:6, capa:'cadmio', data:[{name:'Cadmio', Monitoreo:cad.val, ECA:cad.eca}]},
        {id:7, capa:'cobre', data:[{name:'Cobre', Monitoreo:cob.val, ECA:cob.eca}]},
        {id:8, capa:'cobalto', data:[{name:'Cobalto', Monitoreo:coba.val, ECA:coba.eca}]},
        {id:9, capa:'cromo', data:[{name:'Cromo Total', Monitoreo:cro.val, ECA:cro.eca}]},
        {id:10, capa:'hierro', data:[{name:'Hierro', Monitoreo:hie.val, ECA:hie.eca}]},
        {id:11, capa:'litio', data:[{name:'Litio', Monitoreo:lit.val, ECA:lit.eca}]},
        {id:12, capa:'manganeso', data:[{name:'Manganeso', Monitoreo:man.val, ECA:man.eca}]},
        {id:13, capa:'mercurio', data:[{name:'Mercurio', Monitoreo:mer.val, ECA:mer.eca}]},
        {id:14, capa:'niquel', data:[{name:'Niquel', Monitoreo:niq.val, ECA:niq.eca}]},
        {id:15, capa:'plomo', data:[{name:'Plomo', Monitoreo:plo.val, ECA:plo.eca}]},
        {id:16, capa:'selenio', data:[{name:'Selenio', Monitoreo:sel.val, ECA:sel.eca}]},
        {id:17, capa:'zinc', data:[{name:'Zinc', Monitoreo:zin.val, ECA:zin.eca}]},
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
                                <tr className={`${parseFloat(feature.properties.aluminio.toString().replace("< ","")) >= parseFloat(feature.properties.aluminio_e.toString().replace("< ",""))?'bg-red text-white':null}`}>
                                    <td className='border border-gray-300 p-1'>Aluminio</td><td className='border border-gray-300 p-1'>{feature.properties.aluminio}</td><td className='border border-gray-300 p-1'>{feature.properties.uni}</td><td className='border border-gray-300 p-1'>{feature.properties.aluminio_e}</td>
                                </tr>
                                <tr className={`${parseFloat(feature.properties.arsenico.toString().replace("< ","")) >= parseFloat(feature.properties.arsenico_e.toString().replace("< ",""))?'bg-red text-white':null}`}>
                                    <td className='border border-gray-300 p-1'>Arsénico</td><td className='border border-gray-300 p-1'>{feature.properties.arsenico}</td><td className='border border-gray-300 p-1'>{feature.properties.uni}</td><td className='border border-gray-300 p-1'>{feature.properties.arsenico_e}</td>
                                </tr>
                                <tr className={`${parseFloat(feature.properties.bario.toString().replace("< ","")) >= parseFloat(feature.properties.bario_eca.toString().replace("< ",""))?'bg-red text-white':null}`}>
                                    <td className='border border-gray-300 p-1'>Bario</td><td className='border border-gray-300 p-1'>{feature.properties.bario}</td><td className='border border-gray-300 p-1'>{feature.properties.uni}</td><td className='border border-gray-300 p-1'>{feature.properties.bario_eca}</td>
                                </tr>
                                <tr className={`${parseFloat(feature.properties.berilio.toString().replace("< ","")) >= parseFloat(feature.properties.berilio_ec.toString().replace("< ",""))?'bg-red text-white':null}`}>
                                    <td className='border border-gray-300 p-1'>Berilio</td><td className='border border-gray-300 p-1'>{feature.properties.berilio}</td><td className='border border-gray-300 p-1'>{feature.properties.uni}</td><td className='border border-gray-300 p-1'>{feature.properties.berilio_ec}</td>
                                </tr>
                                <tr className={`${parseFloat(feature.properties.boro.toString().replace("< ","")) >= parseFloat(feature.properties.boro_eca.toString().replace("< ",""))?'bg-red text-white':null}`}>
                                    <td className='border border-gray-300 p-1'>Boro</td><td className='border border-gray-300 p-1'>{feature.properties.boro}</td><td className='border border-gray-300 p-1'>{feature.properties.uni}</td><td className='border border-gray-300 p-1'>{feature.properties.boro_eca}</td>
                                </tr>
                                <tr className={`${parseFloat(feature.properties.cadmio.toString().replace("< ","")) >= parseFloat(feature.properties.cadmio_eca.toString().replace("< ",""))?'bg-red text-white':null}`}>
                                    <td className='border border-gray-300 p-1'>Cadmio</td><td className='border border-gray-300 p-1'>{feature.properties.cadmio}</td><td className='border border-gray-300 p-1'>{feature.properties.uni}</td><td className='border border-gray-300 p-1'>{feature.properties.cadmio_eca}</td>
                                </tr>
                                <tr className={`${parseFloat(feature.properties.cobre.toString().replace("< ","")) >= parseFloat(feature.properties.cobre_eca.toString().replace("< ",""))?'bg-red text-white':null}`}>
                                    <td className='border border-gray-300 p-1'>Cobre</td><td className='border border-gray-300 p-1'>{feature.properties.cobre}</td><td className='border border-gray-300 p-1'>{feature.properties.uni}</td><td className='border border-gray-300 p-1'>{feature.properties.cobre_eca}</td>
                                </tr>
                                <tr className={`${parseFloat(feature.properties.cobalto.toString().replace("< ","")) >= parseFloat(feature.properties.cobalto_ec.toString().replace("< ",""))?'bg-red text-white':null}`}>
                                    <td className='border border-gray-300 p-1'>Cobalto</td><td className='border border-gray-300 p-1'>{feature.properties.cobalto}</td><td className='border border-gray-300 p-1'>{feature.properties.uni}</td><td className='border border-gray-300 p-1'>{feature.properties.cobalto_ec}</td>
                                </tr>
                                <tr className={`${parseFloat(feature.properties.cromo_tota.toString().replace("< ","")) >= parseFloat(feature.properties.cromo_to_1.toString().replace("< ",""))?'bg-red text-white':null}`}>
                                    <td className='border border-gray-300 p-1'>Cromo Total</td><td className='border border-gray-300 p-1'>{feature.properties.cromo_tota}</td><td className='border border-gray-300 p-1'>{feature.properties.uni}</td><td className='border border-gray-300 p-1'>{feature.properties.cromo_to_1}</td>
                                </tr>
                                <tr className={`${parseFloat(feature.properties.hierro.toString().replace("< ","")) >= parseFloat(feature.properties.hierro_eca.toString().replace("< ",""))?'bg-red text-white':null}`}>
                                    <td className='border border-gray-300 p-1'>Hierro</td><td className='border border-gray-300 p-1'>{feature.properties.hierro}</td><td className='border border-gray-300 p-1'>{feature.properties.uni}</td><td className='border border-gray-300 p-1'>{feature.properties.hierro_eca}</td>
                                </tr>
                                <tr className={`${parseFloat(feature.properties.litio.toString().replace("< ","")) >= parseFloat(feature.properties.litio_eca.toString().replace("< ",""))?'bg-red text-white':null}`}>
                                    <td className='border border-gray-300 p-1'>Litio</td><td className='border border-gray-300 p-1'>{feature.properties.litio}</td><td className='border border-gray-300 p-1'>{feature.properties.uni}</td><td className='border border-gray-300 p-1'>{feature.properties.litio_eca}</td>
                                </tr>
                                <tr className={`${parseFloat(feature.properties.manganeso.toString().replace("< ","")) >= parseFloat(feature.properties.manganeso_.toString().replace("< ",""))?'bg-red text-white':null}`}>
                                    <td className='border border-gray-300 p-1'>Manganeso</td><td className='border border-gray-300 p-1'>{feature.properties.manganeso}</td><td className='border border-gray-300 p-1'>{feature.properties.uni}</td><td className='border border-gray-300 p-1'>{feature.properties.manganeso_}</td>
                                </tr>
                                <tr className={`${parseFloat(feature.properties.mercurio.toString().replace("< ","")) >= parseFloat(feature.properties.mercurio_e.toString().replace("< ",""))?'bg-red text-white':null}`}>
                                    <td className='border border-gray-300 p-1'>Mercurio</td><td className='border border-gray-300 p-1'>{feature.properties.mercurio}</td><td className='border border-gray-300 p-1'>{feature.properties.uni}</td><td className='border border-gray-300 p-1'>{feature.properties.mercurio_e}</td>
                                </tr>
                                <tr className={`${parseFloat(feature.properties.niquel.toString().replace("< ","")) >= parseFloat(feature.properties.niquel_eca.toString().replace("< ",""))?'bg-red text-white':null}`}>
                                    <td className='border border-gray-300 p-1'>Niquel</td><td className='border border-gray-300 p-1'>{feature.properties.niquel}</td><td className='border border-gray-300 p-1'>{feature.properties.uni}</td><td className='border border-gray-300 p-1'>{feature.properties.niquel_eca}</td>
                                </tr>
                                <tr className={`${parseFloat(feature.properties.plomo.toString().replace("< ","")) >= parseFloat(feature.properties.plomo_eca.toString().replace("< ",""))?'bg-red text-white':null}`}>
                                    <td className='border border-gray-300 p-1'>Plomo</td><td className='border border-gray-300 p-1'>{feature.properties.plomo}</td><td className='border border-gray-300 p-1'>{feature.properties.uni}</td><td className='border border-gray-300 p-1'>{feature.properties.plomo_eca}</td>
                                </tr>
                                <tr className={`${parseFloat(feature.properties.selenio.toString().replace("< ","")) >= parseFloat(feature.properties.selenio_ec.toString().replace("< ",""))?'bg-red text-white':null}`}>
                                    <td className='border border-gray-300 p-1'>Selenio</td><td className='border border-gray-300 p-1'>{feature.properties.selenio}</td><td className='border border-gray-300 p-1'>{feature.properties.uni}</td><td className='border border-gray-300 p-1'>{feature.properties.selenio_ec}</td>
                                </tr>
                                <tr className={`${parseFloat(feature.properties.zinc.toString().replace("< ","")) >= parseFloat(feature.properties.zinc_eca.toString().replace("< ",""))?'bg-red text-white':null}`}>
                                    <td className='border border-gray-300 p-1'>Zinc</td><td className='border border-gray-300 p-1'>{feature.properties.zinc}</td><td className='border border-gray-300 p-1'>{feature.properties.uni}</td><td className='border border-gray-300 p-1'>{feature.properties.zinc_eca}</td>
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
                                    <option value="aluminio" defaultValue>1. Aluminio</option>
                                    <option value="arsenico">2. Arsénico</option>
                                    <option value="bario">3. Bario</option>
                                    <option value="berilio">4. Berilio</option>
                                    <option value="boro">5. Boro</option>
                                    <option value="cadmio">6. Cadmio</option>
                                    <option value="cobre">7. Cobre</option>
                                    <option value="cobalto">8. Cobalto</option>
                                    <option value="cromo">9. Cromo Total</option>
                                    <option value="hierro">10. Hierro</option>
                                    <option value="litio">11. Litio</option>
                                    <option value="manganeso">12. Manganeso</option>
                                    <option value="mercurio">13. Mercurio</option>
                                    <option value="niquel">14. Niquel</option>
                                    <option value="plomo">15. Plomo</option>
                                    <option value="selenio">16. Selenio</option>
                                    <option value="zinc">17. Zinc</option>
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