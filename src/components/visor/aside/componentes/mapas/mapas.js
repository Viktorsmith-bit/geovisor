import Image from "next/image";
import { MapasJson } from './components/mapasJson';

export default function Mapas(props){
    return(
        <div className="absolute top-0 right-14 h-screen w-80 lg:w-96 bg-white border-r border-gray-200 overflow-y-auto overflow-x-hidden" style={{zIndex:"1000"}}>
            <div className="w-80 lg:w-96 h-10">
                <div className="fixed flex items-center w-80 lg:w-96 h-10 z-20 background-color">
                    <div className="flex items-center w-full gap-2 h-6 px-4 border-r-2 border-blue-600">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-map-fill" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M16 .5a.5.5 0 0 0-.598-.49L10.5.99 5.598.01a.5.5 0 0 0-.196 0l-5 1A.5.5 0 0 0 0 1.5v14a.5.5 0 0 0 .598.49l4.902-.98 4.902.98a.502.502 0 0 0 .196 0l5-1A.5.5 0 0 0 16 14.5V.5zM5 14.09V1.11l.5-.1.5.1v12.98l-.402-.08a.498.498 0 0 0-.196 0L5 14.09zm5 .8V1.91l.402.08a.5.5 0 0 0 .196 0L11 1.91v12.98l-.5.1-.5-.1z"/>
                        </svg>
                        <h1 className="text-sm text-white">Mapas base</h1>
                    </div>
                </div>
            </div>
            <div className="flex flex-wrap gap-2 p-4">
                {
                    MapasJson.map((e)=>{
                        return <div key={e.id} onClick={props.openMap} className="flex items-center gap-2 cursor-pointer w-full">
                            <div className="relative w-36 h-32">
                                <Image id={e.id} layout='fill' className='z-10 object-cover cursor-pointer' src={`/mapas/${e.imagen}`} alt={'Walsh Perú'} />
                            </div>  
                            <h1 className='w-40 text-sm text-color mt-1'>{e.nombre}</h1>
                        </div>
                    })
                }
            </div>
        </div>
    );
}