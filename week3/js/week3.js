window.onload=function(){
  const tab_btn = document.querySelectorAll('.btn')
  const tab_cont = document.querySelectorAll('.cont')

  tab_btn.forEach((it, idx)=>{
    it.addEventListener('click', function(){
      tab_btn.forEach((item)=> {
        item.classList.remove('on')
      })
      tab_cont.forEach((item)=> {
        item.classList.remove('on')
      })
      tab_btn[idx].classList.add('on')
      tab_cont[idx].classList.add('on')
    })
  })
}