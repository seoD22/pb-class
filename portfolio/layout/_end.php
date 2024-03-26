</body>
</html>








<!-- 스크롤스무스부분 - 모바일 포함 -->
<script>


gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

ScrollTrigger.config({autoRefreshEvents: "visibilitychange,DOMContentLoaded,load"});


// Desktop
if (window.matchMedia("(min-width: 1025px)").matches) {
    smoother = ScrollSmoother.create({
        smooth: 1.5,
        smoothTouch: true,
    });
}

// Tablet & Mobile
if (window.matchMedia("(max-width: 1024px)").matches) {
    if (smoother) {
        smoother.kill();
    }
}

window.addEventListener("resize", function() {
    ScrollTrigger.refresh();
    // console.log("refreshed");
});


</script>