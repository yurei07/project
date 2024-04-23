const iconMenu = document.querySelector ('.menu');
if (iconMenu){
    const menuNav = document.querySelector ('.nav');
    iconMenu.addEventListener("click", function(e) {
        document.body.classList.toggle('lock')
        iconMenu.classList.toggle('active')
        menuNav.classList.toggle('active')
    });
} 