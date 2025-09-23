import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

import u1 from "../assets/university.PNG";
import c1 from "../assets/college.PNG";
import s1 from "../assets/school.PNG";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function Education() {
  const data = {
    labels: ["School", "College", "University"],
    datasets: [
      {
        label: "Year",
        data: [2018, 2020, 2024],
        backgroundColor: ["#422006", "#422006", "#422006"],
        borderRadius: 4,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false, // allows chart to fill container
    plugins: {
      legend: { display: false },
      title: {
        display: true,
        text: "Study of the Yearly",
        color: "#a16207",
        font: { size: 18 },
      },
    },
    scales: {
      y: {
        min: 2014,
        max: 2024,
        ticks: { stepSize: 1 },
        title: { display: true, text: "Years" },
      },
    },
  };

  return (
    <div id="education" className="bg-yellow-700 text-white py-12 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-center mb-10">Education</h2>

      <div className="flex flex-col md:flex-row gap-8 max-w-6xl mx-auto">
        {/* Chart */}
        <div className="bg-white p-4 rounded-xl  shadow-md flex-1" style={{ minHeight: "300px" }}>
          <Bar data={data} options={options} />
        </div>

        {/* Education Timeline with Images */}
        <div className="flex flex-col gap-6 justify-center flex-1">
          <div className="flex items-center gap-4">
            <img
              src={s1}
              alt="School"
              className="w-12 h-12 sm:w-14 sm:h-14 border-4 border-yellow-600 bg-white rounded-sm"
            />
            <span className="text-sm sm:text-lg font-semibold">The Smart School</span>
          </div>
          <div className="flex items-center gap-4">
            <img
              src={c1}
              alt="College"
              className="w-12 h-12 sm:w-14 sm:h-14 border-4 border-yellow-600 bg-white rounded-sm"
            />
            <span className="text-sm sm:text-lg font-semibold">Jinnah Govt College</span>
          </div>
          <div className="flex items-center gap-4">
            <img
              src={u1}
              alt="University"
              className="w-12 h-12 sm:w-14 sm:h-14 border-4 border-yellow-600 bg-white rounded-sm"
            />
            <span className="text-sm sm:text-lg font-semibold">
              Karachi Institute of Economics and Technology
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
