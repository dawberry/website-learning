const drawerBtn = document.querySelector('.drawer-btn');
const mobileNav = document.querySelector('.mobile-nav');
const overlay = document.querySelector('.overlay');

drawerBtn.addEventListener('click', function(){
    mobileNav.classList.remove('hidden');
    overlay.classList.remove('hidden');
});
overlay.addEventListener('click', function(){
    mobileNav.classList.add('hidden');
    overlay.classList.add('hidden');
});