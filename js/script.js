window.onload = function() {
    AOS.init();
}

$(document).ready(function() {
    // 위로가기 기능
    $('.gotop').click(function() {
        $('html, body').animate({
            scrollTop: 0
        });
    });
    //  상단 주메뉴 배경 관련
    var header = $('.header');

    $(window).scroll(function() {

        var scy = $(window).scrollTop();
        if (scy > 0) {
            header.addClass('header-active');
        } else {
            header.removeClass('header-active');
        }
    });

    // 상단 주메뉴 포커스 관련
    var gnb_id = [];
    var gnb_pos = [];
    var gnb_a = $('.gnb a');
    var gnb_a_em = gnb_a.find('em');

    $.each(gnb_a, function(index, item) {
        gnb_id[index] = $(this).attr('href');
    });

    for (var i = 0; i < gnb_id.length; i++) {
        var temp = $(gnb_id[i]).offset().top - 80;
        gnb_pos[i] = temp;

    }
    var gnb_total = gnb_pos.length;
    var gnb_focus = 0;


    $(window).scroll(function() {
        var scy = $(window).scrollTop();
        if (scy < gnb_pos[0]) {
            gnb_a_em.removeClass('gnb-focus');
            gnb_focus = 0;
        } else if (scy >= gnb_pos[gnb_pos.length - 1] - 200) {
            gnb_a_em.removeClass('gnb-focus');
            gnb_a_em.eq(gnb_total - 1).addClass('gnb-focus');
        } else {
            for (var i = 0; i < gnb_total; i++) {
                if (scy <= gnb_pos[i]) {
                    break;
                }
            }
            $.each(gnb_a, function(index, item) {
                gnb_a_em.removeClass('gnb-focus');
                gnb_a_em.eq(i - 1).addClass('gnb-focus');
            });
        }
    });
    // photoshop_성취율
    var photoshop = new ProgressBar.Line(skill_photoshop, {
        strokeWidth: 4,
        easing: 'easeInOut',
        duration: 1400,
        color:'#483434',
        trailColor: '#C2B8A3',
        trailWidth: 10,
        svgStyle: {
            width: '100%',
            height: '100%'
        },
        from: {
            color: '#483434'
        },
        to: {
            color: '#483434'
        },
        step: (state, bar) => {
            bar.path.setAttribute('stroke', state.color);
        }
    });



    // illust 성취율
    var illust = new ProgressBar.Line(skill_illust, {
        strokeWidth: 4,
        easing: 'easeInOut',
        duration: 1400,
        color:'#483434',
        trailColor: '#C2B8A3',
        trailWidth: 10,
        svgStyle: {
            width: '100%',
            height: '100%'
        },
        from: {
            color: '#483434'
        },
        to: {
            color: '#483434'
        },
        step: (state, bar) => {
            bar.path.setAttribute('stroke', state.color);
        }
    });


    var indesign = new ProgressBar.Line(skill_Indesign, {
        strokeWidth: 4,
        easing: 'easeInOut',
        duration: 1400,
        color:'#483434',
        trailColor: '#C2B8A3',
        trailWidth: 10,
        svgStyle: {
            width: '100%',
            height: '100%'
        },
        from: {
            color: '#483434'
        },
        to: {
            color: '#483434'
        },
        step: (state, bar) => {
            bar.path.setAttribute('stroke', state.color);
        }
    });

    var html = new ProgressBar.Line(skill_Html, {
        strokeWidth: 4,
        easing: 'easeInOut',
        duration: 1400,
        color:'#483434',
        trailColor: '#C2B8A3',
        trailWidth: 10,
        svgStyle: {
            width: '100%',
            height: '100%'
        },
        from: {
            color: '#483434'
        },
        to: {
            color: '#483434'
        },
        step: (state, bar) => {
            bar.path.setAttribute('stroke', state.color);
        }
    });


    // css 성취율
    var css = new ProgressBar.Line(skill_Css, {
        strokeWidth: 5,
        easing: 'easeInOut',
        duration: 1400,
        color:'#483434',
        trailColor: '#C2B8A3',
        trailWidth: 10,
        svgStyle: {
            width: '100%',
            height: '100%'
        },
        from: {
            color: '#483434'
        },
        to: {
            color: '#483434'
        },
        step: (state, bar) => {
            bar.path.setAttribute('stroke', state.color);
        }
    });


    var jquery = new ProgressBar.Line(skill_Jquery, {
        strokeWidth: 4,
        easing: 'easeInOut',
        duration: 1400,
        color:'#483434',
        trailColor: '#C2B8A3',
        trailWidth: 10,
        svgStyle: {
            width: '100%',
            height: '100%'
        },
        from: {
            color: '#483434'
        },
        to: {
            color: '#483434'
        },
        step: (state, bar) => {
            bar.path.setAttribute('stroke', state.color);
        }
    });

    $(window).scroll(function() {
        // 스크롤바의 위치 값
        var scY = $(window).scrollTop();

        if (scY > 800) {
            // 애니메이션 실행
            photoshop.animate(0.9);
            illust.animate(0.8);
            indesign.animate(0.5);
            html.animate(0.75);
            css.animate(0.7);
            jquery.animate(0.3);
        } else {
            // 원래모습으로 돌리기
            photoshop.set(0.0);
            illust.set(0.0);
            indesign.set(0.0);
            html.set(0.0);
            css.set(0.0);
            jquery.set(0.0);
        }

    });





    // 리디자인 슬라이드
    var sw_rede = new Swiper('.sw-rede', {
        slidesPerView: 1,
        loop: true,
        spaceBetween: 10,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: ".sw-rede-next",
            prevEl: ".sw-rede-prev",
        },
        pagination: {
            el: ".sw-rede-pg",
            type: "fraction",
        },
    });

    var rede_list_a = $('.rede-list li a');
    $.each(rede_list_a, function(index, item) {
        $(this).click(function(e) {

            e.preventDefault();
            sw_rede.slideTo(index + 1)
        })
    })

    //퍼블리싱 슬라이드
    new Swiper('.sw-publish', {
        slidesPerView: 4,
        loop: true,
        spaceBetween: 30,
        navigation: {
            nextEl: ".sw-link-next",
            prevEl: ".sw-link-prev",
        },
        pagination: {
            el: ".sw-link-pg",
            type: "fraction",
        },
    });


    // new Swiper('.sw-link-control', {
    //     slidesPerView: 3,
    //     slidesPerGroup: 3,
    //     spaceBetween: 16,
    //     navigation: {
    //         nextEl: ".sw-link-next",
    //         prevEl: ".sw-link-prev",
    //     },
    //     pagination: {
    //         el: ".sw-link-pg",
    //         type: "fraction",
    //     },
    // });

    // 부드럽게 위치 이동하는 코드
    var moveEl = $('.move');
    // 클릭시 해당위치로 부드럽게 이동한다.
    $.each(moveEl, function() {

        $(this).click(function(e) {
            // href 를 일단 막아서 위치이동 못하게함.
            e.preventDefault();
            // 가야하는 곳의 위치를 파악한다.
            var tg = $(this).attr('href');
            var num;
            // 혹시 #아이디 가 없다면
            if (tg == '#') {
                num = 0;
            } else {
                // 어느 만큼 이동해야 하는 지를 숫자로 파악한다.
                num = $(tg).offset().top;
            }

            // 움직이자
            $('html, body').stop().animate({
                scrollTop: num
            }, 500);
        });
    });

    // 스크롤시 애니메이션 
    $('.about-main-chart').waypoint(function(dir) {
        if (dir == "down") {
            $('.about-main-chart').addClass('about-main-chart-active ');
        } else {
            $('.about-main-chart').removeClass('about-main-chart-active ');
        }
    }, {
        offset: '80%'
    });

    lightbox.option({
        'resizeDuration': 200,
        'wrapAround': true
    })

});