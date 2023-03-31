window.onload=()=>{
  const modal = document.querySelector('.modal')
    function modal_show(){
    modal.classList.add('show');
  }
  function modal_del(){
    modal.classList.remove('show');
  }
  function clicker(el){
    document.querySelector(el).addEventListener('click', modal_show)
  }
  function clicker_del(el){
    document.querySelector(el).addEventListener('click', modal_del)
  }
  // modal 열림
  clicker('#log-in')
  // modal 닫힘
  clicker_del('.close')
  clicker_del('.dimmed')

  // tab 버튼
  
}