// export default PieChartComponent;
import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
import { Box } from '@chakra-ui/react';

const pieChartData = [
    { name: 'Category 1', value: 15 },
    { name: 'Category 2', value: 20 },
    { name: 'Category 3', value: 30 },
    { name: 'Category 4', value: 10 },
    { name: 'Category 5', value: 20 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FFBB68', '#ca65ca']; // Define colors for the pie slices

const PieChartComponent = () => {
    return (
        <Box width="80%" mt={8}>
            <PieChart width={400} height={300}>
                <Pie
                    dataKey="value"
                    isAnimationActive={true}
                    data={pieChartData}
                    cx={200}
                    cy={150}
                    outerRadius={80}
                    innerRadius={60} // Add an inner radius to create a donut chart
                    fill="#8884d8"
                    label
                >
                    {pieChartData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
                <Tooltip formatter={(value) => `${value}%`} />
                {/* <Legend layout="vertical" align="right" verticalAlign="middle" margin={{ left: 20, top: 10, bottom: 10, right: 0 }} /> */}
            </PieChart>
        </Box>
    );
};

export default PieChartComponent;
