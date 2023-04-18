$(document).ready(function () {
    $('ul li').has('ul').addClass('hassub');
    $(".hassub").append("<span class='mobile_nav'><img src='images/menu-arrow.png'/ alt='arrow'></span>"),
        $('.mobile_nav').click(function () {
            $(this).parent().find('ul').slideToggle(),
                $(this).parent().find('.main-sub').slideToggle(),
                $(this).parent().toggleClass("expand-in")
        });
});  


