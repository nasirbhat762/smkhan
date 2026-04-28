const main = document.getElementById("main");
const data = [
  {
    image: "./aitrainingdatacreationpics/questionAnswerDatasetCreation.jpg",
    service: "Question–Answer Dataset Creation",
    description:
      "Structured question and answer datasets developed to train AI systems for accurate responses, search relevance, and knowledge tasks.",
  },

  {
    image: "./aitrainingdatacreationpics/promptResponseGeneration.webp",
    service: "Prompt–Response Generation",
    description:
      "High-quality prompt and response data designed for chatbot training, conversational AI, and language model fine-tuning.",
  },

  {
    image: "./aitrainingdatacreationpics/educationalDataSets.jfif",
    service: "Educational Datasets for AI Learning",
    description:
      "Well-organized educational datasets created for tutoring systems, assessments, adaptive learning, and EdTech AI solutions.",
  },

  {
    image: "./aitrainingdatacreationpics/domainSpecificData.jpg",
    service: "Domain-specific Data (Medical, STEM, Exams)",
    description:
      "Specialized datasets tailored for medical, STEM, and examination domains to support accurate industry-specific AI models.",
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
