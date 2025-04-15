function addItem() {
    let taskValue = document.getElementById("input").value;

    if (taskValue.trim() !== "") {
        let listaconteudo = document.getElementById("Lista"); 
        let listaConcluidas = document.getElementById("ListaConcluidas"); 

        let li = document.createElement("li");

        let divTask = document.createElement("div");
        divTask.className = "task-container";

        let label = document.createElement("label");
        label.textContent = taskValue;

        let box = document.createElement("input");
        box.type = "checkbox";

        box.onchange = function () {
            if (box.checked) {
                li.style.textDecoration = "line-through"; //adiciona um risco na tarefa ao ser concluida
                listaconteudo.removeChild(li); 
                listaConcluidas.appendChild(li); 
            } else {
                li.style.textDecoration = "none"; //remove o risco da tarefa caso ela seja marcada novamente
                listaConcluidas.removeChild(li); 
                listaconteudo.appendChild(li); 
            }
        };

        let removeButton = document.createElement("button"); //adiciona botão de remover tarefas que ao interagir com exclui a tarefa selecionada
        removeButton.id = "icon";
        removeButton.innerHTML = '<i class="fa-solid fa-trash"></i>';
        removeButton.onclick = function () {
            if (box.checked) {
                listaConcluidas.removeChild(li); 
            } else {
                listaconteudo.removeChild(li); 
            }
        };

        // Adicionando a funcionalidade de edição da tarefa
        const botaoEditar = document.createElement('button');
        botaoEditar.textContent = 'Editar';
        botaoEditar.addEventListener('click', () => {
            const novaTarefa = prompt('Nova tarefa:', taskValue);
            if (novaTarefa !== null) {
                label.textContent = novaTarefa;  // Atualiza o texto da tarefa
                taskValue = novaTarefa;  // Atualiza o valor da tarefa
            }
        });

        let description = prompt("Digite uma descrição para a tarefa (opcional):");
        let descriptionDiv = document.createElement("div");
        descriptionDiv.className = "description";
        descriptionDiv.textContent = description;

        divTask.appendChild(box);
        divTask.appendChild(label);
        divTask.appendChild(removeButton);
        divTask.appendChild(botaoEditar); // Adicionando o botão de editar à tarefa

        li.appendChild(divTask);
        if (description.trim() !== "") {
            li.appendChild(descriptionDiv);
        }

        listaconteudo.appendChild(li);

        document.getElementById("input").value = "";
    } else {
        alert("Por favor, insira uma tarefa."); //aviso caso não adicionem uma tarefa
    }
}
