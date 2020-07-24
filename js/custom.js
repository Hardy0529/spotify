$(document).ready(function() {

    //緩慢滑動
    $(document).on('click', 'a', function (event) {
        // event.preventDefault();
        $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
        }, 500);
    });

    $(document).ready(function() {
        $('.owl-carousel').owlCarousel({
            loop: true,
            nav: true,
            items: 1,
            navText: [],
            autoplay: true,
            autoplaySpeed: 1000,
            smartSpaeed: 500
        })
    });


})