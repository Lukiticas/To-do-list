var textoAtividade = document.getElementById("texto");
var button = document.getElementById("button");
var cPai = document.getElementById("lista-itens");

function deletaTarefa(divId) {
  let div = document.getElementById(divId);
  div.remove();
  console.log(`div: ${divId} deletado!`);
}

function checkCheck(id, idLabel) {
  let idCheck = document.getElementById(id);
  let Label = document.getElementById(idLabel);

  if (idCheck.checked) {
    Label.style.textDecoration = "line-through";
    Label.style.color = "gray";
  }

  if (!idCheck.checked) {
    Label.style.textDecoration = "none";
    Label.style.color = "black";
  }
}

function criaElemento(textoAtividade) {
  if (textoAtividade == "") {
    return;
  }

  var codigo = Math.random();
  var codigoDiv = Math.random();
  var codigoLabel = Math.random();

  var novoDiv = document.createElement("div");
  novoDiv.className = `items`;
  novoDiv.id = `${codigoDiv}`;
  console.log(`div: ${novoDiv.id}, criado!`);

  var novoLi = document.createElement("label");
  novoLi.className = `item-descricao ${codigo}`;
  novoLi.id = codigoLabel;
  console.log(`Li: ${novoLi.id}, criado!`);

  var novoInput = document.createElement("input");
  novoInput.type = "checkbox";
  novoInput.className = `check ${codigo}`;
  novoInput.id = `${codigo}`;
  novoInput.draggable = "true";
  novoInput.onclick = function () {
    checkCheck(codigo, codigoLabel);
  };
  novoInput.ondragend = function () {
    deletaTarefa(novoDiv.id);
  };
  console.log(`novo Input: ${novoInput.id}, criado!`);

  var novoTexto = document.createTextNode(textoAtividade);

  novoLi.appendChild(novoTexto);
  novoDiv.appendChild(novoInput);
  novoDiv.appendChild(novoLi);

  cPai.appendChild(novoDiv);

  document.getElementById("texto").value = "";
}
