let main = document.getElementById("main");

let data = [
    {
        image: "./higherEducationpics/assesment.jpg",
        Service: "Assessment",
        Description: "Our Assessment services offer a comprehensive evaluation of your organization's strengths, weaknesses, and areas for improvement. Our team of experts use industry-standard methods to analyze your operations and identify opportunities for growth and optimization. Contact us today to enhance your business' performance and achieve your goals."
    },
    {
        image: "./higherEducationpics/educationalcontentdevelopment.jpg",
        Service: "Educational Content Development",
        Description: "We offer educational content development services to create engaging and informative materials for students, teachers, and educational institutions. Our team of experts craft high-quality content to meet various learning needs and objectives. Let us help enhance your educational experience today."
    },
    {
        image: "./higherEducationpics/proofreading.jpg",
        Service: "Proofreading",
        Description: "We offer professional proofreading services to ensure error-free, polished and clear written materials. Our team of expert proofreaders meticulously check for grammar, spelling, punctuation, and style to enhance your writing's credibility. Let us help you make a great impression with error-free writing."
    },
    {
        image: "./higherEducationpics/factcheckingservices.jpg",
        Service: "Fact Checking Services",
        Description: "We provide reliable and thorough fact-checking services to ensure the accuracy and credibility of your information. Our team of experts verify information from credible sources to ensure your content is trustworthy and meets the highest standards. Trust us to fact-check your content accurately."
    },
    {
        image: "./higherEducationpics/professionalproofreadingservices.jpg",
        Service: "Professional Proofreading Services",
        Description: "We offer professional proofreading services to improve the quality and clarity of your writing. Our team of expert proofreaders check for grammar, spelling, punctuation, and style errors to ensure error-free and polished content. Rely on us for top-notch proofreading services and enhance your writing's credibility."
    },
    {
        image: "./higherEducationpics/copyediting.jpg",
        Service: "Copyediting",
        Description: "We offer comprehensive copyediting services to enhance the quality and clarity of your writing. Our team of expert editors checks for grammar, spelling, punctuation, style, and content flow to ensure error-free and polished content. Trust us to elevate your writing and make a lasting impression."
    },
    {
        image: "./higherEducationpics/typesetting.jpg",
        Service: "Typesetting",
        Description: "We are a professional typesetting provider, offering high-quality and accurate typesetting services for books, magazines, journals, and other print materials. Our team of experts ensures that your content is presented in a clear, readable and visually appealing format. Contact us for all your typesetting needs."
    },
    {
        image: "./higherEducationpics/curriculum.jpg",
        Service: "Curriculum",
        Description: "We offer a comprehensive curriculum designed to meet the needs of students and educators. Our curriculum is dynamic, engaging, and adaptable, providing a solid foundation for learning and growth. Trust us to provide a high-quality educational experience for your students."
    },
    {
        image: "./higherEducationpics/studentteachermanual.jpg",
        Service: "Student/Teacher Manual",
        Description: "We are a leading provider of student/teacher manuals for schools and universities. Our manuals are carefully designed to meet the needs of both students and teachers, providing comprehensive and easy-to-use educational resources. Whether you are looking for study guides, teacher manuals, or other educational materials, we have you covered. Contact us today to learn more."
    },
    {
        image: "./higherEducationpics/qualitycheckingservices.jpg",
        Service: "Quality Check Services",
        Description: "We ensure the high standards of your products or services with our thorough quality check services. Our team of experts use a comprehensive checklist to verify the accuracy and reliability of your work. Trust us to provide a thorough and reliable quality check for your projects."
    },
    {
        image: "./higherEducationpics/taggingservices.jpg",
        Service: "Tagging Services",
        Description: "We are a professional tagging services provider, offering high-quality and accurate tagging services for a wide range of industries. Our team of experts uses the latest technology and techniques to ensure that your data is properly tagged and organized for improved analysis and decision-making. Contact us for all your tagging needs."
    }
];


let text = "";
let i = 0;
for (let dataitem of data) {
  text =
    text +
    `<div class="card rounded-0 border-danger" style="width: 18rem;">
  <img src=${dataitem.image} class="card-img-top rounded-0" alt="...">
  <div class="card-body">
    <h5 class="card-title">${dataitem.Service}</h5>
    <p class="card-text">${dataitem.Description}</p>
   
  </div>
</div>`;
}

main.innerHTML = text;
