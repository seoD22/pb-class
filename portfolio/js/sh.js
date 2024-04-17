$(document).ready(function(){

  // 햄버거 버튼
  const html = document.querySelector('html');
  const hamBtn = document.querySelector('header .ham');

  hamBtn.addEventListener('click', () => {
    html.classList.toggle('menuOpen');
  })

  // 헤더 섹션 이동
  $('header .menu li').click(function () {
    let idx = $(this).index();
    // console.log(idx);
    gsap.to(window,{
        scrollTo: {
            y: $('section.move_sec').eq(idx),
            offsetY: 0
        },
        duration: 1,
        ease: 'power2.inOut'
    })
    
  });

  // 헤더 색상 변경
  ScrollTrigger.matchMedia({
    '(min-width: 801px)': function(){
      $(window).scroll(function() {
        $('.inv_').each(function() {
          var sectionTop = $(this).offset().top - 300;
          var sectionBottom = sectionTop + $(this).outerHeight();
          var windowTop = $(window).scrollTop();
          var windowBottom = windowTop + $(window).height();
  
          if (windowBottom > sectionTop && windowTop < sectionBottom) {
            $('header').addClass('invert');
          } else {
            $('header').removeClass('invert');
          }
        });
      });
    },
    '(max-width: 800px)': function(){
      $(window).scroll(function() {
        $('.inv_').each(function() {
          var sectionTop = $(this).offset().top - 300;
          var sectionBottom = sectionTop + $(this).outerHeight();
          var windowTop = $(window).scrollTop();
          var windowBottom = windowTop + $(window).height();
  
          if (windowBottom > sectionTop && windowTop < sectionBottom) {
            $('header').addClass('invert');
          } else {
            $('header').removeClass('invert');
          }
        });
      });
    }
  })

      const s01 = document.querySelector('section._01');
      const s01_dtSpan = document.querySelector('section._01 dt span');

      ScrollTrigger.create({
        trigger: s01,
        pin: true,
        // markers:true,
        start: "top top",
        end: "+=130%",
      });
      gsap.to(s01_dtSpan, {
        scrollTrigger: {
          trigger: s01_dtSpan,
          start: "top top",
          end: "bottom+=800% center",
          scrub: 1,
          // markers:true,
        },
        x: 0, 
      });

      // sec_03
      ScrollTrigger.create({ // sticky
        trigger: "section._03 .cont-group",
        start: "center center",
        endTrigger: 'section._03',
        end: '600%',
        pin: true,
        pinSpacing : false,
        scrub: 1,
        // markers: true,
        invalidateOnRefresh: true,
      });

      // sec04
      ScrollTrigger.create({ // sticky
        trigger: "section._04 .pin_txt",
        start: "center center",
        endTrigger: 'section._04',
        end: 'bottom-=10% top+=30%',
        pin: true,
        pinSpacing : false,
        scrub: 1,
        // markers: true,
        invalidateOnRefresh: true,
      });

      gsap.to("section._04 .pin_txt", {
        scrollTrigger: {
          trigger: "section._04",
          start: "center-=40% bottom",
          end: "center top",
          scrub: 1,
          // markers:true,
        },
        opacity: 1,
      });

      
  // 퀵, 헤더 색상 변경
  $('section._05').each(function (idx, item) {
    ScrollTrigger.create({
      trigger: item,
      start: 'top center',
      end: 'bottom center',
      // markers: true,
      toggleClass: { targets: $('section._05'), className: "on" },
    });
  });

  ScrollTrigger.matchMedia({
    '(min-width: 430px)': function(){
      // sec_03
      ScrollTrigger.create({ // sticky
        trigger: "section._03 .marquee_group",
        start: "center center",
        endTrigger: 'section._03',
        end: 'bottom top',
        pin: true,
        pinSpacing : false,
        scrub: 1,
        // markers: true,
        invalidateOnRefresh: true,
      });

      const body = document.querySelector('body');
      const s03_conBox = document.querySelector('section._03 .cont-group');
      const s03_spBg = document.querySelector('section._03 .sp_bg');
      const s03_border = document.querySelector('section._03 .img-border');
      const s03_h3 = document.querySelector('section._03 .h3_box h3');
      const s03_mq01 = document.querySelector('section._03 .marquee._01');
      const s03_mq02 = document.querySelector('section._03 .marquee._02');
      const s03_mq03 = document.querySelector('section._03 .marquee._03');

      let s03_timeline = gsap.timeline({
        scrollTrigger: {
          trigger: 'section._03',
          start: 'top top',
          end: '100%',
          // pin: true,
          scrub: 1,
          ease: 'none',
          // markers: true,
          invalidateOnRefresh: true,
        },
      });

      s03_timeline
      .set(s03_mq01, {xPercent: 100})
      .set(s03_mq02, {xPercent: -200})
      .set(s03_mq03, {xPercent: 100})

      .addLabel("label_01")
      .to(body, {backgroundColor: '#161616'}, 'label_01')
      .to(s03_spBg, {x: 0, duration: .5}, 'label_01')
      .to(s03_border, {x: -40, y: 40, opacity: 1, duration: .5}, 'label_01')
      .to(s03_h3, {color: '#161616'}, 'label_01')
      .addLabel("label_02")
      .to(s03_mq01, {opacity: 1, xPercent: -50, duration: 1,}, 'label_02')
      .to(s03_mq02, {opacity: 1, xPercent: -50, duration: 1,}, 'label_02')
      .to(s03_mq03, {opacity: 1, xPercent: -50, duration: 1,}, 'label_02')
      .to(s03_conBox, {opacity: 0, duration: .5, delay: .5}, 'label_02')
    }, /// min-width: 430px

    '(max-width: 431px)': function(){
      // sec_03
      const body = document.querySelector('body');
      const s03_conBox = document.querySelector('section._03 .cont-group');
      const s03_spBg = document.querySelector('section._03 .sp_bg');
      const s03_border = document.querySelector('section._03 .img-border');
      const s03_h3 = document.querySelector('section._03 .h3_box h3');
      const s03_mq01 = document.querySelector('section._03 .marquee._01');
      const s03_mq02 = document.querySelector('section._03 .marquee._02');
      const s03_mq03 = document.querySelector('section._03 .marquee._03');

      let s03_timeline = gsap.timeline({
        scrollTrigger: {
          trigger: 'section._03',
          start: 'top top',
          end: '100%',
          // pin: true,
          scrub: 1,
          ease: 'none',
          // markers: true,
          invalidateOnRefresh: true,
        },
      });

      s03_timeline
      .set(s03_mq01, {opacity: 0})
      .set(s03_mq01, {opacity: 0})
      .set(s03_mq02, {opacity: 0})
      .set(s03_conBox, {opacity: 1})

      .addLabel("label_01")
      .to(body, {backgroundColor: '#161616'}, 'label_01')
      .to(s03_spBg, {x: 0, duration: .2}, 'label_01')
      .to(s03_border, {x: -40, y: 40, opacity: 1, duration: .2}, 'label_01')
      .to(s03_h3, {color: '#161616'}, 'label_01')
      .addLabel("label_02")
      .to(s03_conBox, {opacity: 0, duration: .2, delay: .1}, 'label_02')

    } /// max-width: 430px
  }); 

















});///////////////