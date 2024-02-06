const $dom = document.getElementsByClassName("elementos_nav");
console.log($dom);

const post02 = document.getElementById("post02");
console.log(post02);

const formulario = document.getElementById("formulario");
console.log(formulario);

const section = document.getSelection("section");
console.log(section);

const data_posts = document.getElementsByClassName("post-data");
console.log(data_posts[0]);

const text_posts = document.getElementsByClassName("post-texto");
console.log(text_posts[0]);

const linkPrimeiroPost = document.querySelector("#post01 .post-texto a");
console.log(linkPrimeiroPost);

const negritoSegundoPost = document.querySelector("#post02 .post-texto strong")
console.log(negritoSegundoPost);

const nameImput = document.querySelector("nome");
console.log(nameImput);

const footerLinks = document.querySelectorAll("footer .lista_redes a");
footerLinks.forEach(link => console.log(link));

const navLinks = document.querySelectorAll("nav li a");
navLinks.forEach(link => console.log(link));

const negritoAutorData = document.querySelectorAll(".post-autor strong .post-data strong");
negritoAutorData.forEach(Element => console.log(Element));