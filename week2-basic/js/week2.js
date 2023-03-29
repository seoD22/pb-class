window.onload = function(){
  let observer = new IntersectionObserver((e)=>{
    e.forEach((it)=>{
      if(it.isIntersecting){
        it.target.style.opacity = 1
        it.target.style. transform = 'translateY(0)'
      }
      // else{
      //   it.target.style.opacity = 0
      //   it.target.style. transform = 'translateY(150px)'
      // }
    })
  })
  let reveal = document.querySelectorAll('.reveal')
  observer.observe(reveal[0])
  observer.observe(reveal[1])
  observer.observe(reveal[2])
  observer.observe(reveal[3])
  observer.observe(reveal[4])
  observer.observe(reveal[5])
}