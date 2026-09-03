const commandes = [
  { montant: 150, statut: "standard" },
  { montant: 620, statut: "standard" },
  { montant: 1200, statut: "premium" },
];

function calculateCommand(montant, statut) {
  let remisePersent = 0;

  if (montant < 200) {
    remisePersent = 0;
  }
  if (montant >= 200 && montant < 500) {
    remisePersent = 0.05;
  }
  if (montant >= 500 && montant < 1000) {
    remisePersent = 0.1;
  }
  if (montant >= 1000) {
    remisePersent = 0.15;
  }

  let remise = montant * remisePersent;

  if (statut === "premium") {
    remisePersent = remisePersent + 0.05;
  }

  const afterRemise = montant - remise;

  const livraison = montant > 300 ? 0 : 30;

  const totalPayer = afterRemise + livraison;
  return {
    montant,
    statut,
    remisePersent,
    remise,
    afterRemise,
    livraison,
    totalPayer,
  };
}

console.log(calculateCommand(1200, "premium"));
