import React, { useState } from "react";
import { TileLayer, MapContainer, Marker, Popup } from "react-leaflet";
import map from "./map";
import "leaflet/dist/leaflet.css";
import style from "../About/About.module.css";
import L from "leaflet";

function About() {
  const [center, setCenter] = useState({ lat: "42.677679", lng: "23.261483" });
  const ZOOM_LEVEL = 9;

  const markerIcon = new L.Icon({
    iconUrl:
      "https://toppng.com/uploads/preview/map-point-google-map-marker-gif-11562858751s4qufnxuml.png",
    iconSize: [15, 15],
  });

  return (
    <div>
      <div id={style.about_info}>
        <h3>About</h3>
        <p>
          The Compute Yourself provides ability to browse and choose a PC
          online. The system is developed as a Single Page Application (SPA)
          using React.js as front-end, and Node.js + express as backend
          technologies. Each view has a distinct URL, and the routing between
          pages is done client side using React Router. The backend is
          implemented as a REST/JSON API using JSON data serialization. <br />{" "}
          Made by: Radoslav Molov
        </p>
      </div>
      <h4>Address:</h4>
      <MapContainer
        center={center}
        zoom={ZOOM_LEVEL}
        id={style.leaflet_container}
      >
        <TileLayer url={map.maptiler.url} attribute={map.maptiler.attribute} />
        <Marker
          id={style.marker}
          position={[42.677679, 23.261483]}
          icon={markerIcon}
        >
          <Popup>
            <p>Marker</p>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default About;
