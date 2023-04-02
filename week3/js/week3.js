window.onload=()=>{
  window.addEventListener('click', (e) => {
    // console.log(e.target)

    // modal
    const modal = document.querySelector('.modal')
    if(e.target.id == 'log-in'){
      modal.classList.add('show')
    }
    if((e.target.classList == 'dimmed') || (e.target.classList == 'close')){
      modal.classList.remove('show')
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