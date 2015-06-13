function hello() {
    $('.hello').delay(2000).fadeOut(500);
}
function shower() {
    $("#si1").show();
    $("#si2").show(function(){
        hider();
    });
}
function hider(){
    $("#si1").delay(5000).fadeOut(function(){
        $("#si2").delay(5000).fadeOut(function(){
            setTimeout(shower, 5000);
        });
    });
}
$(document).ready(function(){
    $('.logoslogan').hide();
    $('.helloslogan').hide();
    if (window.location.pathname == BASE_URL) {
        $('body').css("padding-top", "0px");
        $(".main-footer").hide();
        $('.hello').css("display", "block");
        $('.logoslogan').delay(300).fadeIn(500);
        $('.helloslogan').delay(600).fadeIn(300);
        hello();
        setTimeout(hider, 5000);
    }
});