const linkPagPrincipal = document.getElementById("link-pag");

document.addEventListener('keyup', (e) => {
    if(e.code == 'Escape'){
        window.location.href = 'index.html'
        //linkPagPrincipal.click()
    }
})