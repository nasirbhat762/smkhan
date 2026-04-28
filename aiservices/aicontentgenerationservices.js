const main = document.getElementById("main");
const data = [
  {
    image:
      "./aicontentgenerationservicespics/aiAssistedEducationalContent.jfif",
    service: "AI-assisted Educational Content",
    description:
      "Smart content solutions for educational platforms including lessons, study resources, explanations, and engaging learning material.",
  },

  {
    image: "./aicontentgenerationservicespics/mcqsAssesmentsQuestions.jfif",
    service: "MCQs, Assessments & Question Banks",
    description:
      "High-quality MCQs, tests, and structured question banks designed for schools, coaching institutes, and digital learning platforms.",
  },

  {
    image: "./aicontentgenerationservicespics/courseScripts.jpg",
    service: "Course Scripts & Learning Material",
    description:
      "Professional course scripts, module content, and learner-focused study materials for online and offline training programs.",
  },

  {
    image: "./aicontentgenerationservicespics/multilingualContent.jfif",
    service: "Multilingual Content Creation",
    description:
      "Localized educational and business content creation in multiple languages to reach wider audiences and global markets.",
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
