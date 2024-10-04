document.addEventListener('DOMContentLoaded', () => {
    const nomeTarefaInput = document.getElementById('nome-tarefa');
    const prioridadeTarefaSelect = document.getElementById('prioridade-tarefa');
    const adicionarTarefaBtn = document.getElementById('adicionar-tarefa-btn');
    const listaTarefasPendentes = document.getElementById('lista-tarefas-pendentes');
    const listaTarefasConcluidas = document.getElementById('lista-tarefas-concluidas');
    const excluirTarefasConcluidasBtn = document.getElementById('excluir-tarefas-concluidas-btn');

    adicionarTarefaBtn.addEventListener('click', () => {
        const nomeTarefa = nomeTarefaInput.value.trim();
        const prioridadeTarefa = prioridadeTarefaSelect.value;

        if (nomeTarefa === '') {
            alert('Por favor, insira um nome para a tarefa.');
            return;
        }

        const itemTarefa = document.createElement('li');
        itemTarefa.className = `item-tarefa ${prioridadeTarefa}`;
        itemTarefa.innerHTML = `
            <span>${nomeTarefa}</span>
            <div>
                <button class="concluir-btn">Concluir</button>
                <button class="excluir-btn">Excluir</button>
            </div>
        `;

        const concluirBtn = itemTarefa.querySelector('.concluir-btn');
        const excluirBtn = itemTarefa.querySelector('.excluir-btn');

        concluirBtn.addEventListener('click', () => {
            const horaConclusao = new Date().toLocaleString('pt-BR', { hour: '2-digit', minute: '2-digit', day: '2-digit', month: '2-digit', year: 'numeric' });
            const itemTarefaConcluida = document.createElement('li');
            itemTarefaConcluida.className = `item-tarefa ${prioridadeTarefa}`;
            itemTarefaConcluida.innerHTML = `
                <span>${nomeTarefa} - Concluída em: ${horaConclusao}</span>
            `;
            listaTarefasConcluidas.appendChild(itemTarefaConcluida);
            listaTarefasPendentes.removeChild(itemTarefa);
        });

        excluirBtn.addEventListener('click', () => {
            listaTarefasPendentes.removeChild(itemTarefa);
        });

        listaTarefasPendentes.appendChild(itemTarefa);
        nomeTarefaInput.value = '';
        prioridadeTarefaSelect.value = 'alta';
    });

    excluirTarefasConcluidasBtn.addEventListener('click', () => {
        while (listaTarefasConcluidas.firstChild) {
            listaTarefasConcluidas.removeChild(listaTarefasConcluidas.firstChild);
        }
    });
});
