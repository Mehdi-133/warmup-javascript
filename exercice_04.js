const courses = ["pain", "lait", "riz", "cafe"];


courses.push("sucre")
courses.splice(1, 1)
console.log(courses);

console.log( "elements total" + ":" + courses.length);


function printElement(){

    let elements = 0
    for (let i = 0; i < courses.length; i++) {
         console.log( i + 1 + " " + courses[i]);
         
    }

}

function checkCafe(){
    if (courses.includes("cafe")) {
        return "exist"
    }
}
console.log(printElement());
console.log(checkCafe());



