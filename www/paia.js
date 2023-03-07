function calculo() {

    var peso, altura, calculo


peso = document.getElementById("kg").value
altura = document.getElementById("alt").value

/*calculo = kg / ( alt * alt ) 
document.getElementById("calculo").textContent = calculo

alert(calculo)
*/

calculo = kg / ( alt * alt ) 
document.getElementById("h1").innerHTML = msg

alert(msg)
}