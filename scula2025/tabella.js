document.getElementById('csvFileInput').addEventListener('change', handleFileSelect, false);

function handleFileSelect(event) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = function(e) {
        const text = e.target.result;
        const data = parseCSV(text);
        drawChart(data);
    };

    reader.readAsText(file);
}

function parseCSV(text) {
    const lines = text.split('\n');
    const headers = lines[0].split(',');
    const rows = lines.slice(1).map(line => line.split(','));

    return { headers, rows };
}

function drawChart(data) {
    const ctx = document.getElementById('myChart').getContext('2d');
    const labels = data.rows.map(row => row[0]);
    const values = data.rows.map(row => parseFloat(row[1]));

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: data.headers[1],
                data: values,
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }]
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