export default function Pdf(props){
    return(
        <div className="absolute top-0 right-14 h-screen w-80 lg:w-96 bg-white border-r border-gray-200" style={{zIndex:"1000"}}>
            <div className="w-80 lg:w-96 h-10">
                <div className="fixed flex items-center w-80 lg:w-96 h-10 background-color">
                    <div className="flex items-center w-full gap-2 h-6 px-4 border-r-2 border-blue-600">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="white" className="bi bi-file-earmark-text" viewBox="0 0 16 16">
                            <path d="M5.5 7a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zM5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z"/>
                            <path d="M9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.5L9.5 0zm0 1v2A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z"/>
                        </svg>
                        <h1 className="text-sm text-white">Documentación</h1>
                    </div>
                </div>
            </div>
            <div className="px-4">
                <h1 className="flex items-center text-sm text-color border-b border-gray-500 w-full h-10">Resoluciones</h1>
            </div>
            <div className="p-4">
                <div className="flex flex-col gap-2">
                    <Documentos texto="RD Nº00083-2021-SENACE-PE/DEAR" url="https://walshperu-my.sharepoint.com/personal/vmedina_walshp_com_pe/_layouts/15/guestaccess.aspx?docid=0a395b15e7b974ebdb0a72311708af01e&authkey=Aek9_rSG9-FCD_FXcCdzrIA&e=xfZKI2" />
                    <Documentos texto="RD 013-2023-SENACE-PE-DEAR" url="https://walshperu-my.sharepoint.com/personal/vmedina_walshp_com_pe/_layouts/15/guestaccess.aspx?docid=1f3646ee9d0e5418a8bf2c23b33923f97&authkey=AQfVy3jHLruWprBApx_fSv4&e=v9k4R9" />
                    <Documentos texto="RD 343-2017-SENACE-DCA" url="https://walshperu-my.sharepoint.com/personal/vmedina_walshp_com_pe/_layouts/15/guestaccess.aspx?docid=1641f74dff040430989e1cdf6c4326c06&authkey=Acn0p8gTtLoS-nrq2kF0Oqs&e=Jz1T6o" />
                    <Documentos texto="RD 068-2014-MEM-DGAAM" url="https://walshperu-my.sharepoint.com/personal/vmedina_walshp_com_pe/_layouts/15/guestaccess.aspx?docid=168bf970d503449dcb653e2e60af11167&authkey=ASJXhTseStaBzqW6Qu6GeCg&e=yF8Rcx" />
                    <Documentos texto="RD 504-2015-MEM-DGAAM" url="https://walshperu-my.sharepoint.com/personal/vmedina_walshp_com_pe/_layouts/15/guestaccess.aspx?docid=1b035fb6db0d842bd9b9f27b44511ebf1&authkey=AYZpNpLRbGXauDSJTBMpaBY&e=p7N1eQ" />
                    <Documentos texto="RD 411-2010-MEM-AAM" url="https://walshperu-my.sharepoint.com/personal/vmedina_walshp_com_pe/_layouts/15/guestaccess.aspx?docid=1796fd2ca239041f5b778e31918fc2ea0&authkey=AVYWnYfKODAKGo844zhg3zs&e=ncODS1" />
                </div>
            </div>
        </div>
    );
}

function Documentos(props){
    return(
        <div className="flex items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="bi bi-arrow-up-right-square" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm5.854 8.803a.5.5 0 1 1-.708-.707L9.243 6H6.475a.5.5 0 1 1 0-1h3.975a.5.5 0 0 1 .5.5v3.975a.5.5 0 1 1-1 0V6.707l-4.096 4.096z"/>
            </svg>
            <a target="_blank" href={props.url}>
                <h1 className="text-color text-sm cursor-pointer">{props.texto}</h1>
            </a>
        </div>
    );
}
