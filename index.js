jQuery(function ($) {
    $('.btn').click(function (e) {
        e.preventDefault()
        $(this).toggleClass('open')
        $(this).find('.arrow').toggleClass('flipped');
        if ($(this).hasClass('flipped')){
            $(this).removeClass('flipped')
        }
    })
})
jQuery(function ($) {
    $('.btn').blur(function () {
        $(this).find('.arrow').toggleClass('flipped');
    })
})
