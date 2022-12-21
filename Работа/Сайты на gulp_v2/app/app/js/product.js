$(document).ready(function () {
    // tabs
    function createTabs(tabsContainer, tabsItem, tabsLink) {
        $('.' + tabsContainer).each(function () {
            let ths = $(this);
            ths.find('.' + tabsItem).not(':first').hide();
            ths.find('.' + tabsLink).click(function () {
                ths.find('.' + tabsLink).removeClass('active').eq($(this).index()).addClass('active');
                ths.find('.' + tabsItem).hide().eq($(this).index()).fadeIn(50);
            }).eq(0).addClass('active');
        });
    }
    /* sort tabs */
    if ($(window).width() >= 575) {
        createTabs('sort__tabs', 'sort__item', 'sort__tabs-link');
    }
    // sort fromtabs
    if ($(window).width() <= 574) {
        $('.spoiler__body--fromtabs').toggleClass(' product-spoiler-hidden');
        $(document).on('click', '.spoiler__head--fromtabs', function (e) {
            $(this).parents('.spoiler--fromtabs').toggleClass("active").find('.spoiler__body--fromtabs').toggleClass(' product-spoiler-hidden');
        });
    }
    // pagSlider function
    function pagSlider(sliderName, pagContainer) {
        let slider = $('.' + sliderName);
        let pages = $('.' + pagContainer);
        slider.slick('slickGoTo', 0);
        slider.on('init', function () {
            pages.html('<span>' + i + '</span>' + '/' + slick.slideCount);
        });
        slider.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
            let i = (currentSlide ? currentSlide : 0) + 1;
            pages.html('<span>' + i + '</span>' + '  /  ' + slick.slideCount);
        });
    }
    /* prodocs slider */
    $('.prodocs__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        arrows: true,
        dots: false,
        appendArrows: $('.prodocs__slider-arrows'),
        prevArrow: '<button class="slick-prev slider__arrow--first" aria-label="Previous" type="button"><i class="_icon-arrow-left"></button>',
        nextArrow: '<button class="slick-next slider__arrow--first" aria-label="Next" type="button"><i class="_icon-arrow-right"></button>',
    });
    pagSlider('prodocs__slider', 'prodocs__slider-pags');
    // restruction product
    function productRestructMobile(){
        $('.produbs').appendTo('.mobile-tabs-area');
        $('.products__docspape').appendTo('.product-mobile-sidebar');
    }
    function productRestructDesktop(){
        $('.produbs').appendTo('.produbs-desktop');
        $('.products__docspape').appendTo('.products__docspape-desktop');
    }
    // 991
    if ($(window).width() < 991) {
        productRestructMobile();
    } else {
        productRestructDesktop();
    };
    // change orientation func
    window.addEventListener("orientationchange", function() {
        $(window).resize(function(){location.reload();});
    }, false);
    //
    if ($(window).width() < 575) {
        $('.produbs__box').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            arrows: true,
            dots: false,
            appendArrows: $('.produbs__box-arrows'),
            prevArrow: '<button class="slick-prev slider__arrow--first" aria-label="Previous" type="button"><i class="_icon-arrow-left"></button>',
            nextArrow: '<button class="slick-next slider__arrow--first" aria-label="Next" type="button"><i class="_icon-arrow-right"></button>',
        });
        pagSlider('produbs__box', 'produbs__box-pags');
        $('.analog__box').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: false,
            arrows: true,
            dots: false,
            appendArrows: $('.analog__box-arrows'),
            prevArrow: '<button class="slick-prev slider__arrow--first" aria-label="Previous" type="button"><i class="_icon-arrow-left"></button>',
            nextArrow: '<button class="slick-next slider__arrow--first" aria-label="Next" type="button"><i class="_icon-arrow-right"></button>',
        });
        pagSlider('analog__box', 'analog__box-pags');
    }
    if ($(window).width() < 991) {
        $('.analog .item').removeClass('item--list');
    }
    // showcase__
    $('.showcase__preview').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        fade: true,
        asNavFor: '.showcase__box',
        infinite: false,
    });
    $('.showcase__box').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: false,
        asNavFor: '.showcase__preview',
        dots: false,
        centerMode: false,
        focusOnSelect: true,
        prevArrow: '<button class="slick-prev slider__arrow--first" aria-label="Previous" type="button"><i class="_icon-arrow-left"></button>',
        nextArrow: '<button class="slick-next slider__arrow--first" aria-label="Next" type="button"><i class="_icon-arrow-right"></button>',
        appendArrows: $('.showcase__slider-arrows'),
    });
    // showcase__preview
    $('.showcase__preview-item').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true,
            tCounter: '%curr% из %total%'
        },
        mainClass: 'mfp-with-zoom mfp-img-mobile',
        zoom: {
            enabled: true,
            duration: 300, // don't foget to change the duration also in CSS
            opener: function(element) {
                return element.find('img');
            }
        },
    })
    // prodocs__item
    $('.prodocs__item-img').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true,
            tCounter: '%curr% из %total%'
        },
        mainClass: 'mfp-with-zoom mfp-img-mobile',
        zoom: {
            enabled: true,
            duration: 300, // don't foget to change the duration also in CSS
            opener: function(element) {
                return element.find('img');
            }
        },
    })
});