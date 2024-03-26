<?php
   // include_once $_SERVER["DOCUMENT_ROOT"]."/layout/_head.php";
   // include_once $_SERVER["DOCUMENT_ROOT"]."/comp/test.html";
?>
<div class="login_filter"></div>


<div class="login_bg">
    <div class="login_layout" scroll="no">
        <div class="login_logo">
            <img src="/img/login_logo.png" alt="로그인 로고">
        </div>
        <div class="close_login">
            <img src="/img/login_close.png" alt="로그인 닫기">
        </div>
        <div class="login_se">
            <form action="/pages/db_crud/member_login_check.php" method="POST">
                <div class="full_input" style="margin-bottom:5px">
                    <input type="text" id="input_id" name="mb_id" placeholder="아이디" required>
                </div>
                <div class="full_input">
                    <input type="password" id="input_pw" name="mb_password" placeholder="비밀번호" required>
                </div>
                <div class="login_submit">
                    <input type="submit" value="로그인">
                </div>
            </form>
            <ul class="join_finding">
                <li class="join_btn">
                <p>회원가입</p>
                </li>
                <li>
                    |
                </li>
                <li class="finding_btn">
                    <p>아이디,비밀번호 찾기</p>
                </li>
            </ul>
            <div class="sns_layout">
                <ul class="sns_line">
                    <li>
                        <hr>
                    </li>
                    <li>
                        <p>간편로그인</p>
                    </li>
                    <li>
                        <hr>
                    </li>
                </ul>
                <ul class="sns_login">
                    <!-- <li onclick="">
                        <img src="/img/g_login.png" alt="구글 로그인">
                    </li> -->
                    <li onclick="location.href='<?php echo $login_auth_url ?>'">
                        <img src="/img/k_login.png" alt="카카오 로그인">
                    </li>
                    <li onclick="location.href='<?php echo $login_auth_url ?>'">
                        <img src="/img/n_login.png" alt="네이버로그인">
                    </li>
                </ul>
            </div>
        </div>
        <div class="join_se">
            <form action="/pages/db_crud/register_form_update.php" method="POST">
                <p class="join_info_title">
                    <span>[필수]</span> 개인정보 처리방침
                </p>
                <div>
                    <textarea class="join_area" name="" id="" readonly>
푸른세상안과 (이하 '회사'는) 고객님의 개인정보를 중요시하며,"정보통신망 이용촉진 및 정보보호"에 관한법률을 준수하고 있습니다. 
회사는 개인정보처리방침을 통하여 고객님께서 제공하시는 개인정보가 어떠한 용도와 방식으로 이용되고 있으며,개인정보보호를 위해 어떠한 조치가 취해지고 있는지
알려드립니다.

회사는 개인정보처리방침을 개정하는 경우 웹사이트 공지사항(또는 개별공지)을 통하여 공지할 것입니다. 
본 방침은 : 2023 년 12 월 04 일 부터 시행됩니다.수집하는 개인정보 항목 

회사는 회원가입, 상담, 서비스 신청 등을 위해 아래와 같은 개인정보를 수집하고 있습니다. 
이름, 생년월일, 성별, 주민번호, 로그인ID, 비밀번호, 자택전화번호, 자택주소, 휴대전화번호, 이메일, 직업, 서비스이용기록, 접속로그, 쿠키,
접속IP정보 
개인정보 수집방법 : 홈페이지(회원가입), 각종게시물작성, 이벤트참여, 녹취 
상담 신청시 : 이름, 핸드폰, 나이, 지점 

개인정보의 수집 및 이용목적 
회사는 수집한 개인정보를 다음의 목적을 위해 활용합니다. 
① 서비스 제공에 관한 계약 이행 및 서비스 제공 
② 회원관리 회원제 서비스 이용에 따른 본인확인, 개인 식별, 불량회원의 부정 이용 방지와 비인가 사용 방지, 가입 의사 확인, 불만 처리 등 민원처리,
고지사항 전달

③ 마케팅 및 광고에 활용 신규서비스 개발 및 특화, 이벤트 등 광고성 정보 전달, 접속 빈도 파악 또는 회원의 서비스 이용에 대한 통계 

개인정보의 보유 및 이용기간 

회사는 개인정보 수집 및 이용목적이 달성된 후에는 예외 없이 해당 정보를 지체 없이 파기합니다. 
단, 다음의 정보에 대해서는 아래의 이유로 명시한 기간 동안 보존합니다. 
보존 항목 : 로그인ID 
보존 근거 : 탈퇴후 같은 로그인ID로 재가입 불가 
보존 기간 : 영구보존 
상담 참여시 : 수집일로부터 6개월(고객 동의 철회시 지체없이 파기) 
개인정보의 파기절차 및 파기방법 

