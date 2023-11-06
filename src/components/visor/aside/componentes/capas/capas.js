import Index from "./componentes/content";
export default function Capas(props){
    return(
        <div className={`absolute top-0 right-14 h-screen w-80 lg:w-96 bg-white border-r border-red-300 pt-20 ${props.capas === "closeCap"?'hidden':'bloque'}`} style={{zIndex:"1000"}}>
            <div className="absolute top-0 right-0 w-full h-20">
                <div className="flex items-center h-10 background-color">
                    <div className="flex items-center w-full gap-2 h-6 px-4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="white" className="bi bi-stack" viewBox="0 0 16 16">
                            <path d="m14.12 10.163 1.715.858c.22.11.22.424 0 .534L8.267 15.34a.598.598 0 0 1-.534 0L.165 11.555a.299.299 0 0 1 0-.534l1.716-.858 5.317 2.659c.505.252 1.1.252 1.604 0l5.317-2.66zM7.733.063a.598.598 0 0 1 .534 0l7.568 3.784a.3.3 0 0 1 0 .535L8.267 8.165a.598.598 0 0 1-.534 0L.165 4.382a.299.299 0 0 1 0-.535L7.733.063z"/>
                            <path d="m14.12 6.576 1.715.858c.22.11.22.424 0 .534l-7.568 3.784a.598.598 0 0 1-.534 0L.165 7.968a.299.299 0 0 1 0-.534l1.716-.858 5.317 2.659c.505.252 1.1.252 1.604 0l5.317-2.659z"/>
                        </svg>
                        <h1 className="text-sm text-white">Lista de capas</h1>
                    </div>
                </div>
                <h1 className="flex items-center px-4 text-sm text-white h-10 back-color">Vista actual del mapa</h1>
            </div>
            <div className="px-4 pt-2 pb-4 overflow-y-auto overflow-x-hidden h-full">
                <Index />
            </div>
        </div>
    );
}

