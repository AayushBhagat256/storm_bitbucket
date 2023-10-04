import React from 'react';
import { Box, Flex, Heading, ChakraProvider, SimpleGrid } from '@chakra-ui/react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import PieChartComponent from './PieChart';
// import { mockBarData as data } from "../../../data/data";
const data = [
    { name: 'Mon', hoursWorked: 6 },
    { name: 'Tues', hoursWorked: 7 },
    { name: 'Wed ', hoursWorked: 7 },
    { name: 'Thrus ', hoursWorked: 8 },
    { name: 'Fri ', hoursWorked: 5 },
  ];

const BarChartComponent = () => {
    return (
      <Flex direction="column" alignItems="center">
        <Heading as="h2" size="lg" mb={4}>
          Employee's Engagment
        </Heading>
        <br />
        <SimpleGrid gap={6} columns={{md:2,base:1}}>
        <Box width="80%">
          <BarChart width={500} height={300} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="hoursWorked" fill="#8884d8" />
          </BarChart>
        </Box>
        <PieChartComponent/>
        </SimpleGrid>
      </Flex>
    );
  };

export default BarChartComponent