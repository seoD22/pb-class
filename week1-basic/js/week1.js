window.onload = ()=>{
  const $header = document.querySelector('.header');
  const $navBtn = document.querySelectorAll('.navi li');
  const $section = document.querySelectorAll('section');
  let windowHeight = window.innerHeight;

  window.addEventListener('scroll', ()=>{
    for (let i = 0; i < $section.length; i++) {
      let elementTop = $section[i].getBoundingClientRect().top;
      let elementVisible = 150;

      if (elementTop < windowHeight - elementVisible) {
        $section[i].classList.add("active");
      } else {
        $section[i].classList.remove("active");
      }
    }

    // 네비 스타일
    // 헤더 클래스
    if(document.body.scrollTop > 700 || document.documentElement.scrollTop > 700){
      $header.classList.add('on');
    }else{ 
      $header.classList.remove('on');
    }

    // 네비 클래스
    for (let i = 0; i < $section.length; i++) {
      let elementTop = $section[i].getBoundingClientRect().top + 700;

      if (elementTop < windowHeight ) {
        $navBtn.forEach((ele, index)=>{
          ele.classList.remove('on');
        })
        $navBtn[i].classList.add('on');
      }
    }
  });

  // 네비 스크롤 이벤트
  $navBtn.forEach((el, idx)=>{
    el.addEventListener('click', (e)=>{
      window.scrollTo(0, $section[idx].offsetTop - $header.offsetHeight);
    });
  });
}
  