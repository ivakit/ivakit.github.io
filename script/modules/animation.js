export default function animationIntersection(id) {
  const d = document;
  const element = d.getElementById(id);
  const animation = (el) => {
    el.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("visible");
      }
    });
  };
  const observer = new IntersectionObserver(animation, {
    root: null,
    rootMargin: "0px 0px",
    threshold: 0.3,
  });

  observer.observe(element);
}
