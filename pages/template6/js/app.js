window.addEventListener('scroll', e => {
    document.body.style.cssText += `--scrollTop: ${this.scrollY}px`
})

// Плавний скрол
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
ScrollSmoother.create({
    wrapper: '.wrapper',
    content: '.content'
})

$(document).ready(function() {
    $('.description__arrow').click(function(event) {
        $(this).toggleClass('active').next().slideToggle(300);
    })
})