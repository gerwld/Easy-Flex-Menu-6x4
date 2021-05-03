let mobileMenuBtn = document.querySelector('.mobile-menu');
let flexboxMenu = document.querySelector('.flexbox-menu');

mobileMenuBtn.onclick = function(){
  flexboxMenu.classList.toggle('open');
  if(flexboxMenu.classList.contains('open')) {
    mobileMenuBtn.textContent = '× Menu';
  } else mobileMenuBtn.textContent = '☰ Menu';
}
