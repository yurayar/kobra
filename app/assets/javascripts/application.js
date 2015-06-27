// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require bootstrap-sprockets
//= require jquery-ui
//= require_tree .

$(document).ready(function() {
    $(window).scroll(function(){
        if ($(this).scrollTop() > 100){
            $(".main-nav").css("opacity", "1.0");
        }
        else if ($(this).scrollTop() < 100){
            $(".main-nav").css("opacity", "1.0");
        }
    });
    $(".service").mouseenter(function(){
        $(this).css("color", "red");
    });
    $(".service").mouseleave(function(){
        $(this).css("background-color", "white");
    });
    $('.btn-logo').onclick(function(){
        $('.hello').css("display", "none");
    });
});