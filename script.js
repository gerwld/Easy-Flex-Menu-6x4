let mobileMenuBtn = document.querySelector('.mobile-menu');
let flexboxMenu = document.querySelector('.flexbox-menu');

mobileMenuBtn.onclick = function(){
  flexboxMenu.classList.toggle('open');
}
