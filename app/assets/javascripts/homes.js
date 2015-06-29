function hello() {
    $('.hello').delay(2000).fadeOut(500);
}
function shower() {
    hideinfo();
    $('.thirdpos').css("background-color", "white");
    $('.firstpos').css("background-color", "#e5e5e5");
    $("#si1").show();
    showinfo();
    $("#si2").show(function(){
        hider();
    });
}
function hider(){
    $("#si1").delay(7000).fadeOut(function(){
        hideinfo();
        $('.firstpos').css("background-color", "white");
        $('.secondpos').css("background-color", "#e5e5e5");
        showinfo();
        $("#si2").delay(7000).fadeOut(function(){
            hideinfo();
            $('.secondpos').css("background-color", "white");
            $('.thirdpos').css("background-color", "#e5e5e5");
            showinfo();
            setTimeout(shower, 7000);
        });
    });
}
function hideinfo() {
    $('.servicename').hide();
    hidecircles();
    $('.servicedescription').hide();
    $('.serviceprice').hide();
    $('.servicereadmore').hide();
    $('.serviceorder').hide();
}
function afterfirstshowcircles() {
    $('.firstpic').delay(200).fadeIn(500);
    $('.secondpic').delay(200).fadeIn(500);
    $('.thirdpic').delay(200).fadeIn(500);
    $('.fourthpic').delay(200).fadeIn(500);
}
function showinfo() {
    afterfirstshowcircles();
    $('.servicename').delay(200).fadeIn(500);
    $('.servicedescription').delay(500).fadeIn(500);
    $('.serviceprice').delay(800).fadeIn(500);
    $('.servicereadmore').delay(1100).fadeIn(500);
    $('.serviceorder').delay(1200).fadeIn(500);
}
function hideunnecessary() {
    $('.wrapperhome').hide();
    $('.locationbuttons').hide();
    $('.logoslogan').hide();
    $('.helloslogan').hide();
    $('.servicename').hide();
    $('.servicedescription').hide();
    hidecircles();
    $('.serviceprice').hide();
    $('.servicereadmore').hide();
    $('.serviceorder').hide();
}
function hidecircles() {
    $('.firstpic').hide();
    $('.secondpic').hide();
    $('.thirdpic').hide();
    $('.fourthpic').hide();
}
function firstshowcircles() {
    $('.firstpic').delay(2500).fadeIn(700);
    $('.secondpic').delay(2600).fadeIn(700);
    $('.thirdpic').delay(2600).fadeIn(700);
    $('.fourthpic').delay(2700).fadeIn(700);
}
function firstlaunch() {
    $('.locationbuttons').delay(2500).fadeIn(500);
    $('.firstpos').css("background-color", "#e5e5e5");
    firstshowcircles();
    $('.servicename').delay(2500).fadeIn(500);
    $('.servicedescription').delay(2500).fadeIn(700);
    $('.serviceprice').delay(2900).fadeIn(700);
    $('.servicereadmore').delay(3500).fadeIn(700);
    $('.serviceorder').delay(3500).fadeIn(700);
}
$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip(
    { 'delay': { show: 300}}
    );
    hideunnecessary();
    $('.wrapperhome').delay(1000).fadeIn(500);
    firstlaunch();
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