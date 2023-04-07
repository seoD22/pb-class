const loader = document.querySelector('.loader');
const html = document.querySelector('html');

html.style.overflow = 'hidden'; //로딩 중 스크롤 방지

window.addEventListener('load', ()=>{
  setTimeout(() => { //로딩속도 구현
    loader.classList.add('none');
    html.style.overflow = 'auto'; //스크롤 방지 해제
  }, 1000);
})