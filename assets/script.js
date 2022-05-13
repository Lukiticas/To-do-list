var textoAtividade = document.getElementById("texto");
var button = document.getElementById("button");
var cPai = document.getElementById("lista-itens");

function checkCheck(id, idLabel) {
  idCheck = document.getElementById(id);
  Label = document.getElementById(idLabel);
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
  var codigoLabel = Math.random();
  var novoDiv = document.createElement("div");
  novoDiv.className = "items";

  var novoLi = document.createElement("label");
  novoLi.className = `item-descricao ${codigo}`;
  novoLi.id = codigoLabel;
  novoLi.setAttribute("for", `${codigo}`);

  var novoInput = document.createElement("input");
  novoInput.type = "checkbox";
  novoInput.className = `check ${codigo}`;
  novoInput.id = `${codigo}`;
  novoInput.onclick = function () {
    checkCheck(codigo, codigoLabel);
  };

  var novoTexto = document.createTextNode(textoAtividade);

  novoLi.appendChild(novoTexto);
  novoDiv.appendChild(novoInput);
  novoDiv.appendChild(novoLi);

  cPai.appendChild(novoDiv);

  document.getElementById("texto").value = "";
}
