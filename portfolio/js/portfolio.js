const $loader = document.querySelector('.loader');
const $html = document.querySelector('html');
const $fixed = document.querySelector('.fixed')

$html.style.overflow = 'hidden'; //로딩 중 스크롤 방지

window.addEventListener('load', ()=>{
  setTimeout(() => { //로딩속도 구현
    $loader.classList.remove('loader');
    $html.style.overflow = 'auto'; //스크롤 방지 해제
  }, 1000);
})

// scroll event
window.addEventListener('scroll', ()=>{
  const scroll = document.documentElement.scrollTop;
  console.log(scroll)
  if(scroll >= 100){
    $fixed.classList.remove('none')
  }else{
    $fixed.classList.add('none')
  }
})