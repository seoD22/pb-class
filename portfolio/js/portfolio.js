const $loader = document.querySelector('.loader');
const $main = document.querySelector('.main_banner');
const $html = document.querySelector('html');
const $body = document.querySelector('body');
const $fixed = document.querySelector('.fixed');
const $topBtn = document.querySelector('#topBtn');
const $section = document.querySelectorAll('section');
const $h2 = document.querySelectorAll('section h2');
const $resumeBtn = document.querySelector('#resumeBtn');
const $portfolioList = document.querySelectorAll('.portfolio li');

$html.style.overflow = 'hidden'; //로딩 중 스크롤 방지

window.addEventListener('load', ()=>{
  scrollTo(0, 0)
  setTimeout(() => { //로딩속도 구현
    $loader.classList.remove('loader');
    $html.style.overflow = 'auto'; //스크롤 방지 해제
    $main.classList.remove('none')
  }, 1000);
})

// scroll event
window.addEventListener('scroll', ()=>{
  const scrollTop = document.documentElement.scrollTop;
  const innerHeight = document.documentElement.clientHeight;
  const bodyBottom = $body.scrollHeight;

  const options = {
    threshold: [1]
  }
  const io = new IntersectionObserver((entries)=>{
    entries.forEach((entry, idx)=>{
      if(entry.isIntersecting){
        entry.target.classList.add('show');
      }else{
        entry.target.classList.remove('show');
      }
    })
  }, options);

  const option_por = {
    threshold: [.4]
  }
  const io_por = new IntersectionObserver((entries)=>{
    entries.forEach((entry, idx)=>{
      if(entry.isIntersecting){
        entry.target.classList.add('show');
      }else{
        entry.target.classList.remove('show');
      }
    })
  }, option_por);

  // fixed
  if(scrollTop + innerHeight >= bodyBottom){  // scroll 맨 아래 감지
    $topBtn.classList.remove('none');
    $fixed.classList.add('none');
  }else if(scrollTop >= 100){
    $fixed.classList.remove('none');
    $topBtn.classList.add('none');
  }else{
    $fixed.classList.add('none');
    $topBtn.classList.add('none');
  }

  for(let i = 0; i<$h2.length; i++){
    io.observe($h2[i]); // 모든 h2를 observe에 등록
    io.observe(document.querySelector('.introduce .text'))
  }
  for(let i = 0; i<$portfolioList.length; i++){
    io_por.observe($portfolioList[i]);
    if(i%2 == 1){
      $portfolioList[i].classList.add('right');
    }
  }

  // scroll 이벤트 함수
  document.body.style.setProperty('--scroll', window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
})

window.addEventListener('click', (e)=>{
  // 이력서 다운
  if((e.target.parentElement.id || e.target.id) === 'resumeBtn'){
    $resumeBtn.textContent = "🖤감사합니다🖤";
    document.querySelectorAll('.resumebtn span').textContent = "";
  }
  // Top 버튼
  if ((e.target.parentElement.id || e.target.id) === 'topBtn'){
    window.scrollTo(0, 0);
  }
});

// swiper
var swiper = new Swiper(".mySwiper", {
  // loop: true,
  slidesPerView: 2.5,
  spaceBetween: 20,
  breakpoints: {
    768: {
        slidesPerView: 4,  //브라우저가 768보다 클 때
        spaceBetween: 30,
    },
    1200: {
        slidesPerView: 4.8,  //브라우저가 1200보다 클 때
        spaceBetween: 50,
    }
  }
});
