document.addEventListener('DOMContentLoaded', function() {
  window.addEventListener('load', function () {
      // 로딩 화면
      loading();
  });

  // 사이드 버튼
  asideBtnEvent();

  // gsap
  visual();
  sec01Fix();
  sec02Fix();
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
  const section01 = document.querySelector('section._01');
  const flowSection = document.querySelector('.flow_section');
  const flowBox01 = document.querySelector('.flow_wrap .flow_box._01');
  const flowBox02 = document.querySelector('.flow_wrap .flow_box._02');

  ScrollTrigger.create({ // sticky
    trigger: flowSection,
    start: 'top top',
    end: '+=200%',
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
  .to(flowBox01, {xPercent: 100, duration: 3}, 'label_01')
  .to(flowBox02, {xPercent: -100, duration: 3}, 'label_01')
  .addLabel("label_02")
  .to(flowBox01, {opacity: 0, duration: .5}, 'label_02-=1')
  .to(flowBox02, {opacity: 0, duration: .5}, 'label_02-=1')

}

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

function sec02Fix() {
  const section02 = document.querySelector('section._02');
  const profileImg = document.querySelector('section._02 .img_part');
  const profileWord = document.querySelector('section._02 .word_group');
  const profileTag01 = document.querySelector('section._02 .des_group .tag._01');
  const profileTag02 = document.querySelector('section._02 .des_group .tag._02');
  const profileTag03 = document.querySelector('section._02 .des_group .tag._03');
  const profileH3 = document.querySelector('section._02 .des_group h3 span');
  const profileTxt = document.querySelector('section._02 .des_group p span');

  let section02Anime = gsap.timeline({
    scrollTrigger: {
      trigger: section02,
      start: "top top",
      end: "+=200%",
      pin: true,
      // scrub: 1,
      // markers: true,
      // onEnterBack: 'restart',
      invalidateOnRefresh: true,
    },
  });

  section02Anime
  .set(profileTag01, {yPercent: 100})
  .set(profileTag02, {yPercent: 100})
  .set(profileTag03, {yPercent: 100})
  .set(profileH3, {yPercent: 100})
  .set(profileTxt, {yPercent: 100})

  .addLabel("label_01")
  .to(profileImg, {rotationY: "180deg", duration: .5, delay: 1}, "label_01")
  .to(profileWord, {opacity: 0, duration: 1, delay: .5}, "label_01")
  .to(profileTag01, {yPercent: 0, duration: .3, delay: .1}, "-=.5")
  .to(profileTag02, {yPercent: 0, duration: .3}, "-=.2")
  .to(profileTag03, {yPercent: 0, duration: .3}, "-=.2")
  .to(profileH3, {yPercent: 0, duration: .3})
  .to(profileTxt, {yPercent: 0, duration: .3});

}