const linkPerfil = document.getElementById("link-perfil");
const navPerfil = document.getElementById("nav-perfil");

const linkPerfilDados = document.getElementById("link-perfil-dados");

//linkPerfil.addEventListener("mouseover", ()=> {
//  navPerfil.style.display = "block"
//})

document.addEventListener('keyup', (e) => {
  console.log('key:', e.key)
  console.log('code:', e.code)


// Liberar com número 1 a liberação da página  
//  if(e.code == 'Digit1') {
//    console.log('Você pressionou o número 1')
//    navPerfil.style.display = "block"
//  }

// Liberar a página de dados com o click a opção 1
  if(navPerfil.style.display == 'block'){
    if(e.code == 'Digit1'){
      linkPerfilDados.click()
    }
  }  else if(e.code == 'Digit1'){
    navPerfil.style.display = "block"
}

// Apertar ESC para bloquear a página  
if(e.code == 'Escape'){
  navPerfil.style.display = 'none';
}

})




