$(document).ready(function(){
  // header 배경
  $(window).scroll(function() {
    $('.inv_').each(function() {
      var sectionTop = $(this).offset().top;
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

  // 햄버거 버튼
  const html = document.querySelector('html');
  const hamBtn = document.querySelector('header .ham');

  hamBtn.addEventListener('click', () => {
    html.classList.toggle('ham_on');
  })

    // sec_01 Mo스와이퍼
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

  // sec_01 PC스와이퍼
  var swiper = new Swiper(".s01_swiper", {
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



  // section04 버튼
  const infoBtn = document.querySelectorAll('section._04 .img_group .des_btn');
  const menu = document.querySelectorAll('section._04 .menu');
  const imgBox = document.querySelectorAll('section._04 .img_group');

  // 토글 기능
  function toggleMenu(idx) {
    menu[idx].classList.toggle('show');
  }
  

  infoBtn.forEach((el, idx) => {
    el.addEventListener('click', () => {
      toggleMenu(idx)
    })
  })

  // 1024px 이하
  if (window.innerWidth <= 1024) {
    imgBox.forEach((el, idx) => {
      el.addEventListener('click', () => {
        toggleMenu(idx)
      });
    });
  };

  // sec04 페이지 버튼
  const pageBtn = document.querySelectorAll('section._04 .bottom .page');

  pageBtn.forEach((el, idx) => {
    el.addEventListener('click', () => {
      pageBtn.forEach((ele, index) => {
        ele.classList.remove('on');
      })
      el.classList.add('on');
    })
  })

  // sec04 스와이퍼
  var swiper = new Swiper(".s04_swiper", {
    spaceBetween: 30,
    speed: 600,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  });


    // section04 버튼
    const infoBtn_06 = document.querySelectorAll('section._06 .img_group .des_btn');
    const menu_06 = document.querySelectorAll('section._06 .menu');
    const imgBox_06 = document.querySelectorAll('section._06 .img_group');
  
    // 토글 기능
    function toggleMenu(idx) {
      menu_06[idx].classList.toggle('show');
    }
    
  
    infoBtn_06.forEach((el, idx) => {
      el.addEventListener('click', () => {
        toggleMenu(idx)
      })
    })
  
    // 1024px 이하
    if (window.innerWidth <= 1024) {
      imgBox_06.forEach((el, idx) => {
        el.addEventListener('click', () => {
          toggleMenu(idx)
        });
      });
    };
  
    // sec04 페이지 버튼
    const pageBtn_06 = document.querySelectorAll('section._06 .bottom .page');
  
    pageBtn_06.forEach((el, idx) => {
      el.addEventListener('click', () => {
        pageBtn_06.forEach((ele, index) => {
          ele.classList.remove('on');
        })
        el.classList.add('on');
      })
    })
  
    // sec04 스와이퍼
    var swiper = new Swiper(".s06_swiper", {
      spaceBetween: 30,
      speed: 600,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    });



})////////////