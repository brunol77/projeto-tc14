// Adicionando titulo
let titulo = document.createElement('h1');

// Alterando o titulo
titulo.id = 'titulo';
titulo.innerText = 'Vendas_On_Line';

// body
let body = document.querySelector('body');

// Titulo no body
body.appendChild(titulo);

//DOM para produto
let produto = document.createElement('div');

// Elemento produto
produto.innerHTML = `
<div>
    <h2>Item: Parafuso</h2>
    <img src="img/parafuso.png" alt="Produto">
    <p>Vendas de produtos On Line</p>
    <p>R$ 1,00</p>
    <br>
    <li><a href="https://facebook.com/">Facebook: Vendas_On_Line</a></li>
    <li><a href="https://instagram.com">Instagram: Vendas_On_Line</a></li>
</div>
`;

// Produto no titulo
body.appendChild(produto);

