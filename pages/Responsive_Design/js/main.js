$(document).ready(function() {
    $('.description__arrow').click(function(event) {
        $(this).toggleClass('active').next().slideToggle(300);
    })
})