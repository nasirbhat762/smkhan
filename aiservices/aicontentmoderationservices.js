const main = document.getElementById("main");
const data = [
  {
    image: "./aicontentmoderationservicespics/textImageVideo.jpg",
    service: "Text, Image & Video Moderation",
    description:
      "Reliable moderation services for text, image, and video content to maintain safe, professional, and user-friendly digital platforms.",
  },

  {
    image: "./aicontentmoderationservicespics/educationalPlatform.jpg",
    service: "Educational Platform Moderation",
    description:
      "Specialized moderation support for eLearning platforms, student communities, and academic content environments.",
  },

  {
    image: "./aicontentmoderationservicespics/contentPolicy.jfif",
    service: "Policy & Safety Compliance Checking",
    description:
      "Content review and compliance checks aligned with platform policies, safety standards, and regulatory requirements.",
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
