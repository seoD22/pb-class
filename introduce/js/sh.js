document.addEventListener('DOMContentLoaded', function() {
  window.addEventListener('load', function () {
      // 로딩 화면
      loading();
  });

  // 사이드 버튼
  asideBtnEvent();

  // 포트폴리오 스와이퍼
  portfolioSwiper();

  // gsap
  visual();
  sec01Fix();
  sec02Fix();
  sec03Anime()
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
  const html = document.querySelector('html');
  const asideBtn = document.querySelector('aside');

  asideBtn.addEventListener('click', (e) => {
    asideBtn.classList.toggle('show');
    html.classList.toggle('show');
  })
};

// 포트폴리오 스와이퍼
function portfolioSwiper() {
  var swiper = new Swiper(".port_swiper", {
    direction: "vertical",
    slidesPerView: 1.4,
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    on: {
      slideChange: function() {

        // 페이징
        // $('.portfolio .pagi .num.cur_').text(`0${this.realIndex+1}`);
        $('.portfolio .pagi .lineWrap span').css('top', `${(this.realIndex) * 20}%`);
      }
    }

  });
}

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
  const section02_tbx = document.querySelector('section._02 .tbx');
  const profileImg = document.querySelector('section._02 .img_part');
  const profileImg_01 = document.querySelector('section._02 .img_part .img-box._01');
  const profileImg_02 = document.querySelector('section._02 .img_part .img-box._02');
  const profileWord = document.querySelector('section._02 .word_group');
  const profileTag01 = document.querySelector('section._02 .des_group .tag._01');
  const profileTag02 = document.querySelector('section._02 .des_group .tag._02');
  const profileTag03 = document.querySelector('section._02 .des_group .tag._03');
  const profileH3 = document.querySelector('section._02 .des_group h3 span');
  const profileTxt = document.querySelector('section._02 .des_group p span');


  // 섹션 고정
  ScrollTrigger.create({
    trigger: section02,
    start: 'top top',
    end: '+=200%', // 고정이 풀리는 지점
    pin: true,
    scrub: 2,
    // markers: true, // 디버그용 마커
    invalidateOnRefresh: true,
  });

  // 애니메이션
  let section02Anime = gsap.timeline({
    scrollTrigger: {
      trigger: section02_tbx,
      start: 'top+=20% top',
      end: '+=100%',
      // pin: true,
      // markers: true,
      toggleActions: "play none none reverse",
      invalidateOnRefresh: true,
    },
  });

  section02Anime
    .addLabel("label_01")
    .to(profileImg, {rotationY: "180deg", duration: .5}, "label_01")
    .to(profileImg_01, {opacity: 0, duration: .5}, "label_01")
    .to(profileImg_02, {opacity: 1, duration: .5}, "label_01")
    .to(profileWord, {opacity: 0, zIndex: 0, duration: 1}, "label_01")
    .to(profileTag01, {y: 0, duration: .3, delay: .1}, "-=.5")
    .to(profileTag02, {y: 0, duration: .3}, "-=.2")
    .to(profileTag03, {y: 0, duration: .3}, "-=.2")
    .to(profileH3, {y: 0, duration: .3})
    .to(profileTxt, {y: 0, duration: .3});
}

function sec03Anime() {
  const section03 = document.querySelector('section._03')
  const logo = document.querySelector('section._03 .logo_group')
  const contact = document.querySelector('section._03 .contact')

  // 애니메이션
  let section03Anime = gsap.timeline({
    scrollTrigger: {
      trigger: section03,
      start: 'top top+=20%',
      end: '+=100%',
      // pin: true,
      // markers: true,
      toggleActions: "play none none reverse",
      invalidateOnRefresh: true,
    },
  });

  section03Anime
    .addLabel("label_01")
    .to(logo, {y: 0, duration: .3}, "label_01")
    .to(contact, {y: 0, duration: .3}, "-=70%")

}
