import React, { useEffect, useState } from 'react'
import { Area, AreaChart, CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
import "./Dashboard.css"
const Dashboard = () => {
  const [chartdata, setChartdata] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then(res => res.json())
      .then(data => setChartdata(data))
  }, [])
  console.log(chartdata)
  return (
    <div className='dashboard-container'>
      <div className="line-chart">
      <LineChart width={600} height={300} data={chartdata}>
        <Line type="monotone" dataKey="sell" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
      </LineChart>
      </div>
      <div className="area-chart">
      <AreaChart
          width={600}
          height={300}
          data={chartdata}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="sell" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
        </div>
    </div>
  )
}

export default Dashboard