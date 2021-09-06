$ = document
const dropdownMenu = $.getElementById('checkbox-menu');

function toggleMenu(){
    const nav = $.getElementById('nav');
    nav.classList.toggle('active');
}

dropdownMenu.addEventListener('click', toggleMenu);
dropdownMenu.addEventListener('touchstart', toggleMenu);