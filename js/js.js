$(document).ready(function () {
    // $("#click").click(function (){
    //     $('html, body').animate({
    //         scrollTop: 1000
    //     }, 2000);
    // });
    $("ul li:nth-child(1) a").on('click', function (event) {
        event.preventDefault();
        /* Act on the event */
        $('html, body').animate({
            scrollTop: $('.chapter1').offset().top - 50
        }, 2000);
    });
    $("ul li:nth-child(2) a").on('click', function (event) {
        event.preventDefault();
        /* Act on the event */
        $('html, body').animate({
            scrollTop: $('.chapter2').offset().top - 50
        }, 2000);
    });
    $("ul li:nth-child(3) a").on('click', function (event) {
        event.preventDefault();
        /* Act on the event */
        $('html, body').animate({
            scrollTop: $('.chapter3').offset().top - 50
        }, 2000);
    });
    $(".backtotop").on('click', function (event) {
        event.preventDefault();
        /* Act on the event */
        $('html, body').animate({
            scrollTop: 0
        }, 1000);
    });

    $(window).scroll(function (event) {
        var vitri = $(window).scrollTop();
        console.log(vitri)
        if (vitri >= 100) {
            document.getElementById("backtotop").style.display = "block";
        } else {
            document.getElementById("backtotop").style.display = "none";
        }
    });
});
