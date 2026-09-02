const titre = "   Mon Premier Projet MERN   ";
const phrase = "Le JavaScript est la base du stack MERN";
const nomComplet = "amina el idrissi";

function generateSlug() {
  const mini = titre.toLowerCase().replaceAll(" ", "-");
  const clean = mini.replace(/-+/g, "-");

  return clean;
}

function compteMot() {
  let count = phrase.split(" ");
  let countWord = count.length;
  return countWord;
}

function initials(){
    const turn =  nomComplet.split(" ")
    const get = turn.map(e => e[0].toUpperCase())
    const turnAgain = get.join(' ')
    const separate = turnAgain.replaceAll(" " , ".")

    return separate
}

function generateSlug(name){

    const clean = name.replace(',' , '-').replace(' ' , '-')
     return clean
    
}

console.log(generateSlug("mehdi jjj"));
console.log(compteMot());
console.log(initials());
