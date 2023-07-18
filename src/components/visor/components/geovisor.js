import Image from "next/image";

export default function Geovisor(){
    return(
        <div className='flex absolute top-3 left-12 z-20 hidden md:flex lg:flex rounded-sm' style={{zIndex:"1000"}}>
            <div className='section' >
                <Image width={67.5} height={50}  src='/Chinalco.png' alt={'Walsh Perú'} />
            </div>
            <div className='flex items-center px-2 back-color'>
                <div className="section">
                    <h1 className='text-xs text-white'>MINERA TOROMOCHO</h1>
                    <h1 className='font-bold text-white'>GEOVISOR PARA LA GESTIÓN MINERA</h1>
                </div>
            </div>
        </div>
    );
}