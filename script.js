const intensity = 0.15;       
const maxTranslate = 60;      

let ticking = false;

function handleScroll() {
  const scrollY = window.scrollY;

  document.querySelectorAll(".parallax").forEach(el => {
    const translateY = Math.min(scrollY * intensity, maxTranslate);
    el.style.transform = `translateY(${translateY}px)`;
  });

  ticking = false;
}

window.addEventListener("scroll", () => {
  if (!ticking) {
    requestAnimationFrame(handleScroll);
    ticking = true;
  }
});

handleScroll(); 
