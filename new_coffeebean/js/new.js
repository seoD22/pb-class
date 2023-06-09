const $body = document.querySelector('body')
const $closeBtn = document.querySelector('.eventTab .close');
const $relBtn = document.querySelectorAll('.relations button');
const $relList = document.querySelectorAll('.relations li')

// load event
window.onload = ()=>{
  setTimeout (()=>{
  scrollTo(0,0);
  },100);
  }

// event tab
$closeBtn.addEventListener('click', ()=>{
  const adHeight = document.querySelector('.eventTab').clientHeight;
  $body.style.transform =  `translateY(-${adHeight}px)`;
})

// relations click event
for(let i=0; i<$relBtn.length; i++){
  $relBtn[i].addEventListener('click', ()=>{
    $relList[i].classList.toggle('show');
  })
}