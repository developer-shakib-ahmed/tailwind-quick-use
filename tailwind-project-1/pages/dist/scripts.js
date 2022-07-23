const btn = document.getElementById('menu-toggle');
const nav = document.getElementById('navbar');

btn.addEventListener('click', function(e){
  btn.children[0].classList.toggle('hidden');
  btn.children[1].classList.toggle('hidden');
  nav.classList.toggle('active');
});