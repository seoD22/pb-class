document.addEventListener('DOMContentLoaded', function() {
  const load = document.querySelector('#load');
  const html = document.querySelector('html');
  const loadText = document.querySelector('#load .logo_box._01 em')
  const loadText_02 = document.querySelector('#load .logo_box._02 .text')
  const loadLine = document.querySelector('#load .logo_box._02 .line')

  html.style.overflow = 'hidden'; // 로딩 중 스크롤 방지

  window.addEventListener('load', function () {
      // 아래 setTimeout은 로딩되는 과정을 임의로 생성하기 위해 사용. 실제 적용 시에는 삭제 후 적용해야함.
      loading();
  });

  // 로딩화면
  function loading() {
    setTimeout(() => {
      load.classList.add('show')

      // loadText.style.opacity = '1';
      // loadText.style.maxWidth = '1000px';

      // loadLine.style.opacity = '1'
      // loadLine.style.width = '45vw'

      // loadText_02.style.opacity = '1';
      // loadText_02.style.paddingLeft = '0';

      setTimeout(() => { //  <-* 로딩속도를 구현하기 위한 코드로 실제 적용시 제거
        load.style.opacity = '0';
        html.style.overflow = 'auto'; // 스크롤 방지 해제

        setTimeout(() => {
            // load.style.display = 'none';
        }, 400);

      }, 2000); // <-* 로딩속도 구현
    }, 1500)

  }
});