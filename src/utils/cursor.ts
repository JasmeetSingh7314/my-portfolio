import { gsap } from "gsap";
export default function handleCursor(e: any) {
  gsap.set(".cursor", { xPercent: -50, yPercent: -50 });
  let mouseX;
  let mouseY;

  globalThis.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    gsap.to(".cursor", {
      x: mouseX,
      y: mouseY,
      duration: 0.001,
    });
  });
}
