function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  const isVisible =
    rect.top >= window.pageYOffset &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) +
        window.scrollY &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth);

  return isVisible;
}

function addAnimation() {
  // Check if the footer element is in the viewport
  let footers = document.getElementsByTagName("footer");
  let footer = footers[0]; // Assuming there's only one footer element

  if (isInViewport(footer)) {
    console.log("Footer is in the viewport!"); // Placeholder for animation trigger
    // Add your animation logic here
    footer.classList.add("footer-animation");
  }
}

// Listen for scroll events on the window
window.addEventListener("scroll", addAnimation);
window.onload = function () {
  let header = document.getElementById("header");
  header.classList.add("header-animation");

  let mains = document.getElementsByTagName("main");
  let main = mains[0];
  main.classList.add("main-animation");
};
