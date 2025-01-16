const courses = [
  {
    program: "Individual subjects (Grades 9 & 10)",
    paragraph:
      "At Smart Edutech, we empower students in Grades 9 and 10 to achieve academic excellence through focused, individual subject coaching. Our comprehensive programs in Mathematics, Science, English, and Social Studies are designed to strengthen core concepts, improve problem-solving skills, and build confidence. With a team of highly qualified educators, we provide personalized attention to ensure every student learns at their own pace. Through interactive lessons, advanced teaching methods, and regular assessments, we make learning engaging and effective. Join Smart Edutech today and take the first step toward unlocking your academic potential.",
    fee: "₹10,000/year",
    additional: null,
  },
  {
    program: "Combined (Physics, Chemistry, Biology/Maths) (Grades 9 & 10)",
    paragraph:
      "Our combined subject program for Grades 9 and 10 is meticulously designed to help students master the core concepts of Physics, Chemistry, Biology, and Mathematics. At Smart Edutech, we integrate engaging teaching techniques, real-world applications, and regular testing to ensure conceptual clarity and exam readiness. With a special focus on critical thinking and analytical skills, this program lays a strong foundation for future academic and competitive success.",
    fee: "₹30,000/year",
    additional: null,
  },
  {
    program: "Individual subjects (Grades 11 & 12)",
    paragraph:
      "For Grades 11 and 12, Smart Edutech offers expert coaching tailored to individual subjects like Physics, Chemistry, Biology, and Mathematics. Our goal is to help students excel in their chosen streams by providing in-depth subject knowledge, personalized support, and result-oriented strategies. We focus on developing advanced skills and preparing students for board exams as well as competitive exams, ensuring they are future-ready.",
    fee: "₹15,000/year",
    additional: null,
  },
  {
    program: "Combined (PCB/PCM) (Grades 11 & 12)",
    paragraph:
      "Prepare for academic excellence with Smart Edutech’s combined PCB/PCM program for Grades 11 and 12. Designed for aspiring engineers, doctors, and scientists, this comprehensive course covers Physics, Chemistry, Biology, and Mathematics with unparalleled clarity and precision. Our experienced faculty delivers concept-driven lectures, problem-solving workshops, and regular mock tests to ensure students achieve outstanding results in board and competitive exams.",
    fee: "₹35,000/year",
    additional: null,
  },
  {
    program: "NEET Preparation (Dropper Batch)",
    paragraph:
      "Our NEET Dropper Batch is a dedicated program aimed at helping students achieve their medical dreams. With a focus on the NEET syllabus, this intensive course offers expert guidance, extensive practice, and personalized mentorship. At Smart Edutech, we provide a structured study plan, regular doubt-solving sessions, and targeted test series to boost confidence and performance. Flexible payment options and scholarships make this program accessible to all dedicated aspirants.",
    fee: "₹70,000/year",
    additional: [
      "50% scholarship for entrance exam qualifiers",
      "Flexible payment in 2-3 installments",
    ],
  },
  {
    program: "Crash Courses",
    paragraph:
      "Smart Edutech’s crash courses are designed for students seeking a quick and effective revision of key topics before their board or competitive exams. These short-term courses focus on high-yield topics, exam strategies, and time management to maximize performance. Perfect for Grade 10 and 12 students, our crash courses offer expert guidance and targeted practice to help students secure top results.",
    fee: "Contact us for details",
    additional: ["Special crash courses for Grade 10 & 12 students."],
  },
];

