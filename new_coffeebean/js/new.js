const $body = document.querySelector('body')
const $closeBtn = document.querySelector('.eventTab .close');

$closeBtn.addEventListener('click', ()=>{
  const adHeight = document.querySelector('.eventTab').clientHeight;
  $body.style.transform =  `translateY(-${adHeight}px)`;
})