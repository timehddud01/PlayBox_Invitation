const intensity = 0.1;
const maxTranslate = 180;

function handleScroll() {
  const scrollY = window.scrollY;

  document.querySelectorAll(".parallax").forEach(el => {
    const translateY = Math.min(scrollY * intensity, maxTranslate);
    el.style.transform = `translateY(${translateY}px)`;
  });
}

window.addEventListener("scroll", handleScroll);


handleScroll(); 
