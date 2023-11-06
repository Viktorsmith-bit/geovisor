import { useContextCapasMap } from "@/app/visor/map";
import Link from "next/link";
import Image from "next/image";
export default function Logout(props){
    const {closeLog} = useContextCapasMap()
    return(
        <div className="flex justify-center items-center absolute top-0 h-screen w-full opacity px-4 lg:px-0" style={{zIndex:"2000"}}>
            <div className="flex-1 max-w-md bg-white p-5">
                <div className='flex items-center justify-between'>
                    <h1>Geovisor</h1>
                    <Image width={67.5} height={50}  src='/Chinalco.png' alt={'Chinalco'} />
                </div>
                <div className='border border-gray-200 p-5 mt-10 bg-white'>
                    <h1 className='text-black text-center'>¿Seguro que desea cerrar la sesión?</h1>
                    <Link href={"/"} >
                        <button className="mt-10 py-2 px-3 w-full back-color text-white">Cerrar sesión</button>
                    </Link>
                    <button onClick={closeLog} className="mt-3 py-2 px-3 w-full" style={{backgroundColor:'rgb(243, 244, 241)'}}>Cancelar</button>
                </div>
            </div>
        </div>
    );
}