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
        borderRadius: 5,
        barThickness: 10,
    },{
        label: 'Android',
        backgroundColor: 'rgba(54, 162, 235, 1)',
        borderColor: 'rgba(54, 162, 235, 1)',
        data: [10, 20, 2, 4, 9, 40, 15],
        borderRadius: 5,
        barThickness: 10,
    }]
};

const options = {
    maintainAspectRatio: false,
    plugins : {
        legend : {
            position: 'bottom',
            align: 'start',
            display: true,
            labels: {
                usePointStyle: true,
            }
        }
    },
    scales: {
        y: {
            ticks: {
                borderColor: '#fff',
                stepSize: 20,
            },
            grid: {
                borderColor: 'transparent',
                borderDash: [3]
            }
        },
        x: {
            grid: {
                display: false
            }
        }
    },

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


//////////////////////// User Chart

const userLabels = [
    '01',
    '02',
    '03',
    '04',
    '05',
    '06',
    '07',
    '08',
    '09',
    '10',
    '11',
    '12',
    '13',
    '14',
    '15',
    '16',
    '17',
    '18',
    '19',
    '20',
    '21',
];

const userData = {
    labels: userLabels,
    datasets: [{
        label: 'My First dataset',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: [0, 10, 5, 2, 20, 30, 45, 22, 32, 3, 5, 7, 10, 30, 0, 10, 5, 2, 20, 30, 45, 22, 32, 3, 5, 7, 10, 30, 12],
        borderRadius: 5,
    },
    {
        label: 'My First dataset',
        backgroundColor: 'rgb(255, 99, 132, 0.2)',
        borderColor: 'rgb(255, 99, 132, 0.2)',
        data: [0, 10, 5, 2, 20, 30, 45, 22, 32, 3, 5, 7, 10, 30, 0, 10, 5, 2, 20, 30, 45, 22, 32, 3, 5, 7, 10, 30, 12],
        borderRadius: 5,
    }]
};

const userConfig = {
    type: 'bar',
    data: userData,
    options: {
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'bottom',
                align: 'start',
                labels: {
                    usePointStyle: true,
                }
            }
        },
        scales: {
            y: {
                grid: {
                    borderColor: 'transparent',
                    borderDash: [3]
                },
                ticks: {
                    // forces step size to be 50 units
                    stepSize: 20
                }
            },
            x: {
                grid: {
                    borderColor: 'transparent',
                    display: false,
                },

            }
        }
    }
};

const userChart = new Chart(
    document.getElementById('userChart'),
    userConfig
);