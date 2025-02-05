document.getElementById('csvFileInput').addEventListener('change', function(e) {
    const file = e.target.files[0];
    const reader = new FileReader();
    
    reader.onload = function(e) {
        const text = e.target.result;
        const data = csvToArray(text);
        createChart(data);
    };
    
    reader.readAsText(file);
});

function csvToArray(str, delimiter = ',') {
    const rows = str.split('\n');
    
    const arr = rows.map(function(row) {
        const values = row.split(delimiter);
        return {
            label: values[0],
            value1: parseFloat(values[1]),
        };
    });
    return arr;
}

function createChart(data) {
    const labels = data.map(item => item.label);
    const values1 = data.map(item => item.value1);
    
    const ctx = document.getElementById('myChart').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [
                {
                    label: 'Numero immagrati per anno',
                    data: values1,
                    backgroundColor: 'cyan',
                    borderColor: 'blue',
                    borderWidth: 2
                },
            ]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}
