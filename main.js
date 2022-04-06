import "./style.css";

const parallaxImgs = document.querySelectorAll(".pp");
const hamToggleButton = document.querySelector(".ham-checkbtn");
const navbarsm = document.querySelector(".nav");
const navbarLinks = document.querySelectorAll(".navbarLink");
const moveLeftButton = document.querySelector(".mbleft");
const moveRightButton = document.querySelector(".mbright");
const projectsView = document.querySelector(".pview");
const subjectField = document.querySelector("#subject");
const messageField = document.querySelector("#message");
const sendMailBtn = document.querySelector("#form-submit");
const formFields = [subjectField, messageField];
var mail = {
  subject: "",
  message: "",
};

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
  navbarsm.classList.toggle("active");
});

navbarLinks.forEach((link) => {
  link.addEventListener("click", () => {
    document.querySelectorAll(".navbarLink").forEach((link) => {
      if (link.classList.contains("active")) {
        link.classList.remove("active");
      }
    });
    link.classList.toggle("active");
    navbarsm.classList.remove("active");
  });
});

moveLeftButton.addEventListener("click", () => {
  projectsView.scrollLeft >= 0
    ? (projectsView.scrollLeft -= document.documentElement.clientWidth)
    : (projectsView.scrollLeft = projectsView.scrollLeft);
});
moveRightButton.addEventListener("click", () => {
  projectsView.scrollLeft <
  projectsView.scrollWidth - projectsView.offsetWidth - 250
    ? (projectsView.scrollLeft += document.documentElement.clientWidth)
    : (projectsView.scrollLeft = 0);
});

formFields.forEach((field) => {
  field.addEventListener("keyup", (e) => {
    mail.subject = document.querySelector("#subject").value;
    mail.message = document.querySelector("#message").value;
    console.log(mail);
    var mailLink = `mailto:dansooffeipatrick@gmail.com?subject=${mail.subject}&body=${mail.message}`;
    sendMailBtn.href = mailLink;
  });
});
