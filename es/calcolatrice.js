let operazione="";
let n1=0;
let n2=0;
let risultato=0;

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

function getNumVal(){
    let n = document.getElementById("numero").value;
    document.getElementById("numero").value = "";
    if(n==null || n==""){}
    return n;
}

function scrittura() {
    let ris=document.getElementById("ris");
    ris.innerHTML=n1+' '+operazione+' '+n2+' = '+risultato;
}

function lettura() {
    n2=getNumVal();
    

    console.log(n1);
    console.log(n2);
    console.log(operazione);

    if(n1==""){
        ris.innerHTML="SELEZIONA UN VALORE PER N1";
        return ;
    }
    if(n2==""){
        ris.innerHTML="SELEZIONA UN VALORE N2";
        return ;
    }
    
    risultato=0;

    switch (operazione){
      case '+':
          risultato=somma(n1,n2);
          break;
      case '-':
          risultato=sottrazione(n1,n2);
          break;
      case '*':
          risultato=moltiplicazione(n1,n2);
          break;
      case '/':
          risultato=divisione(n1,n2);
          break;
      }
      scrittura();
}

function setOperazione(op, id){
    n1=getNumVal();
    let container = document.getElementById(id);
    document.getElementById('somma').classList.remove('scelta');
    document.getElementById('sottrazione').classList.remove('scelta');
    document.getElementById('moltiplicazione').classList.remove('scelta');
    document.getElementById('divisione').classList.remove('scelta');
    container.classList.add('scelta');
    operazione=op;
    scrittura();
}