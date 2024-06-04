document.addEventListener('DOMContentLoaded', function() {
  window.addEventListener('load', function () {
      // 로딩 화면
      loading();
  });

  // 사이드 버튼
  asideBtnEvent();

  // gsap
  visual();
  sec01Fix()
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
function sec01Fix() {
  const section01 = document.querySelector('section._01');

  ScrollTrigger.create({ // sticky
    trigger: section01,
    start: 'top top',
    end: '+=200%',
    pin: true,
    pinSpacing : false,
    scrub: 2,
    // markers: true,
    invalidateOnRefresh: true,
  });
}

function visual() {
  const section01 = document.querySelector('section._01');
  const flowSection = document.querySelector('.flow_section');
  const flowBox01 = document.querySelector('.flow_wrap .flow_box._01');
  const flowBox02 = document.querySelector('.flow_wrap .flow_box._02');

  ScrollTrigger.create({ // sticky
    trigger: flowSection,
    start: 'top top',
    end: '+=100%',
    pin: true,
    pinSpacing : false,
    scrub: 2,
    // markers: true,
    invalidateOnRefresh: true,
  });

  let flowAnime = gsap.timeline({
    scrollTrigger: {
      trigger: section01,
      start: "top top",
      end: "+=250%",
      pin: true,
      scrub: 2,
      // markers: true,
      invalidateOnRefresh: true,
    },
  });

  flowAnime
  .addLabel("label_01")
  .to(flowBox01, {opacity: 1, duration: 1}, 'label_01')
  .to(flowBox01, {xPercent: 100, duration: 2}, 'label_01')
  .to(flowBox02, {opacity: 1, duration: 1}, 'label_01')
  .to(flowBox02, {xPercent: -100, duration: 2}, 'label_01')

  
}