/*
Você está organizando a chamada de uma turma com os alunos ["Ana", "Bruno", "Carla", "Diego", "Elena"] para
conferir quem abre e quem fecha a lista. Crie uma função fnExibirChamada() que declare esse array e exiba no
terminal o primeiro aluno, o último aluno usando .length e o total de estudantes cadastrados.
*/
let nomes = ["Ana", "Bruno", "Carla", "Diego", "Elena"]

function fnExibirChamada(){

    primeiroNome = 0
    ultimoNome = (nomes.length -1)
    totalNome = (nomes.length)

    console.log("O primeiro aluno é: " + nomes[primeiroNome])
    console.log("O ultimo aluno é : "+ nomes[ultimoNome])
    console.log("O total de alunos é : " + totalNome)
}

/*
Durante o fechamento de um pedido online, o array ["Teclado Mecânico", "Mouse Gamer"] já contém dois itens e o
cliente resolveu incluir "Headset USB". Crie uma função fnAdicionarProduto(lista, novoItem) que adicione o novo
item ao final do array e mostre a lista atualizada no terminal.
*/

let pedido = ["Teclado Mecânico", "Mouse Gamer"]

function fnAdicionarProduto(pedido, novoItem){
    pedido.push(novoItem)
    console.log(pedido)
}

fnAdicionarProduto(pedido, "Headset USB")

/*
Na recepção de um posto de saúde, a fila normal está com ["Marcos", "Juliana", "Roberto"] e chega "Dona Clara
(Idosa)" com atendimento prioritário. Crie uma função fnEncaixarPrioridade(fila, nomePaciente) que coloque a
paciente prioritária na frente da fila e exiba a nova sequência.
*/

let fila = ["Marcos", "Juliana", "Roberto"]

function fnEncaixarPrioridade(fila, nomePaciente){
    fila.unshift(nomePaciente)
    console.log(fila)
}

fnEncaixarPrioridade(fila, "Teste")

/*
A partir da fila ["Dona Clara (Idosa)", "Marcos", "Juliana", "Roberto"], o consultório vai iniciar o atendimento da
manhã. Crie uma função fnChamarProximo(fila) que retire o primeiro nome da fila e exiba no terminal quem foi
chamado e quem continua aguardando.
*/

fila = ["Dona Clara (Idosa)", "Marcos", "Juliana", "Roberto"]

function fnChamarProximo(fila, nomePaciente){
    fila.shift(nomePaciente)
    console.log(fila)
}

fnEncaixarPrioridade(fila)

/*
Em um editor de texto simples, o usuário realizou as ações ["Escreveu título", "Aplicou negrito", "Inseriu tabela"] e
quer desfazer o que fez por último. Crie uma função fnDesfazerAcao(lista) que remova o último elemento do array e
mostre no terminal as ações restantes
*/

let lista =  ["Escreveu título", "Aplicou negrito", "Inseriu tabela"]

fnDesfazerAcao(lista){
    
}