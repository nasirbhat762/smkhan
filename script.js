// services data 
let servicesData = [
  { heading: "k12 services", para: "p1", link: "./services/k12.html" },
  { heading: "Localization", para: "p2", link: "./services/localization" },
  { heading: "Media Services", para: "p3", link: "./services/mediaServices" },
  { heading: "Accessibility", para: "p4", link: "./services/accessibility" },
  { heading: "Editorial & Pre-press", para: "p5", link: "./services/editorial" },
  { heading: "Higher Education", para: "p6", link: "./services/higherEducation" },

];
// getting html element 
let servies = document.getElementById("services");

// changing inner html of services
let text = ""
for(let item of servicesData){
    
    text =  text + `<div class="card  text-center" style="width: 18rem;">
    <i class="bi bi-airplane"></i>
    <div class="card-body">
      <h5 class="card-title">${item.heading}</h5>
      <p class="card-text">${item.para}</p>
      <a href="${item.link}" class="btn btn-danger rounded-0">Get more info</a>
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
