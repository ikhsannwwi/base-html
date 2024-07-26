window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar-container');
    if (window.scrollY > 40) { // Change this value based on when you want the color change to happen
        navbar.classList.add('navbar-scrolled');
    } else {
        navbar.classList.remove('navbar-scrolled');
    }
});
$(document).ready(function () {
    $('.nav-icon').click(function () {
        $('.navbar-container').toggleClass('hidden')
        $('.navbar-overlay').toggleClass('open')
        $('.nav-icon').toggleClass('open')
        $('.nav-icon').toggleClass('active')
    })
    $('.nav-icon.open.active').click(function () {
        $('.navbar-overlay').toggleClass('close')
        $('.navbar-container').removeClass('hidden')
        $('.nav-icon').removeClass('close')
        $('.nav-icon').removeClass('active')
    })
})