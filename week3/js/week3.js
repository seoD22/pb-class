window.onload=function(){
  // modal 열림
  document.querySelector('#log-in').addEventListener('click', function(){
    document.querySelector('.modal').classList.add('show')
  })
  // modal 닫힘
  document.querySelector('.close').addEventListener('click', function(){
    document.querySelector('.modal').classList.remove('show')
  })
  document.querySelector('.dimmed').addEventListener('click', function(){
    document.querySelector('.modal').classList.remove('show')
  })
  // tab 버튼
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