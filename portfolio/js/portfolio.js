const $loader = document.querySelector('.loader');
const $html = document.querySelector('html');
const $body = document.querySelector('body');
const $fixed = document.querySelector('.fixed');
const $topBtn = document.querySelector('.topBtn');

$html.style.overflow = 'hidden'; //로딩 중 스크롤 방지

window.addEventListener('load', ()=>{
  setTimeout(() => { //로딩속도 구현
    $loader.classList.remove('loader');
    $html.style.overflow = 'auto'; //스크롤 방지 해제
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
})

// topBtn click 이벤트
$topBtn.addEventListener('click', ()=>{
  window.scrollTo(0, 0)
})

