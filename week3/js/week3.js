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
  const tab_btn = document.querySelectorAll('.btn');
  const cont = document.querySelectorAll('.cont');
  tab_btn.forEach((el, idx)=>{
    el.addEventListener('click', (e)=>{
      cont.forEach((ele, index)=>{
        ele.classList.remove('on')
      })
      cont.item(idx).classList.add('on')
      tab_btn.forEach((vv, ii)=>{
        vv.classList.remove('on');
      })
      e.target.classList.add('on');
    
    })
  })
}