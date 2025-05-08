const isMobile = /Mobi|Android/i.test(navigator.userAgent);
const intensity = isMobile ? 0.2 : 0.5;
const maxTranslate = 50; 

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
