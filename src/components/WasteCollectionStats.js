import React from 'react';
import BarChartComp from './BarChart';
import Map from './Map';
import AlertTable from './AlertTable';
import SimpleLineChart from './SimpleLineChart'
import PieChart  from './PieChart';

const barchartData = [
    { name: 'District Heating', value: 400 },
    { name: 'Greenhouses', value: 300 },
    { name: 'Industrial Processes', value: 200 },
    { name: 'Local Power Generation', value: 100 }
];

const sampleData = [
    { name: '1', value: 400 },
    { name: '2', value: 300 },
    { name: '3', value: 500 },
    { name: '4', value: 200 },
    { name: '5', value: 278 },
    { name: '6', value: 189 },
    { name: '7', value: 239 },
    { name: '8', value: 349 },
    { name: '9', value: 200 },
    { name: '10', value: 300 }
];

const piedata = [
    { name: "District Heating", value: 400, percentage: '40%' },
    { name: "Greenhouses", value: 200, percentage: '20%' },
    { name: "Industrial Processes", value: 150, percentage: '15%' },
    { name: "Local Power Generation", value: 250, percentage: '25%' }
];

const center = { lat: 38.9072, lng: -77.0369 }; // Center roughly on the USA
const zoom = 5;
const DashboardLayout = ({data, rightPanelData}) => {
    return (
        <div className="bg-gray-900 text-white min-h-screen p-5">
            <div className="grid grid-cols-12 gap-4">
                {/* Top panels */}
                {data.map((item, index) => (
                    <div key={index} className="col-span-3 bg-gray-800 p-4 rounded-lg shadow-lg">
                        <div className="flex flex-col justify-around">
                            <h2 className="text-sm font-semibold p-1">{item.title}</h2>
                            <p className={`text-3xl font-bold p-1 ${item.color}`}>{item.value}</p>
                            <p className="text-xs p-1">{item.description}</p>
                        </div>
                    </div>
                ))}

                {/* Map and associated components */}
                <div className="col-span-9 row-span-3 bg-gray-800 p-2 rounded-lg shadow-lg">
                    <Map center={center} zoom={zoom} />
                </div>

                {/* Right panels */}    
                {rightPanelData.map((item, index) => (
                    <div key={index} className="col-span-3 bg-gray-800 p-2 rounded-lg shadow-lg">
                        <div className="flex flex-col item-center justify-around p-1">
                            <h2 className="text-sm font-semibold text-white p-1">{item.title}</h2>
                            <p className={`text-3xl font-bold p-1 ${item.color}`}>{item.value}</p>
                            <p className="text-xs p-1">{item.description}</p>
                        </div>
                    </div>
                ))}

                {/* Bottom panels */}
                <div className="col-span-6 bg-gray-800 p-4 rounded-lg shadow-lg">
                    <h2>System Alerts</h2>
                    <AlertTable/>
                </div>
                <div className="col-span-3 bg-gray-800 p-4 rounded-lg shadow-lg">
                    <h2>Heat Reuse Utilization</h2>
                    <PieChart data={piedata}/>
                </div>
                <div className="col-span-3 bg-gray-800 p-4 rounded-lg shadow-lg">
                    <h2>Waste Heat Generated (by the hour)</h2>
                    <SimpleLineChart data={sampleData}/>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;
