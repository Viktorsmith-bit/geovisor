import ReactDOMServer from 'react-dom/server';
import {divIcon} from 'leaflet';
import L from 'leaflet';

export const customMarkerIcon = L.icon({
    iconUrl:'/camera.png',
    iconSize:[30, 30],
    iconAnchor:[15, 15], 
});

{
    /**
     * const iconMarkup = ReactDOMServer.renderToStaticMarkup(
        <svg xmlns="http://www.w3.org/2000/svg" width="37" height="37" fill="orange" className="bi bi-geo-alt-fill" viewBox="0 0 16 16">
            <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
        </svg>
    );
     */
}
{
    /**
     * const customMarkerIcon = L.icon({
        iconUrl:'/location.png',
        iconSize:[50, 50],
        iconAnchor:[22, 94], 
    });
     */
}