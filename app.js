let listaAmigos = [];
let listaDeSorteados = [];

function mostrarLista() {
  document.getElementById("listaAmigos").innerHTML = listaAmigos;
}

function adicionarAmigo() {
  amigo = document.getElementById("amigo").value;
  if (amigo == "") {
    alert("Digite um nome válido");
  } else {
    listaAmigos.push(amigo);
    mostrarLista();
  }
}

function sortearAmigo() {
  if (listaAmigos.length == 0) {
    alert("Adicione um amigo antes de sortear");
  } else {
    let sorteado = listaAmigos[Math.floor(Math.random() * listaAmigos.length)];
    console.log(sorteado);
    document.getElementById("nomeSorteado").innerHTML = sorteado;
    listaDeSorteados.push(sorteado);
    listaAmigos.pop(sorteado);
    mostrarLista();
  }
}

// O usuário deverá adicionar nomes por meio de um campo de texto e de um botão "Adicionar". 👌

// Os nomes inseridos serão exibidos em uma lista visível na página 👌

// Um botão "Sortear Amigo" selecionará um dos nomes de forma aleatória, exibindo o resultado na tela. 👌

// Funcionalidades:
// Adicionar nomes: Os usuários escreverão o nome de um amigo em um campo de texto e o adicionarão a uma lista visível ao clicar em "Adicionar". 👌

// Validar entrada: Se o campo de texto estiver vazio, o programa exibirá um alerta solicitando um nome válido. 👌

// Visualizar a lista: Os nomes inseridos aparecerão em uma lista abaixo do campo de entrada. 👌

// Sorteio aleatório: Ao clicar no botão "Sortear Amigo", um nome da lista será selecionado aleatoriamente e exibido na página. 👌
