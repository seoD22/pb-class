$(document).ready(function(){

  ScrollTrigger.matchMedia({
    '(min-width: 801px)': function(){
      // sec_01
      const s01 = document.querySelector('section._01');
      // let s01_dl = gsap.utils.toArray('section._01 dl');
      // let s01Tween = gsap.to(s01_dl, {
      //   xPercent: -100 * (s01_dl.length -1),
      //   ease: 'none',
      //   scrollTrigger: {
      //     trigger: s01,
      //     pin: true,
      //     scrub: 1,
      //     start: 'center center',
      //     end: '500%;',
      //     // markers: true,
      //   }
      // });
      
      // ScrollTrigger.create({
      //   trigger: s01,
      //   start: 'top top',
      //   scrub: 1,
      //   pin: true,
      //   pinSpacing: false,
      // })


      // sec_01 스크롤 모션
      const s01_dt01 = document.querySelector('section._01 .dg_01 .dt_01');
      const s01_dt02 = document.querySelector('section._01 .dg_01 .dt_02');
      const s01_dt03 = document.querySelector('section._01 .dg_01 .dt_03');
      const s01_dg01 = document.querySelector('section._01 .dg_02');
      let s01_timeline = gsap.timeline({
        scrollTrigger: {
          trigger: s01,
          start: 'center center',
          end: '500%',
          pin: true,
          scrub: 1,
          ease: 'none',
          // markers: true
          invalidateOnRefresh: true,
        },
      });

      s01_timeline
      .set(s01_dt01, {xPercent: 200, opacity: 0})
      .set(s01_dt02, {xPercent: 200, opacity: 0})
      .set(s01_dt03, {xPercent: 200, opacity: 0})
      .set(s01_dg01, {opacity: 0, scale: 2})

      .to(s01_dt01, {xPercent: 0, opacity: 1, duration: 3})
      .to(s01_dt02, {xPercent: 0, opacity: 1, duration: 3})
      .to(s01_dt03, {xPercent: 0, opacity: 1, duration: 3})
      .addLabel("label_01")
      .to(s01_dt01, {opacity: 0, duration: 2, delay: 2}, 'label_01')
      .to(s01_dt02, {opacity: 0, duration: 2, delay: 2}, 'label_01')
      .to(s01_dt03, {opacity: 0, duration: 2, delay: 2}, 'label_01')

      .to(s01_dg01, {scale: 1, opacity: 1, duration: 3, delay: 3},)
      .to(s01_dg01, {color: 'transparent', duration: 5, delay: 3},)

      const s02 = document.querySelector('section._02');
      let s02_timeline = gsap.timeline({
        scrollTrigger: {
          trigger: s02,
          start: 'center center',
          end: '100%',
          pin: true,
          scrub: 1,
          ease: 'none',
          // markers: true,
          invalidateOnRefresh: true,
        },
      });

      // sec_03
      ScrollTrigger.create({ // sticky
        trigger: "section._03 h3",
        start: "top top",
        endTrigger: 'section._03',
        end: 'bottom top',
        pin: true,
        pinSpacing : false,
        // markers: true,
        invalidateOnRefresh: true,
        toggleClass: { targets: $('section._03 h3'), className: "view" }
      });
      

      gsap.utils.toArray('section._03 .port_box').forEach(function(imgBox){
        gsap.timeline({
          scrollTrigger: {
            trigger: imgBox,
            start: 'center bottom',
            end: 'center center',
            scrub: true,
            // markers: true,
          }
        })
        .to(imgBox, {'clip-path': 'inset(0%)', ease: 'none', duration: .3}, 0)
      })

    } /// min-width: 801px
  }); 




  // 퀵, 헤더 show
  window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    const quick = document.querySelector('.l_f');

    const options = {
      threshold: [1]
    };
    const io = new IntersectionObserver((entries)=>{
      entries.forEach((entry, idx)=>{
        if(entry.isIntersecting){
          header.classList.add('show');
          quick.classList.add('show');
          entry.target.classList.add('anime');
        }
      })
    }, options);

    // intersection Observer 
    io.observe(document.querySelector('section._02'))
  })

  // 퀵, 헤더 색상 변경
  $('.inv_').each(function (idx, item) {
    ScrollTrigger.create({
      trigger: item,
      start: 'top center',
      end: 'bottom center',
      // markers: true,
      toggleClass: { targets: $('.header, .l_f'), className: "invert" },
    });
  });












});///////////////