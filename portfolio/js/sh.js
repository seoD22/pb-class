$(document).ready(function(){

  ScrollTrigger.matchMedia({
    '(min-width: 800px)': function(){

      // sec_01
      const s01 = document.querySelector('section._01');
      let s01_dl = gsap.utils.toArray('section._01 dl');
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
      const s01_dt01 = document.querySelector('section._01 .dt_01');
      const s01_dt02 = document.querySelector('section._01 .dt_02');
      const s01_dt03 = document.querySelector('section._01 .dt_03');
      let s01_timeline = gsap.timeline({
        scrollTrigger: {
          trigger: s01,
          start: 'center center',
          end: '200%',
          pin: true,
          scrub: 1,
          // markers: true
          invalidateOnRefresh: true,
        },
      });

      s01_timeline
      .set(s01_dt01, {xPercent: 200, opacity: 0})
      .set(s01_dt02, {xPercent: 200, opacity: 0})
      .set(s01_dt03, {xPercent: 200, opacity: 0})

      .to(s01_dt01, {xPercent: 0, opacity: 1, duration: 1})
      .to(s01_dt02, {xPercent: 0, opacity: 1, duration: 1})
      .to(s01_dt03, {xPercent: 0, opacity: 1, duration: 1})
      .addLabel("label_01")
      .to(s01_dt01, {opacity: 0, duration: 2}, 'label_01')
      .to(s01_dt02, {opacity: 0, duration: 2}, 'label_01')
      .to(s01_dt03, {opacity: 0, duration: 2}, 'label_01')
    }
  })




});