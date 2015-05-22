$(document).ready(function() {
    $('.home-slider').hide();
    $(".logot").hide();
    $(".logot").fadeIn(3000);
    $(".home-slider").fadeIn(700);
    $(window).scroll(function(){
        if ($(this).scrollTop() > 100){
            $(".main-nav").css("opacity", "0.9");
        }
        else if ($(this).scrollTop() < 100){
            $(".main-nav").css("opacity", "1.0");
        }
    });
});