const temperatures = [-5, 10, 22, 34];

function celsuis(celsuis){

  
  const f = celsuis * 9 /5 + 32
    return f

}

function decrireTemp(temp){
    if (temp < 10) {
        return "froid"
    }
    if (temp > 10 && temp < 25) {
        return "doux"
    } else {
        return "choud"
    }
}



console.log(celsuis(-5));
console.log(decrireTemp(2));

