var options = {
  chart: {
    height: 350,
    type: "line",
    stacked: false,

    toolbar: {
      show: false,
    },
  },
  title: {
    text: "Temperature, CO2 and Humidity Trends",
    align: "left",
  },
  dataLabels: {
    enabled: false,
  },
  colors: ["#3c46cc", "#ec1d25", "#0dd042"],
  series: [
    {
      name: "Temperature",
      data: [1.4, 2, 2.5, 1.5, 2.5, 2.8, 3.8, 4.6],
    },
    {
      name: "RH%",
      data: [20, 29, 37, 36, 44, 45, 50, 58],
    },
    {
      name: "CO2 PPM",
      data: [350, 370, 440, 450, 500, 580, 650, 689],
    },
  ],
  stroke: {
    width: [4, 4],
    curve: "smooth",
  },
  plotOptions: {
    bar: {
      columnWidth: "20%",
    },
  },
  grid: {
    show: true,
    xaxis: {
      lines: {
        show: true,
      },
    },
    yaxis: {
      lines: {
        show: true,
      },
    },
  },
  xaxis: {
    categories: [2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016],
    axisBorder: {
      show: true,
      color: "#111111",
    },
    title: {
      text: "Time",
    },
  },
  yaxis: [
    {
      axisTicks: {
        show: true,
      },
      axisBorder: {
        show: true,
        color: "#3c46cc",
      },
      labels: {
        style: {
          colors: "#3c46cc",
        },
      },
      title: {
        text: "Temperature",
      },
    },
    {
      opposite: true,
      axisTicks: {
        show: true,
      },
      axisBorder: {
        show: true,
        color: "#ec1d25",
      },
      labels: {
        style: {
          colors: "#ec1d25",
        },
      },
      title: {
        text: "RH %",
      },
    },
    {
      opposite: true,
      axisTicks: {
        show: true,
      },
      axisBorder: {
        show: true,
        color: "#0dd042",
      },
      labels: {
        style: {
          colors: "#0dd042",
        },
      },
      title: {
        text: "CO2 PPM",
      },
    },
  ],
  tooltip: {
    shared: false,
    intersect: true,
    x: {
      show: false,
    },
  },
  legend: {
    show: false,
  },
};
