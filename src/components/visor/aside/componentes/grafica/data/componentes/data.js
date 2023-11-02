import { ReferenceLine, Brush, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export function Data(props){

    return(
        <div className='className="pr-4 py-2 overflow-y-hidden w-full'>
            {
                props.state === undefined?<h1 className="text-sm mt-4">Cargando datos</h1>:<div className="section">
                    <ResponsiveContainer width='100%' height={240}>
                        <LineChart width={400} height={300} data={
                                props.valor.filter((item)=>{
                                    if(item.properties.param === props.param){
                                            if(props.ano === 'todoAno'?parseInt(item.properties.ano):parseInt(item.properties.ano) === parseInt(props.ano)){
                                                return item;
                                            }
                                        }
                                    }).map((item)=>{
                                    return {name: item.properties.ano + '-' + item.properties.em, Monitoreo:parseFloat(item.properties.medi_val), Eca:parseFloat(item.properties.eca_val)}
                                })
                            }>
                            <CartesianGrid strokeDasharray="3 3" />
                            <Line type="monotone" dataKey="Monitoreo" stroke="#8884d8" />
                            <Line type="monotone" dataKey="Eca" stroke="#ff7300" />
                            <ReferenceLine x="CO" stroke="green" label="Max PV PAGE" />
                            <Tooltip cursor={false} />
                            <XAxis dataKey="name" padding={{left:10,right:10}} />
                            <YAxis padding={{top:10,bottom:10}} />
                            <Legend verticalAlign="top" height={40}/>
                            <Brush height={30}/>
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            }
        </div>
    )
}
export function Data2(props){
    return(
        <div className='className="px-4 py-2 overflow-y-hidden w-full'>
            {
                props.state === undefined?<h1 className="text-sm mt-4">Cargando datos</h1>:<div className="section">
                    <ResponsiveContainer width='100%' height={240}>
                        <LineChart width={400} height={300} data={
                                props.valor.filter((item)=>{
                                    if(item.properties.param === props.param){
                                            if(props.ano === 'todoAno'?parseInt(item.properties.ano):parseInt(item.properties.ano) === parseInt(props.ano)){
                                                if(item.properties.sub_tip === props.subTipo){
                                                    return item;
                                                }
                                            }
                                        }
                                    }).map((item)=>{
                                        return {name: item.properties.ano + '-' + item.properties.em, Monitoreo:parseFloat(item.properties.medi_val), Eca:parseFloat(item.properties.eca_val)}
                                })
                            }>
                            <CartesianGrid strokeDasharray="3 3" />
                            <Line type="monotone" dataKey="Monitoreo" stroke="#8884d8" />
                            <Line type="monotone" dataKey="Eca" stroke="#ff7300" />
                            <ReferenceLine x="name" stroke="green" label="Max PV PAGE" />
                            <Tooltip cursor={false} />
                            <XAxis dataKey="name" padding={{left:10,right:10}} />
                            <YAxis padding={{top:10,bottom:10}} />
                            <Legend verticalAlign="top" height={50}/>
                            <Brush height={30}/>
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            }
        </div>
    )
}
export function Data3(props){
    return(
        <div className='className="px-4 py-2 overflow-y-hidden w-full'>
            {
                props.state === undefined?<h1 className="text-sm mt-4">Cargando datos</h1>:<div className="section">
                    <ResponsiveContainer width='100%' height={240}>
                        <LineChart width={400} height={300} data={
                                props.valor.filter((item)=>{
                                    if(item.properties.param === props.param){
                                            if(props.ano === 'todoAno'?parseInt(item.properties.ano):parseInt(item.properties.ano) === parseInt(props.ano)){
                                                if(item.properties.esta === props.time){
                                                    return item;
                                                }
                                            }
                                        }
                                    }).map((item)=>{
                                        return {name: item.properties.ano + '-' + item.properties.em, Monitoreo:parseFloat(item.properties.medi_val), Eca:parseFloat(item.properties.eca_val)}
                                })
                            }>
                            <CartesianGrid strokeDasharray="3 3" />
                            <Line type="monotone" dataKey="Monitoreo" stroke="#8884d8" />
                            <Line type="monotone" dataKey="Eca" stroke="#ff7300" />
                            <ReferenceLine x="name" stroke="green" label="Max PV PAGE" />
                            <Tooltip cursor={false} />
                            <XAxis dataKey="name" padding={{left:10,right:10}} />
                            <YAxis padding={{top:10,bottom:10}} />
                            <Legend verticalAlign="top" height={50}/>
                            <Brush height={30}/>
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            }
        </div>
    )
}