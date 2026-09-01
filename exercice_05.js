const produit = {
  nom: "Clavier mecanique",
  prix: 450,
  stock: 12,
  categorie: "Informatique",
  enPromo: false,
};

console.log(
  produit.nom +
    " " +
    "prix" +
    " " +
    produit.prix +
    "stock" +
    " " +
    produit.stock +
    " " +
    "categorie" +
    " " +
    produit.categorie,
);

const newPrice = produit.prix + produit.prix * (10 / 100);
console.log(newPrice);

const keys = Object.keys(produit);
const values = Object.values(produit);

for (let i = 0; i < keys.length; i++) {
  console.log(keys[i] + " : " + " " + values[i]);
}

console.log(values);

function isDespo(values) {
  if (values.includes("clavier")) {
    return true;
  } else {
    return false;
  }
}
console.log(isDespo("jjs"));
