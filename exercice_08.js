const inscription = {
  nom: "jsqdjnsd",
  email: "aminaexample@.com",
  motDePasse: "123555555",
  age: 18,
};

function validInscription(donnees) {
  const errors = [];

  if (inscription.nom.length <= 2) {
    errors.push("name should have more than 2");
  }
  if (inscription.age < 18) {
    errors.push("not adult");
  }
  if (!inscription.email.includes("@")) {
    errors.push("email not valid");
  }
  if (inscription.motDePasse < 8) {
    errors.push("password invalid");
  } else {
    return {
      valid: errors.length === 0,
      errors,
    };
  }
}

console.log(validInscription(inscription));
