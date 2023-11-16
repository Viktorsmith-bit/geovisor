import Index from "./componentes/content";
export default function Capas(props){
    return(
        <div className={`absolute top-0 ${props.aside === 'close'?'right-14':'right-44'} h-screen w-80 lg:w-96 bg-white border-r border-gray-300 pt-36 ${props.capas === "closeCap"?'hidden':'bloque'}`} style={{zIndex:"1000"}}>
            <div className="absolute top-0 right-0 w-full h-36">
                <div className="flex items-center justify-between h-12 background-color">
                    <div className="flex items-center gap-2 h-6 px-4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" className="bi bi-layers" viewBox="0 0 16 16">
                            <path d="M8.235 1.559a.5.5 0 0 0-.47 0l-7.5 4a.5.5 0 0 0 0 .882L3.188 8 .264 9.559a.5.5 0 0 0 0 .882l7.5 4a.5.5 0 0 0 .47 0l7.5-4a.5.5 0 0 0 0-.882L12.813 8l2.922-1.559a.5.5 0 0 0 0-.882l-7.5-4zm3.515 7.008L14.438 10 8 13.433 1.562 10 4.25 8.567l3.515 1.874a.5.5 0 0 0 .47 0l3.515-1.874zM8 9.433 1.562 6 8 2.567 14.438 6 8 9.433z"/>
                        </svg>
                        <h1 className="text-sm text-white">Lista de capas</h1>
                    </div>
                    <svg onClick={props.abrirCapas} xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" className="mr-2 cursor-pointer bi bi-x" viewBox="0 0 16 16">
                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                    </svg>
                </div>
                <h1 className="flex items-center px-4 text-sm h-12 border-b border-gray-200">Vista actual del mapa</h1>
                <div className="flex itens-center px-4 py-2 h-12 bg-gray-100">
                    <h1 className="flex items-center px-4 text-sm bg-white border-l-2 border-blue-500 w-full shadow-md">Haga clic en cada capa para ver sus atributos</h1>
                </div>
            </div>
            <div className="overflow-y-auto overflow-x-hidden h-full">
                <Index />
            </div>
        </div>
    );
}

