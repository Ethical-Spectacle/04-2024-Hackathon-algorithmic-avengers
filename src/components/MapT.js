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

const industries = [
    {
      id: 11,
      industry: "Greenhouse Farming",
      name: "Chicago Urban Greens",
      lat: 41.8700,
      lng: -87.6500,
      description: "Utilizes excess heat for year-round vegetable and herb production.",
      required_heat_temp: "28°C",
      heat_requirement: "Continuous low-level heat for optimal plant growth.",
      type: "industry"
    },
    {
      id: 12,
      industry: "Aquaculture",
      name: "Lake Michigan Fishery",
      lat: 41.8800,
      lng: -87.6300,
      description: "Uses warm water to enhance fish breeding environments.",
      required_heat_temp: "24°C",
      heat_requirement: "Moderate consistent heat to maintain water temperature for tropical species.",
      type: "industry"
    },
    {
      id: 13,
      industry: "Spa & Wellness",
      name: "Relax and Rejuvenate Spa",
      lat: 41.8760,
      lng: -87.6345,
      description: "Employs excess heat for heating pools and spa facilities.",
      required_heat_temp: "35°C",
      heat_requirement: "High heat for therapeutic warm pools and saunas.",
      type: "industry"
    },
    {
      id: 14,
      industry: "Residential Heating",
      name: "The Metropolitan Tower",
      lat: 41.8755,
      lng: -87.6730,
      description: "Applies recovered heat for central heating in winter months.",
      required_heat_temp: "21°C",
      heat_requirement: "Steady heat supply for building heating systems during cold seasons.",
      type: "industry"
    },
    {
      id: 15,
      industry: "Breweries",
      name: "Windy City Brews",
      lat: 41.8830,
      lng: -87.6298,
      description: "Uses excess heat for brewing processes and maintaining fermentation temperature.",
      required_heat_temp: "27°C",
      heat_requirement: "Consistent heat needed for fermentation and brewing operations.",
      type: "industry"
    },
    {
      id: 16,
      industry: "Food Processing",
      name: "Chicago Fine Foods",
      lat: 41.8780,
      lng: -87.6350,
      description: "Employs excess heat in various food drying and processing applications.",
      required_heat_temp: "70°C",
      heat_requirement: "High heat for drying processes and maintaining sanitary conditions.",
      type: "industry"
    },
    {
      id: 17,
      industry: "Public Swimming Pools",
      name: "Chicago Park District Pools",
      lat: 41.8730,
      lng: -87.6240,
      description: "Uses excess heat to warm public swimming pools, extending the swimming season.",
      required_heat_temp: "29°C",
      heat_requirement: "Regular heat supply to maintain comfortable water temperature.",
      type: "industry"
    },
    {
      id: 18,
      industry: "Horticulture Therapy Centers",
      name: "Green Haven Therapy",
      lat: 41.8770,
      lng: -87.6270,
      description: "Utilizes excess heat for indoor therapeutic garden environments.",
      required_heat_temp: "25°C",
      heat_requirement: "Gentle, continuous heat to support a therapeutic environment for patients.",
      type: "industry"
    }
  ]  

export default function MyMapComponent() {
  const position = { lat: 41.8781, lng: -87.6298 };
  const [openId, setOpenId] = useState(null);

  return (
    <APIProvider apiKey=''>
      <div className="pointer-events-auto" style={{ height: "50vh", width: "100%" }}>
        <Map zoom={12} center={position} mapId=''>
            <AdvancedMarkers points={dataCenters} openId={openId} setOpenId={setOpenId}/>
            <AdvancedMarkers points={industries} openId={openId} setOpenId={setOpenId}/>
        </Map>
      </div>
    </APIProvider>
  );
}

const AdvancedMarkers = ({points, openId, setOpenId}) => {
    const getPinStyle = (point) => {
        switch (point.type) {
            case 'datacenter':
                return { background: 'red', borderColor: 'grey', glyphColor: 'white' };
            case 'industry':
                return { background: 'green', borderColor: 'black', glyphColor: 'white' };
            default:
                return { background: 'red', borderColor: 'black', glyphColor: 'white' }; // Default style
        }
    };

    const renderDataCenterInfoWindow = (point) => (
        <InfoWindow position={{ lat: point.lat, lng: point.lng }} onCloseClick={() => setOpenId(null)}>
            <div className="p-2 bg-white shadow-lg rounded-md">
                <h2 className="text-lg font-bold text-gray-900">{point.name}</h2>
                <p className="text-gray-600">Data Center located at: {point.lat}, {point.lng}</p>
            </div>
        </InfoWindow>
    );
    
    const renderIndustryInfoWindow = (point) => (
        <InfoWindow position={{ lat: point.lat, lng: point.lng }} onCloseClick={() => setOpenId(null)}>
            <div className="p-2 bg-white shadow-lg rounded-md">
                <h2 className="text-lg font-bold text-gray-900">{point.name}</h2>
                <p className="text-gray-600">Industry utilizing excess heat for {point.description}</p>
                <p className="text-gray-600">Heat requirement: {point.required_heat_temp}</p>
            </div>
        </InfoWindow>
    );
    
    return (
        <>
            {points.map(point => (
                <AdvancedMarker key={point.id} position={{ lat: point.lat, lng: point.lng }}
                    onClick={() => setOpenId(openId === point.id ? null : point.id)}>
                    <Pin {...getPinStyle(point)} />
                    {openId === point.id && (
                        point.type === 'datacenter'
                            ? renderDataCenterInfoWindow(point)
                            : renderIndustryInfoWindow(point)
                    )}
                </AdvancedMarker>
            ))}
        </>
    );
}