회사는 원칙적으로 개인정보 수집 및 이용목적이 달성된 후에는 해당 정보를 지체없이 파기합니다. 
파기절차 및 방법은 다음과 같습니다. 
파기절차 
회원님이 회원가입 등을 위해 입력하신 정보는 목적이 달성된 후 별도의 DB로 옮겨져(종이의 경우 별도의 서류함) 내부 방침 및 기타 관련 법령에 의한 정보보호
사유에
따라(보유 및

이용기간 참조) 일정 기간 저장된 후 파기되어집니다. 별도 DB로 옮겨진 개인정보는 법률에 의한 경우가 아니고서는 보유되어지는 이외의 다른 목적으로 이용되지
않습니다.

파기방법 
- 전자적 파일형태로 저장된 개인정보는 기록을 재생할 수 없는 기술적 방법을 사용하여 삭제합니다. 
- 종이에 출력된 개인정보는 분쇄기로 분쇄하거나 소각을 통하여 파기합니다. 
이용자 및 법정대리인의 권리와 그 행사방법 

이용자는 언제든지 등록되어 있는 자신의 개인정보를 조회하거나 수정할 수 있으며 가입 해지를 요청할 수도 있습니다. 
이용자들의 개인정보 조회, 수정을 위해서는 ‘개인정보변경’ (또는 ‘회원정보수정’ 등)을 가입 해지(동의철회)를 위해서는 ‘회원탈퇴’를 클릭하여 본인 확인
절차를 거치신 후
직접

열람, 정정 또는 탈퇴가 가능합니다. 혹은 개인정보관리책임자에게 서면, 전화 또는 이메일로 연락 주시면 지체 없이 조치하겠습니다. 
귀하가 개인정보의 오류에 대한 정정을 요청하신 경우에는 정정을 완료하기 전까지 당해 개인정보를 이용 또는 제공하지 않습니다. 또한 잘못된 개인정보를 제3자에게
이미 제공한
경우에는

정정 처리결과를 제3자에게 지체 없이 통지하여 정정이 이루어지도록 하겠습니다. 
개인정보 자동수집 장치의 설치, 운영 및 그 거부에 관한 사항 

회사는 이용자의 정보를 수시로 저장하고 찾아내는 ‘쿠키(cookie)’ 및 ‘세션(Session)’ 등을 운용합니다. 
쿠키란 회사의 웹사이트를 운영하는데 이용되는 서버가 귀하의 브라우저에 보내는 아주 작은 텍스트 파일로서 귀하의 컴퓨터 하드디스크에 저장됩니다.
회사는(은) 다음과
같은

목적을 위해 쿠키를 사용합니다. 
세션이란 접속자의 네트워크의 유지성 및 고유성을 파악하는 용도로 서버의 저장공간(메모리 및 하드디스크)에 저장되며, 회사는 다음과 같은 목적을 위해 세션을
사용합니다.

① 쿠키 등 사용목적 
회원과 비회원의 접속 빈도나 방문 시간 등을 분석, 이용자의 취향과 관심분야를 파악 및 자취 추적, 각종 이벤트 참여 정도 및 방문 회수 파악 등을 통한 타켓
마케팅 및
개인 맞춤

서비스를 제공하며, 경우에 따라 수집하고자 하는 쿠키 정보는 상기 목적을 위해 전문기관 및 대행사에 의뢰할 수 있습니다. 
이용자는 쿠키 설치에 대한 선택권을 가지고 있습니다. 따라서, 이용자는 웹브라우저에서 옵션을 설정함으로써 모든 쿠키를 허용하거나, 쿠키가 저장될 때마다 확인을
거치거나,
아니면

모든 쿠키의 저장을 거부할 수도 있습니다. 
② 쿠키 설정 거부 방법 
쿠키 설정을 거부하는 방법으로는 이용자가 사용하시는 웹브라우저의 옵션을 선택함으로써 모든 쿠키를 허용하거나 쿠키를 저장할 때마다 확인을 거치거나, 모든 쿠키의
저장을 거부할
수

있습니다. 
설정방법 : 
예) 인터넷 익스플로어의 경우 - 웹브라우저 상단의 도구 > 인터넷 옵션 > 개인정보 
단, 이용자가 쿠키 설치를 거부하였을 경우 서비스 제공에 어려움이 있을 수 있습니다. 
③ 세션 사용 목적 
회원을 구분하는 고유의 값으로 접속 시 동일임을 증명하기 위해 사용됩니다. 
세션은 회원이 로그아웃을 하는 즉시 파기 됩니다. 

동의철회(회원탈퇴) 

이용자가 회원 가입 시 개인정보의 수집, 이용 및 제공에 대해 동의하신 내용을 언제든지 철회할 수 있습니다. 회사의 1:1 상담에 작성해 주시면 본인
확인 후 탈퇴
처리

하겠습니다. 

개인정보 제공 

