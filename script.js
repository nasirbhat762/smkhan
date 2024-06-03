// services data 
let servicesData = [
  { heading: "h1", para: "p1", link: "abc" },
  { heading: "h2", para: "p2", link: "def" },
  { heading: "h3", para: "p3", link: "ghi" },
  { heading: "h4", para: "p4", link: "jkl" },
  { heading: "h5", para: "p5", link: "mno" },
  { heading: "h6", para: "p6", link: "pqr" },
  { heading: "h7", para: "p7", link: "stu" },
  { heading: "h8", para: "p8", link: "vwx" },
  { heading: "h9", para: "p9", link: "yz" },
  { heading: "h10", para: "p10", link: "abc123" },
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
    console.log(text)
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
