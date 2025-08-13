// *** CÓDIGO COMENTADO DA ATIVIDADE DA AULA 8 QUE MISTURA FOR, WHILE E LISTAS ***

let arrayLista = [];
let continuar = true;
// inicia o loop e só para quando o 'continuar' deixar de ser 'true' e se tornar 'false'
while (continuar) {
    // mostra as opções através de um prompt
    let opcao = prompt(
        "1 - Adicionar item\n" +
        "2 - Remover item\n" +
        "3 - Listar itens\n" +
        "4 - Voltar"
    );
    // verifica qual foi a opção escolhida utilizando o switch/case
    switch (opcao) {
        case "1":
            let itemAdicionar = prompt("Digite o nome do item que deseja adicionar:");
            if (itemAdicionar) {
                // adiciona um item ao array utilizando push
                arrayLista.push(itemAdicionar);
                alert(`"${itemAdicionar}" foi adicionado à lista.`);
            }
            break;
        case "2":
            let itemRemover = prompt("Digite o nome do item que deseja remover:");
            // procura o índice do item do array (retorna -1 se não encotrar)
            let index = arrayLista.indexOf(itemRemover);
            if (index !== -1){
                // se o item for encontrado, remove 1 item na posição 'index'
                arrayLista.splice(index, 1);
                alert(`"${itemRemover}" foi removido da lista.`);
            } else {
                alert(`"${itemRemover}" não foi encontrado na lista.`);
            }
            break;
        case "3":
            if (arrayLista.lenght === 0) {
                alert("A lista está vazia.");
            } else {
                // cria uma string para armazenar os itens
                let listaTexto = "Lista de compras:\n";
                // percorre a lista e adiciona cada item na string com numeração
                for (let i = 0; i < arrayLista.length; i++) {
                    listaTexto += `${i + 1}. ${arrayLista[i]}\n`;
                }
                alert(listaTexto);
            }
            break;
        case "4":
            // está alterando o valor de continuar para 'false' para que o loop seja encerrado
            continuar = false;
            alert("Saindo...");
            break;
        default:
            alert("Opção inválida. Por favor, escolha uma opção de 1 a 4.");
    }
}