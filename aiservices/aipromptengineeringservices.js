const main = document.getElementById("main");
const data = [
  {
    image: "./aipromptengineeringservicespics/promptDesign.jpg",
    service: "Prompt Design & Optimization",
    description:
      "Custom prompt design and refinement services to improve AI output quality, relevance, and task-specific performance.",
  },

  {
    image: "./aipromptengineeringservicespics/domainSpecific.png",
    service: "Domain-specific Prompt Libraries",
    description:
      "Curated prompt libraries tailored for industries such as healthcare, education, business, and technical workflows.",
  },

  {
    image: "./aipromptengineeringservicespics/educational.jfif",
    service: "Educational & Training Prompts",
    description:
      "Specialized prompts created for eLearning, assessments, tutoring systems, and employee training environments.",
  },

  {
    image: "./aipromptengineeringservicespics/chatbot.jpg",
    service: "Chatbot Prompt Development",
    description:
      "Conversation-ready prompts designed to improve chatbot interactions, customer support automation, and user engagement.",
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
