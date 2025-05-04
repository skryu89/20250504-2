$(function() {
    $('.square').hide();

    $(window).scroll(function() {
        if ($(this).scrollTop() > 300) {
            $('.square').fadeIn();
        } else {
            $('.square').fadeOut();
        }
    });

    $('.square').click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 500);
    });
});