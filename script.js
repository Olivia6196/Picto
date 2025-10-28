function toggleMenu() {
    const hamburger =
    document.querySelector('.hamburger');
    const navlinks =
    document.querySelector('.navlinks');

    hamburger.classList.toggle('active');
    navlinks.classList.toggle('active');
}