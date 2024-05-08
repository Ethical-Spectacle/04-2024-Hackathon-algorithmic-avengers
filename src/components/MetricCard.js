
import React from 'react';

const DashboardPanel = ({ data, rightPanelData }) => {
    return (
        <div className="bg-gray-800 text-white w-full p-4 grid grid-cols-4 gap-4">
            {/* Top row panels */}
            {data.map((item, index) => (
                <div key={index} className="bg-gray-900 p-5 rounded-lg shadow-lg">
                    <h2 className="text-sm font-semibold p-1">{item.title}</h2>
                    <p className={`text-3xl font-bold p-1 ${item.color}`}>{item.value}</p>
                    <p className="text-xs p-1">{item.description}</p>
                </div>
            ))}

            {/* Adjusting grid column start based on the number of top row boxes */}
            <div className="col-start-4 col-end-5 row-start-2 md:col-span-1 md:row-span-1 flex flex-col gap-4 p-4">
                {rightPanelData.map((item, index) => (
                    <div key={index} className="bg-gray-900 p-3 rounded-lg shadow-md">
                        <h2 className="text-sm font-semibold text-white">{item.title}</h2>
                        <p className={`text-3xl font-bold ${item.color}`}>{item.value}</p>
                        <div className="w-full bg-gray-700 h-2 rounded-full overflow-hidden">
                            <div className="bg-green-500 h-full" style={{ width: item.percentage }}></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DashboardPanel;
