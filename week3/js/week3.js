window.onload=()=>{
  window.addEventListener('click', (e) => {
    // console.log(e.target)

    // modal
    if(e.target.id == 'log-in'){
      document.querySelector('.modal').classList.add('show')
    }
    if((e.target.classList == 'dimmed') || (e.target.classList == 'close')){
      document.querySelector('.modal').classList.remove('show')
    }
  })

  // tab
  const tab_btn = document.querySelectorAll('.btn')
  tab_btn.forEach((v, i)=>{
    v.addEventListener('click', (e)=>{
      tab_btn.forEach((vv, ii)=>{
        vv.classList.remove('on')
      })
      e.target.classList.add('on')
    })
  })
}