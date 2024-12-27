import { ref } from "vue";

const seriesData = ref({
    'Banque Postale': 24,
    'Credit Agricole': 67,
    'Societe Generale': 61,
    'BNP Paribas': 90,
  });
  
export const series = ref(Object.values(seriesData.value));
export const labels = ref(Object.keys(seriesData.value));
export const chartOptions = ref({
chart: {
        width: 400,
        type: 'donut',
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
            },
            },
        },
        },
    },
    dataLabels: {
        enabled: false,
    },
    fill: {
        type: 'gradient',
    },
    labels: labels.value,
    legend: {
        formatter: (val:any, opts:any) => `${val} - ${opts.w.globals.series[opts.seriesIndex]}`,
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
