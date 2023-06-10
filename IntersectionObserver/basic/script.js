const callback = function (entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      console.log("INTERSECTING", entry);
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
};
const options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.9,
};
const observer = new IntersectionObserver(callback, options);
const items = document.querySelectorAll(".item");
items.forEach(function (item) {
  observer.observe(item);
});
