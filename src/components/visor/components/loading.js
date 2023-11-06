export default function Loading(){
    return(
        <div className='flex items-start lg:items-center justify-center absolute top-0 left-0 w-full h-screen py-16 md:py-32 lg:py-0' style={{zIndex:'1000'}}>
            <span className="inline-flex rounded-md shadow-sm">
                <button type="button" className="inline-flex items-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-white focus:border-green-700 active:bg-rose-700 transition ease-in-out duration-150" disabled="">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="#434040" stroke-width="4"></circle>
                        <path className="opacity-75" fill="#434040" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <h1 className='text-black font-bold'>Cargando datos</h1>
                </button>
            </span>
        </div>
    );
}