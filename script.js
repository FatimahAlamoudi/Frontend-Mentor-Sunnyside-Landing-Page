
const menuBtn = document.querySelector('.menu-btn');
const navItems = document.querySelector('.nav-items');
const contactBtn = document.getElementById('contactBtn');


menuBtn.addEventListener('click', () =>{
   if(navItems.classList.contains('hidden')){
      navItems.classList.toggle('mobile-nav-position');
     contactBtn.classList.toggle('btn-mobile');
   }
  
})
