import { Fragment, useRef, useEffect, useState} from "react";
import {ref, onValue, set} from "firebase/database";
import {app} from '../../../../../../../../firebase/database';

export default function Datos4(props){
    const [state, setState] = useState();
    let valor = useRef()

    useEffect(()=>{
        async function PromiseDB(){
            const starCountCor = ref(app, "calidad_aire");
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
                            if(props.ano.ano4 === 'todoAno'?parseInt(item.properties.ano):parseInt(item.properties.ano) === parseInt(props.ano.ano4)){
                                if(props.mes.mes4 === 'todoMes'?item.properties.mes:item.properties.mes === props.mes.mes4){
                                    if(props.param.param4 === 'todoParam'?item.properties.param:item.properties.param === props.param.param4){
                                        if(props.esta.esta4 === 'todoEm'?item.properties.em:item.properties.em === props.esta.esta4){
                                            if(props.eca === 'excede'?parseFloat(item.properties.medi_val ) >= parseFloat(item.properties.eca_val):props.eca === 'casi'? parseFloat(item.properties.medi_val) >= parseFloat(item.properties.eca_val*80/100) & parseFloat(item.properties.medi_val) < parseFloat(item.properties.eca_val):props.eca === 'noExcede'?parseFloat(item.properties.medi_val ) < parseFloat(item.properties.eca_val*70/100):item.properties.medi){
                                                return <div key={parseInt(item.properties.id)} className={`flex mb-2 py-0.5 ${parseFloat(item.properties.medi_val) >= parseFloat(item.properties.eca_val)?"bg-red-200 rounded-sm":parseFloat(item.properties.medi_val) >= parseFloat(item.properties.eca_val*80/100)?"bg-orange-200 rounded-sm":"bg-green-200 rounded-sm"}`}>
                                                        <h1 className="text-sm w-20 px-2">{item.properties.ano}</h1>
                                                        <h1 className="text-sm w-48 ">{item.properties.param}</h1>
                                                        <h1 className="text-sm w-32">{item.properties.medi}</h1>
                                                    <h1 className="text-sm w-32">{item.properties.eca}</h1>
                                                </div>
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