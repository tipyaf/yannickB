/**
 * Created by ya on 15/04/16.
 */
$(function () {

    $('.md-trigger').on('click', function() {
        $('.md-modal').addClass('md-show');

    });

    $('.md-close').on('click', function() {
        $('.md-modal').removeClass('md-show');
    });

});