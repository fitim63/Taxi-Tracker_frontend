import React, { useState } from "react";
import { Map, TileLayer, Marker, Popup} from "react-leaflet";
import "./Map.css";
import L from 'leaflet';
function MapComponent() {
    const [lat] = useState(52.505);
    const [lng] = useState(-0.09);
    const [zoom] = useState(13);
    const [markersLat, setMarkerLat] = useState(52.505);
    const [markerLng, setMarkerLng] = useState( -0.09);
    let position = [lat, lng];

    const myIcon = L.icon({
        iconUrl: require('../../assets/taxi.png'),
        iconSize: [64,64],
        iconAnchor: [32, 64],
        popupAnchor: [-3, -76],
        shadowUrl: null,
        shadowSize: null,
        shadowAnchor: null
    });

    const handleOnClick = (event) => {
        const { lat, lng } = event.latlng;
        console.log(lat);
        console.log(lng);
        setMarkerLat(lat);
        setMarkerLng(lng)
    };

    return (
        <Map className="map" center={position} zoom={zoom} onClick={(event) => handleOnClick(event)}>
            <TileLayer
                attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
                        <Marker key={`marker-${markerLng}`} position={[markersLat, markerLng]} icon={myIcon} >
                            <Popup>
                                <span>A pretty CSS3 popup. <br/> Easily customizable.</span>
                            </Popup>
                        </Marker>
        </Map>
    );
}

export default MapComponent;
