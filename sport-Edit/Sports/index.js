const hamburger = document.querySelector(".hamburger");
const sidebar = document.querySelector(".mainnav");
const cancle = document.querySelector(".cancle");

hamburger.addEventListener("click", () => {
  sidebar.classList.add("mainnav-open");
});

cancle.addEventListener("click", () => {
  sidebar.classList.remove("mainnav-open");
});

document.body.addEventListener("click", (event) => {
  if (
    sidebar.classList.contains("mainnav-open") &&
    event.target !== sidebar &&
    event.target !== hamburger
  ) {
    sidebar.classList.remove("mainnav-open");
  }
});
