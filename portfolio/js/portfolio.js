const $loader = document.querySelector('.loader');
const $cursorLink = document.querySelectorAll('.cursorFilter');
let $cursor = document.querySelector('.cursor');
const $main = document.querySelector('.main_banner');
const $html = document.querySelector('html');
const $body = document.querySelector('body');
const $fixed = document.querySelector('.fixed');
const $topBtn = document.querySelector('#topBtn');
const $section = document.querySelectorAll('section');
const $h2 = document.querySelectorAll('section h2');
const $resumeBtn = document.querySelector('#resumeBtn');
const $portfolioList = document.querySelectorAll('.portfolio li');
const $header = document.querySelector('header');
const $navi = document.querySelectorAll('.navi li');
const $contact = document.querySelector('.contact');
const $burgerBtn = document.querySelector('header button');
const $burgerMenu = document.querySelector('.burgerMenu');
const $burgerList = document.querySelector('.hamburger');

$html.style.overflow = 'hidden'; //로딩 중 스크롤 방지

window.addEventListener('load', ()=>{
  scrollTo(0, 0);
  setTimeout(() => { //로딩속도 구현
    $loader.classList.remove('loader');
    $html.style.overflow = 'auto'; //스크롤 방지 해제
    $main.classList.remove('none');
    $burgerBtn.classList.remove('none')
  }, 1000);
})

// 마우스커서
window.addEventListener('mousemove', cursor);

let mouseX;
let mouseY;
function cursor(e){
  mouseX = e.clientX;
  mouseY = e.clientY;
  $cursor.style.left = mouseX + 'px';
  $cursor.style.top = mouseY + 'px';
  console.log(e)
}

function cursorEvent_remove(){
  $cursor.classList.remove('link-grow');
}

function cursorEvent_add(){
  $cursor.classList.add('link-grow');
}

$cursorLink.forEach((link)=>{
  link.addEventListener('mouseleave', cursorEvent_remove);
  link.addEventListener('mouseover', cursorEvent_add);
})

// 네비게이션
for(let i = 0; i<$navi.length; i++){
  let sectionTop = $section[i].getBoundingClientRect().top;
  let elementVisible = $section[i].getBoundingClientRect().height;
  const navbarHeight = $header.getBoundingClientRect().height;
  const windowHeight = window.innerHeight;

  // 네비 버튼 클릭 시 이동
  $navi[i].addEventListener('click', ()=>{
    window.scrollTo(0, $section[i].offsetTop - navbarHeight);
  })

  // 스크롤 위치에 따라 클래스 적용
  window.addEventListener('scroll', ()=>{
    windowscrollY = window.pageYOffset;
    if(windowscrollY > sectionTop - navbarHeight - 200 && windowscrollY <= sectionTop + elementVisible - navbarHeight - 200){
      $section[i].classList.add('scene');
      $navi[i].classList.add('scene');
    }else{
      $section[i].classList.remove('scene');
      $navi[i].classList.remove('scene');
    }
  })
}

// 햄버거 버튼
$burgerBtn.addEventListener('click', ()=>{
  $burgerBtn.classList.toggle('close');
  $burgerMenu.classList.toggle('show');
  $body.classList.toggle('noScroll')
  setTimeout(() => {
    $burgerList.classList.toggle('show');
  }, 800);
})


// scroll event
window.addEventListener('scroll', ()=>{
  const scrollTop = document.documentElement.scrollTop;
  const innerHeight = document.documentElement.clientHeight;
  const bodyBottom = $body.scrollHeight;
  const contactHeight = $contact.clientHeight;

  const options = {
    threshold: [1]
  }
  const io = new IntersectionObserver((entries)=>{
    entries.forEach((entry, idx)=>{
      if(entry.isIntersecting){
        entry.target.classList.add('show');
      }
    })
  }, options);

  const option_por = {
    threshold: [.7]
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
  if(scrollTop + innerHeight + contactHeight >= bodyBottom){  // scroll 맨 아래 감지
    $topBtn.classList.remove('none');
    $fixed.classList.add('none');
  }else if(scrollTop >= 100){
    $fixed.classList.remove('none');
    $topBtn.classList.add('none');
    $header.classList.add('fix');
  }else{
    $fixed.classList.add('none');
    $topBtn.classList.add('none');
    $header.classList.remove('fix');
  }

  // intersection Observer 
  for(let i = 0; i<$h2.length; i++){
    io.observe($h2[i]); // 모든 h2 등록
    io.observe(document.querySelector('.introduce .text'))
  }
  for(let i = 0; i<$portfolioList.length; i++){
    io_por.observe($portfolioList[i]); // 포폴 li 등록
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
  if (((e.target.parentElement.id || e.target.id) === 'topBtn') || (e.target.id === 'logo')){
    window.scrollTo(0, 0);
  }
});

// swiper
var swiper = new Swiper(".mySwiper", {
  // loop: true,
  slidesPerView: 1.3,
  spaceBetween: 20,
  breakpoints: {
    600:{
      slidesPerView: 2.4,  //브라우저가 768보다 클 때
      spaceBetween: 30,
    },
    1100: {
        slidesPerView: 3.8,  //브라우저가 768보다 클 때
        spaceBetween: 30,
    },
    1400: {
        slidesPerView: 4.8,  //브라우저가 1200보다 클 때
        spaceBetween: 50,
    }
  }
});
