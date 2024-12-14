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

    let s = nome + "#" + cognome + "#" + email + "#" + codiceFiscale + "#" + citta + "#" + indirizzo;
    let anagrafiche = localStorage.getItem('anagrafica');
    
    if (anagrafiche == null)
        anagrafiche = "";
    else 
        anagrafiche += "_" ;

    anagrafiche += s;
    localStorage.setItem('anagrafica', anagrafiche);

    location.href = "anagrafica2_1.html";
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
    let anagrafiche = localStorage.getItem('anagrafica');
    let righe = anagrafiche.split("_");

    //inserisco le righe nella tabella partendo da quelle nuove
    for (let i = 0; i < righe.length; i++) {
        // creo l'oggetto html riga
        let riga = tabella.insertRow();

        // creo le colonne html
        let c_nome = riga.insertCell(0);
        let c_cognome = riga.insertCell(1);
        let c_email = riga.insertCell(2);
        let c_codiceFiscale = riga.insertCell(3);
        let c_citta = riga.insertCell(4);
        let c_indirizzo = riga.insertCell(5);

        let colonne = righe[i].split("#");

        // scrivo i valori delle colonne
        c_nome.textContent = colonne[0];
        c_cognome.textContent = colonne[1];
        c_email.textContent = colonne[2];
        c_codiceFiscale.textContent = colonne[3];
        c_citta.textContent = colonne[4];
        c_indirizzo.textContent = colonne[5];
    }
}

// ritorno alla pagina iniziale
function indietro() {
    location.href = "anagrafica2.html";
}

function vaiTabella() {
    location.href = "anagrafica2_1.html";
}