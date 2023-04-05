window.onload=()=>{
  window.addEventListener('click', (e) => {
    // console.log(e.target)

    // modal
    const $modal = document.querySelector('.modal');
    if(e.target.id == 'log-in'){
      $modal.classList.add('show');
    }
    if((e.target.classList == 'dimmed') || (e.target.classList == 'close')){
      $modal.classList.remove('show');
    }
  })

  // tab, content 
  const $tab_btn = document.querySelectorAll('.btn');
  const $cont = document.querySelectorAll('.cont');
  const removeClass = (arr, cls)=>{
    arr.forEach((el, idx)=>{
      el.classList.remove(cls);
    })
  }

  $tab_btn.forEach((el, idx)=>{
    el.addEventListener('click', (e)=>{
      removeClass($cont, 'on');
      removeClass($tab_btn, 'on');
      $cont.item(idx).classList.add('on');
      e.target.classList.add('on');
    })
  })
}