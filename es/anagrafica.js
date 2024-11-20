let nome = '';
let cognome = '';
let email = '';
let citta = '';
let indirizzo = '';
let codiceFiscale = '';

// salvo i valori in tabella
function salva() {
    leggi();
    let flag = valida();
    if (flag == true) {
        scrivi();
        pulisci();
    }
}
 
// recupero i valori inseriti
function leggi() {
    nome = document.getElementById('nome').value;
    cognome = document.getElementById('cognome').value;
    email = document.getElementById('email').value;
    citta = document.getElementById('citta').value;
    indirizzo = document.getElementById('indirizzo').value;
    codiceFiscale = document.getElementById('codiceFiscale').value;
}

// inserisco i valori nella tabella
function scrivi() {
    let tabella = document.getElementById('elenco').getElementsByTagName('tbody')[0];
    let riga = tabella.insertRow();

    let c_nome = riga.insertCell(0);
    let c_cognome = riga.insertCell(1);
    let c_email = riga.insertCell(2);
    let c_codiceFiscale = riga.insertCell(3);
    let c_citta = riga.insertCell(4);
    let c_indirizzo = riga.insertCell(5);

    c_nome.textContent = nome;
    c_cognome.textContent = cognome;
    c_email.textContent = email;
    c_codiceFiscale.textContent = codiceFiscale;
    c_citta.textContent = citta;
    c_indirizzo.textContent = indirizzo;
}

// cancella i valori nelle caselle di input
function pulisci() {
    document.getElementById('nome').value = '';
    document.getElementById('cognome').value = '';
    document.getElementById('email').value = '';
    document.getElementById('citta').value = '';
    document.getElementById('indirizzo').value = '';
    document.getElementById('codiceFiscale').value = '';

    // nascondo le validazioni automatiche
    document.forms.formAnagrafica.classList.remove('was-validated');

    // vado a pulire le variabili 
    leggi();
}

// se ritorna true i dati inseriti sono corretti
// deve essere richiamata dopo leggi
function valida() {
    // Mostro le validazioni automatiche
    document.forms.formAnagrafica.classList.add('was-validated');

    if (nome == '') 
        return false;
    if (email == '')
        return false;
    if (codiceFiscale == '')
        return false;
    if (citta == '')
        return false;

    return true;
}