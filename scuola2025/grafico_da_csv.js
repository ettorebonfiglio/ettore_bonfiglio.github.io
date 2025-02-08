document.getElementById('file').addEventListener('change', gestisciFile);

function gestisciFile(files) {
    if (files.length === 0) return;
    const file = files[0];
    const reader = new FileReader();
    reader.onload = function(event) {
        const datiCSV = event.target.result;
        const dati = parseCSV(datiCSV);
        disegnaGrafico(dati);
    };
    reader.readAsText(file);
}

function parseCSV(csv) {
    const righe = csv.split('\n');
    const risultato = [];
    for (let i = 1; i < righe.length; i++) {
        const colonna = righe[i].split(',');
        if (colonna.length > 1) {
            risultato.push({
                etichetta: colonna[0],
                valore: parseFloat(colonna[1])
            });
        }
    }
    return risultato;
}

function disegnaGrafico(dati) {
    const canvas = document.getElementById('grafico');
    const ctx = canvas.getContext('2d');
    const larghezza = canvas.width;
    const altezza = canvas.height;
    const margine = 50;
    const larghezzaBarra = (larghezza - margine * 2) / dati.length;

    const valoreMassimo = Math.max(...dati.map(item => item.valore));

    dati.forEach((item, indice) => {
        const x = margine + indice * larghezzaBarra;
        const altezzaBarra = (item.valore / valoreMassimo) * (altezza - margine * 2);
        const y = altezza - margine - altezzaBarra;
        ctx.fillStyle = 'red';
        ctx.fillText(item.valore, x + 13, y - 10);
        ctx.fillRect(x + 10, y, larghezzaBarra - 10, altezzaBarra);

        ctx.fillStyle = 'black';
        ctx.fillText(item.etichetta, x + 27, altezza - margine + 20);
    });

    ctx.beginPath();
    ctx.moveTo(margine, altezza - margine);
    ctx.lineTo(larghezza - margine, altezza - margine);
    ctx.moveTo(margine, altezza - margine);
    ctx.lineTo(margine, margine);
    ctx.stroke();

    ctx.fillStyle = 'black';
    ctx.textAlign = 'right';
    ctx.textBaseline = 'middle';
    const passo = valoreMassimo / 10;
    for (let i = 0; i <= 10; i++) {
        const y = altezza - margine - (i * (altezza - margine * 2) / 10);
        ctx.fillText((i * passo).toFixed(0), margine - 10, y);
    }
}