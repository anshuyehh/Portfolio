
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
navbar.classList.toggle('active');
});

var typed = new Typed('#element', {
            strings: ['an Engineering Student', 'a Web Developer ','a Coding Enthusiast'],
            typeSpeed: 50,
        });