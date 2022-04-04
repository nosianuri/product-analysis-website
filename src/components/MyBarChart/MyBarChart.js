import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Bar, BarChart } from 'recharts';

const MyBarChart = () => {
    const [props, setProps] =useState([]);
    useEffect( () =>{
      axios.get('data.json') 
      .then(data=> {
          const loadedData = data.data;
          const propsData = loadedData.map(data => {
            const parts = data.revenue;
            
            return parts;
          });
          setProps(propsData);
          console.log(propsData);
      })
 }, []);
    return (
        <BarChart width={800} height={400} data={props}>
          <Bar dataKey="revenue" fill="#8884d8" />
        </BarChart>
    );
};

export default MyBarChart;