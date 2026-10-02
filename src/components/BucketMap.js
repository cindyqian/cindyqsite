import React from 'react';
import { MapContainer, TileLayer, CircleMarker, Popup, Tooltip } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const PIN_STYLE = {
  color: '#ffffff',
  weight: 1.5,
  fillColor: '#ec4899',
  fillOpacity: 0.9,
};

/** World map with one pin per bucket list place; each pin links to that place's Google Maps list. */
export default function BucketMap({ places }) {
  const pins = places.filter((place) => place.coords);

  return (
    <div className="w-full max-w-2xl h-80 sm:h-96 overflow-hidden rounded-2xl border border-pink-200">
      <MapContainer
        bounds={pins.map((place) => place.coords)}
        boundsOptions={{ padding: [16, 16] }}
        zoomSnap={0.25}
        minZoom={0}
        scrollWheelZoom={false}
        worldCopyJump
        className="h-full w-full"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>'
          url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
        />
        {pins.map((place) => (
          <CircleMarker key={place.label} center={place.coords} radius={5} pathOptions={PIN_STYLE}>
            <Tooltip direction="top" offset={[0, -6]}>
              {place.label}
            </Tooltip>
            <Popup>
              <a href={place.href} target="_blank" rel="noopener noreferrer" className="text-pink-600">
                open {place.label} list ↗
              </a>
            </Popup>
          </CircleMarker>
        ))}
      </MapContainer>
    </div>
  );
}
