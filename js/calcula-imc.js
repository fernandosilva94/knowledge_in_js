/*var titulo = document.querySelector("h1");
titulo.textContent = "Nutrição";
*/
var pacientes = document.querySelectorAll(".paciente");

for (var varre = 0; varre < pacientes.length; varre++) {
    
    var paciente = pacientes[varre];
   
    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector(".info-imc");

    var PesoValido = validaPeso(peso);
    var AlturaValida = validaAltura(altura);

    if (!PesoValido) {
        alert("Peso inválido");
        PesoValido = false;
        tdImc.textContent = "Peso inválido.";
        paciente.classList.add("paciente-invalido");
    }

    if (!AlturaValida) {
        alert("Altura inválida");
        AlturaValida = false;
        tdImc.textContent = "Altura inválida.";
        paciente.classList.add("paciente-invalido");
    }

    if (PesoValido && AlturaValida) {
        var imc = calculaImc(peso, altura)
    tdImc.textContent = imc;
    }

}

function validaPeso(peso) {
    if (peso >= 0 && peso < 500) {
        return true;
    } else {
        return false;
    }
}

function validaAltura(altura) {
    if (altura > 0 && altura <= 3.0) {
        return true;
    } else {
        return false;
    }
}

function calculaImc(peso, altura) {
    var imc = 0;
    imc = peso / (altura * altura);

    return imc.toFixed(2);
}