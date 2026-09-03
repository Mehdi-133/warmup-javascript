const ventes = [
  {
    vendeur: "Amina",
    produit: "Ordinateur portable",
    montant: 8500,
    mois: "janvier",
  },
  { vendeur: "Youssef", produit: "Smartphone", montant: 4200, mois: "janvier" },
  { vendeur: "Amina", produit: "Casque audio", montant: 900, mois: "fevrier" },
  { vendeur: "Sara", produit: "Tablette", montant: 3100, mois: "fevrier" },
  { vendeur: "Youssef", produit: "Clavier", montant: 450, mois: "mars" },
  { vendeur: "Sara", produit: "Ecran 27 pouces", montant: 2600, mois: "mars" },
];

const revenu = ventes
  .map((total) => total.montant)
  .reduce((rev, cur) => rev + cur, 0);

const bigger = ventes.reduce((big, montant) =>
  montant.montant > big.montant ? montant : big,
);
const names = ventes
  .map((names) => names.vendeur)
  .reduce((revenueCount, value) => revenueCount.montant + value);

// const caParVandeur = {

//   names :

// }

console.log(names);

console.log("the revenu is : " + revenu);
console.log(bigger.produit + " " + bigger.vendeur + " " + "-" + bigger.montant);
