const labels = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
];

const data = {
    labels: labels,
    datasets: [{
        label: 'iPone',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: [2, 10, 5, 2, 20, 30, 45],
        barThickness: 6,
        borderRadius: 3,
    },{
        label: 'Android',
        backgroundColor: 'rgba(54, 162, 235, 1)',
        borderColor: 'rgba(54, 162, 235, 1)',
        data: [10, 20, 2, 4, 9, 40, 15],
        borderRadius: 3,
        barThickness: 6,
    }]
};

const options = {
    maintainAspectRatio: false,
    plugins : {
        legend : {
            pointStyle: 'circle',
            labels: {
            }
        }
    },
    scales: {
        y: {
            grid: {
                borderDash: [3]
            }
        },
        x: {
            grid: {
                display: false
            }
        }
    }
}

const config = {
    type: 'bar',
    data,
    options
};

const myChart = new Chart(
    document.getElementById('myChart'),
    config
);