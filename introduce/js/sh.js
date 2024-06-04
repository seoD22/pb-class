document.addEventListener('DOMContentLoaded', function() {
  window.addEventListener('load', function () {
      // 로딩 화면
      loading();

      // gsap
      visual();
  });

  // 사이드 버튼
  asideBtnEvent();

});


// 로딩화면
function loading() {
  const load = document.querySelector('#load');
  const html = document.querySelector('html');

  html.style.overflow = 'hidden'; // 로딩 중 스크롤 방지

  setTimeout(() => {
    load.classList.add('show')

    setTimeout(() => { //  <- 로딩속도 구현
      load.style.opacity = '0';
      html.style.overflow = 'auto'; // 스크롤 방지 해제

      setTimeout(() => {
          load.style.display = 'none';
      }, 400);

    }, 2000);

  }, 1500);
  
};

// 사이드 버튼
function asideBtnEvent() {
  const asideBtn = document.querySelector('aside .btn_box');

  asideBtn.addEventListener('click', (e) => {
    asideBtn.classList.toggle('show');
  })
};

// gsap anime
function visual() {
  const flowSection = document.querySelector('.flow_section');
  const flowBox01 = document.querySelector('.flow_wrap .flow_box._01');
  const flowBox02 = document.querySelector('.flow_wrap .flow_box._02');

  // ScrollTrigger.create({
  //   trigger: flowSection,
  //   pin: true,
  //   // markers:true,
  //   start: "top top",
  //   end: "+=500%",
  // });

  let s03_timeline = gsap.timeline({
    scrollTrigger: {
      trigger: flowSection,
      start: "top top",
      end: "+=500%",
      pin: true,
      scrub: 2,
      // markers: true,
      invalidateOnRefresh: true,
    },
  });

  s03_timeline
  .addLabel("label_01")
  .to(flowBox01, {opacity: 1, duration: .5}, 'label_01')
  .to(flowBox01, {xPercent: 110, duration: 2}, 'label_01')
  .to(flowBox02, {opacity: 1, duration: .5}, 'label_01')
  .to(flowBox02, {xPercent: -110, duration: 2}, 'label_01')

  // gsap.to(flowBox01, {
  //   scrollTrigger: {
  //     trigger: flowBox01,
  //     start: "top top",
  //     end: "bottom+=300% center",
  //     scrub: 2,
  //     // markers:true,
  //   },
  //   opacity: 1,
  // });
  // gsap.to(flowBox01, {
  //   scrollTrigger: {
  //     trigger: flowBox01,
  //     start: "top top",
  //     end: "bottom+=500% top",
  //     scrub: 2,
  //     markers:true,
  //   },
  //   xPercent: 110, 
  // });
  // gsap.to(flowBox02, {
  //   scrollTrigger: {
  //     trigger: flowBox02,
  //     start: "top top",
  //     end: "bottom+=300% center",
  //     scrub: 2,
  //     // markers:true,
  //   },
  //   opacity: 1,
  // });
  // gsap.to(flowBox02, {
  //   scrollTrigger: {
  //     trigger: flowBox02,
  //     start: "top top",
  //     end: "bottom+=500% top",
  //     scrub: 2,
  //     markers:true,
  //   },
  //   xPercent: -110, 
  // });
}