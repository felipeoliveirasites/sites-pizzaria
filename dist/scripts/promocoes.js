
  function animarPromocoes() {
    const promos = document.querySelectorAll('.promo-box');
    promos.forEach(promo => {
      const pos = promo.getBoundingClientRect();
      if (pos.top < window.innerHeight && pos.bottom > 0) {
        promo.classList.add('ativo');
      }
    });
  }

  window.addEventListener('scroll', animarPromocoes);
  window.addEventListener('DOMContentLoaded', animarPromocoes); // Ativa ao carregar

