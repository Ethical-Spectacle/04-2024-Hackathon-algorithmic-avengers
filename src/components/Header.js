import React, { useState, useEffect } from 'react';

const Header = () => {
    const [currentTime, setCurrentTime] = useState(new Date().toLocaleString());
    useEffect(() => {
        const timerId = setInterval(() => {
            setCurrentTime(new Date().toLocaleString());
        }, 60000); // Update the time every 60,000 milliseconds (i.e., every minute)

        return () => {
            clearInterval(timerId); // Clear interval on component unmount
        };
    }, []);

    return (
        <div className="bg-custom-blue text-white font-sans p-3 flex flex-col items-start">
            <div className="w-full flex flex-col">
                <div className="flex justify-between items-center">
                    <h2 className="text-xl font-normal m-2">Data Center Heat Recovery Utilization Dashboard</h2>
                    <p className="text-blue-200 text-sm m-1">Last updated: {currentTime}</p>
                </div>
                <hr className="border-gray-400 h-1 bg-gray-400 w-full my-1" />
            </div>
            <nav className="w-full">
                <ul className="flex items-center p-0 m-0">
                    <li className="mr-5">
                        <button className="bg-transparent border-none text-blue-200 text-l cursor-pointer p-2 border-b-4 border-transparent hover:border-gray-400 focus:border-gray-400">
                            Real-Time Monitoring
                        </button>
                    </li>
                    <li className="mr-5">
                        <button className="bg-transparent border-none text-blue-200 text-l cursor-pointer p-2 border-b-4 border-transparent hover:border-gray-400 focus:border-gray-400">
                            Historical Data
                        </button>
                    </li>
                    <li className="mr-5">
                        <button className="bg-transparent border-none text-blue-200 text-l cursor-pointer p-2 border-b-4 border-transparent hover:border-gray-400 focus:border-gray-400">
                            Predictive Insights
                        </button>
                    </li>
                    <li className="mr-5">
                        <button className="bg-transparent border-none text-blue-200 text-l cursor-pointer p-2 border-b-4 border-transparent hover:border-gray-400 focus:border-gray-400">
                            Settings
                        </button>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;
