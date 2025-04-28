function name(){
    for(let i = 1; i<11; i++){
        console.log(`Current value of i is ${i}`)
        console.log("Talha Jubayer")
    }
}
for(let i = 0; i<10; i++){
    console.log(`Current value of i is ${i}`)
    name()
}
let x = Number(prompt("Enter Number"));
(function hola(y){
    console.log(`IIFEs ${y}`)
})(x);