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

function fnDesfazerAcao(lista){
    lista.pop(lista)
    console.log(lista)
}

fnDesfazerAcao(lista)

/*
O responsável pelo almoxarifado precisa conferir quantos itens existem no array ["Camiseta", "Calça", "Tênis", 
"Boné"] antes de iniciar a contagem física. Crie uma função fnVerificarEstoque(lista) que exiba no terminal a 
quantidade total de itens usando .length. 
*/

lista = ["Camiseta", "Calça", "Tênis", "Boné"]

function fnVerificarEstoque(lista){
   console.log(lista.length)
}

fnVerificarEstoque(lista)

/*
Na portaria de um evento, a lista oficial de convidados é ["Lucas", "Mariana", "Thiago", "Beatriz"] e duas pessoas 
chegam perguntando se estão autorizadas: "Mariana" e "Rafael". Crie uma função fnEstaNaLista(lista, nome) que 
verifique a presença de cada nome no array e exiba o resultado no terminal. 
*/

lista = ["Lucas", "Mariana", "Thiago", "Beatriz"]

function fnEstaNaLista(lista, nome){
    if(lista.includes(nome) == true){
        console.log(nome + " foi convidado");        
    }else console.log(nome + " não foi convidado")
}

fnEstaNaLista(lista, "Mariana")
fnEstaNaLista(lista, "Rafael")

/*
Em um mercado, os corredores seguem a ordem ["Arroz", "Feijão", "Açúcar", "Café", "Sal"] e um repositor precisa 
saber a posição exata de "Café" e conferir se "Macarrão" consta no array. Crie uma função fnConsultarCorredor(lista, 
item) que retorne ou exiba a posição encontrada ou o aviso de que o item não está no array. 
*/

let corredores = ["Arroz", "Feijão", "Açúcar", "Café", "Sal"]

function fnConsultarCorredor(lista, item){
    if (lista.includes(item) == true){
        let posicaoItem = lista.indexOf(item) + 1
        console.log(`O ${item} está no corredor ${posicaoItem}`)
    } else {
        console.log(`Produto ${item} não foi encontrado!`)
    }
}

fnConsultarCorredor(corredores, "Macarrão")
fnConsultarCorredor(corredores, "Café")
/*
A tabela de preços base de um lanche está armazenada em [15.00, 25.00, 40.00] e o segundo item sofreu reajuste 
para 28.50. Crie uma função fnAtualizarPreco(lista, indice, novoValor) que altere o valor na posição informada e 
exiba o array modificado no terminal. 
*/

let basePreco = [16.00, 22.00, 20.00]

function fnAtualizarPreco(lista, indice, novoValor){
    // length conta o total de valores -> 3
    if ((lista.length - 1) < indice){
        console.log(`Produto não encontrado!`)
    }
    lista[indice] = novoValor

    console.log(`Novos valores de preços ${lista}`)
}

fnAtualizarPreco(basePreco, 1, 28.50)

// Para montar o boletim inicial de um estudante com as notas 8.0, 7.5 e 9.0, você precisa agrupar esses valores em 
// uma única estrutura. Crie uma função fnCriarBoletim(nota1, nota2, nota3) que armazene as três notas em um array e 
// o exiba ou retorne para conferência. 



function fnCriarBoletim(nota1,nota2,nota3){

    let nota = [nota1,nota2,nota3]
    console.log(nota)

}

fnCriarBoletim(6,10,5)