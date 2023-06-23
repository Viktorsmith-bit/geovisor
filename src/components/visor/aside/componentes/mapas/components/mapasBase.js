import { Fragment } from 'react';
import { MapasJson } from './mapasJson';

export default function MapasBase(props){

    return(
        <div className='absolute-tilelayer bg-white w-full md:w-96 lg:w-96 rounded-sm z-20 border border-gray-400 height-visor' style={{zIndex:"1000"}}>
            <div className='overFlow-hidden h-96'>
                <div className='overflow-auto overscroll-auto h-96 py-4 px-4'>
                    <h1 className='ml-0.5 border-b-2 border-gray-600 pb-1 text-color'>Mapas</h1>
                    <div className='flex flex-wrap justify-center w-full gap-3 mt-3'>
                        {
                            MapasJson.map((e)=>{
                                return <div>
                                    <img id={e.id} onClick={props.openMap} className='w-40 h-36 cover cursor-pointer' src={`/mapas/${e.imagen}`} />
                                    <h1 className='w-40 text-sm text-color text-center mt-1'>{e.nombre}</h1>
                                </div>
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

function Close(props){
    return(
        <Fragment>
            <svg onClick={props.handleClickClose} xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" className="-mr-2 cursor-pointer bi bi-x" viewBox="0 0 16 16">
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
            </svg>
        </Fragment>
    );
}