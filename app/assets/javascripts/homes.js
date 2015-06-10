function hello() {
    $('.hello').delay(2000).fadeOut(1000);
}
$(document).ready(function(){
    $('.logoslogan').hide();
    $('.helloslogan').hide();
    if (window.location.pathname == BASE_URL) {
        $('body').css("padding-top", "0px");
        $(".main-footer").hide();
        $('.hello').css("display", "block");
        $('.logoslogan').delay(300).fadeIn(1000);
        $('.helloslogan').delay(500).fadeIn(1000);
        hello();
    }
});