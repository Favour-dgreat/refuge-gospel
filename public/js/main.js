AOS.init({
    duration: 800,
    easing: "slide"
}), function(a) {
    "use strict";
    a(window).stellar({
        responsive: !0,
        parallaxBackgrounds: !0,
        parallaxElements: !0,
        horizontalScrolling: !1,
        hideDistantElements: !1,
        scrollProperty: "scroll"
    });
    var e = function() {
        a(".js-fullheight").css("height", a(window).height()), a(window).resize(function() {
            a(".js-fullheight").css("height", a(window).height());
        });
    };
    e();
    // loader
    var n = function() {
        setTimeout(function() {
            a("#ftco-loader").length > 0 && a("#ftco-loader").removeClass("show");
        }, 1);
    };
    n(), // Scrollax
    a.Scrollax();
    // Burger Menu
    var t = function() {
        a("body").on("click", ".js-fh5co-nav-toggle", function(e) {
            e.preventDefault(), a("#ftco-nav").is(":visible") ? a(this).removeClass("active") : a(this).addClass("active");
        });
    };
    t();
    var o = function() {
        a(document).on("click", '#ftco-nav a[href^="#"]', function(e) {
            e.preventDefault();
            a.attr(this, "href");
            a("html, body").animate({
                scrollTop: a(a.attr(this, "href")).offset().top - 70
            }, 500, function() {});
        });
    };
    o();
    var s = function() {
        a(".carousel slide").owlCarousel({
            loop: !0,
            autoplay: !0,
            margin: 0,
            animateOut: "fadeOut",
            animateIn: "fadeIn",
            nav: !1,
            autoplayHoverPause: !1,
            items: 1,
            navText: [ "<span class='ion-md-arrow-back'></span>", "<span class='ion-chevron-right'></span>" ],
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                1e3: {
                    items: 1
                }
            }
        });
    };
    s(), a("nav .dropdown").hover(function() {
        var e = a(this);
        // 	 timer;
        // clearTimeout(timer);
        e.addClass("show"), e.find("> a").attr("aria-expanded", !0), // $this.find('.dropdown-menu').addClass('animated-fast fadeInUp show');
        e.find(".dropdown-menu").addClass("show");
    }, function() {
        var e = a(this);
        // timer;
        // timer = setTimeout(function(){
        e.removeClass("show"), e.find("> a").attr("aria-expanded", !1), // $this.find('.dropdown-menu').removeClass('animated-fast fadeInUp show');
        e.find(".dropdown-menu").removeClass("show");
    }), a("#dropdown04").on("show.bs.dropdown", function() {
        console.log("show");
    });
    // scroll
    var i = function() {
        a(window).scroll(function() {
            var e = a(this), n = e.scrollTop(), t = a(".ftco_navbar"), o = a(".js-scroll-wrap");
            n > 150 && (t.hasClass("scrolled") || t.addClass("scrolled")), 150 > n && t.hasClass("scrolled") && t.removeClass("scrolled sleep"), 
            n > 350 && (t.hasClass("awake") || t.addClass("awake"), o.length > 0 && o.addClass("sleep")), 
            350 > n && (t.hasClass("awake") && (t.removeClass("awake"), t.addClass("sleep")), 
            o.length > 0 && o.removeClass("sleep"));
        });
    };
    i();
    var l = function() {
        a("#section-counter, .hero-wrap, .ftco-counter, .ftco-causes").waypoint(function(e) {
            if ("down" === e && !a(this.element).hasClass("ftco-animated")) {
                var n = a.animateNumber.numberStepFactories.separator(",");
                a(".number").each(function() {
                    var e = a(this), t = e.data("number");
                    console.log(t), e.animateNumber({
                        number: t,
                        numberStep: n
                    }, 7e3);
                });
            }
        }, {
            offset: "95%"
        });
    };
    l();
    var r = function() {
        var e = 0;
        a(".ftco-animate").waypoint(function(n) {
            "down" !== n || a(this.element).hasClass("ftco-animated") || (e++, a(this.element).addClass("item-animate"), 
            setTimeout(function() {
                a("body .ftco-animate.item-animate").each(function(e) {
                    var n = a(this);
                    setTimeout(function() {
                        var a = n.data("animate-effect");
                        "fadeIn" === a ? n.addClass("fadeIn ftco-animated") : "fadeInLeft" === a ? n.addClass("fadeInLeft ftco-animated") : "fadeInRight" === a ? n.addClass("fadeInRight ftco-animated") : n.addClass("fadeInUp ftco-animated"), 
                        n.removeClass("item-animate");
                    }, 50 * e, "easeInOutExpo");
                });
            }, 100));
        }, {
            offset: "95%"
        });
    };
    r(), // magnific popup
    a(".image-popup").magnificPopup({
        type: "image",
        closeOnContentClick: !0,
        closeBtnInside: !1,
        fixedContentPos: !0,
        mainClass: "mfp-no-margins mfp-with-zoom",
        // class to remove default margin from left and right side
        gallery: {
            enabled: !0,
            navigateByImgClick: !0,
            preload: [ 0, 1 ]
        },
        image: {
            verticalFit: !0
        },
        zoom: {
            enabled: !0,
            duration: 300
        }
    }), a(".popup-youtube, .popup-vimeo, .popup-gmaps").magnificPopup({
        disableOn: 700,
        type: "iframe",
        mainClass: "mfp-fade",
        removalDelay: 160,
        preloader: !1,
        fixedContentPos: !1
    });
}(jQuery);