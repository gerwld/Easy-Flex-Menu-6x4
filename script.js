
let mobileBtn = document.querySelector('.mobile-menu');
let menu = document.querySelector('.flexbox-menu'); 

mobileBtn.onclick = function(){
  menu.classList.toggle('open');
  if(menu.classList.contains('open')) {
    mobileBtn.textContent = '✕ Menu';
  } else mobileBtn.textContent = '☰ Menu';
}
