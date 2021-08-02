window.addEventListener("load", function(){
        
    jQuery(document).ready(function($){
        "use scrict";

        $("body").addClass("preloader-disabled");

    });

});

jQuery(document).ready(function ($) {
    "use strict";
    $(function () {
        $('#mainslider').slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 12000,
            infinite: true,
            nextArrow: '<i class="slick-nav-arrow slick-slide-next arrow_carrot-right"></i>',
            prevArrow: '<i class="slick-nav-arrow slick-slide-prev arrow_carrot-left"></i>',
            responsive: [
                {
                    breakpoint: 1600,
                    settings: {
                        slidesToShow: 4
                    }
                },
                {
                    breakpoint: 1400,
                    settings: {
                        slidesToShow: 3
                    }
                },
                {
                    breakpoint: 1199,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1
                    }
                }
            ]
        })
            .on('setPosition', function (event, slick) {
                slick.$slides.css('height', slick.$slideTrack.height() + 'px');
            });

        $('.carousel-slider').slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 12000,
            infinite: true,
            nextArrow: '<i class="slick-nav-arrow slick-slide-next arrow_carrot-right"></i>',
            prevArrow: '<i class="slick-nav-arrow slick-slide-prev arrow_carrot-left"></i>',
            responsive: [
                {
                    breakpoint: 1600,
                    settings: {
                        slidesToShow: 4
                    }
                },
                {
                    breakpoint: 1400,
                    settings: {
                        slidesToShow: 3
                    }
                },
                {
                    breakpoint: 1199,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1
                    }
                }
            ]
        })
            .on('setPosition', function (event, slick) {
                slick.$slides.css('height', slick.$slideTrack.height() + 'px');
            });

        $('.popular-slider').slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 12000,
            infinite: true,
            nextArrow: '<i class="slick-nav-arrow slick-slide-next arrow_carrot-right"></i>',
            prevArrow: '<i class="slick-nav-arrow slick-slide-prev arrow_carrot-left"></i>',
            responsive: [
                {
                    breakpoint: 1600,
                    settings: {
                        slidesToShow: 4
                    }
                },
                {
                    breakpoint: 1400,
                    settings: {
                        slidesToShow: 3
                    }
                },
                {
                    breakpoint: 1199,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1
                    }
                }
            ]
        });

        $(".gallery-columns-1, ul.wp-block-gallery.columns-1, .wp-block-gallery.columns-1 .blocks-gallery-grid").each(function () {
            $(this).slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                fade: true,
                autoplay: true,
                autoplaySpeed: 8000,
                infinite: true,
                dots: true,
                nextArrow: '<i class="nav icon-right"></i>',
                prevArrow: '<i class="nav icon-left"></i>',
            });
        });

    });

    $(function () {
        $('.icon-search').on('click', function (event) {
            $('body').toggleClass('united-model');
            $('body').addClass('window-scroll-locked');
            setTimeout(function () { 
                $('.model-search-wrapper .search-field').focus();
            }, 300);
            
        });
        $('.cross-exit').on('click', function (event) {
            $('body').removeClass('united-model');
            $('body').removeClass('window-scroll-locked');
            $('.icon-search').focus();
        });

        $(document).keyup(function(j) {
            if (j.key === "Escape") {
                $('body').removeClass('united-model');
                $('body').removeClass('window-scroll-locked');
                $('.icon-search').focus();
            }
        });

        $('.searchbar-skip-link').focus(function(){
            $('.model-search .search-submit').focus();
        });

        $('.searchbar-skip-link-end').focus(function(){
            $('.cross-exit').focus();
        });

    });

    $(function () {
        $('.widget-area').theiaStickySidebar({
            additionalMarginTop: 30
        });
    });

    $(function () {
        $('#responsive-menu-button').sidr({
            name: 'sidr-main',
            side: 'left',
            source: '#top-menu'
        });
    });

    $(function () {
        $('#js-news').ticker({
            speed: 0.20,
            controls: true,
            titleText: '',
            displayType: 'reveal',
            direction: 'ltr',
            pauseOnItems: 2000,
            fadeInSpeed: 600,
            fadeOutSpeed: 300
        });
    });

    $("div.zoom-gallery,.site .gallery, .wp-block-gallery").each(function () {
        $(this).magnificPopup({
            delegate: 'a',
            type: 'image',
            closeOnContentClick: false,
            closeBtnInside: false,
            mainClass: 'mfp-with-zoom mfp-img-mobile',
            image: {
                verticalFit: true,
                titleSrc: function (item) {
                    return item.el.attr('title');
                }
            },
            gallery: {
                enabled: true
            },
            zoom: {
                enabled: true,
                duration: 300,
                opener: function (element) {
                    return element.find('img');
                }
            }
        });
    });

    $(function(){
        $(window).scroll(function(){
            if ($(window).scrollTop() > $(window).height() / 2) {
                $("#scroll-up").fadeIn(300);
            } else {
                $("#scroll-up").fadeOut(300);
            }
        });
    });

    $(function(){
        $("#scroll-up").on("click", function () {
            $("html, body").animate({
                scrollTop: 0
            }, 800);
            return false;
        });
    });

});