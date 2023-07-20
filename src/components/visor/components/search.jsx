import { useMap } from 'react-leaflet';
import { GeoSearchControl , OpenStreetMapProvider} from 'leaflet-geosearch';

const SearchButton = () => {
    const map = useMap();
    (
        function home(e){
      
            const searchControl = new GeoSearchControl({
                provider: new OpenStreetMapProvider(),
                style: 'line',
            });
            map.addControl(searchControl)
        }
    )();
  };
  
  export default SearchButton;