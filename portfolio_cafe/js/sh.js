$(document).ready(function(){
  // 최상단으로 이동
  moveTop('header .logo');
  moveTop('footer .logo');

  // 헤더 색상 변경
  headerColor('.inv_', 'header', 'invert');

  // 햄버거 메뉴
  hamEvent();

  // 페이지 걸림 효과
  // function sectionWait();

  // 스와이퍼
  s01Swiper();
  s01SwiperPC();

  s04Swiper();
  s06Swiper();

  infoEvent('section._04 .img_group', 'section._04 .menu');
  infoEvent('section._06 .img_group', 'section._06 .menu');

  // alert
  showAlert();
})////////////


////함수 

// 최상단으로 이동
function moveTop(el){
  $(el).click(function () {
    let idx = $(this).index();
    // console.log(idx);
    gsap.to(window,{
        scrollTo: {
            y: $('body').eq(idx),
            offsetY: 0
        },
        duration: 1,
        ease: 'power2.inOut'
    })
  });
};

// header 배경
function headerColor(section, ele, className){
  $(window).scroll(function() {
    $(section).each(function() {
      var sectionTop = $(this).offset().top;
      var sectionBottom = sectionTop + $(this).outerHeight();
      var windowTop = $(window).scrollTop();
      var windowBottom = windowTop + $(window).height();
  
      if (windowBottom > sectionTop && windowTop < sectionBottom) {
        $(ele).addClass(className);
      } else {
        $(ele).removeClass(className);
      }
    });
  });
};

// 햄버거 버튼
function hamEvent(){
  const html = document.querySelector('html');
  const hamBtn = document.querySelector('header .ham');

  hamBtn.addEventListener('click', () => {
    html.classList.toggle('ham_on');
  })
};

// 페이지 걸림 효과
function sectionWait(){
  ScrollTrigger.matchMedia({
    '(min-width: 1024px)': function(){
      gsap.utils.toArray(".page_rock").forEach((panel, i) => {
        ScrollTrigger.create({
          trigger: panel,
          start: "top top",
          pin: true,
          // pinSpacing: false,
          end: "+=120%",
        });
      });
    },
  })
};


// sec_01 Mo스와이퍼
function s01Swiper(){
  var swiper = new Swiper(".s01_swiper_m", {
    speed: 400,
    loop: true,
    effect: "fade",
    fadeEffect: { 
      crossFade: true 
    },
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
  });
};

