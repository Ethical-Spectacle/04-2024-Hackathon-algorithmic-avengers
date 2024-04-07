import React from 'react';

const Table = ({ data }) => {
  return (
    <table className="data-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Distance</th>
          <th>Matching Score</th>
          <th>Temperature</th>
          <th>Heat Needed</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.name}</td>
            <td>{item.distance}</td>
            <td>{item.matchingScore}</td>
            <td>{item.temperature}</td>
            <td>{item.heatNeeded}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
