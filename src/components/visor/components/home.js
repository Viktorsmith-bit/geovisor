import { useMap } from 'react-leaflet';

const SearchButton = () => {
    const map = useMap();

    function center(e){
        e.preventDefault();
        map.setView([-11.65, -76.142071978681196], 11)
    }

    return (
        <div onClick={center} className='flex items-center justify-center absolute top-24 mt-7 rounded-sm left-3 bg-white p-1.5 border border-gray-200 cursor-pointer' style={{zIndex:"1000"}}>
            <button>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-house" viewBox="0 0 16 16">
                    <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5ZM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5 5 5Z"/>
                </svg>
            </button>
        </div>
    );
  };
  
  export default SearchButton;