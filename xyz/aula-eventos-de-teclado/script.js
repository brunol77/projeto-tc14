const linkPerfil = document.getElementById("link-perfil");
const navPerfil = document.getElementById("nav-perfil");

//linkPerfil.addEventListener("mouseover", ()=> {
//  navPerfil.style.display = "block"
//})

document.addEventListener('keyup', (e) => {
  console.log('key:', e.key)
  console.log('code:', e.code)

  if(e.code == 'Digit1') {
    console.log('VC PRESSIONOU O 1!!')
    navPerfil.style.display = "block"
  }

})