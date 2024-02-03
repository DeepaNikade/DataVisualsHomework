// const ctx = document.getElementById('myChart');
// const chart = new Chart(ctx, {
//     type: 'line',
//     data: {
//         labels: [null,2000,2005,2010,2015,2020,2025,2030],
//         datasets: [{
//             label: '# of Votes',
//             data: [null,12, 19, 3, 5, 2, 3],
//             borderWidth: 1
//         }]
//     },
//     options: {
//         scales: {
//             y: {
//                 beginAtZero: true
//             }
//         }
//     }
// });

// function addData() {
//     const newData = Math.random() * 100;
//     chart.data.labels.push(chart.data.labels.length);
//     chart.data.datasets[0].data.push(newData);
//     chart.update();
//     anime({
//         targets: '#myChart',
//         translateY: [0, -50],
//         opacity: [1, 0.5],
//         delay: anime.stagger(100, {start: 0})
//     });
// }
// setInterval(addData, 2000);

const ctx = document.getElementById("myChart").getContext("2d");
let chart;

// Initial data
const initialData = {
  labels: [],
  datasets: [
    {
        label: 'Monthly Sales',
        data: [60, 90, 80, 55, 82, 73],
      borderColor: "red",
      backgroundColor: "blue",
      borderWidth: 1,
    },
  ],
};

const chartConfig = {
  type: "line",
  data: initialData,
  options: {
    scales: {
      x: {
        type: "linear",
        position: "bottom",
        title: {
          display: true,
          text: "year",
        },
      },
      y: {
        beginAtZero: true,
        suggestedMin: 0,
        suggestedMax: 100,
        title: {
          display: true,
          text: "In units",
        },
      },
    },
  },
};

chart = new Chart(ctx, chartConfig);

function addData() {
  const newData = Math.random() * 100;
  chart.data.labels.push(chart.data.labels.length);
  chart.data.datasets[0].data.push(newData);
  chart.update();

  // Apply animation
  anime({
    targets: "#myChart",
    translateY: [0, -50],
    opacity: [1, 0.5],
    delay: anime.stagger(100, { start: 0 }),
  });
}

setInterval(addData, 2000);
