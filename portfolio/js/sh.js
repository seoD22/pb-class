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
      const s01_imgBox = document.querySelector('section._02 img-wrap');

      let s01_timeline = gsap.timeline({
        scrollTrigger: {
          trigger: s01,
          start: 'center center',
          end: '200%',
          pin: true,
          scrub: 1,
          ease: 'none',
          // markers: true
          invalidateOnRefresh: true,
        },
      });

      s01_timeline
      .set(s01_dtSpan, {xPercent: -105})
      // .set(s01_imgBox, {width: "20vw"})

      .to(s01_dtSpan, {xPercent: 0, duration: 3})
      // .to(s01_imgBox, {width: "100vw"});

      // sec_03
      gsap.to("section._03 .sp_bg", {
        scrollTrigger: {
          trigger: "section._03",
          start: "top center",
          end: "bottom-=20% bottom",
          scrub: 1,
          markers:true,
        },
        x: 0,
      });
      gsap.to("section._03 .h3_box h3", {
        scrollTrigger: {
          trigger: "section._03",
          start: "top center",
          end: "bottom-=20% bottom",
          scrub: 1,
          // markers:true,
        },
        color: "#161616",
      });

      // marquee

    } /// min-width: 801px
  }); 

















});///////////////