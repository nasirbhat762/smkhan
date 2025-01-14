const courses = [
  {
    program: "Individual subjects (Grades 9 & 10)",
    fee: "₹10,000/year",
    additional: null,
  },
  {
    program: "Combined (Physics, Chemistry, Biology/Maths) (Grades 9 & 10)",
    fee: "₹30,000/year",
    additional: null,
  },
  {
    program: "Individual subjects (Grades 11 & 12)",
    fee: "₹15,000/year",
    additional: null,
  },
  {
    program: "Combined (PCB/PCM) (Grades 11 & 12)",
    fee: "₹35,000/year",
    additional: null,
  },
  {
    program: "NEET Preparation (Dropper Batch)",
    fee: "₹70,000/year",
    additional: [
      "50% scholarship for entrance exam qualifiers",
      "Flexible payment in 2-3 installments",
    ],
  },
  {
    program: "Crash Courses",
    fee: "Contact us for details",
    additional: ["Special crash courses for Grade 10 & 12 students."],
  },
];

const faculties = [
  {
    subject: "Zoology",
    name: "Dr. Shruti Bhattacharya",
    image: "pics/facultyPics/shruti.jpeg",
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
    image: "pics/facultyPics/shruti.jpeg",
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
    image: "pics/facultyPics/shruti.jpeg",
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
    image: "pics/facultyPics/shruti.jpeg",
    qualifications: ["M.Sc. Chemistry", "M.Tech Chemistry"],
    experience: "10+ years",
    specialization: "Teaching Chemistry",
  },
  {
    subject: "Maths",
    name: "Arti Saxena",
    image: "pics/facultyPics/shruti.jpeg",
    qualifications: ["M.Sc. Mathematics"],
    experience: "15+ years",
    specialization: "Teaching NEET and JEE aspirants",
  },
  {
    subject: "Foundation Batch",
    name: "Geetanjali",
    image: "pics/facultyPics/shruti.jpeg",
    qualifications: ["M.Sc. Mathematics", "B.Ed."],
    experience: "5+ years",
    specialization: "Teaching NEET foundation batch",
  },
  {
    subject: "Foundation Batch",
    name: "Nidhi",
    image: "pics/facultyPics/shruti.jpeg",
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

function displayCourses() {
  let container = document.getElementById("courses-container");
  let content = "";

  courses.forEach((course) => {
    content += `
     <fieldset class="card custom-width d-flex">
          <legend class="text-center">${course.program}</legend>
          <img src="" alt="">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet distinctio, voluptas, asperiores odit eligendi cum aspernatur quis reprehenderit animi quasi, optio eius? Illum, dolorem. Ex magnam quis minima officia necessitatibus animi aliquam adipisci enim iure voluptate natus incidunt, quos temporibus quo, eaque accusantium, reiciendis voluptas dolor nulla maxime? Ipsam, quasi?</p>
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
          <a href="tel:+918923260590" class="btn btn-outline-success">Register Now</a>
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
      
        <div class="card border-0 custom-shadow custom-width">
          <div  class="custom-image"> 
           <img src="${faculty.image}" class="card-img-top" alt="image here"> 
          </div>
          <div class="card-body">
            <h3 class="card-title">${faculty.name}</h3>
            <h4 class="card-title">${faculty.subject}</h4>
            <p class="card-text">${faculty.experience}</p>
            <p class="card-text">${qualification}</p>
            <p class="card-text">${faculty.specialization}</p>
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
