function calcular(){
    let n1 = Number(document.getElementById("txtValor1").value)
    let n2 = Number(document.getElementById("txtValor2").value)

let op = document.getElementById("cbxOperacao").value

let caixaResultado = document.getElementById("cbxResultado");

let Resultado;

if(op === "+"){
    Resultado = n1 + n2
} else if(op === "-"){
    Resultado = n1 - n2
} else if(op === "*"){
    Resultado = n1 * n2
} else if(op === "/"){
    Resultado = n1 / n2}


caixaResultado.textContent = Resultado
}

