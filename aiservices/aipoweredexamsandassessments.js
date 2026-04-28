const main = document.getElementById("main");
const data = [
  {
    image: "./aipoweredexamsandassessmentspics/questionPapers.png",
    service: "AI-generated Question Papers",
    description:
      "Intelligent question paper generation for schools, universities, coaching institutes, and corporate assessments with customizable difficulty levels.",
  },

  {
    image: "./aipoweredexamsandassessmentspics/adaptiveTesting.png",
    service: "Adaptive Testing Systems",
    description:
      "Smart testing platforms that adjust question difficulty based on learner performance to create personalized assessment experiences.",
  },

  {
    image: "./aipoweredexamsandassessmentspics/automatedElevation.png",
    service: "Automated Evaluation Support",
    description:
      "Efficient AI-assisted evaluation solutions for objective tests, assignments, and large-scale examination workflows.",
  },

  {
    image: "./aipoweredexamsandassessmentspics/learningAnalytics.png",
    service: "Learning Analytics & Insights",
    description:
      "Performance analytics and actionable insights to track learner progress, identify gaps, and improve educational outcomes.",
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
