//배경 클릭시 모달 로그인 닫기
$(".login_filter").on("click", function () {
    $("body").css("overflow", "auto");
    $(".login_filter").css("display", "none");
    $(".login_bg").css("display", "none");
    $(".join_se").css("display", "none");
    $(".finding_se").css("display", "none");
    $(".finding_id").css("display", "none");
    $(".finding_id_layout").css("display", "none");
})
//닫기 버튼 눌럿을시 닫기
$(".close_login").on("click", function () {
    $("body").css("overflow", "auto");
    $(".login_filter").css("display", "none");
    $(".login_bg").css("display", "none");
    $(".join_se").css("display", "none");
    $(".finding_se").css("display", "none");
    $(".finding_id").css("display", "none");
    $(".finding_id_layout").css("display", "none");
})
//로그인에서 회원가입 버튼 눌럿을시
$(".join_btn").on("click", function () {
    $(".login_se").css("display", "none");
    // $(".login_bg").css("top","calc(50% - 380px)")
    $(".join_se").css("display", "block");
})


//비번찾기 버튼 눌럿을시
$(".finding_btn").on("click", function () {
    // $(".login_bg").css("top","calc(50% - 380px)")
    $(".login_se").css("display", "none");
    $(".finding_se").css("display", "block");
})
// 로그인 클릭시 팝업 활짝
$(".login_btn").on("click", function () {
    $("body").css("overflow", "hidden");
    $(".login_filter").css("display", "block");
    // $(".login_bg").css("top","calc(50% - 257.5px)")
    $(".login_bg").css("display", "block");
    $(".login_se").css("display", "block");
})
//로그인에서 회원가입 팝업 활짝
$(".join_btn2").on("click", function () {
    $("body").css("overflow", "hidden");
    $(".login_filter").css("display", "block");
    $(".login_bg").css("display", "block");
    // $(".login_bg").css("top","calc(50% - 380px)")
    $(".join_se").css("display", "block");
    $(".login_se").css("display", "none");
})

//아이디 찾기 -- 비밀번호 재설정 탭

$(".tab_content").hide();
$(".tab_content").first().show();
$(".tab_menu li").click(function () {
    $(".tab_menu li").removeClass("on");
    $(this).addClass("on");

    $(".tab_content").hide();
    var currentTab = $(this).index();
    $(".tab_content").eq(currentTab).show();
});

//아이디 찾기 버튼 눌럿을시
$(".find_id_btn").on("click", function () {
    $(".login_se").css("display", "none");
    $(".join_se").css("display", "none");
    $(".finding_se").css("display", "none");
    $(".finding_id").css("display", "block");
    $(".finding_id_layout").css("display", "block");
    $(".finding_password_layout").css("display", "none");
})
//비밀번호 재설정 눌럿을시
$(".find_pw_btn").on("click", function () {
    $(".login_se").css("display", "none");
    $(".join_se").css("display", "none");
    $(".finding_se").css("display", "none");
    $(".finding_id").css("display", "block");
    $(".finding_id_layout").css("display", "none");
    $(".finding_password_layout").css("display", "block");
})
//비밀번호 재설정에서 이메일 전송 눌럿을시
$(".pw_btn_class").on("click", function () {
    $(".finding_pass_input2").css("display", "block");
})
$(".pw_btn_class2").on("click", function () {
    $(".finding_pass_input2").css("display", "block");
    $(".pass_check_text").css("display", "block");
    $(".finding_pass_txt").css("display", "block");
    $(".change_pass").css("display", "block");
})




function id_chk_complete(){
    // $(".find_id_btn").click(function(){
        $(".popup_set").css("display","none");
        $(".popup_set.popup_set4").css("display","block");
        $(".find_txt_group>div").css("display","none");
        $(".find_txt_group>div.find_txt1").css("display","block");
    // })
    }




    $(document).ready(function() {
        var now = new Date();
        var year = now.getFullYear();
        var mon = (now.getMonth() + 1) > 9 ? '' + (now.getMonth() + 1) : '0' + (now.getMonth() + 1);
        var day = (now.getDate()) > 9 ? '' + (now.getDate()) : '0' + (now.getDate());
        //년도 selectbox만들기               
        for (var i = 1900; i <= year; i++) {
            $('#year').append('<option value="' + i + '">' + i + '년</option>');
        }
    
        // 월별 selectbox 만들기            
        for (var i = 1; i <= 12; i++) {
            var mm = i > 9 ? i : "0" + i;
            $('#month').append('<option value="' + mm + '">' + mm + '월</option>');
        }
    
        // 일별 selectbox 만들기
        for (var i = 1; i <= 31; i++) {
            var dd = i > 9 ? i : "0" + i;
            $('#day').append('<option value="' + dd + '">' + dd + '일</option>');
        }
        $("#year  > option[value=" + year + "]").attr("selected", "true");
        $("#month  > option[value=" + mon + "]").attr("selected", "true");
        $("#day  > option[value=" + day + "]").attr("selected", "true");


    
    })

    