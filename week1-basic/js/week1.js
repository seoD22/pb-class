window.addEventListener("scroll", function(){
  var sections = document.querySelectorAll(".reveal")
  for (var i = 0; i < sections.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = sections[i].getBoundingClientRect().top;
      var elementVisible = 150;
      
      if (elementTop < windowHeight - elementVisible) {
        sections[i].classList.add("active");
      } else {
        sections[i].classList.remove("active");
      }
  }
});