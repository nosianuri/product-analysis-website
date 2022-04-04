import React from 'react';
import MyBarChart from '../MyBarChart/MyBarChart';
import MyLineChart from '../MyLineChart/MyLineChart';

import './Dashboard.css';


const Dashboard = () => {
    return (
        <div className='dashboard-container'>
            <MyLineChart></MyLineChart>
            <MyBarChart></MyBarChart>
            
        </div>
    );
};

export default Dashboard;