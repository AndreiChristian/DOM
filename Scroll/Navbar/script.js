console.log("hello");

const navbar = document.querySelector("nav");

let lastScroll = 0;

window.addEventListener("scroll", () => {
  const currentScroll = window.scrollY;
  console.log(currentScroll);

  if (currentScroll <= 0) {
    navbar.style.top = "0";
  } else if (currentScroll > lastScroll) {
    navbar.style.top = "-10vh";
  } else {
    navbar.style.top = "0";
  }

  lastScroll = currentScroll;
});
