const isMobile = /Mobi|Android/i.test(navigator.userAgent);
const intensity = isMobile ? 0.2 : 0.5;

let ticking = false;

function handleScroll() {
  const scrollY = window.scrollY;

  document.querySelectorAll(".parallax").forEach(el => {
    el.style.transform = `translateY(${scrollY * intensity}px)`;
  });

  ticking = false;
}

window.addEventListener("scroll", () => {
  if (!ticking) {
    requestAnimationFrame(handleScroll);
    ticking = true;
  }
});
