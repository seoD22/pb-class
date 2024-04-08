$(document).ready(function(){
    // 퀵, 헤더 show
    // window.addEventListener('scroll', () => {
    //   const header = document.querySelector('header');
    //   const quick = document.querySelector('.l_f');
  
    //   const options = {
    //     threshold: [1]
    //   };
    //   const io = new IntersectionObserver((entries)=>{
    //     entries.forEach((entry, idx)=>{
    //       if(entry.isIntersecting){
    //         header.classList.add('show');
    //         quick.classList.add('show');
    //         entry.target.classList.add('anime');
    //       }
    //     })
    //   }, options);
  
    //   // intersection Observer 
    //   io.observe(document.querySelector('section._02'))
    // })
  
    // 퀵, 헤더 색상 변경
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
      }
    })
  ScrollTrigger.matchMedia({
    '(min-width: 801px)': function(){
      // sec_01
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
      ScrollTrigger.create({
        trigger: "section._03",
        pin: true,
        // markers:true,
        start: "top top",
        end: "+=500%",
      });
      // gsap.to("section._03 .sp_bg", {
      //   scrollTrigger: {
      //     trigger: "section._03",
      //     start: "top center",
      //     end: "bottom-=20% bottom+=50%",
      //     scrub: 1,
      //     // markers:true,
      //   },
      //   x: 0,
      // });
      // gsap.to("section._03 .img-border", {
      //   scrollTrigger: {
      //     trigger: "section._03",
      //     start: "top center",
      //     end: "bottom-=20% bottom",
      //     scrub: 1,
      //     // markers:true,
      //   },
      //   opacity: 1,
      //   x: -40,
      //   y: 40,
      // });
      
      // gsap.to("section._03 .h3_box h3", {
      //   scrollTrigger: {
      //     trigger: "section._03",
      //     start: "top center",
      //     end: "bottom-=20% bottom",
      //     scrub: 1,
      //     // markers:true,
      //   },
      //   color: "#161616",
      // });

      // gsap.to("section._03 .marquee_group", {
      //   scrollTrigger: {
      //     trigger: "section._03",
      //     start: "bottom-=70% center",
      //     end: "bottom-=20% bottom",
      //     scrub: 1,
      //     markers:true,
      //   },
      //   opacity: 1,
      // });

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
          start: 'center center',
          end: '500%',
          // pin: true,
          scrub: 1,
          ease: 'none',
          // markers: true
          invalidateOnRefresh: true,
        },
      });

      s03_timeline
      .set(s03_mq01, {xPercent: 100})
      .set(s03_mq02, {xPercent: -200})
      .set(s03_mq03, {xPercent: 100})

      .addLabel("label_01")
      .to(s03_spBg, {x: 0, duration: 1}, 'label_01')
      .to(s03_border, {x: -40, y: 40, opacity: 1, duration: 1}, 'label_01')
      .to(s03_h3, {color: '#161616'}, 'label_01')
      .addLabel("label_02")
      .to(s03_mq01, {opacity: 1, xPercent: -50, duration: 2,}, 'label_02')
      .to(s03_mq02, {opacity: 1, xPercent: -50, duration: 2,}, 'label_02')
      .to(s03_mq03, {opacity: 1, xPercent: -50, duration: 2,}, 'label_02')
      .to(s03_conBox, {opacity: 0, duration: 1, delay: 1}, 'label_02')


    } /// min-width: 801px
  }); 

















});///////////////