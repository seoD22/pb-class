window.onload = ()=>{
  window.addEventListener('scroll', ()=>{
    const sections = document.querySelectorAll(".reveal")
    for (let i = 0; i < sections.length; i++) {
      let windowHeight = window.innerHeight;
      let elementTop = sections[i].getBoundingClientRect().top;
      let elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
          sections[i].classList.add("active");
        } else {
          sections[i].classList.remove("active");
        }
    }
  });
  
    // 네비바 스타일
    window.addEventListener('scroll', ()=>{
      const header = document.querySelector('.header')
      const content = document.querySelector('#popular')
      const contentTop = content.offsetTop
      scroll_class(header, contentTop)
      console.log(contentTop)
    })
  
    const scroll_class = (el, nm)=>{
      if(document.documentElement.scrollTop > nm){
        // console.log(document.documentElement.scrollTop)
        el.classList.add('on')
      }else{ el.classList.remove('on')}
    }
  
    // 네비게이터 스크롤 이벤트
    // 스크롤 값 확인
}
