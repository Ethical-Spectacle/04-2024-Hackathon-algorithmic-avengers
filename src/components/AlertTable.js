import React from 'react';


const IndustryTable = () => {
    // Expanded sample data array including temperature requirements and revenue
    const industries = [
      { id: 1, name: "Chicago Urban Greens", proximity: "0.5 miles", score: 92, heatTemp: "28°C", revenue: "$1M" },
      { id: 2, name: "Lake Michigan Fishery", proximity: "2 miles", score: 87, heatTemp: "24°C", revenue: "$2.5M" },
      { id: 3, name: "Relax and Rejuvenate Spa", proximity: "0.8 miles", score: 90, heatTemp: "35°C", revenue: "$3M" },
      { id: 4, name: "The Metropolitan Tower Heating", proximity: "1 mile", score: 85, heatTemp: "21°C", revenue: "$1.2M" },
      { id: 5, name: "Windy City Brews", proximity: "1.2 miles", score: 88, heatTemp: "27°C", revenue: "$2M" },
    ];
  
    return (
      <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
        <div className="max-h-[15.5rem] overflow-y-auto">
          <table className="w-full text-sm text-left text-gray-200">
            <thead className="text-xs uppercase bg-gray-800">
              <tr>
                <th scope="col" className="py-3 px-6">Industry Name</th>
                <th scope="col" className="py-3 px-6">Proximity</th>
                <th scope="col" className="py-3 px-6">Matching Score</th>
                <th scope="col" className="py-3 px-6">Heat Temp</th>
                <th scope="col" className="py-3 px-6">Revenue</th>
              </tr>
            </thead>
            <tbody className="bg-gray-900">
              {industries.map((industry) => (
                <tr key={industry.id} className="border-b border-gray-700">
                  <td className="py-4 px-6">{industry.name}</td>
                  <td className="py-4 px-6">{industry.proximity}</td>
                  <td className="py-4 px-6">{industry.score}%</td>
                  <td className="py-4 px-6">{industry.heatTemp}</td>
                  <td className="py-4 px-6">{industry.revenue}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  };
  

export default IndustryTable;
