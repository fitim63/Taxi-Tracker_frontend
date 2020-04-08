import React, {useState} from "react";
import {Map, TileLayer} from "react-leaflet";
import '../Map.css';

function MapComponent(){
    const [lat] = useState(52.505);
    const [lng] = useState(-0.09);
    const [zoom] = useState(13);
    let position = [lat, lng];
    return (
        <Map className="map" center={position} zoom={zoom}>
            <TileLayer
                attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
        </Map>

    );
}

export default MapComponent;