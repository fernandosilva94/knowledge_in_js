var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event) {
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");
    var paciente = ObterPacienteDoForm(form);
    var pacienteTr = montaTr(paciente);
    var erros = validaPaciente(paciente);
    console.log(erros);

    if (erros.length > 0) {
        ExibeMsgErro(erros);
        return; 
    }

    //adicionando paciente na tabela
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);

    form.reset();
    limpaMsgErro = document.querySelector("#mensagens-erro")
    limpaMsgErro.innerHTML = "";
});

function ExibeMsgErro(erros) {
    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = "";

    erros.forEach(function(erro){
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}

function ObterPacienteDoForm(form) {
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }

    return paciente;
}

function montaTr(paciente) {
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    return pacienteTr;
}

function montaTd(dadosPaciente, classeEscolhida) {
    var td = document.createElement("td");
    td.textContent = dadosPaciente;
    td.classList.add(classeEscolhida);

    return td;
}

function validaPaciente(paciente) {
    var erros = [];
    
    if (paciente.nome.length == 0) {
        erros.push("Por favor, digite um nome.")
    }

    if (!validaPeso(paciente.peso) || paciente.peso.length == 0) {
        erros.push("Peso inválido ou em branco, tente novamente.");
    }

    //valida a altura
    if (!validaAltura(paciente.altura) || paciente.altura.length == 0) {
        erros.push("Altura inválida ou em branco, tente novamente.");
    }

    if (paciente.gordura.length == 0) {
        erros.push("Preencha o campo com a porcentagem de gordura.")
    }

    return erros;
}