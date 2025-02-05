document.getElementById('csvFileInput').addEventListener('change', handleFileSelect, false);

function apri(input){
    let file = input.files[0];
  
    let reader = new FileReader();
  
    reader.readAsText(file);
  
    reader.onload = function() {
        document.getElementById("contenuto").innerHTML = costruisciTabella(reader.result);
    }
  }
  

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
    return lines.map(line => {
        const [x, y] = line.split(',').map(Number);
        return { x, y };
    });
}

function drawChart(data) {
    const ctx = document.getElementById('myChart').getContext('2d');

    new Chart(ctx, {
        type: 'scatter',
        data: {
            datasets: [{
                label: 'Dati',
                data: data,
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                x: {
                    type: 'linear',
                    position: 'bottom'
                },
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}