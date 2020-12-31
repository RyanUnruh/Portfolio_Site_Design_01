// Scroll trigger
gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray("section").forEach((section) => {
  ScrollTrigger.create({
    trigger: section,
    start: "top top",
    pin: true,
    pinSpacing: false,
  });
});

// Annimate from sides

let tl = gsap.timeline({
  ScrollTrigger: {
    trigger: ".image",
    start: "center bottom",
  },
});

tl.from("img", { x: 200, opacity: 0, duration: 1.5 }).from(
  ".column-left",
  { y: 300, opacity: 0, duration: 1 },
  "-=1"
);