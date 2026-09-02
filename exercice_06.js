const panier = [
  { nom: "Souris", prix: 150, quantite: 2 },
  { nom: "Casque", prix: 400, quantite: 1 },
  { nom: "Tapis", prix: 60, quantite: 3 },
  { nom: "Webcam", prix: 520, quantite: 1 },
];

const names = panier.map(e => e.nom)
console.log(names);

const total = panier.map(e => e.nom + " " +  e.prix * e.quantite)
console.log(total);

const filter = panier.filter(e => e.prix > 100)
console.log(filter.map(e => e.nom));

// const price = panier.map(e => e.prix)
const totalPrice = panier.reduce((acc , val) => acc = acc + (val.prix * val.quantite ) , 0)

console.log(totalPrice);

const quantite = panier.map(e => e.quantite)
const totalArticle = quantite.reduce((acc , val) => acc + val , 0)

console.log(totalArticle);
