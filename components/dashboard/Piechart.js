// components/AgeDistributionChart.js

import React, { useEffect, useState } from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

const AgeDistributionChart = () => {
  const [ageDistribution, setAgeDistribution] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/dashboard"); // استبدل '/api/your-endpoint' بنقطة النهاية الخاصة بك
        const data = await response.json();

        if (data.age_distribution) {
          setAgeDistribution(data.age_distribution);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const COLORS = ["#FF6384", "#2297e6ff", "#9966FF", "#9966FF", "#FF9F40"];

  return (
    <div>
      <h5 style={{ marginBottom: "20px" }}>توزيع الكفالات حسب الأعمار</h5>
      <PieChart width={250} height={250}>
        <Pie
          data={ageDistribution}
          dataKey="count"
          nameKey="label"
          cx="50%"
          cy="50%"
          outerRadius={80}
          fill="#8884d8"
          label
        >
          {ageDistribution.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </div>
  );
};

export default AgeDistributionChart;
