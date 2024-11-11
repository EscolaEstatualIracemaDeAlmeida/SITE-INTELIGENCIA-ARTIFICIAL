let menu = window.document.getElementById("menuclique")

function clique() {
    if(menu.style.display == 'none'){
        menu.style.display = 'block'
    } else {
        menu.style.display = 'none'
    }
}

/*FUNCAO QUE FAZ O MENU SUMEIR QUANDO A TELA AUMENTA*/

window.addEventListener('resize', function() {
    const menu = document.getElementById('menuclique');
    if (window.innerWidth > 850) {
      menu.style.display = 'none'
    }
  });