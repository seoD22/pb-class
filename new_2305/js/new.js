const $body = document.querySelector('body');
const $hamburger = document.querySelector('.hamburger');

// 햄버거버튼 이벤트
$hamburger.addEventListener('click', ()=>{
  $hamburger.classList.toggle('show');
  $body.classList.toggle('dimmed');
})