window.onload = ()=>{
  const $header = document.querySelector('.header');
  window.addEventListener('scroll', ()=>{
    const $reveal = document.querySelectorAll(".reveal")
    for (let i = 0; i < $reveal.length; i++) {
      let windowHeight = window.innerHeight;
      let elementTop = $reveal[i].getBoundingClientRect().top;
      let elementVisible = 150;

      if (elementTop < windowHeight - elementVisible) {
        $reveal[i].classList.add("active");
      } else {
        $reveal[i].classList.remove("active");
      }
    }

    // 네비바 스타일
    const $content = document.querySelector('#popular');
    const contentTop = $content.offsetTop; 
    scroll_class($header, 100);
    // console.log(contentTop)
  });

    const scroll_class = (el, nm)=>{
      if(document.documentElement.scrollTop > nm){
        // console.log(document.documentElement.scrollTop)
        el.classList.add('on');
      }else{ el.classList.remove('on')}
    }
  
    // 네비게이터 스크롤 이벤트
    const $mainBtn = document.querySelector('.nav_1');
    const $navBtn = document.querySelectorAll('.navi li');
    const $section = document.querySelectorAll('section');

    // 네비버튼 클릭 시 클래스 추가 및 스크롤 이동
    $navBtn.forEach((el, idx)=>{
      el.addEventListener('click', (e)=>{
        // console.log(e.target.dataset.scroll)
        window.scrollTo(0, $section[idx].offsetTop - $header.clientHeight);
        $navBtn.forEach((ele, index)=>{
          ele.classList.remove('on')
        })
        e.target.classList.add('on')
      });
    });

    // 스크롤 시 네비스타일
    window.addEventListener('scroll', ()=>{
      $section.forEach((el, idx)=>{
        el.getBoundingClientRect().top
        // console.log(el.getBoundingClientRect().top)
      })
      for (let i = 0; i < $section.length; i++) {
        let windowHeight = window.innerHeight;
        let elementTop = $section[i].getBoundingClientRect().top;
        
        if (elementTop < windowHeight ) {
          $navBtn.forEach((ele, index)=>{
            ele.classList.remove('on')
          })
          $navBtn[i].classList.add('on');
        }
      }
    })
    
}
  