import React from 'react';
import GoogleMapReact from 'google-map-react';

const Marker = ({ name }) => (
    <div
      title={name}
      style={{
        height: '10px', // Sufficient for visibility
        width: '10px', // Matches height for a perfect circle
        backgroundColor: 'red',
        borderRadius: '50%',
        transform: 'translate(-50%, -50%)', // Centers the dot on the exact lat/lng
        position: 'absolute' // Crucial for correct positioning on the map
      }}
    />
  );

const dataCenters = [
  { id: 1, name: "Data Center 1", lat: 37.7749, lng: -122.4194 },
  { id: 2, name: "Data Center 2", lat: 34.0522, lng: -118.2437 },
  { id: 3, name: "Data Center 3", lat: 40.7128, lng: -74.0060 },
];

const Map = ({ center, zoom }) => (
  <div style={{ height: '50vh', width: '100%', position: 'relative' }}>
    <GoogleMapReact
      bootstrapURLKeys={{ key: 'AIzaSyBFr4yGf4_DyRNQm9G9tnFgcf2enp-4j9o' }}
      defaultCenter={center}
      defaultZoom={zoom}
    >
      {dataCenters.map(dataCenter => (
        <Marker
          key={dataCenter.id}
          lat={dataCenter.lat}
          lng={dataCenter.lng}
          name={dataCenter.name}
        />
      ))}
    </GoogleMapReact>
  </div>
);

export default Map;
