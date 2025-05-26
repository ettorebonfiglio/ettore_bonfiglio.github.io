localStorage.setItem("prodotti", JSON.stringify(datiJSON.prodotti));
localStorage.setItem("user", JSON.stringify(datiJSON.user));

if (!datiJSON.prodotti || datiJSON.prodotti.length === 0) {
  const prodottiSalvati = localStorage.getItem("prodotti");
  if (prodottiSalvati) {
    datiJSON.prodotti = JSON.parse(prodottiSalvati);
  }
}
