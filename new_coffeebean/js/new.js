const $body = document.querySelector('body')
const $closeBtn = document.querySelector('.eventTab .close');

// load event
window.addEventListener('load', ()=>{
  scrollTo(0, 0);
})

$closeBtn.addEventListener('click', ()=>{
  const adHeight = document.querySelector('.eventTab').clientHeight;
  $body.style.transform =  `translateY(-${adHeight}px)`;
})