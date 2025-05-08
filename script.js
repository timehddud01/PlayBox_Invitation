window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;
  
    document.querySelectorAll(".parallax").forEach(el => {
      el.style.transform = `translateY(${scrollY * 0.5}px)`;
    });
  });
  