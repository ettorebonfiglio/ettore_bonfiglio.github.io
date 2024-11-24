let anagrafiche = [];
let ultimoNum = 0;

// salvo i valori in tabella
function salva() {
    let flag = valida();
    if (flag == true) {
        salvaRiga();
        pulisci();
    }
}

// inserisco i valori nella tabella
function salvaRiga() {
    let nome = document.getElementById('nome').value;
    let cognome = document.getElementById('cognome').value;
    let email = document.getElementById('email').value;
    let citta = document.getElementById('citta').value;
    let indirizzo = document.getElementById('indirizzo').value;
    let codiceFiscale = document.getElementById('codiceFiscale').value;

    let vet = [nome, cognome, email, codiceFiscale, citta, indirizzo];
    anagrafiche.push(vet);

    scriviTabella();
}

// cancella i valori nelle caselle di input
function pulisci() {
    document.getElementById('nome').value = '';
    document.getElementById('cognome').value = '';
    document.getElementById('email').value = '';
    document.getElementById('citta').value = '';
    document.getElementById('indirizzo').value = '';
    document.getElementById('codiceFiscale').value = '';
}

// se ritorna true i dati inseriti sono corretti
// deve essere richiamata dopo leggi
function valida() {
    let nome = document.getElementById('nome').value;
    let cognome = document.getElementById('cognome').value;
    let email = document.getElementById('email').value;
    let citta = document.getElementById('citta').value;
    let indirizzo = document.getElementById('indirizzo').value;
    let codiceFiscale = document.getElementById('codiceFiscale').value;
    
    //vado a validare i campi obbligatori
    if (nome == '') {
        alert('nome obbligatorio');
        return false;
    }
    if (email == '') {
        alert('email obbligatorio');
        return false;
    }
    if (codiceFiscale == '') {
        alert('codice fiscale obbligatorio');
        return false;
    }
    if (citta == '') {
        alert('città obbligatoria');
        return false;
    }


    //vado a validare i requisiti dei campi 
    let regolaNome = /^[A-Z][a-z]*$/;
    
    if (regolaNome.test(nome) == false) {
        alert('nome non valido, iniziale maiuscola e solo caratteri');
        return false;
    }
        
    if (cognome != '' && regolaNome.test(cognome) == false){
        alert('cognome non valido, iniziale maiuscola e solo caratteri');
        return false;
    }

    let regolaEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (regolaEmail.test(email) == false){
        alert('email non valida');
        return false;
    }

    return true;
}

function scriviTabella() {
    let tabella = document.getElementById('elenco').getElementsByTagName('tbody')[0];
    
    //inserisco le righe nella tabella partendo da quelle nuove
    for (let i = ultimoNum; i < anagrafiche.length; i++) {
        let riga = tabella.insertRow();

        let c_nome = riga.insertCell(0);
        let c_cognome = riga.insertCell(1);
        let c_email = riga.insertCell(2);
        let c_codiceFiscale = riga.insertCell(3);
        let c_citta = riga.insertCell(4);
        let c_indirizzo = riga.insertCell(5);

        c_nome.textContent = anagrafiche[i][0];
        c_cognome.textContent = anagrafiche[i][1];
        c_email.textContent = anagrafiche[i][2];
        c_codiceFiscale.textContent = anagrafiche[i][3];
        c_citta.textContent = anagrafiche[i][4];
        c_indirizzo.textContent = anagrafiche[i][5];
    }
    
    //salvo le righe utilizzate 
    ultimoNum = anagrafiche.length;
}