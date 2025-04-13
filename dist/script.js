const queijo = document.querySelector("#queijo")

  const pizza = document.querySelector('.pizza');

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    
    pizza.style.transform = `translateY(${scrollY}px) rotate(${scrollY}deg)`;
    
  });

// Menu lateral


  const openMenu = document.getElementById('openMenu');
  const closeMenu = document.getElementById('fecharMenu');
  const menu = document.getElementById('menuLateral');
  const overlay = document.getElementById('overlay');

  openMenu.addEventListener('click', () => {
    menu.classList.add('ativo');
    overlay.classList.add('ativo');
  });

  closeMenu.addEventListener('click', () => {
    menu.classList.remove('ativo');
    overlay.classList.remove('ativo');
  });

  overlay.addEventListener('click', () => {
    menu.classList.remove('ativo');
    overlay.classList.remove('ativo');
  });

  // imagens Geral

  //let ativo = false
  function verificarVisibilidade() {
    const elemento = document.querySelector('.geral-img');
    const elemento2 = document.querySelector('.img-icon');
  
    //if (!elemento) return;
    //console.log(window.innerHeight)
    

  
    const posicao = elemento.getBoundingClientRect(); // pega a posição do elemento
    //console.log(posicao.bottom)
    const posicao2 = elemento2.getBoundingClientRect(); // pega a posição do elemento
    //console.log(posicao.bottom)
    
    // Checa se o topo do elemento está visível dentro da janela
    if (posicao.top < window.innerHeight && posicao.bottom > 0) {
      // Se estiver visível, adiciona a classe
      elemento.classList.add('ativo');
      //ativo = true
      // Se quiser rodar só uma vez e parar depois:
      
    }else {
      elemento.classList.remove('ativo')
      /* if(ativo == true) {
        window.removeEventListener('scroll', verificarVisibilidade)
        console.log('ativou')
      } */
    }

    if (posicao2.top < window.innerHeight && posicao2.bottom > 0) {
      // Se estiver visível, adiciona a classe
      elemento2.classList.add('ativo');
      //ativo = true
      // Se quiser rodar só uma vez e parar depois:
      
    }else {
      elemento2.classList.remove('ativo')
      /* if(ativo == true) {
        window.removeEventListener('scroll', verificarVisibilidade)
        console.log('ativou')
      } */
    }
  };

  // Aqui você adiciona o "listener" de scroll
window.addEventListener('scroll', verificarVisibilidade);
  
