import React from 'react';
import GoogleMapReact from 'google-map-react';


const Marker = ({ name }) => (
    <div
      title={name}
      style={{
        height: '30px', // Sufficient for visibility
        width: '30px', // Matches height for a perfect circle
        backgroundColor: 'red',
        borderRadius: '50%',
        transform: 'translate(-50%, -50%)', // Centers the dot on the exact lat/lng
        position: 'absolute', // Crucial for correct positioning on the map
        opacity: 0.1,
      }}
    />
  );

  const dataCenters = [
    { id: 1, name: "Enzu ORD3 Chicago Data Center", lat: 41.8756, lng: -87.6244 },
    { id: 2, name: "Cogent Communications Chicago Data Center", lat: 41.8781, lng: -87.6298 },
    { id: 3, name: "Equinix CH4 Chicago Data Center", lat: 41.8535, lng: -87.6243 },
    { id: 4, name: "QTS Data Centers Chicago Data Center", lat: 41.8584, lng: -87.6661 },
    { id: 5, name: "Colocation America ChicagoDC2 Data Center", lat: 41.8756, lng: -87.6244 },
    { id: 6, name: "iTel Networks Inc. Chicago E Randolph Data Center", lat: 41.8849, lng: -87.6218 },
    { id: 7, name: "Evoque-Cyxtera ORD1 Chicago Data Center Campus", lat: 41.8535, lng: -87.6243 },
    { id: 8, name: "Digital Realty ORD10 Data Center", lat: 41.8535, lng: -87.6243 },
    { id: 9, name: "CoreSite CH1 Data Center", lat: 41.8770, lng: -87.6317 },
    { id: 10, name: "Ascent CH2 Data Center", lat: 41.8781, lng: -87.6298 }
  ];
  

const Map = ({ center, zoom }) => (
  <div style={{ height: '50vh', width: '100%', position: 'relative' }}>
    <GoogleMapReact
      bootstrapURLKeys={{ key: '' }}
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
