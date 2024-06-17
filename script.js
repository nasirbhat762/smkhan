// services data 
let servicesData = [
  { heading: "k12 services", para: "Our K12 edtech services provide innovative, engaging, and effective e-learning solutions for K-12 students, covering a wide range of subjects and topics", link: "./services/k12.html" },
  { heading: "Localization", para: "Our localization edtech services provide a comprehensive solution for translating and adapting e-learning content to suit different languages and cultures.", link: "./services/localization.html" },
  { heading: "Media Services", para: "Our media edtech services provide high-quality and engaging multimedia content to enhance e-learning experiences, including video, audio, and animations.", link: "./services/mediaServices.html" },
  { heading: "Accessibility", para: "pOur accessibility edtech services ensure that e-learning content is accessible to all learners, including those with disabilities, through assistive technologies and design.4", link: "./services/accessibility.html" },
  { heading: "Editorial & Pre-press", para: "Our editorial & pre-press edtech services provide comprehensive editorial and design support, ensuring that e-learning content is error-free and visually appealing.", link: "./services/editorial.html" },
  { heading: "Higher Education", para: "Our higher education edtech services provide cutting-edge e-learning solutions for universities and colleges, covering a wide range of courses and programs.", link: "./services/higherEducation.html" },

];
// getting html element 
let servies = document.getElementById("services");

// changing inner html of services
let text = ""
let i = 0;
for(let item of servicesData){
    
    text =  text + `<div class="card text-center rounded-0 border-success" style="width: 18rem;">
    
    <div class="card-body ">
      <h5 class="card-title">${item.heading}</h5>
      <p class="card-text">${item.para}</p>
      <a href="${item.link}" class="btn btn-outline-success rounded-0">Get more info</a>
    </div>
  </div>`;
    // console.log(text)
    services.innerHTML =  text
}


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

document.addEventListener("DOMContentLoaded", function() {
  const counter = document.getElementById('project-counter0');
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
      rootMargin: '0px',
      threshold: 0.5 // Trigger when 50% of the element is visible
  };

  const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              updateCounter();
              observer.unobserve(entry.target); // Stop observing once the animation starts
          }
      });
  }, observerOptions);

  const projectSection = document.getElementById('project-section0');
  if (projectSection) {
      observer.observe(projectSection);
  } else {
      console.error('Element with ID "project-section" not found.');
  }
});
//projects completed increasing number animation

document.addEventListener("DOMContentLoaded", function() {
  const counter = document.getElementById('project-counter1');
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
      rootMargin: '0px',
      threshold: 0.5 // Trigger when 50% of the element is visible
  };

  const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              updateCounter();
              observer.unobserve(entry.target); // Stop observing once the animation starts
          }
      });
  }, observerOptions);

  const projectSection = document.getElementById('project-section1');
  if (projectSection) {
      observer.observe(projectSection);
  } else {
      console.error('Element with ID "project-section" not found.');
  }
});

// clients increasing number animation 
document.addEventListener("DOMContentLoaded", function() {
  const counter = document.getElementById('project-counter2');
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
      rootMargin: '0px',
      threshold: 0.5 // Trigger when 50% of the element is visible
  };

  const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              updateCounter();
              observer.unobserve(entry.target); // Stop observing once the animation starts
          }
      });
  }, observerOptions);

  const projectSection = document.getElementById('project-section2');
  if (projectSection) {
      observer.observe(projectSection);
  } else {
      console.error('Element with ID "project-section" not found.');
  }
});