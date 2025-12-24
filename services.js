// services data
let OtherServicesData = [
  {
    heading: "k12 services",
    para: "Our K12 edtech services provide innovative, engaging, and effective e-learning solutions for K-12 students, covering a wide range of subjects and topics",
    link: "./services/k12.html",
  },
  {
    heading: "Localization",
    para: "Our localization edtech services provide a comprehensive solution for translating and adapting e-learning content to suit different languages and cultures.",
    link: "./services/localization.html",
  },
  {
    heading: "Media Services",
    para: "Our media edtech services provide high-quality and engaging multimedia content to enhance e-learning experiences, including video, audio, and animations.",
    link: "./services/mediaServices.html",
  },
  {
    heading: "Accessibility",
    para: "Our accessibility edtech services ensure that e-learning content is accessible to all learners, including those with disabilities, through assistive technologies and design.4",
    link: "./services/accessibility.html",
  },
  {
    heading: "Editorial & Pre-press",
    para: "Our editorial & pre-press edtech services provide comprehensive editorial and design support, ensuring that e-learning content is error-free and visually appealing.",
    link: "./services/editorial.html",
  },
  {
    heading: "Higher Education",
    para: "Our higher education edtech services provide cutting-edge e-learning solutions for universities and colleges, covering a wide range of courses and programs.",
    link: "./services/higherEducation.html",
  },
];
// ai services data
const aiServicesData = [
  {
    id: 1,
    title: "AI Data Annotation & Labeling",
    features: [
      "Image, Video, Text & Audio Annotation",
      "Bounding Boxes, Polygons & Segmentation",
      "NLP Data Labeling",
      "Medical & Educational Dataset Annotation",
    ],
    note: "Used for training Machine Learning & AI models.",
  },

  {
    id: 2,
    title: "AI Training Data Creation",
    features: [
      "Question–Answer Dataset Creation",
      "Prompt–Response Generation",
      "Educational Datasets for AI Learning",
      "Domain-specific Data (Medical, STEM, Exams)",
    ],
    note: "Perfect alignment with EdTech & AI needs.",
  },

  {
    id: 3,
    title: "AI Content Generation Services",
    features: [
      "AI-assisted Educational Content",
      "MCQs, Assessments & Question Banks",
      "Course Scripts & Learning Material",
      "Multilingual Content Creation",
    ],
    note: "Ideal for MOOCs & EdTech platforms.",
  },

  {
    id: 4,
    title: "LLM Evaluation & AI Model Testing",
    features: [
      "AI Response Quality Evaluation",
      "Bias & Accuracy Checking",
      "Prompt Testing & Optimization",
      "Human-in-the-loop Review",
    ],
    note: "High-demand service in Generative AI.",
  },

  {
    id: 5,
    title: "AI Prompt Engineering Services",
    features: [
      "Prompt Design & Optimization",
      "Domain-specific Prompt Libraries",
      "Educational & Training Prompts",
      "Chatbot Prompt Development",
    ],
    note: "Premium and future-ready AI service.",
  },

  {
    id: 6,
    title: "AI-powered Exams & Assessments",
    features: [
      "AI-generated Question Papers",
      "Adaptive Testing Systems",
      "Automated Evaluation Support",
      "Learning Analytics & Insights",
    ],
    note: "Strong USP for Smart EduTech.",
  },

  {
    id: 7,
    title: "AI Content Moderation Services",
    features: [
      "Text, Image & Video Moderation",
      "Educational Platform Moderation",
      "Policy & Safety Compliance Checking",
    ],
    note: "Essential for AI platforms & learning apps.",
  },

  {
    id: 8,
    title: "AI Curriculum & Course Design",
    features: [
      "AI/ML Course Structure Design",
      "Job-oriented AI Learning Paths",
      "Certification Course Creation",
      "Corporate & Institutional Training",
    ],
    note: "Perfect fit with Smart EduTech certification plans.",
  },
];

// targetting html element services and aiServices
let otherServies = document.getElementById("otherServices");
let aiServices = document.getElementById("aiServices");

// displaying  other services
let allOtherServices = "";
let i = 0;
for (let item of OtherServicesData) {
  allOtherServices =
    allOtherServices +
    `<div class="card text-center rounded-0 border-success" style="width: 18rem;">
    
    <div class="card-body ">
      <h5 class="card-title">${item.heading}</h5>
      <p class="card-text">${item.para}</p>
      <a href="${item.link}" class="btn btn-outline-success rounded-0">Get more info</a>
    </div>
  </div>`;
  // console.log(text)
  otherServices.innerHTML = allOtherServices;
}

// displaying aiServices

let allAiServices = "";

for (let item of aiServicesData) {
  allAiServices += `
   <div class="card text-center rounded-0 border-success m-2" style=" width: 18rem;
  min-height: 300px;">
  <div class="card-body d-flex flex-column">
    <h5 class="card-title">${item.title}</h5>

    <ul class="list-unstyled card-text text-start small flex-grow-1">
      ${item.features.map((feature) => `<li>• ${feature}</li>`).join("")}
    </ul>

    <p class="text-muted small mt-2">${item.note}</p>
  </div>
</div>
  `;
}

aiServices.innerHTML = allAiServices;
