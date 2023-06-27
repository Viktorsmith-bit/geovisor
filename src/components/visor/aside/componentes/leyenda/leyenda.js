export default function Leyenda(){
    return(
        <div className="absolute top-0 right-14 h-screen w-96" style={{zIndex:"1000", backgroundColor:"rgb(30,39,49)"}}>
            <div className="flex items-center h-10" style={{backgroundColor:'rgb(69, 128, 94)'}}>
                <div className="flex items-center w-full gap-2 h-6 px-4 border-r border-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-justify" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M2 12.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"/>
                    </svg>
                    <h1 className="text-base">Leyenda</h1>
                </div>
            </div>
            <div className="p-4">

            </div>
        </div>
    );
}