import React, { useState } from "react";
import { Map, TileLayer, Marker, Popup, withLeaflet } from "react-leaflet";
import "./Map.css";
import L from "leaflet";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Loader from "react-loader-spinner";
import { ReactLeafletSearch } from "react-leaflet-search";

function MapComponent() {
  const [lat] = useState(42.66108);
  const [lng] = useState(21.163324);

  const [zoom] = useState(13);
  const [markersLat, setMarkerLat] = useState(52.505);
  const [markerLng, setMarkerLng] = useState(-0.09);
  let position = [lat, lng];
  const [onClickData, setOnClickData] = useState({});

  const myIcon = L.icon({
    iconUrl: require("../../assets/taxi.png"),
    iconSize: [64, 64],
    iconAnchor: [32, 64],
    popupAnchor: [-3, -76],
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
  });

  const handleOnClick = (event) => {
    const { lat, lng } = event.latlng;
    setMarkerLat(lat);
    setMarkerLng(lng);
  };

  const onClickPopUp = async (event) => {
    axios({
      method: "GET",
      url: `https://geocode.xyz/${markersLat},${markerLng}?geoit=json`,
    }).then((value) => {
      if (value.data) {
        setOnClickData(value.data);
      }
    });
  };
  const ReactLeafletSearchComponent = withLeaflet(ReactLeafletSearch);

  return (
    <Map
      className="map"
      center={position}
      zoom={zoom}
      onClick={(event) => handleOnClick(event)}
    >
      <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker
        key={`marker-${markerLng}`}
        position={[markersLat, markerLng]}
        onClick={onClickPopUp}
        icon={myIcon}
      >
        {onClickData && (
          <Popup>
            <div>
              <div className="row container">
                {typeof onClickData.timezone === "string" ? (
                  <p className="text-success">
                    Timezone: {onClickData.timezone}
                  </p>
                ) : (
                  <div>
                    <Loader type="Oval" height={20} width={20} timeout={2000} />
                    {!onClickData.timezone && (
                      <p className="text-danger">
                        Timezone is not available here!
                      </p>
                    )}
                  </div>
                )}
              </div>
              <div className="row container">
                {typeof onClickData.state === "string" ? (
                  <p className="text-success"> State: {onClickData.state}</p>
                ) : (
                  <div>
                    <Loader type="Oval" height={20} width={20} timeout={2000} />
                    {!onClickData.state && (
                      <p className="text-danger">
                        State is not available here!
                      </p>
                    )}
                  </div>
                )}
              </div>
              <div className="row container">
                {typeof onClickData.staddress === "string" ? (
                  <p className="text-success">
                    St Address: {onClickData.staddress}
                  </p>
                ) : (
                  <div>
                    <Loader type="Oval" height={20} width={20} timeout={2000} />
                    {!onClickData.staddress && (
                      <p className="text-danger">
                        Address is not available here!
                      </p>
                    )}
                  </div>
                )}
              </div>
              <div className="row container">
                {typeof onClickData.region === "string" ? (
                  <p className="text-success">Region: {onClickData.region}</p>
                ) : (
                  <div>
                    <Loader type="Oval" height={20} width={20} timeout={2000} />
                    {!onClickData.region && (
                      <p className="text-danger">
                        Region is not available here!
                      </p>
                    )}
                  </div>
                )}
              </div>
            </div>
            <Button className="btn primary mr-3">
              Generate nearest vehicle
            </Button>
            <Button className="btn cancel">Close</Button>
          </Popup>
        )}
      </Marker>
      <ReactLeafletSearchComponent
        className="custom-style"
        position="topright"
        inputPlaceholder="Search for location"
        search={[33.100745405144245, 46.48315429687501]}
        showMarker={true}
        zoom={5}
        showPopup={true}
        closeResultsOnClick={true}
        openSearchOnLoad={true}
        searchBounds={[
          [33.100745405144245, 46.48315429687501],
          [44.55916341529184, 24.510498046875],
        ]}
      />
    </Map>
  );
}

export default MapComponent;
