const  firstName = "mehdi";
const  lastName = "karbitou";
const ville = "casablanca " ;
let  age = "23";
let enFormation = true;


function concat()
{
    return firstName +  " "  + lastName + "," + " " +  age + "ans a " + ville  
}
function checkAge(){
    if (age >= 18) {
        return "status" + " " +  ":" + "adult";
    }
    else{
        return "not adult"
    }
}

function checkFormation(){
    if (enFormation === true) {
        return "En formation " +  " " + ":" + true
    }

    else{
        return false
    }
}


console.log(concat());
console.log(checkAge());
console.log(checkFormation());



