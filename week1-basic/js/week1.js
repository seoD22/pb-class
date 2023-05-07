window.onload = ()=>{
  const $header = document.querySelector('header');
  const $navBtn = document.querySelectorAll('.navi li');
  const $section = document.querySelectorAll('section');
  const headerHeight = $header.getBoundingClientRect().height;

  window.addEventListener('scroll', ()=>{
    let windowScrollY = window.pageYOffset;
    for (let i = 0; i < $section.length; i++) {
      let elementTop = $section[i].offsetTop;
      let elementVisible = $section[i].getBoundingClientRect().height;
      
      // 네비 클래스
      if(windowScrollY >= elementTop - headerHeight - 50 && windowScrollY < elementTop - headerHeight - 50 + elementVisible){
        $navBtn[i].classList.add('scene');
      }else{
        $navBtn[i].classList.remove('scene');
      }

      // 헤더 클래스
      if(windowScrollY > headerHeight){
        $header.classList.add('on');
      }else{ 
        $header.classList.remove('on');
      }
    }
  });

  // 네비 스크롤 이벤트
  $navBtn.forEach((el, idx)=>{
    el.addEventListener('click', ()=>{
      window.scrollTo(0, $section[idx].offsetTop - $header.offsetHeight);
    });
  });
}
  