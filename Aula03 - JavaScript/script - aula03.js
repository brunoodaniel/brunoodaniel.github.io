let listaTarefas = document.getElementById('listaTarefas');
let input1 = document.getElementById('input1');


function addTarefas(){
    const texto = input1.value;
    let novoElemento = document.createElement('li');
    novoElemento.innerHTML = `<p>${texto}</p> 
        <button onclick='excluirTarefa(this)' style='display:inline'>Excluir</button> 
        <button onclick='concluir(this)' style='display:inline'>Concluir</button>
        <button onclick='editar(this)' style='display:inline'>Editar</button>`;
    listaTarefas.appendChild(novoElemento);
    input1.value = '';
}

function excluirTarefa(button){
    listaTarefas.removeChild(button.parentElement);
}

function concluir(button){
    const tarefa = button.parentElement;
    const paragrafo = tarefa.querySelector('p');
    paragrafo.style.color = 'green';
    button.disabled = true;
}

function editar(button) {
    const tarefa = button.parentElement;
    const paragrafo = tarefa.querySelector('p');
    const textoAtual = paragrafo.textContent;

    const novoInput = document.createElement('input');
    novoInput.value = textoAtual;

    const botaoSalvar = document.createElement('button');
    botaoSalvar.textContent = 'Salvar';

    botaoSalvar.onclick = function() {
        paragrafo.textContent = novoInput.value;

        tarefa.removeChild(novoInput);
        tarefa.removeChild(botaoSalvar);

        paragrafo.style.display = 'inline';

        const botoes = tarefa.querySelectorAll('button');
        botoes.forEach(botao => {
            botao.style.display = 'inline';
        });
    };

    const botoes = tarefa.querySelectorAll('button');
    botoes.forEach(botao => {
        botao.style.display = 'none';
    });

    paragrafo.style.display = 'none';
    tarefa.appendChild(novoInput);
    tarefa.appendChild(botaoSalvar);
}
