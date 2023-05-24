const open = document.querySelector(".container");
const close = document.querySelector(".close");
var tl = gsap.timeline({ defaults: { duration: 0.4, ease: "expo.inOut" } });
open.addEventListener("click", () => {
  if (tl.reversed()) {
    tl.play();
  } else {
    // navbar.style.transform = "translateX(0)";
    tl.to("nav", { transform: "translateX(0)" })
      .to("nav", { height: "100vh" }, "-=.1")
      .to("nav ul li a", { opacity: 1, pointerEvents: "all", stagger: 0.2 }, "-=.8")
      .to(".close", { opacity: 1, pointerEvents: "all" }, "-=.8")
      .to("nav h2", { opacity: 1 }, "-=1");
  }
});

close.addEventListener("click", () => {
  tl.reverse();
});