회사는 이용자의 개인정보를 원칙적으로 외부에 제공하지 않습니다. 다만, 아래의 경우에는 예외로 합니다. 
이용자들이 사전에 동의한 경우 
법령의 규정에 의거하거나, 수사 목적으로 법령에 정해진 절차와 방법에 따라 수사기관의 요구가 있는 경우 

수집한 개인정보의 위탁 

이용자 및 법정 대리인은 언제든지 등록되어 있는 자신 혹은 당해 만 14세 미만 아동의 개인정보를 조회하거나 수정할 수 있으며 가입해지를 요청할 수도
있습니다. 
이용자 혹은 만 14세 미만 아동의 개인정보 조회,수정을 위해서는‘개인정보변경'이 가능합니다. 
혹은 조회수정 삭제요청을 개인 정보관리 책임자에게 서면, 전화 또는 이메일로 연락하시면 지체 없이 조치하겠습니다.귀하가 개인정보의 오류에 대한 정정을 요청하신
경우에는
정정을

완료하기 전까지 당해 
개인정보를 이용 또는 제공하지 않습니다. 또한 잘못된 개인정보를 제3자에게 이미 제공한 경우에는 정정 처리결과를 제3자에게 지체 없이 통지하여 정정이
이루어지도록
하겠습니다.

OO는 이용자 혹은 법정 대리인의 요청에 의해 해지 또는 삭제된 개인정보는“OO가 수집하는 개인정보의 보유 및 이용기간”에 명시된 바에 따라 처리하고 그 외의
용도로 열람
또는

이용할 수 없도록 처리하고 있습니다. 
개인정보 자동수집 장치의 설치, 운영 및 그 거부에 관한 사항 

쿠키 등 인터넷 서비스 이용 시 자동 생성되는 개인정보를 수집하는 장치를 운영하지 않습니다. 

개인정보에 관한 민원서비스 

회사는 고객의 개인정보를 보호하고 개인정보와 관련한 불만을 처리하기 위하여 아래와 같이 관련 부서 및 개인정보관리책임자를 지정하고 있습니다. 
개인정보관리책임자 성명 : 김모세 
전화번호 : 031-935-5015
moses3405@hanmail.net
귀하께서는 회사의 서비스를 이용하시며 발생하는 모든 개인정보보호 관련 민원을 개인정보관리책임자 혹은 담당부서로 신고하실 수 있습니다. 회사는 이용자들의
신고사항에 대해
신속하게

