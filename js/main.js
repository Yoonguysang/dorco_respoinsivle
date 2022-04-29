$(function() {

    $('.slide1').on('click', function() {
        $('.item_1').removeClass('none').siblings().addClass('none');
    });
    $('.slide2').on('click', function() {
        $('.item_2').removeClass('none').siblings().addClass('none');
    });
    $('.slide3').on('click', function() {
        $('.item_3').removeClass('none').siblings().addClass('none');
    });


})