import { useContextCapasMap } from "@/app/visor/map";
import { useState } from "react";
import { listaCoordenadas } from "./lista";

export default function Panoramicas(){
    const {hundleClicClose360, state} = useContextCapasMap()
    const [statePanam, setStatePanam] = useState(()=>{
        return (parseInt(state));
    });

    const back = (e)=>{
        e.preventDefault();
        if(statePanam < listaCoordenadas.length){
            return setStatePanam(statePanam + 1);
        }
    }
    const next = (e)=>{
        e.preventDefault();
        if(statePanam > listaCoordenadas[0].id){
            return setStatePanam(statePanam - 1)
        }
    }

    return(
        <div className='absolute h-screen top-0 z-40 w-full' style={{zIndex:"2000"}}>
            <div className='fixed flex justify-center h-screen w-full'>
                <div className='flex flex-col justify-start lg:justify-center md:justify-between lg:justify-center w-full opacity lg:py-10 h-screen'>
                    <div className='flex items-center justify-between'>
                        <code><h1 onClick={next} className='hidden lg:flex justify-center items-center bg-gray-100 color w-12 h-12 text-xl cursor-pointer'>{`<`}</h1></code>
                        <div className='flex items-center justify-center'>
                            {listaCoordenadas.map((e) =>{
                                if(e.id === statePanam){
                                    return <div key={e.id} className='flex flex-col-reverse lg:flex-row h-screen lg:h-auto'>
                                        <div className='flex flex-col justify-between w-full lg:w-80 bg-gray-100 px-4 py-4 h-full lg:h-auto'>
                                            <div className='container'>
                                                <svg onClick={hundleClicClose360} xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#434040" className="hidden lg:block cursor-pointer bi bi-x-lg" viewBox="0 0 16 16">
                                                    <path d="M1.293 1.293a1 1 0 0 1 1.414 0L8 6.586l5.293-5.293a1 1 0 1 1 1.414 1.414L9.414 8l5.293 5.293a1 1 0 0 1-1.414 1.414L8 9.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L6.586 8 1.293 2.707a1 1 0 0 1 0-1.414z"/>
                                                </svg>
                                                <div onClick={hundleClicClose360} className='flex items-center gap-1 cursor-pointer w-20 mt-3 lg:hidden'>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#434040" class="bi bi-arrow-left" viewBox="0 0 16 16">
                                                        <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
                                                    </svg>
                                                    <h1 className='text-base text-color'>Volver</h1>
                                                </div>  
                                                <h1 className='text-xl font-bold text-color text-color mt-5'>{e.titulo}</h1>
                                                <div className='border-b border-gray-400 pb-2 mt-1'>
                                                    <h1 className='text-sm text-color text-color'>{e.subTitulo}</h1>
                                                    <div className='flex justify-between'>
                                                        <h1 className='text-sm text-color text-color'>{e.lugar}</h1>
                                                        <h1 className='text-sm text-color text-color'>{e.fecha}</h1>
                                                    </div>
                                                    </div>
                                                    <h1 className='text-base mt-5 text-color text-justify'> {e.descripcion}</h1>
                                                </div>
                                            <h1 className='text-xs text-justify text-color text-color'>©2023 Unidad minera Toromocho. La fotografía panorámica se encuentra sujeta a derechos de autor.</h1>
                                        </div>
                                        <div className='relative'>
                                            <iframe className='flex-1 panam' src={`${e.url}`} allowfullscreen="" loading="lazy"></iframe>
                                            <>
                                                <code><h1 onClick={next} className='flex justify-center items-center absolute bottom-0 left-0 lg:hidden bg-gray-100 color w-12 h-12 text-xl cursor-pointer'>{`<`}</h1></code>
                                                <code><h1 onClick={back} className='flex justify-center items-center absolute bottom-0 right-0 lg:hidden bg-gray-100 color w-12 h-12 text-xl cursor-pointer'>{`>`}</h1></code>
                                            </>
                                        </div>
                                </div>
                                }
                            }) 
                            }
                        </div>
                        <code><h1 onClick={back} className='hidden lg:flex justify-center items-center bg-gray-100 color w-12 h-12 text-xl cursor-pointer'>{`>`}</h1></code>
                    </div>
                </div>
            </div>
        </div>
    );
}