const faculties = [
  {
    subject: "Zoology",
    name: "Dr. Shruti Bhattacharya",
    image: "pics/facultyPics/shruti.jpg",
    qualifications: [
      "B.Sc. Microbiology and Biochemistry",
      "M.Sc. Biotechnology",
      "Biotechnology DBT-JRF Category A",
      "GATE AIR 170",
      "CSIR-LS",
      "TIFR",
      "Ph.D. Immunology",
    ],
    experience: "10+ years",
    specialization: "Teaching Zoology to NEET aspirants",
  },
  {
    subject: "Botany",
    name: "Dr. Mayur Patil",
    image: "pics/facultyPics/dummyboy.jpg",
    qualifications: [
      "M.Sc. Angiosperms Taxonomy",
      "Ph.D. Biochemistry",
      "CSIR-NET",
      "ICAR-NET",
      "MH-SET",
      "TIFR",
      "GATE",
      "MES-MPSC",
      "MA (Counselling Psychology)",
    ],
    experience: "10+ years",
    specialization: "Teaching NEET aspirants",
  },
  {
    subject: "Physics",
    name: "Dr. Snehal Patil",
    image: "pics/facultyPics/snehal.jpg",
    qualifications: [
      "M.Sc. and Ph.D. Material Science",
      "CSIR-NET",
      "MH-SET",
      "TIFR",
      "MES-MPSC",
    ],
    experience: "10+ years",
    specialization: "Teaching NEET aspirants",
  },
  {
    subject: "Chemistry",
    name: "Shivani Mishra",
    image: "pics/facultyPics/dummygirl.jpg",
    qualifications: ["M.Sc. Chemistry", "M.Tech Chemistry"],
    experience: "10+ years",
    specialization: "Teaching Chemistry",
  },
  {
    subject: "Maths",
    name: "Arti Saxena",
    image: "pics/facultyPics/arti.jpg",
    qualifications: ["M.Sc. Mathematics"],
    experience: "15+ years",
    specialization: "Teaching NEET and JEE aspirants",
  },
  {
    subject: "Foundation Batch",
    name: "Geetanjali",
    image: "pics/facultyPics/dummygirl.jpg",
    qualifications: ["M.Sc. Mathematics", "B.Ed."],
    experience: "5+ years",
    specialization: "Teaching NEET foundation batch",
  },
  {
    subject: "Foundation Batch",
    name: "Nidhi",
    image: "pics/facultyPics/nidhi.jpg",
    qualifications: [
      "B.Sc. Natural Science",
      "BElEd",
      "B.Ed.",
      "M.Ed. in Science",
    ],
    experience: "7+ years",
    specialization: "Teaching NEET foundation students",
  },
];

const successStories = [
  {
    title: "Turning Dreams into Reality - NEET Success",
    student: {
      name: "Riya Sharma",
      grade: "Grade 12, CBSE",
    },
    challenge:
      "Riya struggled with Physics and Chemistry concepts, consistently scoring below 50% in mock tests.",
    solution: [
      "Enrolled in Smart Edutech’s NEET-focused PCB batch.",
      "Regular doubt-solving sessions and personalized study plans tailored to her weaknesses.",
      "Weekly mock tests and analysis reports to track progress.",
    ],
    result:
      "Riya achieved an All India Rank (AIR) of 1890 in NEET 2024, securing admission to a top government medical college.",
    testimonial:
      "Smart Edutech changed the way I approached learning. The personalized guidance and supportive faculty made all the difference.",
  },
  {
    title: "Building a Strong Foundation",
    student: {
      name: "Aditya Verma",
      grade: "Grade 10, ICSE",
    },
    challenge:
      "Aditya struggled with math problem-solving skills and lacked confidence in tackling CBSE-level questions.",
    solution: [
      "Joined the foundation batch for Mathematics.",
      "Geetanjali, with her 5+ years of experience, used practical examples and engaging visuals to simplify concepts.",
      "Regular assessments and skip-counting techniques improved Aditya’s confidence.",
    ],
    result:
      "Aditya topped his school in the ICSE board exams, scoring 98% in Mathematics, and is now enrolled in our NEET foundation program.",
  },
  {
    title: "Droppers Batch Triumph",
    student: {
      name: "Sakshi Patel",
      grade: "Dropper Batch",
    },
    challenge:
      "Missed the qualifying NEET score by 12 marks due to weak Botany and Zoology concepts.",
    solution: [
      "Enrolled in our dropper batch with focused Botany and Zoology coaching by Dr. Shruti Bhattacharya and Dr. Mayur Patil.",
      "Daily revision sessions, test series, and flashcard-based learning.",
      "One-on-one mentorship to manage exam stress.",
    ],
    result:
      "Sakshi secured an AIR of 850 and is now pursuing MBBS at a prestigious college.",
  },
  {
    title: "Flexible Learning for Working Professionals",
    student: {
      name: "Priya Singh",
      grade: "Grade 12, CBSE",
    },
    challenge:
      "As a student balancing part-time work and studies, Priya found it hard to keep up with traditional coaching schedules.",
    solution: [
      "Joined Smart Edutech’s live classes with flexible timings.",
      "Access to recorded lectures and online study materials.",
      "Guidance from our experienced faculty ensured efficient learning despite her tight schedule.",
    ],
    result:
      "Priya scored 635/720 in NEET, earning admission into a reputed medical college.",
  },
];

