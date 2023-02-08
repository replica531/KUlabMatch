import { useApiAgent } from "@/utils/api_agent";
import Button from "@mui/material/Button";
import { Laboratory } from "@/resources/types";
import { User } from "@/resources/types";
import { groupBy } from "@/utils/functions";
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

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
export const options = {
  responsive: true,
  scales: {
    x: {
      stacked: true,
    },
    y: {
      stacked: true,
    },
  },
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "GPA分布",
    },
  },
};

export type GpaGraphProps = {
  gpas: { rank: number; gpa: number }[];
  max_request: number;
};

export const GpaGraph = ({ gpas, max_request }: GpaGraphProps) => {
  const gpas_by_rank = groupBy(gpas, (gpa) => gpa.rank);
  const ranks = Array.from(new Array(max_request)).map((v, i) => i + 1);
  console.log(gpas_by_rank);

  const data = {
    // x 軸のラベル
    labels: [
      "未登録",
      "〜1.0",
      "1.0〜2.0",
      "2.0〜2.5",
      "2.5〜3.0",
      "3.0〜3.25",
      "3.25〜3.5",
      "3.5〜3.75",
      "3.75〜4.0",
      "4.0〜4.3",
    ],
    datasets: ranks.map((rank) => {
      const gpas = gpas_by_rank[rank] ? gpas_by_rank[rank].map((gpa_by_rank) => gpa_by_rank.gpa) : [];
      return {
        label: `${rank}希望`,
        data: [
          gpas.filter((e) => e == null).length,
          gpas.filter((e) => e < 1.0).length,
          gpas.filter((e) => 1.0 <= e && e < 2.0).length,
          gpas.filter((e) => 2.0 <= e && e < 2.5).length,
          gpas.filter((e) => 2.5 <= e && e < 3.0).length,
          gpas.filter((e) => 3.0 <= e && e < 3.25).length,
          gpas.filter((e) => 3.25 <= e && e < 3.5).length,
          gpas.filter((e) => 3.5 <= e && e < 3.75).length,
          gpas.filter((e) => 3.75 <= e && e < 4.0).length,
          gpas.filter((e) => 4.0 <= e && e < 4.3).length,
        ],
        backgroundColor: [
          `rgba(${-25 + 25 * rank}, ${115 + 13 * rank}, 255, 0.5)`,
        ],
        borderColor: [`rgb(${-25 + 25 * rank}, ${115 + 13 * rank}, 255)`],
        borderWidth: 1,
      };
    }),
  };

  return (
    <>
      <Bar options={options} data={data} />
    </>
  );
};
