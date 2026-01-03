// fading animation
window.onload = function () {
  let header = document.getElementById("header");
  header.classList.add("header-animation");

  let mains = document.getElementsByTagName("main");
  let main = mains[0];
  main.classList.add("main-animation");
  let footers = document.getElementsByTagName("footer");
  let footer = footers[0]; // Assuming there's only one footer element
  footer.classList.add("footer-animation");
};

//experience years increasing number animation

document.addEventListener("DOMContentLoaded", function () {
  const counter = document.getElementById("project-counter0");
  const target = 4; // The target number you want to reach
  const duration = 10000; // Duration of the animation in milliseconds

  const updateCounter = () => {
    const start = 0;
    const increment = target / (duration / 10); // Adjust the increment value for smoothness

    const counterInterval = setInterval(() => {
      const current = +counter.innerText;
      const nextValue = current + increment;

      if (nextValue >= target) {
        counter.innerText = target;
        clearInterval(counterInterval);
      } else {
        counter.innerText = Math.ceil(nextValue);
      }
    }, 50);
  };

  // Intersection Observer setup
  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5, // Trigger when 50% of the element is visible
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        updateCounter();
        observer.unobserve(entry.target); // Stop observing once the animation starts
      }
    });
  }, observerOptions);

  const projectSection = document.getElementById("project-section0");
  if (projectSection) {
    observer.observe(projectSection);
  } else {
    console.error('Element with ID "project-section" not found.');
  }
});
//projects completed increasing number animation

document.addEventListener("DOMContentLoaded", function () {
  const counter = document.getElementById("project-counter1");
  const target = 393; // The target number you want to reach
  const duration = 2000; // Duration of the animation in milliseconds

  const updateCounter = () => {
    const start = 0;
    const increment = target / (duration / 50); // Adjust the increment value for smoothness

    const counterInterval = setInterval(() => {
      const current = +counter.innerText;
      const nextValue = current + increment;

      if (nextValue >= target) {
        counter.innerText = target;
        clearInterval(counterInterval);
      } else {
        counter.innerText = Math.ceil(nextValue);
      }
    }, 50);
  };

  // Intersection Observer setup
  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5, // Trigger when 50% of the element is visible
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        updateCounter();
        observer.unobserve(entry.target); // Stop observing once the animation starts
      }
    });
  }, observerOptions);

  const projectSection = document.getElementById("project-section1");
  if (projectSection) {
    observer.observe(projectSection);
  } else {
    console.error('Element with ID "project-section" not found.');
  }
});

// clients increasing number animation
document.addEventListener("DOMContentLoaded", function () {
  const counter = document.getElementById("project-counter2");
  const target = 27; // The target number you want to reach
  const duration = 2000; // Duration of the animation in milliseconds

  const updateCounter = () => {
    const start = 0;
    const increment = target / (duration / 50); // Adjust the increment value for smoothness

    const counterInterval = setInterval(() => {
      const current = +counter.innerText;
      const nextValue = current + increment;

      if (nextValue >= target) {
        counter.innerText = target;
        clearInterval(counterInterval);
      } else {
        counter.innerText = Math.ceil(nextValue);
      }
    }, 50);
  };

  // Intersection Observer setup
  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5, // Trigger when 50% of the element is visible
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        updateCounter();
        observer.unobserve(entry.target); // Stop observing once the animation starts
      }
    });
  }, observerOptions);

  const projectSection = document.getElementById("project-section2");
  if (projectSection) {
    observer.observe(projectSection);
  } else {
    console.error('Element with ID "project-section" not found.');
  }
});
