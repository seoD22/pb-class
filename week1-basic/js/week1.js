window.onload = ()=>{
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
    const $header = document.querySelector('.header');
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
    const sectionOffset = $section.forEach((el, idx)=>{
      el.offsetTop
      // console.log(el.offsetTop)
    })

    let currentScrollValue = document.documentElement.scrollTop;

    // 네비버튼 클릭 시 클래스 추가
    $navBtn.forEach((el, idx)=>{
      el.addEventListener('click', (e)=>{
        // console.log(e.target.dataset.scroll)
        console.log(sectionOffset);
        const dataScroll = e.target.dataset.scroll
        window.scrollTo(0, dataScroll);
        $navBtn.forEach((ele, index)=>{
          ele.classList.remove('on')
        })
        e.target.classList.add('on')
      }) 
    })

    // home버튼 클릭 시 메인으로 스크롤
    // $mainBtn.addEventListener('click', ()=>{
    //   window.scrollTo(0, 0)
    // })


}
  