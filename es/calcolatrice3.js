let n1 = '';
let n2 = '';
let op = null;

function somma(p1, p2) {
    return Number(p1) + Number(p2);
}

function sottrazione(p1, p2) {
  return Number(p1) - Number(p2);
}

function moltiplicazione(p1, p2) {
  return Number(p1) * Number(p2);
}

function divisione(p1, p2) {
    if(p2!=0)
        return Number(p1) / Number(p2);
    else 
        return 0;
}

// memorizzo i numeri per le operazioni e stampo i valori sul display
function setNum(n) {
    if (op == null) {
        n1 = n1 + n;
    }
    else {
        n2 = n2 + n;
    }

    console.log('num1',n1);
    console.log('num2',n2);

    scrittura(null);
}

// scrivo sul display html
function setDisplay(scritta) {
    let ris = document.getElementById("display");
    ris.innerHTML = scritta;
}

// memorizzo operazione da eseguire
function setOperazione(operazione) {
    if (n1 == '') {
        setDisplay('Seleziona il primo valore');
        return;
    }
    op = operazione;
    console.log('operazione',op);
    scrittura(null);
}

// scrive l'operazione e il risultato sul display
function scrittura(risultato) {
    let scritta = "";
    if (n1 != '') {
        scritta += n1; 
    }
    if (op != null) {
        scritta += ' ' + op;
    }
    if (n2 != '') {
        scritta += ' ' + n2; 
    }
    if (risultato != null) {
        scritta += ' = ' + risultato;
    }

    setDisplay(scritta);
}

// esegue l'operazione, stampa il risulato e resetta i valori
function calcolaRisultato() {
    let risultato = 0;

    if (n1 == '' || n2 == '' || op == null) {
        setDisplay('Seleziona i valori');
        return;
    }

    switch (op) {
        case '+':
            risultato = somma(n1,n2);
            break;
        case '-':
            risultato = sottrazione(n1,n2);
            break;
        case '*':
            risultato = moltiplicazione(n1,n2);
            break;
        case '/':
            risultato = divisione(n1,n2);
            break;
    }

    console.log('risulato',risultato);
    scrittura(risultato);

    n1 = '';
    n2 = '';
    op = null;   
}