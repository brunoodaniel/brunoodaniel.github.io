document.getElementById('hamburguer').addEventListener('click', function() {
  const menu = document.querySelector('.menuzinho');
  const outrasSecoes = document.querySelectorAll('#informações, main, footer');
  
  // Altere a lógica para adicionar/remover a classe 'open'
  if (menu.classList.contains('open')) {
      menu.classList.remove('open');
      outrasSecoes.forEach(secao => {
          secao.style.marginLeft = '0';
      });
  } else {
      menu.classList.add('open');
      outrasSecoes.forEach(secao => {
          secao.style.marginLeft = '250px';
      });
  }
});

document.getElementById('info-link').addEventListener('click', function() {
  const menu = document.querySelector('.menuzinho');
  const outrasSecoes = document.querySelectorAll('#informações, main, footer');
  menu.classList.remove('open');
  outrasSecoes.forEach(secao => {
      secao.style.marginLeft = '0';
  });
});