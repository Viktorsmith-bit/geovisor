import { useMap } from 'react-leaflet';
import { GeoSearchControl , OpenStreetMapProvider} from 'leaflet-geosearch';

const SearchButton = () => {
    const map = useMap();
  
    return (
        <div className='flex items-center justify-center absolute top-20 rounded-sm left-3 bg-white py-1 w-7' style={{zIndex:"1000"}}>
            <button
                onClick={() => {
                    const searchControl = new GeoSearchControl({
                        provider: new OpenStreetMapProvider(),
                        style: 'bar',
                    });
                    map.addControl(searchControl);
                }}
        
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                </svg>
            </button>
        </div>
    );
  };
  
  export default SearchButton;