const cardsData = [
  {
    image: "./pics/elearning/Vedantulogo_orange.png", // Vedantu logo
    heading: "Vedantu",
    paragraph:
      "Leading online tutoring platform offering personalized live teaching solutions.",
  },
  {
    image: "pics/elearning/straive.png", // Straive logo
    heading: "Straive",
    paragraph:
      "Provides content and data solutions for businesses and learning platforms.",
  },
  {
    image: "pics/elearning/toppr.png", // Toppr logo
    heading: "Toppr",
    paragraph:
      "Empowers students with tools for adaptive and personalized online learning.",
  },
  {
    image: "pics/elearning/bartleby.jpg", // Bartleby logo
    heading: "Bartleby",
    paragraph: "A student success hub with expert Q&A and learning tools.",
  },
  {
    image: "pics/elearning/chegg.jpg", // Chegg logo
    heading: "Chegg",
    paragraph:
      "Offers academic help, textbook rentals, and expert question-solving services.",
  },
  {
    image: "pics/elearning/hurix.png", // Hurix Digital logo
    heading: "Hurix Digital",
    paragraph:
      "Creates digital content and solutions for enterprise learning and education.",
  },
  {
    image: "pics/elearning/pw.png", // PhysicsWallah logo
    heading: "PhysicsWallah",
    paragraph:
      "Affordable education platform specializing in physics and competitive exam preparation.",
  },
  {
    image: "pics/elearning/numerade_logo_Logo.jpg", // Numerade logo
    heading: "Numerade",
    paragraph:
      "Provides step-by-step video solutions for STEM-focused academic questions.",
  },
  {
    image: "pics/elearning/unacademy.avif", // Unacademy logo
    heading: "Unacademy",
    paragraph:
      "India's largest learning platform offering live classes by experts.",
  },
  {
    image: "pics/elearning/simplilearn.jpg", // Simplilearn logo
    heading: "Simplilearn",
    paragraph:
      "Skill-building platform offering professional certification and online bootcamps.",
  },
  {
    image: "pics/elearning/magnon.png", // Magnon logo
    heading: "Magnon",
    paragraph:
      "Creative agency specializing in digital transformation and marketing solutions.",
  },
  {
    image: "pics/elearning/academian.jpg", // Academian logo
    heading: "Academian",
    paragraph:
      "Innovative platform focused on personalized and interactive learning experiences.",
  },
];

function displayCourses() {
  let container = document.getElementById("courses-container");
  let content = "";

  courses.forEach((course) => {
    content += `
     <fieldset class="card custom-width d-flex card-animation">
          <legend class="text-center">${course.program}</legend>
          <img src="" alt="">
          <p>${course.paragraph}</p>
          <p><strong>Fee:${course.fee}</strong></p>
           ${
             course.additional
               ? `<p class="card-text"><strong>Additional Details:</strong></p>
                 ${
                   Array.isArray(course.additional)
                     ? `<ul>${course.additional
                         .map((item) => `<li>${item}</li>`)
                         .join("")}</ul>`
                     : `<p>${course.additional}</p>`
                 }`
               : ""
           }
          <a href="https://wa.me/+918923260590" target="_blank" class="btn btn-outline-success">Register Now</a>
        </fieldset>
      
    `;
  });

  container.innerHTML = content;
}
displayCourses();

