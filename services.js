// other services data
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
    para: "We provide accurate and scalable data annotation services to help businesses train high-performing AI and machine learning models across multiple industries.",
    link: "./aiservices/aidataannotationandlabelling.html",
  },

  {
    id: 2,
    title: "AI Training Data Creation",
    para: "Our team creates high-quality training datasets that improve AI learning, response quality, and performance for domain-specific applications.",
    link: "./aiservices/aitrainingdatacreation.html",
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
    para: "We deliver AI-assisted content solutions including assessments, study material, and multilingual educational resources for digital platforms.",
    link: "./aiservices/aicontentgenerationservices.html",
  },

  {
    id: 4,
    title: "LLM Evaluation & AI Model Testing",
    para: "We help organizations improve AI model quality through structured evaluation, prompt testing, bias checks, and expert human review.",
    link: "./aiservices/llmevaluationandaimodeltesting.html",
  },

  {
    id: 5,
    title: "AI Prompt Engineering Services",
    para: "Our prompt engineering services create optimized prompts that improve chatbot accuracy, automation efficiency, and user engagement.",
    link: "./aiservices/aipromptengineeringservices.html",
  },

  {
    id: 6,
    title: "AI-powered Exams & Assessments",
    para: "We build intelligent assessment systems with AI-generated exams, adaptive testing, and analytics for modern learning environments.",
    link: "./aiservices/aipoweredexamsandassessments.html",
  },

  {
    id: 7,
    title: "AI Content Moderation Services",
    para: "We provide reliable moderation services to keep digital platforms safe, compliant, and user-friendly across text, image, and video content.",
    link: "./aiservices/aicontentmoderationservices.html",
  },

  {
    id: 8,
    title: "AI Curriculum & Course Design",
    para: "We design industry-focused AI learning programs, certification courses, and training paths for institutions and businesses.",
    link: "./aiservices/aicurriculumandcoursedesign.html",
  },
];
// branding and creative services data
const brandingAndCreativeServices = [
  {
    heading: "Brand Strategy & Identity",
    para: "Brand positioning, brand voice & messaging, and visual identity planning.",
  },
  {
    heading: "Logo & Visual Branding",
    para: "Logo design, color palette & typography, and complete brand guidelines.",
  },
  {
    heading: "Social Media Branding",
    para: "Profile branding for Instagram, LinkedIn & YouTube, post and story creatives.",
  },
  {
    heading: "Marketing & Promotional Creatives",
    para: "Posters, banners, ad creatives, and website or landing page visuals.",
  },
  {
    heading: "Character Design & Illustrations",
    para: "Mascot & character design, educational illustrations, and custom brand artwork.",
  },
  {
    heading: "Rebranding Solutions",
    para: "Brand refresh, redesign, and complete branding for startups & small businesses.",
  },
];

// targetting html element services and aiServices
let otherServies = document.getElementById("otherServices");
let aiServices = document.getElementById("aiServices");
let brandingServices = document.getElementById("brandingServices");

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
    <p class="card-text">${item.para}</p>
    <a href="${item.link}" class="btn btn-outline-success rounded-0">Get more info</a>
  </div>
</div>
  `;
}

aiServices.innerHTML = allAiServices;

// dislaying branding and creative serivces
let allBrandingServices = "";

for (let item of brandingAndCreativeServices) {
  allBrandingServices += `
    <div class="card text-center rounded-0 border-success m-2" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">${item.heading}</h5>
        <p class="card-text">${item.para}</p>
      </div>
    </div>
  `;
}

brandingServices.innerHTML = allBrandingServices;
