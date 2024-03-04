let quantidadeSubtotal = document.getElementById("quantidade-subtotal");
let valorSubtotal = document.getElementById("valor-subtotal");

// somar valor da cesta
let valorProduto = 11.66;

let subtotalInfo = {
  quantidade: 1,
  valor: 11.66,
};

// função para somar quantidade de itens na cesta e função toFixed para as casas decimais
function atualizarSubtotal(){
quantidadeSubtotal.innerText = subtotalInfo.quantidade + " itens";
valorSubtotal.innerText = subtotalInfo.valor.toFixed(2);
}

atualizarSubtotal()

// adicionar +1 e -1 no clique botao
const inputQtd = document.getElementById('quantidade-produto-01')
const btnQtd = document.getElementById('btn-adicionar-produto-01')
const btnSub = document.getElementById('btn-subtrair-produto-01')

// adicionar +1
function adicionarQuantidade() {
  inputQtd.value = Number(inputQtd.value) + 1

// atualizar a quantidade +1 de itens na cesta
subtotalInfo.quantidade = subtotalInfo.quantidade + 1

// somar valores da cesta
subtotalInfo.valor = subtotalInfo.valor + valorProduto

atualizarSubtotal()
}

// função clique +1
btnQtd.addEventListener('click', adicionarQuantidade)

// adicionar -1
function subtrairQuantidade() {
  if (Number(inputQtd.value) > 0){
  inputQtd.value = Number(inputQtd.value) - 1

// atualizar a quantidade -1 de itens na cesta
subtotalInfo.quantidade = subtotalInfo.quantidade - 1

// subtrair valores da cesta
subtotalInfo.valor = subtotalInfo.valor - valorProduto

atualizarSubtotal()
}
}

// função clique -1
btnSub.addEventListener('click', subtrairQuantidade)

