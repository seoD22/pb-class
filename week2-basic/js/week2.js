window.onload = ()=>{
  let observer = new IntersectionObserver((e)=>{
    e.forEach((el)=>{
      if(el.isIntersecting){
        el.target.classList.add('active')
      }
    })
  })
  const reveal = document.querySelectorAll('.reveal')
  for(let i = 0 ; i < 6; i++){
    observer.observe(reveal[i])
  }
}