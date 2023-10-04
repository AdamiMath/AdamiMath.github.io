let btnmobile = document.getElementById('btn-menu');

function toggleMenu(){
  const nav = document.getElementById('lista-menu');
  nav.classList.toggle('active');
}

btnmobile.addEventListener('click', toggleMenu);