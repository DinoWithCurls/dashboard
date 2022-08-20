import React from "react";
import { PieChart, Pie, Cell } from "recharts";

const colors = ["#98D89E", "#EE8484", "#F6DC7D"];

const PieComponent = ({ data }) => {
  return (
    <PieChart width={200} height={200}>
      <Pie
        data={data}
        cx={100}
        cy={100}
        startAngle={270}
        endAngle={-270}
        outerRadius={80}
        dataKey="value"
      >
        {data.map((entry, index) => {
          return (
            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
          );
        })}
      </Pie>
    </PieChart>
  );
};

export default PieComponent;
