const main = document.getElementById("main");
const data = [
  {
    image: "./aicurriculumandcoursedesignpics/aiMl.jfif",
    service: "AI/ML Course Structure Design",
    description:
      "Comprehensive AI and machine learning course frameworks designed for academic institutions, training centers, and online platforms.",
  },

  {
    image: "./aicurriculumandcoursedesignpics/jobOriented.jfif",
    service: "Job-oriented AI Learning Paths",
    description:
      "Career-focused learning roadmaps that build practical AI skills aligned with current industry roles and market demand.",
  },

  {
    image: "./aicurriculumandcoursedesignpics/certification.jpg",
    service: "Certification Course Creation",
    description:
      "End-to-end development of certification programs with structured modules, assessments, and recognized skill outcomes.",
  },

  {
    image: "./aicurriculumandcoursedesignpics/corporate.png",
    service: "Corporate & Institutional Training",
    description:
      "Customized AI training solutions for companies, colleges, and institutions to upskill teams and learners effectively.",
  },
];
let text = "";
let i = 0;
for (let dataitem of data) {
  text =
    text +
    `<div class="card rounded-0 border-success" style="width: 18rem;">
  <img src=${dataitem.image} class="card-img-top rounded-0" alt="...">
  <div class="card-body">
    <h5 class="card-title fw-bold">${dataitem.service}</h5>
    <p class="card-text">${dataitem.description}</p>
   
  </div>
</div>`;
}

main.innerHTML = text;
