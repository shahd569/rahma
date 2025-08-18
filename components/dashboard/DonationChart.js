"use client";

import { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export default function MyBarChart() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchChartData() {
      try {
        const res = await fetch("/api/dashboard"); // غيّر هذا المسار حسب موقع API الفعلي
        const json = await res.json();

        // نأخذ فقط البيانات الشهرية
        const chartData = json.charData.map((item) => ({
          name: item.month,
          مكفولين: item.guaranteed,
          "غير مكفولين": item.un_guaranteed,
        }));

        setData(chartData);
      } catch (err) {
        console.error("فشل جلب البيانات:", err);
      }
    }

    fetchChartData();
  }, []);

  return (
    <div className="w-full h-[400px]">
      <ResponsiveContainer width={250} height={250}>
        <BarChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="مكفولين" fill="#8884d8" />
          <Bar dataKey="غير مكفولين" fill="#00c49f" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
