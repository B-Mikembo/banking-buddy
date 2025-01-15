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
console.log(Object.keys(seriesData.value));
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
        labels: {
          show: true,
          total: {
            show: true,
            color: "#ffffff",
          },
        },
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
    formatter: (val: string, opts: any) =>
      `${val} - ${opts.w.globals.series[opts.seriesIndex]}`,
    labels: {
      useSeriesColors: true,
    },
    markers: {
      size: 5,
      shape: "diamond",
      strokeWidth: 2,
      offsetX: -8,
    },
    itemMargin: {
      horizontal: 2,
      vertical: 5,
    },
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
