import React from "react";
import { Map, TileLayer } from "react-leaflet";

const LeafletMap = (props) => {
  return (
    <Map center={[-8.05, -34.88]} zoom={14}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
    </Map>
  );
};
export default LeafletMap;
