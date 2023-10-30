// Definindo referências aos elementos do DOM
const opcaoSelect = document.getElementById('opcao');
const salarioInput = document.getElementById('salario');
const mesesTrabalhoInput = document.getElementById('mesesTrabalho');
const resultado = document.getElementById('resultado');
const inputSalarioDiv = document.getElementById('inputSalario');
const inputMesesDiv = document.getElementById('inputMeses');

function mostrarInputs(opcao) {
    // Reseta os campos e oculta os divs
    inputSalarioDiv.style.display = 'none';
    salarioInput.value = '';
    inputMesesDiv.style.display = 'none';
    mesesTrabalhoInput.value = '';
    resultado.textContent = '';

    switch (opcao) {
        case '1':
        case '2':
            inputSalarioDiv.style.display = 'block';
            break;
        case '3':
            inputSalarioDiv.style.display = 'block';
            inputMesesDiv.style.display = 'block';
            break;
        case '4':
            resultado.textContent = 'Obrigado por usar a Calculadora de Benefícios!';
            break;
    }
}

function executarOpcao() {
    const opcao = opcaoSelect.value;
    const salario = parseFloat(salarioInput.value);
    const mesesTrabalho = parseInt(mesesTrabalhoInput.value);

    switch (opcao) {
        case '1':
            if (!salario) {
                resultado.textContent = 'Por favor, insira o salário antes de calcular.';
                return;
            }
            if (salario <= 1200) {
                resultado.textContent = 'Novo salário: R$ ' + (salario * 1.15).toFixed(2);
            } else if (salario <= 2400) {
                resultado.textContent = 'Novo salário: R$ ' + (salario * 1.10).toFixed(2);
            } else {
                resultado.textContent = 'Novo salário: R$ ' + (salario * 1.05).toFixed(2);
            }
            break;

        case '2':
            if (!salario) {
                resultado.textContent = 'Por favor, insira o salário antes de calcular.';
                return;
            }
            resultado.textContent = 'Valor das férias: R$ ' + (salario + (salario / 3)).toFixed(2);
            break;

        case '3':
            if (!salario || !mesesTrabalho) {
                resultado.textContent = 'Por favor, insira o salário e os meses trabalhados antes de calcular.';
                return;
            }
            resultado.textContent = 'Décimo terceiro: R$ ' + ((salario * mesesTrabalho) / 12).toFixed(2);
            break;

        case '4':
            // Esta opção foi tratada no mostrarInputs
            break;
    }
}

// Inicializar
opcaoSelect.value = '0';
