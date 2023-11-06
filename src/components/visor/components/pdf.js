export default function Pdf(){
    return(
        <div className="flex justify-center items-center absolute top-0 h-screen right-14 h-96 w-full opacity" style={{zIndex:"2000"}}>
            <div className="flex-1 max-w-2xl">
                <div className="w-full bg-white px-3 py-1 rounded-t-md border-b border-gray-300">
                    <svg onClick={props.closeVisualizarPdf} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" className="cursor-pointer bi bi-x-lg" viewBox="0 0 16 16">
                        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
                    </svg>
                </div>
                <embed src="https://docs.google.com/gview?url=http://www.educoas.org/portal/bdigital/contenido/valzacchi/ValzacchiCapitulo-2New.pdf&embedded=true" style={{width:'100%', height:'600px'}}/>
                <div className="w-full bg-white h-3 rounded-b-md border-t border-gray-300">
                </div>
            </div>
        </div>
    );
}