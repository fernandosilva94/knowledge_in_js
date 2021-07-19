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

    var PesoValido = true;
    var AlturaValida = true;

    if (peso <= 0 || peso >= 500) {
        alert("Peso inválido");
        PesoValido = false;
        tdImc.textContent = "Peso inválido.";
    }

    if (altura <= 0 || altura >= 3) {
        alert("Altura inválida");
        AlturaValida = false;
        tdImc.textContent = "Altura inválida.";
    }

    if (PesoValido && AlturaValida) {
        var imc = peso / (altura * altura);
    tdImc.textContent = imc.toFixed(2);
    }

}



/* 
console.log(paciente);
console.log(tdPeso); 
console.log(peso);
console.log(tdAltura);
console.log(altura);
*/


