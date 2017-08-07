'use strict';

function log(msg) {
    console.log(msg);
}
$(document).ready(function() {
    console.log('JS loaded');
    // $("#contact_btn").click(function(obj) {
    //     log(this.id + " clicked");
    // });
    $("#about_btn").click(function(obj) {
        log(this.id + " clicked");
        $('.parallax').animate({
            scrollTop: $("#group2").offset().top
        }, 1000);
    });
    $(".project_btn").click(function(obj) {
        log(this.id + " clicked");
        $('.parallax').animate({
            scrollTop: $("#group4").offset().top
        }, 1000);
    });
    $("#contact_btn").click(function(obj) {
        log(this.id + " clicked");
        $('.parallax').animate({
            scrollTop: $("#contact").offset().top + 4000
        }, 1000);
    });
});