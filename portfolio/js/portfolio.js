const $loader = document.querySelector('.loader');
const $main = document.querySelector('.main_banner');
const $html = document.querySelector('html');
const $body = document.querySelector('body');
const $fixed = document.querySelector('.fixed');
const $topBtn = document.querySelector('.topBtn');
const $section = document.querySelectorAll('section')

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
  // console.log(scroll)

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

  for(let i = 0; i<$section.length; i++){
    if(scrollTop  + 400 >= $section[i].offsetTop){
      $section[i].classList.add('reveal')
    }else{
      $section[i].classList.remove('reveal')
    }
  }

  // scroll 이벤트 함수
  document.body.style.setProperty('--scroll', window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
})

// topBtn click 이벤트
$topBtn.addEventListener('click', ()=>{
  window.scrollTo(0, 0)
})