// sec_01 PC스와이퍼
function s01SwiperPC(){
  var swiper = new Swiper(".s01_swiper", {
    speed: 400,
    loop: true,
    effect: "fade",
    loop: true,
    fadeEffect: { 
      crossFade: true 
    },
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    on: {
      slideChangeTransitionEnd: function () {
          if(this.realIndex == 0){
            v1motion.play();

            // 초기화
            v2motion.progress(0);
            v2motion.pause();

            v4motion.progress(0);
            v4motion.pause();
            
        }else if(this.realIndex == 1){
            v2motion.play();

            // 초기화
            v1motion.progress(0);
            v1motion.pause();

            v3motion.progress(0);
            v3motion.pause();

        }else if(this.realIndex == 2){
          v3motion.play();

          // 초기화
          v2motion.progress(0);
          v2motion.pause();

          v4motion.progress(0);
          v4motion.pause();

        }else if(this.realIndex == 3){
          v4motion.play();

          // 초기화
          v1motion.progress(0);
          v1motion.pause();

          v3motion.progress(0);
          v3motion.pause();
        }
      },
    },
  });

  // visual1
  let v1img1 = 'section._01 .swiper-slide._01 .group_01';
  let v1img2 = 'section._01 .swiper-slide._01 .group_02';

  gsap.set(v1img1, { opacity: 0, xPercent: -20 });
  gsap.set(v1img2, { opacity: 0, xPercent: 20 });

  let v1motion = gsap.timeline();

  v1motion
      .to(v1img1, { opacity: 1, xPercent: 0, duration: .8, delay: .3})
      .to(v1img2, { opacity: 1, xPercent: 0, duration: .8}, "-=50%" )

  // visual2
  let v2img1 = 'section._01 .swiper-slide._02 .group_01';
  let v2img2 = 'section._01 .swiper-slide._02 .group_02';

  gsap.set(v2img1, { opacity: 0, xPercent: -20 });
  gsap.set(v2img2, { opacity: 0, xPercent: 20 });

  let v2motion = gsap.timeline();

  v2motion
    .to(v2img1, { opacity: 1, xPercent: 0, duration: .8, delay: .3})
    .to(v2img2, { opacity: 1, xPercent: 0, duration: .8}, "-=50%" )

  v2motion.pause();

  // visual3
  let v3img1 = 'section._01 .swiper-slide._03 .group_01';
  let v3img2 = 'section._01 .swiper-slide._03 .group_02';

  gsap.set(v3img1, { opacity: 0, xPercent: -20 });
  gsap.set(v3img2, { opacity: 0, xPercent: 20 });

  let v3motion = gsap.timeline();

  v3motion
    .to(v3img1, { opacity: 1, xPercent: 0, duration: .8, delay: .3})
    .to(v3img2, { opacity: 1, xPercent: 0, duration: .8}, "-=50%" )

  v3motion.pause();

  // visual4
  let v4img1 = 'section._01 .swiper-slide._04 .group_01';
  let v4img2 = 'section._01 .swiper-slide._04 .group_02';

  gsap.set(v4img1, { opacity: 0, xPercent: -20 });
  gsap.set(v4img2, { opacity: 0, xPercent: 20 });

  let v4motion = gsap.timeline();

  v4motion
    .to(v4img1, { opacity: 1, xPercent: 0, duration: .8, delay: .3})
    .to(v4img2, { opacity: 1, xPercent: 0, duration: .8}, "-=50%" )

  v4motion.pause();
};


// 메뉴 섹션 이벤트
// 토글 기능 PC
// function infoEventPC(imgSelector, menuSelector){
//   const infoBtn = document.querySelectorAll(imgSelector);
//   const menu = document.querySelectorAll(menuSelector);

//   function toggleMenu(idx) {
//     menu[idx].classList.toggle('show');
//   };

//   infoBtn.forEach((el, idx) => {
//     el.addEventListener('click', () => {
//       toggleMenu(idx)
//     })
//   })
// };

// 토글 기능 mobile
function infoEvent(imgSelector, menuSelector){
  const imgBox = document.querySelectorAll(imgSelector);
  const menu = document.querySelectorAll(menuSelector);

  function toggleMenu(idx) {
    menu[idx].classList.toggle('show');
  };

  imgBox.forEach((el, idx) => {
    el.addEventListener('click', () => {
      toggleMenu(idx)
    });
  });
};

// sec04 페이지 버튼
function menuPage(pageBtnSelector, pagesSelector){
  
  const pageBtn = document.querySelectorAll(pageBtnSelector);
  const pages = document.querySelectorAll(pagesSelector);

  pageBtn.forEach((el, idx) => {
    el.addEventListener('click', () => {
      // on클래스 지우기
      pageBtn.forEach(btn => btn.classList.remove('on'));
      pages.forEach(page => page.classList.remove('on'));
  
      // on클래스 추가
      el.classList.add('on');
      pages[idx].classList.add('on');
    });
  })
};

// sec04 스와이퍼
function s04Swiper(){
  var swiper = new Swiper(".s04_swiper", {
    spaceBetween: 30,
    speed: 600,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  });
};


// sec06 스와이퍼
function s06Swiper(){
  var swiper = new Swiper(".s06_swiper", {
    spaceBetween: 30,
    speed: 600,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  });
}

// alert
function showAlert(){
  const alerts = document.querySelectorAll('.alert');

  alerts.forEach((el) => {
    el.addEventListener('click', (e) => {
      window.alert('준비중입니다.');
    })
  })
};