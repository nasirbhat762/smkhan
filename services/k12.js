
let main = document.getElementById("main");
let data = [
  {
    image: "./k12pics/assesments.jpg",
    Service: "Assessments",
    Description:
      "We offer assessment services that help organizations and individuals pinpoint strengths and areas for improvement. Our assessments cover a wide range of abilities, including cognitive and behavioral traits, job-specific skills, and knowledge. Grounded in the latest research, our assessments are validated for accuracy and reliability. We also provide comprehensive feedback and recommendations to help individuals and organizations achieve their goals. Whether you're aiming to enhance performance, identify potential, or make informed decisions, our assessments can assist you.",
  },
  {
    image: "./k12pics/educationalcontentdevelopment.jpg",
    Service: "Educational Content Development",
    Description:
      "We create educational content aimed at helping individuals and organizations acquire new skills and knowledge. Developed by field experts, our content is tailored to meet the specific needs of our clients. Whether you want to improve in a particular subject, learn a new skill, or advance your career, our educational content is here to help. Available in various formats like online courses, webinars, and e-books, our content is regularly updated to stay relevant and current. With our resources, you can learn at your own pace and on your own schedule.",
  },
  {
    image: "./k12pics/copyediting.jpg",
    Service: "Copy Editing",
    Description:
      "Our professional copywriting services are designed to help businesses and organizations effectively communicate their messages to their target audience. Our experienced writers can craft compelling and persuasive copy for various mediums, including websites, brochures, and social media. We take the time to understand your business and target audience, ensuring the copy we produce is customized to your needs. Whether you need product descriptions, blog posts, or email marketing content, we have the expertise to deliver high-quality copy that supports your business goals. Contact us today to find out how we can enhance your online presence.",
  },
  {
    image: "./k12pics/typesetting.jpg",
    Service: "Typesetting",
    Description:
      "We provide expert typesetting services for a variety of documents and materials. Our experienced team can transform your raw text into a polished and visually appealing document. We handle formats such as books, magazines, brochures, and more, ensuring consistent font, spacing, and layout. We also integrate images, charts, and other design elements to enhance the document's overall look and feel. Whether you need a simple brochure or a complex book, our high-quality typesetting services will help you make a strong impression. Contact us today to discuss your typesetting needs.",
  },
  {
    image: "./k12pics/curriculum.jpg",
    Service: "Curriculum",
    Description:
      "Our curriculum development services assist educational institutions and organizations in creating engaging and effective learning materials. Our team of experts can help design, develop, and implement curricula that align with your objectives, standards, and best practices. We develop curricula for all education levels, from early childhood to post-secondary and professional development. We emphasize creating inclusive, culturally responsive curricula that support diverse learners. Whether you need to develop new curricula or revise existing materials, we have the expertise to deliver high-quality curricula that help your learners succeed. Contact us today to learn more about our curriculum development services.",
  },
  {
    image: "./k12pics/studentteachermanual.jpg",
    Service: "Student/Teacher Manual",
    Description:
      "We develop teacher and student manuals to help educational institutions and organizations create effective teaching and learning materials. Our team of experts can design, develop, and implement manuals that align with your curriculum and instruction goals. We can create manuals for all education levels and subjects, ensuring they are clear, concise, and easy to use. Our manuals include detailed explanations, step-by-step instructions, illustrations, and examples, making learning and teaching more effective. Whether you need new manuals or revisions of existing ones, we can deliver high-quality materials that help teachers and students succeed.",
  },
  {
    image: "./k12pics/k6education.jpg",
    Service: "K6 Education",
    Description:
      "We provide K-6 education services that are tailored to meet the unique needs of young learners. Our curriculum is designed to be engaging and interactive, helping students develop critical thinking, problem-solving, and creativity. We also focus on developing social and emotional skills, essential for success in school and life. Our teachers are highly qualified and experienced in working with young children, creating a positive and supportive learning environment. Additionally, we offer extracurricular activities such as art, music, and sports to help students develop their interests and talents, ensuring they get the best start to their academic journey.",
  },
  {
    image: "./k12pics/k12videolecture.jpg",
    Service: "K12 Video Lecture",
    Description:
      "We provide a wide range of K-12 video lectures designed to help students of all ages and abilities understand key concepts and topics. Led by experienced educators, our videos cover subjects such as math, science, history, and language arts for various grade levels. These interactive and engaging lectures allow students to learn at their own pace and can be accessed anytime, anywhere, supplementing traditional classroom instruction and helping them achieve academic success.",
  },
  {
    image: "./k12pics/qualitycheck.jpg",
    Service: "Quality Check",
    Description:
      "We offer a quality check service that ensures the highest level of accuracy and attention to detail. Our team of experts thoroughly reviews your work, checking for errors, inconsistencies, or areas needing improvement. We understand the importance of delivering a polished, professional final product and are dedicated to your satisfaction. Whether you're a business improving communications or an individual ensuring personal documents are flawless, our quality check service provides peace of mind.",
  },
  {
    image: "./k12pics/k12education.jpg",
    Service: "K12 Education",
    Description:
      "We provide K-12 education for students from kindergarten to 12th grade. Our curriculum is tailored to meet the individual needs of each student, using diverse teaching methods to ensure all students have the opportunity to succeed under the guidance of highly qualified teachers.",
  },
  {
    image: "./k12pics/taggingservices.jpg",
    Service: "Tagging Services",
    Description:
      "Our tagging services help organize and classify your data. We offer manual and automated tagging options to meet your specific needs, ensuring accurate and efficient tagging to improve the searchability and usability of your data.",
  },
  {
    image: "./k12pics/k12livetutoring.jpg",
    Service: "K12 Live Tutoring",
    Description:
      "Endeavor Academy's K12 live tutoring services offer comprehensive academic support for students of all ages. Our experienced tutors provide one-on-one online sessions tailored to each student's learning style and pace, covering subjects like math, science, English, and social studies. Our tutors are well-versed in K12 curriculum and can help with homework, test preparation, and concept mastery. Our live sessions offer instant feedback and interactive learning experiences, fostering a deeper understanding of the material. Join our program to see the difference K12 live tutoring can make in your child's academic journey.",
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
    <h5 class="card-title fw-bold">${dataitem.Service}</h5>
    <p class="card-text">${dataitem.Description}</p>
   
  </div>
</div>`;
}

main.innerHTML = text;
