const bar = document.getElementById("bar");
const nav = document.getElementById("navbar");
const close = document.getElementById("close");

if (bar) {
  bar.addEventListener("click", () => {
    nav.classList.add("active");
    bar.style.display = "none";   // hamburger hide
  });
}

if (close) {
  close.addEventListener("click", () => {
    nav.classList.remove("active");
    bar.style.display = "block";  // hamburger show again
  });
}