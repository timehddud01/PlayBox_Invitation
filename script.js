const isMobile = /Mobi|Android/i.test(navigator.userAgent);
const isKakao = navigator.userAgent.includes("KAKAOTALK");


const intensity = isKakao ? 0.02 : (isMobile ? 0.08 : 0.2);
const maxTranslate = isKakao ? 20 : 40;

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
