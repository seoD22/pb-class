<?php
    // head
    require_once $_SERVER["DOCUMENT_ROOT"]."/layout/_head.php";
    // header
    require_once $_SERVER["DOCUMENT_ROOT"]."/layout/header.php";
?>

<div class="notice _view _01">
  <div class="content-wrapper">
    <!-- 서브 공통 상단 -->



    <section class="_01">
      <div class="sec_inner">
        <div class="tit-box">
          <div class="cate">
            <p>카테고리</p>
          </div>
          <div class="tit">
            <h5>제목</h5>
          </div>
          <div class="grey_box">
            <p class="nm">관리자</p>
            <div class="line"></div>
            <p class="date">날짜</p>
          </div>
        </div>
        <div class="cont-txt">
            텍스트
        </div>
        <div class="page_group">
          <div class="arr_box" onclick="location.href='이전페이지'">
            <p>이전</p>
            <div class="line"></div>
            <p class="cont-tit">이전글</p>
          </div>
          <div class="toList" onclick="location.href='./notice_list_01.php'">
            <p>목록으로</p>
          </div>
          <div class="arr_box" onclick="location.href='다음페이지'">
            <p class="cont-tit">다음글</p>
            <div class="line"></div>
            <p>다음</p>
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