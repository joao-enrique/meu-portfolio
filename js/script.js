/*======================== menu icon navbar ================================*/
let menuIcon = document.querySelector('#menu-icon');
let navBar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-x');
    navBar.classList.toggle('active');
};

/*======================== scroll section active link ================================*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id +']').classList.add('active');
            })
        };
    });

    /*======================== Sticky navbar ================================*/
    let header = document.querySelector('.header');

    header.classList.toggle('sticky', window.scrollY > 100);

    /*======================== remove menu icon navbar when click navbar link (scroll) ================================*/
    menuIcon.classList.remove('fa-x');
    navBar.classList.remove('active');
};

/*======================== Dark light mode ================================*/
let darkModeIcon = document.querySelector('#darkMode-icon');

darkModeIcon.onclick = () => {
    darkModeIcon.classList.toggle('fa-sun');
    darkModeIcon.classList.toggle('fa-moon');
    document.body.classList.toggle('dark-mode')
};