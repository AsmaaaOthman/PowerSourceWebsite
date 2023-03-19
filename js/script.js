$(document).ready(function(){
    $(".navbar-toggler").click(function(){
        $(".shopping-card").removeClass("shoppingToggle")
        $(".home-content").animate({"right":"-100%"},500)
        $(this).toggleClass("close")
    });

    // Product list show
    $("#btnToggel").click(function(){
        $(".product-list").toggleClass("navShow")
    })

    // Logos Client
    $('#partner .owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:2
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    })

    // wow.js
    new WOW().init();
})