window.onload = ()=>{
  const $header = document.querySelector('header');
  const $navBtn = document.querySelectorAll('.navi li');
  const $section = document.querySelectorAll('section');
  let windowHeight = window.innerHeight;

  window.addEventListener('scroll', ()=>{
    let windowScrollY = window.pageYOffset;
    for (let i = 0; i < $section.length; i++) {
      let elementTop = $section[i].getBoundingClientRect().top;
      let elementVisible = $section[i].getBoundingClientRect().height;
      let elementHeight = $section[i].scrollHeight
      if (elementTop < windowHeight - elementVisible) {
        $section[i].classList.add("active");
      } else {
        $section[i].classList.remove("active");
      }

      
    // 네비 클래스
    if(windowScrollY >= elementHeight){
      $navBtn[i].classList.add('scene');
    }else{
      $navBtn[i].classList.remove('scene');
    }
    }

    // 헤더 클래스
    if(windowScrollY > $header.getBoundingClientRect().top){
      $header.classList.add('on');
    }else{ 
      $header.classList.remove('on');
    }
  });

  // 네비 스크롤 이벤트
  $navBtn.forEach((el, idx)=>{
    el.addEventListener('click', ()=>{
      window.scrollTo(0, $section[idx].offsetTop - $header.offsetHeight);
    });
  });
}
  