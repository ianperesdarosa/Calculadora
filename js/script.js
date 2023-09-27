let numero1 = "";
let numero2 = "";
let operador = "";

function pegarValor(valor) {


    if (operador == "") {
        numero1 = numero1 + valor;

        atualizarDisplay(numero1);

    } else {
        numero2 += valor;
        atualizarDisplay(numero2);
    }
}

function pegarOperador(sinal) {

    if (numero1 != "") {


        if (numero2 == "") {
            operador = sinal;
            atualizarDisplay(numero1 + operador);
        } else {
            calcular();
        }
    }
}

function calcular() {
    numero1 = numero1.replace("," , ".");
    numero2 = numero2.replace("," , ".");

    numero1 = parseFloat(numero1);
    numero2 = parseFloat(numero2);

    let resultado = "";

    if (operador == "+") {
        resultado = numero1 + numero2;

    } else if (operador == "-") {
        resultado = numero1 - numero2;

    } else if (operador == "*") {
        resultado = numero1 * numero2;

    } else if (operador == "%") {
        resultado = numero1 % numero2;

    } else if (operador == "/") {
        resultado = numero1 / numero2;
    }

    resetar()
    atualizarDisplay(resultado);
}

function verificarIgual() {

    if (numero1 != "" && numero2 != "" && operador != "") {
        calcular();
    }
}

function resetar() {
    numero1 = "";
    numero2 = "";
    operador = "";
    atualizarDisplay(0);
}

function atualizarDisplay(valor) {
    document.getElementById('display').innerHTML = valor;
}