충분한 답변을 드릴 것입니다. 
기타 개인정보침해에 대한 신고나 상담이 필요하신 경우에는 아래 기관에 문의하시기 바랍니다. 
개인분쟁조정위원회 (www.1336.or.kr/1336) 
정보보호마크인증위원회 (www.eprivacy.or.kr/02-580-0533~4) 
대검찰청 인터넷범죄수사센터 (http://icic.sppo.go.kr/02-3480-3600) 
경찰청 사이버테러대응센터 (www.ctrc.go.kr/02-392-0330) 

부칙 
법령, 정책 또는 보안기술의 변경에 따라 내용의 추가, 삭제 및 수정이 있을 시에는 변경사항 시행일의 7일전부터 회사의 웹사이트의 공지사항을 통하여
고지합니다.
                    </textarea>   
                </div>
                <div class="check_layout">
                    <input type="checkbox" class="checkbx" name="join_info_agree" id="join_info_agree" checked>
                    <label class="checkbx_label" for="join_info_agree">개인정보 취급방침을 읽었으며, 이에 동의합니다.</label>
                </div>
                <div class="join_info">
                    <p class="required_text">필수 입력사항*</p>
                    <ul class="join_box">
                        <li class="one">
                            <label for="mb_name">이름 <span></span></label>
                            <input type="text" name="mb_name" placeholder="홍길동" required>
                        </li>
                        <li class="one">
                            <label for="mb_id">아이디 <span></span></label>
                            <input type="text" name="mb_id" placeholder="아이디를 입력해주세요" required>
                        </li>
                        <li class="one">
                            <label for="mb_password">비밀번호 <span></span></label>
                            <input type="password" name="mb_password" placeholder="비밀번호를 입력해주세요" required>
                        </li>
                        <li class="one">
                            <label for="mb_password_chk">비밀번호 확인 <span></span></label>
                            <input type="password" name="mb_password_chk" placeholder="비밀번호를 재입력해주세요" required>
                        </li>
                        <li class="three">
                            <label for="email1">이메일 <span></span></label>
                            <div class="layout_box">
                                <input type="text" name="email1" required>
                                <p>@</p>
                                <input type="text" name="email2" placeholder="직접입력" required>
                            </div>
                        </li>
                        <li class="three">
                            <label for="mb_1">연락처 <span></span></label>
                            <div class="layout_box">
                                <select name="mb_1" id="" required>
                                    <option value="선택">선택</option>
                                    <option value="010">010</option>
                                    <option value="011">011</option>
                                </select>
                                <input type="text" name="mb_2" required onKeyup="onlyNumber(this)" maxlength="4">
                                <input type="text" name="mb_3" required onKeyup="onlyNumber(this)" maxlength="4">
                            </div>
                        </li>
                        <li class="three">
                            <label for="year">생년월일</label>
                            <div class="layout_box">
                                <select id="year" name="birth">

                                </select>
                                <select id="month" name="birth2">

                                </select>
                                <select id="day" name="birth3" class="add">

                                </select>
                            </div>
                        </li>
                        <li class="two">
                            <div class="check_layout">
                                <input type="checkbox"id="ag_sms" name="ck2">
                                <label for="ag_sms">SMS 수신 <span class="join_dot"></span>
                                </label>
                            </div>
                            <div class="check_layout">
                                <input type="checkbox"id="ag_email" name="ck3">
                                <label for="ag_email">E-mail 수신 <span class="join_dot"></span>
                                </label>
                            </div> 
                        </li>
                    </ul>
                </div>
                <input class="join_btn" type="submit" value="회원가입">
            </form>
        </div>
        <div class="finding_se">
            <div>	
                <ul class="tab_menu">
                    <li class="on">
                        아이디 찾기
                    </li>
                    <li>
                        비밀번호 재설정
                    </li>
                </ul>
                <div class="tab_container">
                    <div class="tab_content">
                       <form action="">
                            <ul class="join_box">
                                <li class="one">
                                    <label for="find_id">이름</label>
                                    <input type="text" id="find_id" placeholder="홍길동">
                                </li>
                                <li class="one">
                                    <label for="find_tel">휴대폰 번호</label>
                                    <input type="text" id="find_tel" placeholder="휴대폰 번호를 입력해주세요.(- 빼고)" onKeyup="pNumber(this)" maxlength="13">
                                </li>
                            </ul>
                            <input class="find_id_btn" type="button" value="아이디 찾기" onclick="id_chk()">
                       </form>
                    </div>
                    <div class="tab_content">
                        <form action="">
                            <div class="finding_pass_info">
                                <div class="finding_pass_email">
                                    <label for="">이메일 주소</label>
                                </div>
                                <div class="pass_layout">
                                    <div class="finding_pass_input">
                                        <input type="text" placeholder="이메일 주소를 입력해주세요." id="email_value">
                                        <input type="button" value="전송" class="pw_btn_class" onclick="email_chk();">
                                    </div>
                                    <div class="finding_pass_input2">
                                        <div class="mo_finding_pass_input2">
                                            <div>
                                                <input type="text" placeholder="인증번호 입력"onKeyup="onlyNumber(this)" id="authNum_form">
                                                <div class="check_timer">
                                                    <span>3:00</span>
                                                </div>
                                            </div>
                                            <input type="button" value="확인" id="pw_btn_class" class="pw_btn_class2" onclick="auth_chk();">
                                        </div>
                                        <div class="pass_check_text">
                                            <p>인증되었습니다.</p>
                                            <p>인증실패 다시 입력해주세요.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <h4 class="finding_pass_txt">새 비밀번호를 입력해주세요.</h4>
                            <div class="change_pass">
                                <ul class="join_box">
                                    <li class="one" style="border-top:none;">
                                        <label for="new_pw">비밀번호 확인</label>
                                        <input type="password" id="new_pw" placeholder="비밀번호를 입력해주세요">
                                    </li>
                                    <li class="one">
                                        <label for="new_pw_chk">비밀번호 확인</label>
                                        <input type="password" id="new_pw_chk" placeholder="비밀번호를 재입력해주세요">
                                    </li>
                                </ul>
                                <input class="find_pw_btn" type="button" id="find_pw_btn"  value="비밀번호 재설정" onclick="pw_setting();">
                            </div>
                       </form>
                    </div>
                </div> 
            </div>
        </div>
        <div class="finding_id">
            <div class="finding_id_layout">
                <div class="finding_done">
                    <img src="/img/finding_done.png" alt="찾기완료">
                </div>
                <p class="finding_title">회원님의 아이디는 <span>별별별별</span>입니다.</p>
                <input class="find_last_btn" type="button" value="확인">
            </div>
            <div class="finding_password_layout">
                <div class="finding_done">
                    <img src="/img/finding_done.png" alt="찾기완료">
                </div>
                <p class="finding_title">비밀번호 변경 완료</p>
                <p class="finding_text">
                    비밀번호 변경이 완료되었습니다.<br>
                    새로운 비밀번호로 로그인해주세요.
                </p>
                <input class="find_last_btn" type="button"  value="확인">
            </div>
        </div>
    </div>
</div>

