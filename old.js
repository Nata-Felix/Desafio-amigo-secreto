listaAmigos = [];
console.log(listaAmigos);

function adicionarAmigo() {
  let amigoInput = document.getElementById("amigo").value;
  let amigo = amigoInput.split(",");
  console.log(amigo);

  if (amigo == "") {
    alert("Por favor, insira um nome");
    console.log(amigo);
    return;
  } else if (listaAmigos.includes(amigo)) {
    alert(`O nome ${amigo} já foi adicionado`);
    console.log(amigo);
    return;
  }

  listaAmigos.push(amigo);
  document.getElementById("amigo").value = "";
  console.log(amigo);
}

function sortearAmigo() {
  if (listaAmigos.length == 0) {
    alert("Por favor,insira um nome antes de sortear");
    return;
  }
  console.log(listaAmigos);
}
