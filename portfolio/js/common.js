$(document).ready(function(){

    // 기본 설정들
    $(document).bind("contextmenu", function(e) {return false;});
    $(document).bind('selectstart',function() {return false;}); 
    AOS.init();
    // 기본 설정들


// 예시구역 시작


    // let intro_s1_tbx1 = gsap.timeline({
    //     scrollTrigger: {
    //         trigger: '.intro_s1',
    //         start: 'top top',
    //         end: '+=200%',
    //         pin: true,
    //         scrub: true,
    //         markers: true
    //     },
    // });

    //.create
    // ScrollTrigger.create({
    //     trigger: ".intro_s1_tbx",
    //     start: "top bottom-=25%",
    //     end: "bottom+=450 bottom-=25%",
    //     markers:true,
    //     toggleClass: {
    //       className: "on",
    //       targets: ".test",
    //     },
    //   });


    //.to
    // gsap.to(".wh_bx", {
    //     top: "0%",
    //     scrollTrigger: {
    //       trigger: ".m1_tbx",
    //       start: "top -40%",
    //       end: "top -100%",
    //       scrub: true,
    //       onUpdate: (self) => {
    //         const progress = self.progress.toFixed(2);
    //         const targets = document.querySelectorAll(".wh_bx");
    //         targets.forEach((target) => {
    //           target.style.top = gsap.utils.interpolate("250px", "0px", progress);
    //         });
    //       },
    //     },
    //   });


    //timeline
    // let intro_s1_tbx1 = gsap.timeline({
    //     scrollTrigger: {
    //         trigger: '.intro_s1_tbx',
    //         start: 'top+=450 bottom-=25%',
    //         end: 'top+=1200 bottom-=25%',
    //         // pin: true,
    //         scrub: true,
    //         markers: true
    //     },
    // });

    // intro_s1_tbx1.to(".b_s1_line", {
    //         width:"100%"
    //         // x:300,duration: 2 
    // })



    //   ScrollTrigger.create({
    //         trigger: ".business_s2",
    //         pin: true,
    //         markers:true,
    //         start: "top top",
    //         end: "+=200%",
    //     });

    /* drawSVG */

    // gsap.fromTo("#myPath",{drawSVG: "50% 50%"}, {
    // // scrollTrigger: {
    // //     markers:true,
    // //     trigger: "#myPath",
    // //     start: "top center", // 뷰포트의 상단이 센터에 도달할 때 시작
    // //     end: "bottom center", // 뷰포트의 하단이 센터에 도달할 때 종료
    // //     scrub: true // 스크롤에 따라 애니메이션이 연속적으로 진행
    // // },
    // drawSVG: "0% 100%",
    // ease:Bounce.easeOut,
    // duration:1.5
    // });


// 예시구역 끝

});