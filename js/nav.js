
const btn = document.querySelector(".toggle-btn");

const ul = document.querySelector("nav");

function toggleMenu() {
  ul.classList.toggle("shown");

  const menu = ul.classList.contains("shown");

  if (menu) {
    btn.classList.add("open");
  } else {
    btn.classList.remove("open");
  }
}

btn.addEventListener("click", toggleMenu);
