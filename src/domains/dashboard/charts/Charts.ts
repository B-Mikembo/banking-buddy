import { ref } from "vue";
import { user } from "../../mxlcwm-user/Users";

const seriesData = ref<Record<string, number>>({}); 
const updateSeriesData = () => {
  const banks = user.banks();
  for (const bank of banks) {
    seriesData.value[bank.name()] = bank.getBalance();
  }
};

updateSeriesData();
export const series = ref(Object.values(seriesData.value));
export const labels = ref(Object.keys(seriesData.value));

export const chartOptions = ref({
  chart: {
    width: 400,
    type: "donut",
  },
  plotOptions: {
    pie: {
      startAngle: -90,
      endAngle: 270,
      donut: {
      },
    },
  },
  dataLabels: {
    enabled: false,
  },
  fill: {
    type: "gradient",
  },
  labels: labels.value,
  legend: {
    show: false
  },
  responsive: [
    {
      breakpoint: 480,
      options: {
        chart: {
          width: 200,
        },
      },
    },
  ],
});
