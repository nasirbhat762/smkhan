const main = document.getElementById("main");
const data = [
  {
    image: "./llmevaluationandaimodeltestingpics/aiResponseQuality.jfif",
    service: "AI Response Quality Evaluation",
    description:
      "Comprehensive evaluation of AI-generated responses to measure relevance, clarity, consistency, and overall output quality.",
  },

  {
    image: "./llmevaluationandaimodeltestingpics/biasAndAccuracy.jfif",
    service: "Bias & Accuracy Checking",
    description:
      "Detailed testing to identify bias, factual errors, and inconsistencies while improving fairness and reliability of AI systems.",
  },

  {
    image: "./llmevaluationandaimodeltestingpics/promptTesting.avif",
    service: "Prompt Testing & Optimization",
    description:
      "Structured prompt experiments and optimization techniques to enhance response quality, precision, and task performance.",
  },

  {
    image: "./llmevaluationandaimodeltestingpics/humanInTheLoop.webp",
    service: "Human-in-the-loop Review",
    description:
      "Expert human review processes that validate AI outputs, improve decision-making, and maintain quality control standards.",
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
