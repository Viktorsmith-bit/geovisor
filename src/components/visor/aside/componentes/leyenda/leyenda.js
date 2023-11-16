import Image from "next/image";

export default function Leyenda(props){
    return(
        <div className={`absolute top-0 ${props.aside === 'close'?'right-14':'right-44'} h-screen w-80 lg:w-96 bg-white border-r border-gray-200 overflow-y-auto overflow-x-hidden ${props.leyen === 'closeLey'?'hidden':'bloque'}`} style={{zIndex:"1000"}}>
            <div className="w-80 lg:w-96 h-10">
                <div className="fixed flex items-center justify-between h-12 w-96 background-color">
                    <div className="flex items-center w-full gap-2 h-6 px-4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" class="bi bi-justify" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M2 12.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"/>
                        </svg>
                        <h1 className="text-sm text-white">Leyenda</h1>
                    </div>
                    <svg onClick={props.abrirLeyenda} xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" className="mr-2 cursor-pointer bi bi-x" viewBox="0 0 16 16">
                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                    </svg>
                </div>
            </div>
            <div className="p-4">
                <h1 className="text-sm">Límites políticos</h1>
                <div className="flex items-center gap-1 mt-2">
                    <div className="h-3.5 w-3.5 rounded-sm" style={{backgroundColor:'#D5F5E3'}} ></div>
                    <h1 className="text-sm">Distritales</h1>
                </div>
                <div className="flex items-center gap-1">
                    <div className="h-3.5 w-3.5 rounded-sm" style={{backgroundColor:'#FCF3CF'}} ></div>
                    <h1 className="text-sm">Provinciales</h1>
                </div>
                <div className="flex items-center gap-1">
                    <div className="h-3.5 w-3.5 rounded-sm" style={{backgroundColor:'#EDBB99'}} ></div>
                    <h1 className="text-sm">Departamentales</h1>
                </div>
                <h1 className="text-sm mt-4">Fotografías</h1>
                <div className="flex items-center gap-1 mt-2">
                    <Image src={'/camera.png'} width={20} height={20} alt={'Walsh Perú'} />
                    <h1 className="text-sm">360°</h1>
                </div>
                <h1 className="text-sm mt-4">Estaciones de monitoreo</h1>
                <div className="flex items-center gap-1 mt-2">
                    <Image src={'/marcador.png'} width={20} height={20} alt={'Walsh Perú'} />
                    <h1 className="text-sm">Estación</h1>
                </div>
            </div>
        </div>
    );
}