<?php
    // 세팅
    require_once $_SERVER["DOCUMENT_ROOT"]."/front/strat.php";
    $name = basename($_SERVER["PHP_SELF"]);
?>
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <!-- 반응형 및 ios-->
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"/> 
    <meta name="format-detection" content="telephone=no, address=no, email=no" />
    <title></title>
    
    <!-- 파비콘 -->
    <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />

    <!-- 아이콘 -->
    <link href="https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css" rel="stylesheet">

    <!-- FONT -->
    <link rel="stylesheet" href="/font/font.css">
    
    <!-- 필수 스크립트 -->
    <script src="/front/js/direct.js"></script>
    <script src="/front/plugin/jquery.js"></script>
    
    <!-- lib -->
    <script src="https://code.jquery.com/jquery-3.6.1.min.js" integrity="sha256-o88AwQnZB+VDvE9tvIXrMQaPlFFSUTR+nldQm1LuPXQ=" crossorigin="anonymous"></script>
    <script src="https://code.jquery.com/ui/1.13.2/jquery-ui.min.js" integrity="sha256-lSjKY0/srUM9BE3dPm+c4fBo1dky2v27Gdjm2uoZaL0=" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.js"></script>
    <script src="/front/plugin/gsap3.10.4/gsap.min.js"></script>
    <script src="/front/plugin/gsap3.10.4/ScrollTrigger.min.js"></script>
    <script src="/front/plugin/gsap3.10.4/ScrollSmoother.min.js"></script>
    <script src="/front/plugin/gsap3.10.4/DrawSVGPlugin.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/overlayscrollbars/1.13.3/js/OverlayScrollbars.min.js" integrity="sha512-Ae2SccSxoNp/Cn7PIlowLk8cmVyyW5aSCbrB/k08h/yYeK3zrNJ/oAJf8RK/ZD95G8KjkzPIXxKbeYPn43KC0w==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
    
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/overlayscrollbars/1.13.3/css/OverlayScrollbars.css" integrity="sha512-LSGPGnehGYGsh7/QTPRwe1VGplv3tVHmlDw6hI/hrEYaaI0OBFE2x6Pdo8DdAKIkJuYfbShXwDjq/SJxbsE9Tg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.css" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">


    <!-- 로그인 모듈 -->
    <script src="/js/login.js"></script>
    <link rel="stylesheet" href="/css/login.css">

    <!-- js -->
    <script src="/js/common.js"></script>
    <script src="/js/km.js"></script>
    <script src="/js/sh.js"></script>



    <!-- CSS -->
    <link rel="stylesheet" href="/front/css/reset.css">
    <link rel="stylesheet" href="/front/css/scroll.css">
    <link rel="stylesheet" href="/css/style.css">
    <link rel="stylesheet" href="/css/common.css">
    <link rel="stylesheet" href="/css/notice.css">
    <link rel="stylesheet" href="/css/km.css">
    <link rel="stylesheet" href="/css/sh.css">

</head>
<body>