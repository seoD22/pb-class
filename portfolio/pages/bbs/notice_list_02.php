<?php
    // head
    require_once $_SERVER["DOCUMENT_ROOT"]."/layout/_head.php";
    // header
    require_once $_SERVER["DOCUMENT_ROOT"]."/layout/header.php";
?>

<div class="notice _list _02">
    <div class="content-wrapper">

    <section class="list _01">
      <div class="sec_inner">
        <div class="page_total">
        <p>Total 10</p>
        </div>
        <div class="grid_wrap">
          <div class="grid_box" onclick="''">
            <div class="img-box">
              <div class="tag_card new">new</div>
              <img src="" alt="이미지">
            </div>
            <div class="txt-group">
              <div class="txt-top">
                <div class="cat">
                  <p>카테고리</p>
                </div>
                <div class="date">
                  <p>Update: 2024-12-12</p>
                </div>
              </div>
              <div class="txt-tit">
                <h5>제목</h5>
              </div>
              <div class="txt-des">
                <p>설명</p>
              </div>
              <div class="txt-bot">
                <div class="writer">
                  <p>Writer :  <span class="c-sky">작성자</span></p>
                </div>
                <div class="view">
                  <p>View :  9999</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="page_wrap">
          <div class="page_arr page_prev" onclick="location.href=''">
            <img src="/img/notice/icon_page_prev.png" alt="화살표">
          </div>
          <div class="page_num">
            <div class="num_box on" onclick="location.href=''">
              <p>1</p>
            </div>
          </div>
          <div class="page_arr page_next" onclick="location.href=''">
            <img src="/img/notice/icon_page_next.png" alt="화살표">
          </div>
        </div>
      </div>
    </section>




    </div>
  </div>



<?php
    // 푸터
    require_once $_SERVER["DOCUMENT_ROOT"]."/layout/sub-footer.php";
    require_once SET_END;
?>