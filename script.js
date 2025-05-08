let ticking = false;

function handleScroll() {
  const scrollY = window.scrollY;

  document.querySelectorAll(".parallax").forEach(el => {
    const speed = parseFloat(el.dataset.speed) || 0.15;
    const translateY = scrollY * speed;
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
