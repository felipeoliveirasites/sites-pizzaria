
  function verificarVisibilidadeCardapio() {
    const itens = document.querySelectorAll('.item-cardapio');
    itens.forEach(item => {
      const pos = item.getBoundingClientRect();
      if (pos.top < window.innerHeight && pos.bottom > 0) {
        item.classList.add('ativo');
      }
    });
  }

  window.addEventListener('scroll', verificarVisibilidadeCardapio);
  window.addEventListener('DOMContentLoaded', verificarVisibilidadeCardapio);

