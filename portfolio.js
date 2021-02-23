$(document).ready(function () {
    $(window).scroll(function () {
        if (this.scrollY > 20) {
            $('.navbar').addClass('sticky');
        } else {
            $('.navbar').removeClass('sticky');
        }
    });
    // toggle menu/nav
    $('.menu-btn').click(function () {
        $('.navvar .menu').toggleClass('.active')
    })
});
// typing animation
var typed = new Typed(".typing", {
    strings: ["Immigrant", "Extrovert", "Team Player", "Go Getter", "Software Engineer"],
    typeSpeed: 30,
    backSpeed: 20,
    loop: true
});
// owl carousel script
$('.carousel').owlCarouse1({
    margin: 20,
    loop: true,
    autoplayTimeOut: 2000,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1,
            nav: false
        },
        600: {
            items: 2,
            nav: false
        },
        1000: {
            items: 3,
            nav: false
        },
        1400: {
            items: 4,
            nav: false
        },
        2000: {
            items: 5,
            nav: false
        }
    }
})