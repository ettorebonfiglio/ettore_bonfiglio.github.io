document.getElementById('fileInput').addEventListener('change', function(e) {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = function(event) {
        const csvData = event.target.result;
        const numbers = csvData.split(',').map(Number);
        drawChart(numbers);
    };
    reader.readAsText(file);
});

function drawChart(data) {
    const canvas = document.getElementById('myCanvas');
    const ctx = canvas.getContext('2d');
    const maxVal = Math.max(...data);
    const canvasHeight = canvas.height;
    const canvasWidth = canvas.width;
    const barWidth = canvasWidth / data.length;

    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    
    data.forEach((value, index) => {
        const barHeight = (value / maxVal) * canvasHeight;
        ctx.fillStyle = 'blue';
        ctx.fillRect(index * barWidth, canvasHeight - barHeight, barWidth, barHeight);
    });
}