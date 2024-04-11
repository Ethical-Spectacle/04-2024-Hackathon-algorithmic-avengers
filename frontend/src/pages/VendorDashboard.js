import React, { useState, useEffect, useRef } from 'react';
import Table from './Table';
import Chart from 'chart.js/auto';
import './VendorDashboard.css'; // Assuming you have custom CSS for styling

const MainComponent = () => {
  const [tableData, setTableData] = useState([]);
  const heatCapacityChartRef = useRef(null);
  const carbonFootprintChartRef = useRef(null);

  useEffect(() => {
    // Mocking sample data as if fetched from MongoDB
    const sampleData = [
      {
        name: 'Sample Name 1',
        distance: '10 mile',
        matchingScore: '90%',
        temperature: '25°C',
        heatNeeded: '5000 BTU'
      },
      {
        name: 'Sample Name 2',
        distance: '20 mile',
        matchingScore: '80%',
        temperature: '20°C',
        heatNeeded: '6000 BTU'
      },
      {
        name: 'Sample Name 3',
        distance: '37 mile',
        matchingScore: '70%',
        temperature: '30°C',
        heatNeeded: '7000 BTU'
      }
    ];

    setTableData(sampleData);

    // Chart setup for heat capacity
    if (heatCapacityChartRef.current !== null) {
      heatCapacityChartRef.current.destroy();
    }
    const heatCapacityCtx = document.getElementById('heatCapacityChart');
    const heatCapacityChart = new Chart(heatCapacityCtx, {
      type: 'bar',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
          label: 'Heat Capacity',
          data: [65, 59, 80, 81, 56, 55, 40],
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgba(255, 99, 132, 1)',
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
    heatCapacityChartRef.current = heatCapacityChart;

    // Chart setup for carbon footprint
    if (carbonFootprintChartRef.current !== null) {
      carbonFootprintChartRef.current.destroy();
    }
    const carbonFootprintCtx = document.getElementById('carbonFootprintChart');
    const carbonFootprintChart = new Chart(carbonFootprintCtx, {
      type: 'line',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
          label: 'Carbon Footprint',
          data: [12, 19, 3, 5, 2, 3, 8],
          fill: false,
          borderColor: 'rgb(75, 192, 192)',
          tension: 0.1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
    carbonFootprintChartRef.current = carbonFootprintChart;
  }, []);

  return (
    <div className="container">
      <div className="sidebar">
        <ul>
          <li><a href="#dashboard">Dashboard</a></li>
          <li><a href="#settings">Settings</a></li>
          <li><a href="#profile">Profile</a></li>
          <li><a href="#payments">Payments</a></li>
        </ul>
        <div>
          <button className="logout-btn">Logout</button>
        </div>
      </div>
      <div className="content">
        <h2>Metrics</h2>
        <div className="metrics-container">
        <div className="metric-card">
            <h3>Heat Capacity</h3>
            <canvas id="heatCapacityChart" width="400" height="300"></canvas>
        </div>
        <div className="metric-card">
            <h3>Carbon Footprint</h3>
            <canvas id="carbonFootprintChart" width="400" height="300"></canvas>
        </div>
        <div className="current-heat-card">
            <h3>Current Heat Capacity</h3>
            <p>Placeholder value: 5000 BTU</p>
        </div>
        </div>
        <h2>Table</h2>
        <Table data={tableData} />
      </div>
    </div>
  );
};

export default MainComponent;
