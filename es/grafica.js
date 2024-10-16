let operazione="";

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

function lettura() {
    let n1=document.getElementById("numero1");
    let n2=document.getElementById("numero2");
    let ris=document.getElementById("ris");

    console.log(n1.value);
    console.log(n2.value);
    console.log(operazione);

    if(n1.value==""){
        ris.innerHTML="SELEZIONA UN VALORE PER N1";
        return ;
    }
    if(n2.value==""){
        ris.innerHTML="SELEZIONA UN VALORE N2";
        return ;
    }
    if(operazione==""){
        ris.innerHTML="SELEZIONA UN'OPERAZIONE";
        return ;
    }
    if(operazione=="/" && n2.value==0){
        ris.innerHTML="LA DIVISIONE E' IMPOSSIBILE"
    }

    let risultato=0;
    switch (operazione){
      case '+':
          risultato=somma(n1.value,n2.value);
          break;
      case '-':
          risultato=sottrazione(n1.value,n2.value);
          break;
      case '*':
          risultato=moltiplicazione(n1.value,n2.value);
          break;
      case '/':
          risultato=divisione(n1.value,n2.value);
          break;
      }
      ris.innerHTML=n1.value+' '+operazione+' '+n2.value+' = '+risultato;

}

function setOperazione(op, id){
    let container = document.getElementById(id);
    document.getElementById('somma').classList.remove('scelta');
    document.getElementById('sottrazione').classList.remove('scelta');
    document.getElementById('moltiplicazione').classList.remove('scelta');
    document.getElementById('divisione').classList.remove('scelta');
    container.classList.add('scelta');
    operazione=op;
}