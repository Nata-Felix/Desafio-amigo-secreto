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
    document.getElementById("amigo").value = "";
  }
}

function removerAmigo() {
  let amigo = document.getElementById("amigo").value;

  if (amigo === "") {
    alert("Digite o nome de um participante para remover");
  } else {
    let index = listaAmigos.indexOf(amigo);
    if (index !== -1) {
      listaAmigos.splice(index, 1);
    } else {
      alert("Nome não encontrado na lista");
    }
    mostrarLista();
    document.getElementById("amigo").value = "";
  }
}

function fogosArtificio() {
  if (document.getElementById("nomeSorteado").textContent !== "") {
    for (let i = 0; i < 5; i++) {
      setTimeout(() => {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { x: Math.random(), y: Math.random() * 0.6 },
        });
      }, i * 500);
    }
  }
}

function executarSorteio() {
  document.getElementById("naoRepetir").checked
    ? sortearAmigoERemover()
    : sortearAmigo();
}

function sortearAmigo() {
  if (listaAmigos.length == 0) {
    alert("Adicione um amigo antes de sortear");
    return;
  }
  let sorteado = listaAmigos[Math.floor(Math.random() * listaAmigos.length)];
  document.getElementById("nomeSorteado").innerHTML = sorteado;
  mostrarLista();
  fogosArtificio();
}

function sortearAmigoERemover() {
  if (listaAmigos.length == 0) {
    alert("Adicione um amigo antes de sortear");
    return;
  }
  let sorteado = listaAmigos[Math.floor(Math.random() * listaAmigos.length)];
  document.getElementById("nomeSorteado").innerHTML = sorteado;
  let index = listaAmigos.indexOf(sorteado);
  if (index !== -1) {
    listaAmigos.splice(index, 1);
  }
  mostrarLista();
  fogosArtificio();
}