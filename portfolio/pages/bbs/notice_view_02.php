<?php
    // head
    require_once $_SERVER["DOCUMENT_ROOT"]."/layout/_head.php";
    // header
    require_once $_SERVER["DOCUMENT_ROOT"]."/layout/header.php";
?>

<div class="notice _view _02">
    <div class="content-wrapper">

    <section>
      <div class="sec_inner">
        <div class="view_group">
          <div class="view_tit_group">
            <div class="tit">
              <h5>제목</h5>
            </div>
            <div class="des">
              <div class="des_txt _01">
                <p>작성자</p>
                <p class="bold">작성자</p>
              </div>
              <div class="des_txt _02">
                <p>등록일</p>
                <p class="bold">날짜</p>
                <!-- <p class="bold">15:50</p> -->
              </div>
              <div class="des_txt _03">
                <p>조회수</p>
                <p>999</p>
              </div>
            </div>
          </div>
          <div class="view_cont_group">
            <div class="img-box">
              <img src="" alt="이미지">
            </div>
            <div class="txt-box">
              <p>
              내용
              </p>
            </div>
          </div>
          <div class="view_page_group">
            <div class="page_arr_group _01" onclick="location.href=''">
              <div class="view_left">
                <p>이전 글</p>
                <img src="/img/notice/icon_view_page_prev.png" alt="화살표">
              </div>
              <div class="view_right">
                <div class="txt-box">
                  <p>이전 글</p>
                </div>
              </div>
            </div>
              <div class="page_arr_group _02" onclick="location.href=''">
              <div class="view_left">
                <p>다음 글</p>
                <img src="/img/notice/icon_view_page_next.png" alt="화살표">
              </div>
              <div class="view_right">
                <div class="txt-box">
                  <p>다음 글</p>
                </div>
              </div>
            </div>
          </div>
          <div class="view_list" onclick="location.href=''">
            <div class="txt-box">
              <p>목록</p>
            </div>
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