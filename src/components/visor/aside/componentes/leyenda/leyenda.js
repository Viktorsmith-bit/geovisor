export default function Leyenda(){
    return(
        <div className="absolute top-0 right-14 h-screen w-80 lg:w-96 bg-white border-r border-gray-200 overflow-y-auto overflow-x-hidden" style={{zIndex:"1000"}}>
            <div className="w-80 lg:w-96 h-10">
                <div className="fixed flex items-center w-80 lg:w-96 h-10 background-color">
                    <div className="flex items-center w-full gap-2 h-6 px-4 border-r-2 border-blue-600">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" class="bi bi-justify" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M2 12.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"/>
                        </svg>
                        <h1 className="text-sm text-white">Leyenda</h1>
                    </div>
                </div>
            </div>
            <div className="p-4">

            </div>
        </div>
    );
}