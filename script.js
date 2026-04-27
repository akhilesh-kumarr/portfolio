const navBar = document.querySelector(".navbar");
const revealItems = document.querySelectorAll(".reveal");

const updateNavbarState = () => {
  if (!navBar) {
    return;
  }

  navBar.classList.toggle("scrolled", window.scrollY > 20);
};

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.18,
  }
);

revealItems.forEach((item, index) => {
  item.style.transitionDelay = `${Math.min(index * 0.08, 0.45)}s`;
  revealObserver.observe(item);
});

updateNavbarState();
window.addEventListener("scroll", updateNavbarState);
