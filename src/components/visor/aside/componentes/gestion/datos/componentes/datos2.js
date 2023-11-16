import { Fragment, useRef, useEffect, useState,useCallback} from "react";
import Image from 'next/image'
import {ref, onValue, set} from "firebase/database";
import {app} from '../../../../../../../../firebase/database';

export function Datos2(props){
    const [state, setState] = useState();
    let valor = useRef()

    useEffect(()=>{
        async function PromiseDB(){
            const starCountCor = ref(app, "agua_superficial");
            onValue(starCountCor, (snapshot) => {
                if (snapshot.exists()) {
                    setState(snapshot.val())
                    valor.current = snapshot.val().features
                } else {
                    console.log("error")
                }
            });
        } 
        PromiseDB();
    }, [])

    return(
        <Fragment>
            {
                state === undefined?<h1 className="text-sm mt-4">Cargando datos</h1>:<div className="section">
                    {
                        valor.current.map((item)=>{
                            if(props.ano.ano2 === 'todoAno'?parseInt(item.properties.ano):parseInt(item.properties.ano) === parseInt(props.ano.ano2)){
                                if(props.subTipo === 'todoSub'?item.properties.sub_tip:item.properties.sub_tip === props.subTipo){
                                    if(props.param.param2 === 'todoParam'?item.properties.param:item.properties.param === props.param.param2){
                                        if(props.esta.esta2 === 'todoEm'?item.properties.em:item.properties.em === props.esta.esta2){
                                            if(props.mes.mes2 === 'todoMes'?item.properties.mes:item.properties.mes === props.mes.mes2){
                                                if(props.temp === 'todoTemp'?item.properties.temp:item.properties.temp === props.temp){
                                                    if(props.eca === 'excede'?parseFloat(item.properties.medi_val ) >= parseFloat(item.properties.eca_val):props.eca === 'casi'? parseFloat(item.properties.medi_val) >= parseFloat(item.properties.eca_val*80/100) & parseFloat(item.properties.medi_val) < parseFloat(item.properties.eca_val):props.eca === 'noExcede'?parseFloat(item.properties.medi_val ) < parseFloat(item.properties.eca_val*70/100):item.properties.medi){
                                                        return <div key={parseInt(item.properties.id)} className={`flex mb-2 py-0.5 ${parseFloat(item.properties.medi_val) >= parseFloat(item.properties.eca_val)?"bg-red-200 rounded-sm":parseFloat(item.properties.medi_val) >= parseFloat(item.properties.eca_val*80/100)?"bg-orange-200 rounded-sm":"bg-green-200 rounded-sm"}`}>
                                                                <h1 className="text-sm w-20 px-2">{item.properties.ano}</h1>
                                                                <h1 className="text-sm w-48 text-center">{item.properties.param}</h1>
                                                                <h1 className="text-sm w-32 text-center">{item.properties.medi}</h1>
                                                            <h1 className="text-sm w-32 text-center">{item.properties.eca}</h1>
                                                        </div>
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        })
                    }
                </div>
            }
        </Fragment>
    )
}

export function Datos22(props){
    const [state, setState] = useState();
    const [pres, setPres] = useState();
    let valor = useRef()

    useEffect(()=>{
        async function PromiseDB(){
            const starCountCor = ref(app, "agua_subterranea");
            onValue(starCountCor, (snapshot) => {
                if (snapshot.exists()) {
                    setState(snapshot.val())
                    valor.current = snapshot.val().features
                    setPres()
                } else {
                    console.log("error")
                }
            });
        } 
        PromiseDB();
    }, [])

    const exportFile = useCallback(() => {
        const ws = utils.json_to_sheet(pres);
        const wb = utils.book_new();
        utils.book_append_sheet(wb, ws, "Data");
        writeFile(wb, "Reporte.xlsx");
    }, [pres]);

    return(
        <div className={`absolute bottom-0 right-0 w-screen pr-14 pt-12 w-full h-96 bg-white ${props.tabla === 'close'?'hidden':'bloque'}`}>
            <div className="absolute top-0 left-0 pr-14 w-full">
                <div className="flex justify-between items-center h-12 px-4 background-color">
                    <div className="flex gap-1">
                        <h1 className="text-sm text-white">Resultados</h1>
                    </div>
                    <div className="flex items-center gap-3">
                        {
                            state !== undefined?<div onClick={(e)=>{
                                e.preventDefault()
                                const ws = utils.json_to_sheet(
                                    valor.current.filter((item)=>{
                                        if(props.ano.ano2 === 'todoAno'?parseInt(item.properties.ano):parseInt(item.properties.ano) === parseInt(props.ano.ano2)){
                                            if(props.subTipo === 'todoSub'?item.properties.sub_tip:item.properties.sub_tip === props.subTipo){
                                                if(props.param.param2 === 'todoParam'?item.properties.param:item.properties.param === props.param.param2){
                                                    if(props.esta.esta2 === 'todoEm'?item.properties.em:item.properties.em === props.esta.esta2){
                                                        if(props.mes.mes2 === 'todoMes'?item.properties.mes:item.properties.mes === props.mes.mes2){
                                                            if(props.temp === 'todoTemp'?item.properties.temp:item.properties.temp === props.temp){
                                                                if(props.eca === 'excede'?parseFloat(item.properties.medi_val ) >= parseFloat(item.properties.eca_val):props.eca === 'casi'? parseFloat(item.properties.medi_val) >= parseFloat(item.properties.eca_val*80/100) & parseFloat(item.properties.medi_val) < parseFloat(item.properties.eca_val):props.eca === 'noExcede'?parseFloat(item.properties.medi_val ) < parseFloat(item.properties.eca_val*70/100):item.properties.medi){
                                                                    return item
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }).map((item)=>{
                                        return {
                                            Año: item.properties.ano,
                                            Mes: item.properties.mes,
                                            Fuente: item.properties.fuen,
                                            Tipo: item.properties.tip,
                                            SubtTipo: item.properties.sub_tip,
                                            SubtTipo: item.properties.temp,
                                            Estación: item.properties.em,
                                            Paramétro: item.properties.param,
                                            Monitoreo:item.properties.medi, 
                                            Eca:item.properties.eca
                                        }
                                    })
                                );
                                const wb = utils.book_new();
                                utils.book_append_sheet(wb, ws, "Data");
                                writeFile(wb, "Reporte.xlsx");
                            }} className="flex gap-1 hover:bg-gray-800 cursor-pointer">
                                <h1 className="text-white text-sm">Exportar</h1>
                                <Image src={'/sobresalir.png'} width={22} height={22} />
                            </div>:null
                        }
                        <svg onClick={props.closeTabla} xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="white" className="cursor-pointer bi bi-x-lg" viewBox="0 0 16 16">
                            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
                        </svg>
                    </div>
                </div>
            </div>
            <div className="overflow-y-auto overflow-x-hidden h-full border-b border-gray-200">
                {
                    state === undefined?<h1 className="text-sm mt-4">Cargando datos</h1>:<table className="table-auto w-full">
                        <thead className="section">
                            <th className="px-2 py-1 text-sm border-t border-l border-gray-200 ">Año</th>
                            <th className="px-2 py-1 text-sm border-t border-l border-gray-200 ">Mes</th>
                            <th className="px-2 py-1 text-sm border-t border-l border-gray-200 ">Fuente</th>
                            <th className="px-2 py-1 text-sm border-t border-l border-gray-200 ">Tipo</th>
                            <th className="px-2 py-1 text-sm border-t border-l border-gray-200 ">Sub tipo</th>
                            <th className="px-2 py-1 text-sm border-t border-l border-gray-200 ">Temporada</th>
                            <th className="px-2 py-1 text-sm border-t border-l border-gray-200 ">Estación</th>
                            <th className="px-2 py-1 text-sm border-t border-l border-gray-200 ">Temporada</th>
                            <th className="px-2 py-1 text-sm border-t border-l border-gray-200 ">Parámetro</th>
                            <th className="px-2 py-1 text-sm border-t border-l border-gray-200 ">Medición</th>
                            <th className="px-2 py-1 text-sm border-t border-l border-r border-gray-200 ">ECA</th>
                        </thead>
                        <tbody>
                            {
                                valor.current.map((item)=>{
                                    if(props.ano.ano1 === 'todoAno'?parseInt(item.properties.ano):parseInt(item.properties.ano) === parseInt(props.ano.ano1)){
                                        if(props.mes.mes1 === 'todoMes'?parseInt(item.properties.step):parseInt(item.properties.step) === parseInt(props.mes.mes1)){
                                            if(props.param.param1 === 'todoParam'?item.properties.param:item.properties.param === props.param.param1){
                                                if(props.esta.esta1 === 'todoEm'?item.properties.em:item.properties.em === props.esta.esta1){
                                                    if(props.eca === 'excede'?parseFloat(item.properties.medi_val ) >= parseFloat(item.properties.eca_val):props.eca === 'casi'? parseFloat(item.properties.medi_val) >= parseFloat(item.properties.eca_val*80/100) & parseFloat(item.properties.medi_val) < parseFloat(item.properties.eca_val):props.eca === 'noExcede'?parseFloat(item.properties.medi_val ) < parseFloat(item.properties.eca_val*70/100):item.properties.medi){
                                                        return <tr key={parseInt(item.properties.id)}>
                                                            <td className="text-sm text-center py-1 border-t border-l border-b border-gray-200 px-2">{item.properties.ano}</td>
                                                            <td className="text-sm text-center py-1 border-t border-l border-b border-gray-200 px-2">{item.properties.mes}</td>
                                                            <td className="text-sm text-center py-1 flex-1 border-t border-l border-b border-gray-200 px-2">{item.properties.fuen}</td>
                                                            <td className="text-sm text-center py-1 flex-1 border-t border-l border-b border-gray-200 px-2">{item.properties.tip}</td>
                                                            <td className="text-sm text-center py-1 flex-1 border-t border-l border-b border-gray-200 px-2">{item.properties.sub_tip}</td>
                                                            <td className="text-sm text-center py-1 flex-1 border-t border-l border-b border-gray-200 px-2">{item.properties.temp}</td>
                                                            <td className="text-sm text-center py-1 flex-1 border-t border-l border-b border-gray-200 px-2">{item.properties.em}</td>
                                                            <td className="text-sm text-center py-1 border-t border-l border-b border-gray-200 px-2">{item.properties.step}</td>
                                                            <td className="text-sm text-center py-1 flex-1 border-t border-l border-b border-gray-200 px-2">{item.properties.param}</td>
                                                            <td className="text-sm text-center py-1 border-t border-l border-b border-gray-200 px-2">{item.properties.medi}</td>
                                                            <td className="text-sm text-center py-1 border-t border-l border-r border-b border-gray-200 px-2">{item.properties.eca}</td>
                                                        </tr>
                                                    }
                                                }
                                            }
                                        }
                                    }
                                 })
                            }
                        </tbody>
                    </table>
                }
            </div>
        </div>
    )
}