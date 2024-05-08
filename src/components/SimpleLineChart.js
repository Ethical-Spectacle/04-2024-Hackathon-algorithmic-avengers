import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, LabelList } from 'recharts';

const SimpleLineChart = ({ data }) => {
    return (
        <ResponsiveContainer width="100%" height="90%">
            <LineChart data={data} margin={{ top: 10, right: 20, left: 20, bottom: 10 }}>
                <XAxis dataKey="name" />
                <YAxis hide={true}/>
                <Line type="monotone" dataKey="value" stroke="#8884d8" strokeWidth={2}>
                    <LabelList dataKey="value" position="top" fill="#8884d8" />
                </Line>
            </LineChart>
        </ResponsiveContainer>
    );
};

export default SimpleLineChart;
