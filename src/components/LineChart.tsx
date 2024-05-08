// src/components/LineChart.tsx
import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";

interface ChartData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    borderColor: string;
    tension: number;
    fill: boolean;
  }[];
}

const LineChart = () => {
  const [chartData, setChartData] = useState<ChartData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://disease.sh/v3/covid-19/historical/all?lastdays=all");
      const data = await response.json();

      if (response.ok) {
        const newChartData: ChartData = {
          labels: Object.keys(data.cases),
          datasets: [
            {
              label: "Cases",
              data: Object.values(data.cases),
              borderColor: "#143d59",
              tension: 0.2,
              fill: false,
            },
          ],
        };
        setChartData(newChartData);
      }
    };

    fetchData();

    ChartJS.register(
      CategoryScale,
      LinearScale,
      PointElement,
      LineElement,
      Title,
      Tooltip,
      Legend
    );
  }, []);

  return (
    <div className="w-full p-10">
      <h1 className="text-2xl font-bold mb-5 text-gray-800 underline">Fluctuations in cases over time</h1>
      <div className="border w-full m-auto md:h-[450px] md:flex md:justify-center">
        {chartData ? (
          <Line data={chartData} />
        ) : (
          <h1 className="text-gray-500 m-5">Loading...</h1>
        )}
      </div>
    </div>
  );
};

export default LineChart;
