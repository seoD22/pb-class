$(document).ready(function(){
  var swiper = new Swiper(".s01_swiper", {
    speed: 600,
    loop: true,
    // effect: "fade",
    autoplay: {
      delay: 3000,
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


})////////////