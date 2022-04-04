import "./style.css";

const parallaxImgs = document.querySelectorAll(".pp");
const hamToggleButton = document.querySelectorAll(".ham-checkbtn")[0];
const navbarLinks = document.querySelectorAll(".nav")[0];

const parallaxSocials = (e) => {
  parallaxImgs.forEach((parallaxImg) => {
    const speed = parseInt(parallaxImg.getAttribute("data-speed"));
    const x = (e.clientX * speed) / 100;
    const y = (e.clientY * speed) / 100;
    parallaxImg.style.transform = `translateX(${x / 7}px) translateY(${
      y / 7
    }px)`;
  });
};
document.addEventListener("mousemove", parallaxSocials);
hamToggleButton.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
});
