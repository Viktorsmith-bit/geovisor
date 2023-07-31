import { useEffect } from 'react';
import { useMap } from 'react-leaflet';
import { GeoSearchControl , OpenStreetMapProvider} from 'leaflet-geosearch';

const SearchButton = () => {
    const map = useMap();
    useEffect(()=>{
        function home(){
            const searchControl = new GeoSearchControl({
                provider: new OpenStreetMapProvider(),
                style: 'line',
            });
            map.addControl(searchControl)
        }
        return home();
    },[])
  };
  
  export default SearchButton;