export default function Mensaje(){
    return(
        <div className='flex absolute bottom-0 left-0 z-20' style={{zIndex:"1000"}}>
            <div className='flex flex-wrap items-center gap-3 px-3 py-1 bg-white rounded-r-sm'>
                <h1 className="text-black text-xs">La información mostrada es relevante al depósito de relaves</h1>
            </div>
        </div>
    );
}