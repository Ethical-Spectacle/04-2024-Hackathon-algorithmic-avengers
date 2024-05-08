import React from 'react';
import Header from './Header';
import WasteCollectionStats from './WasteCollectionStats'

const panelData = [
    // Top row data
    { title: "Total Waste Heat Generated", value: "617.0", description: "In KJ", color: "text-blue-200" },
    { title: "Heat Reuse Efficiency", value: "70%", description: " ", color: "text-orange-400" },
    { title: "Average Fill Level", value: "50%", description: " ", color: "text-orange-400" },
    { title: "Routes Overview", value: "43%", description: " ", color: "text-blue-200" }
    // More data...
  ];
  
const rightPanelData = [
    // { title: "Routes Overview", value: "43%", description: " ", color: "text-blue-200" },
    { title: "CO2 Emissions Saved", value: "300", description: "kg/day", color: "text-green-500" },
    { title: "Energy Savings", value: "33%", description: " ", color: "text-green-500" },
    { title: "Electricity Generated", value: "779.4", description: "kWh", color: "text-orange-500" }
  ];

const DashboardContainer = ({ children }) => {
    return (
        <div className="font-sans bg-custom-blue rounded-lg shadow-sm">
            <Header />
            <WasteCollectionStats data={panelData} rightPanelData={rightPanelData}/>
        </div>
    );
};

export default DashboardContainer;
