<?php
    // head
    require_once $_SERVER["DOCUMENT_ROOT"]."/layout/_head.php";
    // header
    require_once $_SERVER["DOCUMENT_ROOT"]."/layout/header.php";
?>

<div class="notice _list _01">
    <div class="content-wrapper">
    <!-- 서브 공통 상단 -->

    <section class="_01">
        <div class="sec_inner">
        <div class="grid_wrap">

            <div class="cont-box" onclick="location.href='./notice_view_01.php'">
            <div class="box-inner">
                <div class="txt-box">
                <div class="tit-box">
                    <p>큰글씨</p>
                </div>
                <div class="mid-tit">
                    <p>작은글씨</p>
                </div>
                <div class="des">
                    <p>설명</p>
                </div>
                </div>
                <div class="bot-box">
                <p class="nm">관리자</p>
                <div class="line"></div>
                <p class="date">날짜</p>
                </div>
            </div>
            </div>

            
            <div class="cont-box box-none">
            <div class="box-inner">
            </div>
            </div>
        </div>

        <div class="page_group">
            <div class="arr-box" onclick="location.href=''">
            <img src="/img/comm/comm_arr_prev.png" alt="">
            </div>

            <div class="page_num">
            <div class="page_dot on" onclick="location.href=''"></div>
            </div>
            <div class="arr-box" onclick="location.href=''">
            <img src="/img/comm/comm_arr_next.png" alt="">
            </div>
        </div>
        </div>
    </section>



    <?php
        require_once $_SERVER["DOCUMENT_ROOT"]."/layout/form.php";
    ?>
    </div>
</div>



<?php
    // 푸터
    require_once $_SERVER["DOCUMENT_ROOT"]."/layout/sub-footer.php";
    require_once SET_END;
?>