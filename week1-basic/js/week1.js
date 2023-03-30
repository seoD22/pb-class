window.addEventListener("scroll", function(){
  const sections = document.querySelectorAll(".reveal")
  for (let i = 0; i < sections.length; i++) {
    let windowHeight = window.innerHeight;
    let elementTop = sections[i].getBoundingClientRect().top;
    let elementVisible = 150;
      
      if (elementTop < windowHeight - elementVisible) {
        sections[i].classList.add("active");
      } else {
        sections[i].classList.remove("active");
      }
  }
});