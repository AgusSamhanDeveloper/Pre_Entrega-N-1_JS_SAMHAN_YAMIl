function mayorQue(a){
    return (b) => b > a
}
let mayorQue28 = mayorQue(28)
let mayorQue10 = mayorQue(10)
// console.log(mayorQue28(10))
// console.log(mayorQue10(12))

let num = [1,3,5,7,9,11,13,15,17,19]
let num2 = [0,2,4,6,8,10]
function doble(num){
    console.log(num*2)
}
function porCadaUno(array, funcion){
    for(let elemento of array){
        funcion(elemento)
    }
}
// porCadaUno(num, console.log)
// console.log("-------------")
// porCadaUno(num2, doble)


num.forEach((elemento) => {
    console.log(elemento)
})