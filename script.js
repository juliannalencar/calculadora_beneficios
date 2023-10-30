function mostrarInputs(opcao) {
    document.getElementById('inputSalario').style.display = opcao <= 3 ? 'block' : 'none';
    document.getElementById('inputMeses').style.display = opcao == 3 ? 'block' : 'none';
}

function executarOpcao() {
    const opcao = document.getElementById('opcao').value;
    const salarioInput = document.getElementById('salario');
    const mesesTrabalhoInput = document.getElementById('mesesTrabalho');
    const resultado = document.getElementById('resultado');

    mostrarInputs(opcao);

    switch (opcao) {
        case '1':
            let salario = parseFloat(salarioInput.value);
            if (salario <= 1200) salario += salario * 0.15;
            else if (salario <= 2400) salario += salario * 0.10;
            else salario += salario * 0.05;
            resultado.textContent = `Novo salário: R$ ${salario.toFixed(2)}`;
            break;

        case '2':
            let salarioFerias = parseFloat(salarioInput.value);
            let valorFerias = salarioFerias + (salarioFerias / 3);
            resultado.textContent = `Valor das férias: R$ ${valorFerias.toFixed(2)}`;
            break;

        case '3':
            let salario13 = parseFloat(salarioInput.value);
            let mesesTrabalho = parseInt(mesesTrabalhoInput.value);
            let valor13 = (salario13 * mesesTrabalho) / 12;
            resultado.textContent = `Valor do décimo terceiro: R$ ${valor13.toFixed(2)}`;
            break;

        case '4':
            resultado.textContent = 'Você optou por sair. Até mais!';
            break;

        default:
            resultado.textContent = 'Opção inválida!';
    }
}

document.getElementById('opcao').addEventListener('change', function() {
    mostrarInputs(this.value);
});
