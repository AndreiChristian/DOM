const items = document.getElementsByClassName("item");

const container = document.querySelector(".container");

let count = 1;

const firstElement = document.querySelector(".item");

firstElement.textContent = count.toString();

const createNewElement = () => {
  count++;
  console.log(`function is called, count is ${count} `);

  const newElement = document.createElement("div");
  newElement.className = "item";
  newElement.textContent = count.toString();

  container.appendChild(newElement);

  observer.observe(newElement);
};

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // console.log("Is intersecting");
        entry.target.classList.add("visible");
        createNewElement();
        observer.unobserve(entry.target);
      }
    });
  },
  {
    root: null,
    rootMargin: "-200px",
    threshold: 0.7,
  }
);

for (let item of items) {
  observer.observe(item);
}
