/*========== toggle icon navbar ==========*/ 

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onClick = () => {
    menuIcon.classList.toggle('fa-x');
    navbar.classList.toggle('active');
}

/*========== scroll section active link ==========*/ 

let sections = document.querySelector('section');
let navLinks = document.querySelector('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach.apply(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classlist.add('active');
            });
        };
    });
}

/*========== scroll section active link ==========*/ 