function displayFaculty() {
  let str = "";
  for (let faculty of faculties) {
    let qualification = "";
    for (let qual of faculty.qualifications) {
      qualification += qual + "<br>";
    }
    str += `
      <div class="card border-0 shadow-lg card-animation" style="width: 350px;">
  <div class="position-relative">
    <img src="${faculty.image}" class="card-img-top rounded-top" alt="Faculty Image">
    <div class="position-absolute top-0 end-0  text-white px-3 py-1 rounded-start" style="background-color: #0e374b;">
      <small>${faculty.experience} years of experience</small>
    </div>
  </div>
  <div class="card-body text-center">
    <h5 class="card-title text-dark fw-bold mb-1">${faculty.name}</h5>
    <p class="text-secondary mb-2">${faculty.subject}</p>
    <hr class="my-2">
    <p class="card-text text-muted mb-2"><strong>Qualification:</strong> ${qualification}</p>
    <p class="card-text text-muted"><strong>Specialization:</strong> ${faculty.specialization}</p>
  </div>
  
</div>

      `;
  }
  document.getElementById("facultyCardsContainer").innerHTML = str;
}

displayFaculty();

function displaySuccessStories() {
  let strContent = "";

  for (let index in successStories) {
    if (index == 0) {
      strContent =
        strContent +
        `<div class="carousel-item active">
            <div class="d-block w-100 success-card">
              <h4>${successStories[index].title}</h4>
              <h5>${successStories[index].challenge}</h5>
              <h3 class="card-subtitle">${
                successStories[index].student.name
              } (${successStories[index].student.grade})  </h3>
              <p class="card-text"><strong>Solution:</strong></p>
              <ul>
                   ${successStories[index].solution
                     .map((step) => `<li>${step}</li>`)
                     .join("")}
              </ul>
              <p class="card-text"><strong>Result:</strong> ${
                successStories[index].result
              }</p>
              ${
                successStories[index].testimonial
                  ? `<blockquote class="card-testimonial">"${successStories[index].testimonial}"</blockquote>`
                  : ""
              }
              <p>
                <i class="bi bi-star-fill fs-2 text-warning"> </i> 
                <i class="bi bi-star-fill fs-2 text-warning"> </i>
                <i class="bi bi-star-fill fs-2 text-warning"> </i>
                <i class="bi bi-star-fill fs-2 text-warning"> </i>
                <i class="bi bi-star-half fs-2 text-warning"></i> 
              </p>
            </div>
         </div>`;
    } else {
      strContent =
        strContent +
        `<div class="carousel-item">
            <div class="d-block w-100 success-card">
              <h4>${successStories[index].title}</h4>
              <h5>${successStories[index].challenge}</h5>
              <h3 class="card-subtitle">${
                successStories[index].student.name
              } (${successStories[index].student.grade})  
              </h3>
              <p class="card-text"><strong>Solution:</strong></p>
              <ul>
                   ${successStories[index].solution
                     .map((step) => `<li>${step}</li>`)
                     .join("")}
              </ul>
              <p class="card-text"><strong>Result:</strong> ${
                successStories[index].result
              }</p>
              ${
                successStories[index].testimonial
                  ? `<blockquote class="card-testimonial">"${successStories[index].testimonial}"</blockquote>`
                  : ""
              }
              <p>
                <i class="bi bi-star-fill fs-2 text-warning"> </i> 
                <i class="bi bi-star-fill fs-2 text-warning"> </i>
                <i class="bi bi-star-fill fs-2 text-warning"> </i>
                <i class="bi bi-star-fill fs-2 text-warning"> </i>
                <i class="bi bi-star-half fs-2 text-warning"></i> 
              </p>

            </div>
         </div>`;
    }
  }

  document.getElementById("carouselInner").innerHTML = strContent;
}
displaySuccessStories();

function displayCards(cards) {
  // Initialize an empty string to store the card HTML
  let cardsHTML = "";

  // Iterate through the cards array to construct the HTML
  cards.forEach((card) => {
    cardsHTML += `
      <div class="custom-card">
        <img src="${card.image}" alt="${card.heading}">
        <div class="custom-card-text">
          <h3>${card.heading}</h3>
          <p>${card.paragraph}</p>
        </div>
      </div>
    `;
  });

  // Get the container element and set its innerHTML
  document.getElementById("cards-container1").innerHTML = cardsHTML;
}

// Call the function with the cardsData array
displayCards(cardsData);
