var textoAtividade = document.getElementById("texto");
var button = document.getElementById("button");
var cPai = document.getElementById("lista-itens");

function trocaCorInput(inputId) {
  let input = document.getElementById(inputId);
  input.style.setProperty("border", "0.15rem solid red");
  input.style.setProperty("color", "red");
}

function deletaTarefa(divId) {
  let div = document.getElementById(divId);
  div.remove();
  console.log(`div: ${divId} deletado!`);
}

function checkCheck(id, idLabel) {
  let idCheck = document.getElementById(id);
  let Label = document.getElementById(idLabel);

  if (idCheck.checked) {
    Label.style.setProperty("textDecoration", "line-through");
    Label.style.setProperty("color", "gray");
  }

  if (!idCheck.checked) {
    Label.style.setProperty("textDecoration", "none");
    Label.style.setProperty("color", "none");
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
  novoDiv.setAttribute("class", "items");
  novoDiv.setAttribute("id", `${codigoDiv}`);
  console.log(`div: ${novoDiv.id}, criado!`);

  var novoLi = document.createElement("label");
  novoLi.setAttribute("class", `item-descricao ${codigo}`);
  novoLi.setAttribute("id", codigoLabel);
  console.log(`Li: ${novoLi.id}, criado!`);

  var novoInput = document.createElement("input");
  novoInput.setAttribute("type", "checkbox");
  novoInput.setAttribute("class", `check ${codigo}`);
  novoInput.setAttribute("id", codigo);
  novoInput.setAttribute("draggable", "true");

  novoInput.onclick = function () {
    checkCheck(codigo, codigoLabel);
  };
  novoInput.ondragstart = function () {
    trocaCorInput(novoInput.id);
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

document.addEventListener("keyup", (event) => {
  if (event.key == "Enter") {
    event.preventDefault();
    button.click();
  }
});
