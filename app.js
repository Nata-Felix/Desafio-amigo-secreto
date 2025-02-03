let listaAmigos = [];
let listaDeSorteados = [];

function mostrarLista() {
  document.getElementById("nome-participante").innerHTML = listaAmigos;
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

function fogosArtificio() {
  campoNomeSorteado = document.getElementById("nomeSorteado").value;
  if (campoNomeSorteado !== "") {
    document
      .getElementById("secao-sorteado__botao")
      .addEventListener("click", function () {
        for (let i = 0; i < 5; i++) {
          setTimeout(() => {
            confetti({
              particleCount: 100,
              spread: 70,
              origin: { x: Math.random(), y: Math.random() * 0.6 },
            });
          }, i * 500);
        }
      });
  } // Adicionando a chave de fechamento aqui
}

function sortearAmigo() {
  if (listaAmigos.length == 0) {
    alert("Adicione um amigo antes de sortear");
  } else {
    let sorteado = listaAmigos[Math.floor(Math.random() * listaAmigos.length)];
    document.getElementById("nomeSorteado").innerHTML = sorteado;
    listaDeSorteados.push(sorteado);
    listaAmigos.pop(sorteado);
    mostrarLista();
  }
}