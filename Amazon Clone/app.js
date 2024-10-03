/* ------------------------------------------- Home Page Start ------------------------------------------- */
const images = document.querySelectorAll(".header-slider ul img");
const pre_btn = document.querySelector(".control_prev");
const next_btn = document.querySelector(".control_next");
let n = 0; // Image -1
function changeSlide() {
  for (let i = 0; i < images.length; i++) {
    images[i].style.display = "none"; // All image will be hidden
  }
  images[n].style.display = "block"; // 1st image (0 index) will be visible
}
changeSlide();

// Previous and Next button Functionality
pre_btn.addEventListener("click", (event) => {
  if (n > 0) {
    n--;
  } else {
    n = images.length - 1;
  }
  changeSlide();
});
next_btn.addEventListener("click", () => {
  if (n < images.length - 1) {
    n++;
  } else {
    n = 0;
  }

  changeSlide();
});

// Product Sliders ---------------------------
const scrollContainer = document.querySelectorAll(".products");
for (const item of scrollContainer) {
  item.addEventListener("wheel", (event) => {
    event.preventDefault();
    item.scrollLeft += event.deltaY; // Horizontal scroll triggered by vertical scrolling
  });
}

console.log(scrollContainer);

/* ------------------------------------------- Home Page End ------------------------------------------- */

/* ------------------------------------------- Product Page Start ------------------------------------------- */
