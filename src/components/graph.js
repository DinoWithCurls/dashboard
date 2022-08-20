
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";

const data = [
  {
    name: "",
    guest: 200,
    user: 100,
  },
  {
    name: "Week 1",
    guest: 400,
    user: 400,
  },
  {
    name: "Week 2",
    guest: 200,
    user: 150,
  },
  {
    name: "Week 3",
    guest: 300,
    user: 450,
  },
  {
    name: "Week 4",
    guest: 220,
    user: 200,
  },
  {
    name: "",
    guest: 450,
    user: 250,
  },
];

const GraphComponent = ({ height, width}) => {
  return (
    <LineChart
      width={height || 1200}
      height={width || 300}
      data={data}
    >
      <CartesianGrid vertical={false} />
      <XAxis dataKey="name" axisLine={false} />
      <YAxis axisLine={false} ticks={[100, 200, 300, 400, 500]}  
    domain={[0, 100]}  
    type="number"   />
      <Line
        dot={false}
        type="monotone"
        dataKey="user"
        stroke="#9BDD7C"
      />
      <Line type="monotone" dot={false} dataKey="guest" stroke="#E9A0A0" />
    </LineChart>
  );
}

export default GraphComponent;