document.getElementById('csvFileInput').addEventListener('change', handleFileSelect, false);

function apri(input){
    let file = input.files[0];
  
    let reader = new FileReader();
  
    reader.readAsText(file);
  
    reader.onload = function() {
        document.getElementById("contenuto").innerHTML = costruisciTabella(reader.result);
    }
  }
  
  function costruisciTabella(csv) {
    console.log(csv);
    
    let righe = csv.split("\n");
  
    let html = '<table class="table table-bordered table-striped mt-3">';
    html += "<thead>";
    html += "<tr>";
    html += "<th> Anno </th>";
    html += "<th> Numero </th>";
    html += "</tr>";
    html += "</thead>";
    html += "<tbody>";
    for (let i = 1; i < righe.length; i++) {
        let colonne = righe[i].split(",");
  
        html += "<tr>";
        html += "<td>" + colonne[0] + "</td>";
        html += "<td>" + colonne[1] + "</td>";
        html += "</tr>";
  
    }
    html += "</tbody>";
    html += '</table>';
  
    return html;
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
                backgroundColor: 'rgba(137, 192, 75, 0.2)',
                borderColor: 'rgb(98, 192, 75)',
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