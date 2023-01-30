jQuery(function ($) {
    $('.btn').click(function () {
        $(this).toggleClass('open')
        $(this).find('.arrow').toggleClass('open');
    })
})