window.onload = ()=>{
  let observer = new IntersectionObserver((e)=>{
    e.forEach((el)=>{
      if(el.isIntersecting){
        el.target.style.opacity = 1
        el.target.style.transform = 'translateY(0)'
      }
      // else{
      //   it.target.style.opacity = 0
      //   it.target.style. transform = 'translateY(150px)'
      // }
    })
  })
  const reveal = document.querySelectorAll('.reveal')
  observer.observe(reveal[0])
  observer.observe(reveal[1])
  observer.observe(reveal[2])
  observer.observe(reveal[3])
  observer.observe(reveal[4])
  observer.observe(reveal[5])
}