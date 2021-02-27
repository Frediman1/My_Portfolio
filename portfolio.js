$(document).ready(function () {
    $(window).scroll(function () {
        if (this.scrollY > 20) {
            $('.navbar').addClass('sticky');
        } else {
            $('.navbar').removeClass('sticky');
        }
    });
    // // toggle menu/nav
    // $('.menu-btn').click(function () {
    //     $('.navvar .menu').toggleClass('.active')
    // })
});
// typing animation
var typed = new Typed(".typing", {
    strings: [" An Immigrant", " An Extrovert", " A Team Player", "An Influential Communicator", " A Software Engineer"],
    typeSpeed: 30,
    backSpeed: 20,
    loop: true
});
