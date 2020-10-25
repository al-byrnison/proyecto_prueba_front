    var speedCanvas = document.getElementById("speedChart");

    Chart.defaults.global.defaultFontFamily = "Lato";
    Chart.defaults.global.defaultFontSize = 18;

    var speedData = {
      labels: ["0s", "10s", "20s", "30s", "40s", "50s", "60s"],
      datasets: [{
        label: "Niveles",
        data: [0, 59, 75, 20, 20, 55, 40],
      }]
    };

    var chartOptions = {
      legend: {
        display: true,
        position: 'top',
        labels: {
          boxWidth: 80,
          fontColor: 'black'
        }
      }
    };

    var lineChart = new Chart(speedCanvas, {
      type: 'line',
      data: speedData,
      options: chartOptions
    });


    //barras
    var densityCanvas = document.getElementById("densityChart");

Chart.defaults.global.defaultFontFamily = "Lato";
Chart.defaults.global.defaultFontSize = 18;

var densityData = {
  label: 'Triglicéridos',
  data: [5427, 5243, 5514, 3933, 1326, 687, 1271, 1638]
};

var barChart = new Chart(densityCanvas, {
  type: 'bar',
  data: {
    labels: ["Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre"],
    datasets: [densityData]
  }
});

//tercero
var densityCanvas2 = document.getElementById("densityChart2");

Chart.defaults.global.defaultFontFamily = "Lato";
Chart.defaults.global.defaultFontSize = 18;

var densityData2 = {
  label: 'Hemograma',
  data: [5427, 5243, 5514, 3933, 1326, 687, 1271, 1638],
  backgroundColor: [
    'rgba(0, 99, 132, 0.6)',
    'rgba(30, 99, 132, 0.6)',
    'rgba(60, 99, 132, 0.6)',
    'rgba(90, 99, 132, 0.6)',
    'rgba(120, 99, 132, 0.6)',
    'rgba(150, 99, 132, 0.6)',
    'rgba(180, 99, 132, 0.6)',
    'rgba(210, 99, 132, 0.6)',
    'rgba(240, 99, 132, 0.6)'
  ],
  borderColor: [
    'rgba(0, 99, 132, 1)',
    'rgba(30, 99, 132, 1)',
    'rgba(60, 99, 132, 1)',
    'rgba(90, 99, 132, 1)',
    'rgba(120, 99, 132, 1)',
    'rgba(150, 99, 132, 1)',
    'rgba(180, 99, 132, 1)',
    'rgba(210, 99, 132, 1)',
    'rgba(240, 99, 132, 1)'
  ],
  borderWidth: 2,
  hoverBorderWidth: 0
};

var chartOptions2 = {
  scales: {
    yAxes: [{
      barPercentage: 0.5
    }]
  },
  elements: {
    rectangle: {
      borderSkipped: 'left',
    }
  }
};

var barChart2 = new Chart(densityCanvas2, {
  type: 'horizontalBar',
  data: {
    labels: ["Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre"],
    datasets: [densityData2],
  },
  options: chartOptions2
});

//radial
var birdsCanvas = document.getElementById("birdsChart");

Chart.defaults.global.defaultFontFamily = "Lato";
Chart.defaults.global.defaultFontSize = 18;

var birdsData = {
  labels: ["07:00", "12:00", "16:00", "23:00"],
  datasets: [{
    data: [1200, 1700, 800, 200],
    backgroundColor: [
      "rgba(255, 0, 0, 0.6)",
      "rgba(0, 255,200, 0.6)",
      "rgba(200, 0, 200, 0.6)",
      "rgba(0, 255, 0, 0.6)"
    ],
    borderColor: "rgba(0, 0, 0, 0.8)"
  }]
};

var chartOptions3 = {
  startAngle: -Math.PI / 4,
  legend: {
    position: 'left'
  },
  animation: {
    animateRotate: false
  }
};

var polarAreaChart = new Chart(birdsCanvas, {
  type: 'polarArea',
  data: birdsData,
  options: chartOptions3
});