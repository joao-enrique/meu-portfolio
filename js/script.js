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

/*======================== scroll reveal ================================*/
ScrollReveal({ 
    reset: true,
    distance: '80px',
    duration: 200,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top'});
ScrollReveal().reveal('.home-img img, .services-container, portfolio-box, .contact form', { origin: 'bottom'});
ScrollReveal().reveal('.home-content h1, .about-img img', { origin: 'left'});
ScrollReveal().reveal('.home-content h3, home-content p, .about-content', { origin: 'right'});

/*======================== MODAIS DOS SERVIÇOS ================================*/
const modals = document.querySelectorAll('.modal');
const closeBtns = document.querySelectorAll('.close');

// Abre modal correto conforme o botão clicado
document.querySelectorAll('.services-box .btn').forEach((btn, index) => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    if (index === 0) document.getElementById('modal-web').style.display = 'flex';
    if (index === 1) document.getElementById('modal-app').style.display = 'flex';
    if (index === 2) document.getElementById('modal-games').style.display = 'flex';
  });
});

// Fecha modal ao clicar no X
closeBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    btn.closest('.modal').style.display = 'none';
  });
});

// Fecha modal ao clicar fora do conteúdo
window.addEventListener('click', (e) => {
  modals.forEach(modal => {
    if (e.target === modal) modal.style.display = 'none';
  });
});