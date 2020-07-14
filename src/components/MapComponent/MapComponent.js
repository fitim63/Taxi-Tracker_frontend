import React, {useState} from "react";
import {Map, TileLayer, Marker, Popup} from "react-leaflet";
import "./Map.css";
import L from 'leaflet';
import axios from 'axios'
import Loader from 'react-loader-spinner'
import {Button} from 'react-bootstrap';

function MapComponent() {

  const [lat] = useState(42.661080);
  const [lng] = useState(21.163324);

  const [zoom] = useState(13);
  const [markersLat, setMarkerLat] = useState(52.505);
  const [markerLng, setMarkerLng] = useState(-0.09);
  const [address, setAddress] = useState("");
  let position = [lat, lng];
  const [onClickData, setOnClickData] = useState({});

  const myIcon = L.icon({
    iconUrl: require('../../assets/taxi.png'),
    iconSize: [64, 64],
    iconAnchor: [32, 64],
    popupAnchor: [-3, -76],
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null
  });

  const handleOnClick = (event) => {
    const {lat, lng} = event.latlng;
    setMarkerLat(lat);
    setMarkerLng(lng);
  };

  const onClickPopUp = async (event) => {
    await axios.get(`https://geocode.xyz/${markersLat},${markerLng}?geoit=json`).then(json => {
      setAddress(json.data?.staddress);
      setOnClickData(json.data);
    });
    console.log(onClickData.data);

  };





  return (
      <Map className="map" center={position} zoom={zoom} onClick={(event) => handleOnClick(event)}>
        <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker key={`marker-${markerLng}`} position={[markersLat, markerLng]} onClick={onClickPopUp} icon={myIcon}>
          {
            onClickData && (
                <Popup>
                  <div>
                    <p>Address: {address ? address : <Loader type="Oval" height={40} width={40}/>} </p>
                    <p>Timezone: {onClickData.timezone}</p>
                    <p>State: {onClickData.state}</p>
                    <p>St Address: {onClickData.staddress}</p>
                    <p>Region: {onClickData.region}</p>
                  </div>
                  <Button className='btn primary mr-3'>Generate nearest vehicle</Button>
                  <Button className='btn cancel'>Close</Button>
                </Popup>
            )
          }
        </Marker>
      </Map>
  );
}

export default MapComponent;
