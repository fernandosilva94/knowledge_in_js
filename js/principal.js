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
        paciente.classList.add("paciente-invalido");
    }

    if (altura <= 0 || altura >= 3) {
        alert("Altura inválida");
        AlturaValida = false;
        tdImc.textContent = "Altura inválida.";
        paciente.classList.add("paciente-invalido");
    }

    if (PesoValido && AlturaValida) {
        var imc = peso / (altura * altura);
    tdImc.textContent = imc.toFixed(2);
    }

}

var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event) {
    event.preventDefault();
    var form = document.querySelector("#form-adiciona");
    var nome = form.nome.value;
    var peso = form.peso.value;
    var altura = form.altura.value;
    var gordura = form.gordura.value;

    var pacienteTr = document.createElement("tr");

    var nomeTd = document.createElement("td");
    var pesoTd = document.createElement("td");
    var alturaTd = document.createElement("td");
    var gorduraTd = document.createElement("td");
    var imcTd = document.createElement("td");

    nomeTd.textContent = nome;
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
    gorduraTd.textContent = gordura;
    imcTd.textContent = imc;

    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    //pacienteTr.appendChild(imcTd);

    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
});



/* 
console.log(paciente);
console.log(tdPeso); 
console.log(peso);
console.log(tdAltura);
console.log(altura);
*/


