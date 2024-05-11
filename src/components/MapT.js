import { useEffect, useRef, useState } from "react";
import {
  APIProvider,
  Map,
  AdvancedMarker,
  Pin,
  InfoWindow,
} from "@vis.gl/react-google-maps";
import { useMap } from "react-map-gl";
import { MarkerClusterer } from "@react-google-maps/api";

const dataCenters = [
    { id: 1, name: "Enzu ORD3 Chicago Data Center", lat: 41.8756, lng: -87.6344, type: "datacenter" },
    { id: 2, name: "Cogent Communications Chicago Data Center", lat: 41.8781, lng: -87.6298, type: "datacenter"  },
    { id: 3, name: "Equinix CH4 Chicago Data Center", lat: 41.8535, lng: -87.6243, type: "datacenter"  },
    { id: 4, name: "QTS Data Centers Chicago Data Center", lat: 41.8584, lng: -87.6661, type: "datacenter"  },
    { id: 5, name: "Colocation America ChicagoDC2 Data Center", lat: 41.8756, lng: -87.6244, type: "datacenter"  },
    { id: 6, name: "iTel Networks Inc. Chicago E Randolph Data Center", lat: 41.8849, lng: -87.6218, type: "datacenter"  },
    { id: 7, name: "Evoque-Cyxtera ORD1 Chicago Data Center Campus", lat: 41.8535, lng: -87.6243, type: "datacenter"  },
    { id: 8, name: "Digital Realty ORD10 Data Center", lat: 41.8535, lng: -87.6843, type: "datacenter"  },
    { id: 9, name: "CoreSite CH1 Data Center", lat: 41.8770, lng: -87.7317, type: "datacenter"  },
    { id: 10, name: "Ascent CH2 Data Center", lat: 41.8781, lng: -87.6998, type: "datacenter"  }
];

const App = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: 'AIzaSyCUr4ci5XW0NG6JbdlklVmZbINay-Dn5c4',
    libraries,
  });

  if (loadError) {
    return <div>Error loading maps</div>;
  }

  if (!isLoaded) {
    return <div>Loading maps</div>;
  }

  return (
    <div>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={10}
        center={center}
      >
        <Marker position={center} visible={true} />
      </GoogleMap>
    </div>
  );
};

export default App;