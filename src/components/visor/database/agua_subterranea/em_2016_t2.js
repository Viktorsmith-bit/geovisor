import React, {useState, useEffect, Fragment} from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import {GeoJSON} from "react-leaflet";
import {Icon, icon} from "leaflet";
import ReactDOMServer from 'react-dom/server';
import {app} from '../../../../../firebase';
import {ref, onValue, set} from "firebase/database";
import Loading from '../../loading/loading';

function Em2016T2(){
    const [state, setState] = useState();
    const [estado, setEstado] = useState('caudal');

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

    const [caud, setCaud] = useState({val:'', eca:''});
    const [cond, setCond] = useState({val:'', eca:''});
    const [od, setOd] = useState({val:'', eca:''})
    const [ph, setPh] = useState({val:'', eca:''})
    const [temp, setTemp] = useState({val:'', eca:''})
    const [cia, setCia] = useState({val:'', eca:''})
    const [dbo, setDbo] = useState({val:'', eca:''})
    const [dqo, setDqo] = useState({val:'', eca:''})
    const [nitra, setNitra] = useState({val:'', eca:''})
    const [nitri, setNitri] = useState({val:'', eca:''})
    const [sulf, setSulf] = useState({val:'', eca:''})
    const [ars, setArs] = useState({val:'', eca:''})
    const [cad, setCad] = useState({val:'', eca:''})
    const [cob, setCob] = useState({val:'', eca:''})
    const [cro, setCro] = useState({val:'', eca:''})
    const [hie, setHie] = useState({val:'', eca:''})
    const [man, setMan] = useState({val:'', eca:''})
    const [mer, setMer] = useState({val:'', eca:''})
    const [niq, setNiq] = useState({val:'', eca:''})
    const [plo, setPlo] = useState({val:'', eca:''})
    const [sel, setSel] = useState({val:'', eca:''})
    const [zin, setZin] = useState({val:'', eca:''})
    const [col, setCol] = useState({val:'', eca:''})

    useEffect(()=>{
        async function PromiseDB(){
            const starCountCor = ref(app, "em_2016_t2");
            onValue(starCountCor, (snapshot) => {
                if (snapshot.exists()) {
                    setCaud({val:snapshot.val().features[1].properties.Caudal.toString().replace("< ",""), eca:snapshot.val().features[1].properties.ECA_Caudal.toString().replace("< ","")})
                    setCond({val:snapshot.val().features[1].properties.Conductivi.toString().replace("< ",""), eca:snapshot.val().features[1].properties.ECA_Conduc.toString().replace("< ","")})
                    setOd({val:snapshot.val().features[1].properties.OD.toString().replace("< ",""), eca:snapshot.val().features[1].properties.ECA_OD.toString().replace("≥ ","")})
                    setPh({val:snapshot.val().features[1].properties.pH_Campo.toString().replace("< ",""), eca:6.5})
                    setTemp({val:snapshot.val().features[1].properties.Temperatur.toString().replace("< ",""), eca:snapshot.val().features[1].properties.ECA_t.toString().replace("Δ ","")})
                    setCia({val:snapshot.val().features[1].properties.Cianuro_Wa.toString().replace("< ",""), eca:snapshot.val().features[1].properties.ECA_Cia.toString().replace("< ","")})
                    setDbo({val:snapshot.val().features[1].properties.DBO5.toString().replace("< ",""), eca:snapshot.val().features[1].properties.ECA_DBO5.toString().replace("< ","")})
                    setDqo({val:snapshot.val().features[1].properties.DQO.toString().replace("< ",""), eca:snapshot.val().features[1].properties.ECA_DQO.toString().replace("< ","")})
                    setNitra({val:snapshot.val().features[1].properties.N_Nitratos.toString().replace("< ",""), eca:snapshot.val().features[1].properties.ECA_Nitrat.toString().replace("< ","")})
                    setNitri({val:snapshot.val().features[1].properties.N_Nitritos.toString().replace("< ",""), eca:snapshot.val().features[1].properties.ECA_N_Nitr.toString().replace("< ","")})
                    setSulf({val:snapshot.val().features[1].properties.Sulfatos.toString().replace("< ",""), eca:snapshot.val().features[1].properties.ECA_Sulfat.toString().replace("< ","")})
                    setArs({val:snapshot.val().features[1].properties.Arsenico_T.toString().replace("< ",""), eca:snapshot.val().features[1].properties.ECA_Arseni.toString().replace("< ","")})
                    setCad({val:snapshot.val().features[1].properties.Cadmio_Tot.toString().replace("< ",""), eca:snapshot.val().features[1].properties.ECA_Cadmio.toString().replace("< ","")})
                    setCob({val:snapshot.val().features[1].properties.Cobre_Tota.toString().replace("< ",""), eca:snapshot.val().features[1].properties.ECA_Cobre_.toString().replace("< ","")})
                    setCro({val:snapshot.val().features[1].properties.Cromo_Tota.toString().replace("< ",""), eca:snapshot.val().features[1].properties.ECA_Cromo_.toString().replace("< ","")})
                    setHie({val:snapshot.val().features[1].properties.Hierro_Tot.toString().replace("< ",""), eca:snapshot.val().features[1].properties.ECA_Hierro.toString().replace("< ","")})
                    setMan({val:snapshot.val().features[1].properties.ECA_Mangan.toString().replace("< ",""), eca:snapshot.val().features[1].properties.ECA_Mang_1.toString().replace("< ","")})
                    setMer({val:snapshot.val().features[1].properties.Mercurio_T.toString().replace("< ",""), eca:snapshot.val().features[1].properties.ECA_Mercur.toString().replace("< ","")})
                    setNiq({val:snapshot.val().features[1].properties.Niquel_Tot.toString().replace("< ",""), eca:snapshot.val().features[1].properties.ECA_Niquel.toString().replace("< ","")})
                    setPlo({val:snapshot.val().features[1].properties.Plomo_Tota.toString().replace("< ",""), eca:snapshot.val().features[1].properties.ECA_Plomo_.toString().replace("< ","")})
                    setSel({val:snapshot.val().features[1].properties.Selenio_To.toString().replace("< ",""), eca:snapshot.val().features[1].properties.ECA_Seleni.toString().replace("< ","")})
                    setZin({val:snapshot.val().features[1].properties.Zinc_Total.toString().replace("< ",""), eca:snapshot.val().features[1].properties.ECA_Zinc_T.toString().replace("< ","")})
                    setCol({val:snapshot.val().features[1].properties.Coliformes.toString().replace("< ",""), eca:snapshot.val().features[1].properties.ECA_Colifo.toString().replace("< ","")})
                } else {
                    console.log('Error al obtener los datos')
                }
            });
        } 
        PromiseDB();
    }, [])

    let datos = [
        {id:1, capa:'caudal', data:[{name:'Caudal', Monitoreo:caud.val, ECA:caud.eca}]},
        {id:2, capa:'conductividad', data:[{name:'Conductividad', Monitoreo:cond.val, ECA:cond.eca}]},
        {id:3, capa:'od', data:[{name:'Oxígeno Disuelto', Monitoreo:od.val, ECA:od.eca}]},
        {id:4, capa:'ph', data:[{name:'pH campo', Monitoreo:ph.val, ECA:ph.eca}]},
        {id:5, capa:'temperatura', data:[{name:'Temperatura', Monitoreo:temp.val, ECA:temp.eca}]},
        {id:6, capa:'cianuro', data:[{name:'Cianuro', Monitoreo:cia.val, ECA:cia.eca}]},
        {id:7, capa:'dbo', data:[{name:'DBO5', Monitoreo:dbo.val, ECA:dbo.eca}]},
        {id:8, capa:'dqo', data:[{name:'DQO', Monitoreo:dqo.val, ECA:dqo.eca}]},
        {id:9, capa:'nitratos', data:[{name:'Nitratos', Monitoreo:nitra.val, ECA:nitra.eca}]},
        {id:10, capa:'nitritos', data:[{name:'Nitritos', Monitoreo:nitri.val, ECA:nitri.eca}]},
        {id:11, capa:'sulfatos', data:[{name:'Sulfatos', Monitoreo:sulf.val, ECA:sulf.eca}]},
        {id:12, capa:'arsenico', data:[{name:'Arsénico Total', Monitoreo:ars.val, ECA:ars.eca}]},
        {id:13, capa:'cadmio', data:[{name:'Cadmio Total', Monitoreo:cad.val, ECA:cad.eca}]},
        {id:14, capa:'cobre', data:[{name:'Cobre Total', Monitoreo:cob.val, ECA:cob.eca}]},
        {id:15, capa:'cromo', data:[{name:'Cromo Total', Monitoreo:cro.val, ECA:cro.eca}]},
        {id:16, capa:'hierro', data:[{name:'Hierro Total', Monitoreo:hie.val, ECA:hie.eca}]},
        {id:17, capa:'manganeso', data:[{name:'Manganeso Total', Monitoreo:man.val, ECA:man.eca}]},
        {id:18, capa:'mercurio', data:[{name:'Mercurio Total', Monitoreo:mer.val, ECA:mer.eca}]},
        {id:19, capa:'niquel', data:[{name:'Níquel Total', Monitoreo:niq.val, ECA:niq.eca}]},
        {id:20, capa:'plomo', data:[{name:'Plomo Total', Monitoreo:plo.val, ECA:plo.eca}]},
        {id:21, capa:'selenio', data:[{name:'Selenio Total', Monitoreo:sel.val, ECA:sel.eca}]},
        {id:22, capa:'zinc', data:[{name:'Zinc Total', Monitoreo:zin.val, ECA:zin.eca}]},
        {id:23, capa:'coliformes', data:[{name:'Coliformes', Monitoreo:col.val, ECA:col.eca}]},
    ]

    function captarCambios(e){
        e.preventDefault();
        setEstado(e.target.value)
    }

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
                                <tr className={`${parseFloat(feature.properties.Caudal.toString().replace("< ","")) >= parseFloat(feature.properties.ECA_Caudal.toString().replace("< ",""))?'bg-red text-white':null}`}>
                                    <td className='border border-gray-300 p-1'>Caudal</td><td className='border border-gray-300 p-1'>{feature.properties.Caudal}</td><td className='border border-gray-300 p-1'>{feature.properties.Uni_Cau}</td><td className='border border-gray-300 p-1'>{feature.properties.ECA_Caudal}</td>
                                </tr>
                                <tr className={`${parseFloat(feature.properties.Conductivi.toString().replace("< ","")) >= parseFloat(feature.properties.ECA_Conduc.toString().replace("< ","")) ?'bg-red text-white':null}`}>
                                    <td className='border border-gray-300 p-1'>Conductividad</td><td className='border border-gray-300 p-1'>{feature.properties.Conductivi}</td><td className='border border-gray-300 p-1'>{feature.properties.Uni_Con}</td><td className='border border-gray-300 p-1'>{feature.properties.ECA_Conduc}</td>
                                </tr>
                                <tr className={`${parseFloat(feature.properties.OD.toString().replace("< ","")) >= parseFloat(feature.properties.ECA_OD.toString().replace("≥ ","")) ?'bg-red text-white':null}`}>
                                    <td className='border border-gray-300 p-1'>Oxígeno Disuelto</td><td className='border border-gray-300 p-1'>{feature.properties.OD}</td><td className='border border-gray-300 p-1'>{feature.properties.Uni_OD}</td><td className='border border-gray-300 p-1'>{feature.properties.ECA_OD}</td>
                                </tr>
                                <tr className={`${parseFloat(feature.properties.pH_Campo.toString().replace("< ","")) >= 6.5 & parseFloat(feature.properties.pH_Campo.toString().replace("< ","")) <= 8.5?null:'bg-red text-white'}`}>
                                    <td className='border border-gray-300 p-1'>PH Campo</td><td className='border border-gray-300 p-1'>{feature.properties.pH_Campo}</td><td className='border border-gray-300 p-1'>{feature.properties.Uni_Ph}</td><td className='border border-gray-300 p-1'>{feature.properties.ECA_pH}</td>
                                </tr>
                                <tr className={`${parseFloat(feature.properties.Temperatur.toString().replace("< ","")) >= parseFloat(feature.properties.ECA_t.toString().replace("Δ ","")) ?'bg-red text-white':null}`}>
                                    <td className='border border-gray-300 p-1'>Temperatura</td><td className='border border-gray-300 p-1'>{feature.properties.Temperatur}</td><td className='border border-gray-300 p-1'>{feature.properties.Uni_t}</td><td className='border border-gray-300 p-1'>{feature.properties.ECA_t}</td>
                                </tr>
                                <tr className={`${parseFloat(feature.properties.Cianuro_Wa.toString().replace("< ","")) >= parseFloat(feature.properties.ECA_Cia.toString().replace("< ","")) ?'bg-red text-white':null}`}>
                                    <td className='border border-gray-300 p-1'>Cianuro</td><td className='border border-gray-300 p-1'>{feature.properties.Cianuro_Wa}</td><td className='border border-gray-300 p-1'>{feature.properties.Uni_ZT}</td><td className='border border-gray-300 p-1'>{feature.properties.ECA_Cia}</td>
                                </tr>
                                <tr className={`${parseFloat(feature.properties.DBO5.toString().replace("< ","")) >= parseFloat(feature.properties.ECA_DBO5.toString().replace("< ",""))?'bg-red text-white':null}`}>
                                    <td className='border border-gray-300 p-1'>DBO5</td><td className='border border-gray-300 p-1'>{feature.properties.DBO5}</td><td className='border border-gray-300 p-1'>{feature.properties.Uni_ZT}</td><td className='border border-gray-300 p-1'>{feature.properties.ECA_DBO5}</td>
                                </tr>
                                <tr className={`${parseFloat(feature.properties.DQO.toString().replace("< ","")) >= parseFloat(feature.properties.ECA_DQO.toString().replace("< ","")) ?'bg-red text-white':null}`}>
                                    <td className='border border-gray-300 p-1'>DQO</td><td className='border border-gray-300 p-1'>{feature.properties.DQO}</td><td className='border border-gray-300 p-1'>{feature.properties.Uni_DQO}</td><td className='border border-gray-300 p-1'>{feature.properties.ECA_DQO}</td>
                                </tr>
                                <tr className={`${parseFloat(feature.properties.N_Nitratos.toString().replace("< ","")) >= parseFloat(feature.properties.ECA_Nitrat.toString().replace("< ","")) ?'bg-red text-white':null}`}>
                                    <td className='border border-gray-300 p-1'>Nitratos</td><td className='border border-gray-300 p-1'>{feature.properties.N_Nitratos}</td><td className='border border-gray-300 p-1'>{feature.properties.Uni_ZT}</td><td className='border border-gray-300 p-1'>{feature.properties.ECA_Nitrat}</td>
                                </tr>
                                <tr className={`${parseFloat(feature.properties.N_Nitritos.toString().replace("< ","")) >= parseFloat(feature.properties.ECA_N_Nitr.toString().replace("< ","")) ?'bg-red text-white':null}`}>
                                    <td className='border border-gray-300 p-1'>Nitritos</td><td className='border border-gray-300 p-1'>{feature.properties.N_Nitritos}</td><td className='border border-gray-300 p-1'>{feature.properties.Uni_ZT}</td><td className='border border-gray-300 p-1'>{feature.properties.ECA_N_Nitr}</td>
                                </tr>
                                <tr className={`${parseFloat(feature.properties.Sulfatos.toString().replace("< ","")) >= parseFloat(feature.properties.ECA_Sulfat.toString().replace("< ","")) ?'bg-red text-white':null}`}>
                                    <td className='border border-gray-300 p-1'>Sulfatos</td><td className='border border-gray-300 p-1'>{feature.properties.Sulfatos}</td><td className='border border-gray-300 p-1'>{feature.properties.Uni_ZT}</td><td className='border border-gray-300 p-1'>{feature.properties.ECA_Sulfat}</td>
                                </tr>
                                <tr className={`${parseFloat(feature.properties.Arsenico_T.toString().replace("< ","")) >= parseFloat(feature.properties.ECA_Arseni.toString().replace("< ","")) ?'bg-red text-white':null}`}>
                                    <td className='border border-gray-300 p-1'>Arsénico Total</td><td className='border border-gray-300 p-1'>{feature.properties.Arsenico_T}</td><td className='border border-gray-300 p-1'>{feature.properties.Uni_ZT}</td><td className='border border-gray-300 p-1'>{feature.properties.ECA_Arseni}</td>
                                </tr>
                                <tr className={`${parseFloat(feature.properties.Cadmio_Tot.toString().replace("< ","")) >= parseFloat(feature.properties.ECA_Cadmio.toString().replace("< ","")) ?'bg-red text-white':null}`}>
                                    <td className='border border-gray-300 p-1'>Cadmio Total</td><td className='border border-gray-300 p-1'>{feature.properties.Cadmio_Tot}</td><td className='border border-gray-300 p-1'>{feature.properties.Uni_ZT}</td><td className='border border-gray-300 p-1'>{feature.properties.ECA_Cadmio}</td>
                                </tr>
                                <tr className={`${parseFloat(feature.properties.Cobre_Tota.toString().replace("< ","")) >= parseFloat(feature.properties.ECA_Cobre_.toString().replace("< ","")) ?'bg-red text-white':null}`}>
                                    <td className='border border-gray-300 p-1'>Cobre Total</td><td className='border border-gray-300 p-1'>{feature.properties.Cobre_Tota}</td><td className='border border-gray-300 p-1'>{feature.properties.Uni_ZT}</td><td className='border border-gray-300 p-1'>{feature.properties.ECA_Cobre_}</td>
                                </tr>
                                <tr className={`${parseFloat(feature.properties.Cromo_Tota.toString().replace("< ","")) >= parseFloat(feature.properties.ECA_Cromo_.toString().replace("< ","")) ?'bg-red text-white':null}`}>
                                    <td className='border border-gray-300 p-1'>Cromo Total</td><td className='border border-gray-300 p-1'>{feature.properties.Cromo_Tota}</td><td className='border border-gray-300 p-1'>{feature.properties.Uni_ZT}</td><td className='border border-gray-300 p-1'>{feature.properties.ECA_Cromo_}</td>
                                </tr>
                                <tr className={`${parseFloat(feature.properties.Hierro_Tot.toString().replace("< ","")) >= parseFloat(feature.properties.ECA_Hierro.toString().replace("< ","")) ?'bg-red text-white':null}`}>
                                    <td className='border border-gray-300 p-1'>Hierro Total</td><td className='border border-gray-300 p-1'>{feature.properties.Hierro_Tot}</td><td className='border border-gray-300 p-1'>{feature.properties.Uni_ZT}</td><td className='border border-gray-300 p-1'>{feature.properties.ECA_Hierro}</td>
                                </tr>
                                <tr className={`${parseFloat(feature.properties.ECA_Mangan.toString().replace("< ","")) >= parseFloat(feature.properties.ECA_Mang_1.toString().replace("< ","")) ?'bg-red text-white':null}`}>
                                    <td className='border border-gray-300 p-1'>Manganeso Total</td><td className='border border-gray-300 p-1'>{feature.properties.ECA_Mangan}</td><td className='border border-gray-300 p-1'>{feature.properties.Uni_ZT}</td><td className='border border-gray-300 p-1'>{feature.properties.ECA_Mang_1}</td>
                                </tr>
                                <tr className={`${parseFloat(feature.properties.Mercurio_T.toString().replace("< ","")) >= parseFloat(feature.properties.ECA_Mercur.toString().replace("< ","")) ?'bg-red text-white':null}`}>
                                    <td className='border border-gray-300 p-1'>Mercurio Total</td><td className='border border-gray-300 p-1'>{feature.properties.Mercurio_T}</td><td className='border border-gray-300 p-1'>{feature.properties.Uni_ZT}</td><td className='border border-gray-300 p-1'>{feature.properties.ECA_Mercur}</td>
                                </tr>
                                <tr className={`${parseFloat(feature.properties.Niquel_Tot.toString().replace("< ","")) >= parseFloat(feature.properties.ECA_Niquel.toString().replace("< ","")) ?'bg-red text-white':null}`}>
                                    <td className='border border-gray-300 p-1'>Níquel Total</td><td className='border border-gray-300 p-1'>{feature.properties.Niquel_Tot}</td><td className='border border-gray-300 p-1'>{feature.properties.Uni_ZT}</td><td className='border border-gray-300 p-1'>{feature.properties.ECA_Niquel}</td>
                                </tr>
                                <tr className={`${parseFloat(feature.properties.Plomo_Tota.toString().replace("< ","")) >= parseFloat(feature.properties.ECA_Plomo_.toString().replace("< ","")) ?'bg-red text-white':null}`}>
                                    <td className='border border-gray-300 p-1'>Plomo Total</td><td className='border border-gray-300 p-1'>{feature.properties.Plomo_Tota}</td><td className='border border-gray-300 p-1'>{feature.properties.Uni_ZT}</td><td className='border border-gray-300 p-1'>{feature.properties.ECA_Plomo_}</td>
                                </tr>
                                <tr className={`${parseFloat(feature.properties.Selenio_To.toString().replace("< ","")) >= parseFloat(feature.properties.ECA_Seleni.toString().replace("< ","")) ?'bg-red text-white':null}`}>
                                    <td className='border border-gray-300 p-1'>Selenio Total</td><td className='border border-gray-300 p-1'>{feature.properties.Selenio_To}</td><td className='border border-gray-300 p-1'>{feature.properties.Uni_ZT}</td><td className='border border-gray-300 p-1'>{feature.properties.ECA_Seleni}</td>
                                </tr>
                                <tr className={`${parseFloat(feature.properties.Zinc_Total.toString().replace("< ","")) >= parseFloat(feature.properties.ECA_Zinc_T.toString().replace("< ","")) ?'bg-red text-white':null}`}>
                                    <td className='border border-gray-300 p-1'>Zinc Total</td><td className='border border-gray-300 p-1'>{feature.properties.Zinc_Total}</td><td className='border border-gray-300 p-1'>{feature.properties.Uni_ZT}</td><td className='border border-gray-300 p-1'>{feature.properties.ECA_Zinc_T}</td>
                                </tr>
                                <tr className={`${parseFloat(feature.properties.Coliformes.toString().replace("< ","")) >= parseFloat(feature.properties.ECA_Colifo.toString().replace("< ",""))?'bg-red text-white':null}`}>
                                    <td className='border border-gray-300 p-1'>Coliformes</td><td className='border border-gray-300 p-1'>{feature.properties.Coliformes}</td><td className='border border-gray-300 p-1'>{feature.properties.Uni_CF}</td><td className='border border-gray-300 p-1'>{feature.properties.ECA_Colifo}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className='flex items-center gap-2 h-8'>
                    <h1 className='text-blue'>Temporada 2</h1>
                    <a target="_blank" href='https://walshperu-my.sharepoint.com/personal/vmedina_walshp_com_pe/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Fvmedina%5Fwalshp%5Fcom%5Fpe%2FDocuments%2FDocumentos%2FTOROMOCHO%2FANEXO%203%2E2%2E5%2E4%2D4%20Compilado%202011%2D2019%5FCONFORME%2Epdf&parent=%2Fpersonal%2Fvmedina%5Fwalshp%5Fcom%5Fpe%2FDocuments%2FDocumentos%2FTOROMOCHO'>
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
                            {
                                /**<div className='flex justify-end px-4 py-2'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="cursor-pointer bi bi-x-lg" viewBox="0 0 16 16">
                                    <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
                                </svg>
                            </div> */
                            }
                            <div className='px-4 mb-5'>
                                <select name="select" onChange={captarCambios} className='w-full text-sm px-2 h-8 bg-gray-200 border border-gray-300 rounded-md mt-6 cursor-pointer'>
                                    <option value="caudal" defaultValue>1. Caudal</option>
                                    <option value="conductividad">2. Conductividad</option>
                                    <option value="od">3. Oxígeno Disuelto</option>
                                    <option value="ph">4. pH campo</option>
                                    <option value="temperatura">5. Temperatura</option>
                                    <option value="cianuro">6. Cianuro</option>
                                    <option value="dbo">7. DBO5</option>
                                    <option value="dqo">8. DQO</option>
                                    <option value="nitratos">9. Nitratos</option>
                                    <option value="nitritos">10. Nitritos</option>
                                    <option value="sulfatos">11. Sulfatos</option>
                                    <option value="arsenico">12. Arsénico Total</option>
                                    <option value="cadmio">13. Cadmio Total</option>
                                    <option value="cobre">14. Cobre Total</option>
                                    <option value="cromo">15. Cromo Total</option>
                                    <option value="hierro">16. Hierro Total</option>
                                    <option value="manganeso">17. Manganeso Total</option>
                                    <option value="mercurio">18. Mercurio Total</option>
                                    <option value="niquel">19. Níquel Total</option>
                                    <option value="plomo">20. Plomo Total</option>
                                    <option value="selenio">21. Selenio Total</option>
                                    <option value="zinc">22. Zinc Total</option>
                                    <option value="coliformes">22. Coliformes</option>
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

export default React.memo(Em2016T2);
