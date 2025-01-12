const faculties = [
  {
    subject: "Zoology",
    name: "Dr. Shruti Bhattacharya",
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
    qualifications: ["M.Sc. Chemistry", "M.Tech Chemistry"],
    experience: "10+ years",
    specialization: "Teaching Chemistry",
  },
  {
    subject: "Maths",
    name: "Arti Saxena",
    qualifications: ["M.Sc. Mathematics"],
    experience: "15+ years",
    specialization: "Teaching NEET and JEE aspirants",
  },
  {
    subject: "Foundation Batch",
    name: "Geetanjali",
    qualifications: ["M.Sc. Mathematics", "B.Ed."],
    experience: "5+ years",
    specialization: "Teaching NEET foundation batch",
  },
  {
    subject: "Foundation Batch",
    name: "Nidhi",
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

function displayFaculty() {
  let str = "";
  for (let faculty of faculties) {
    let qualification = ""; // Reset qualification for each faculty
    for (let qual of faculty.qualifications) {
      qualification += qual + "<br>";
    }
    str += `
      
        <div class="card">
          <img src="..." class="card-img-top" alt="...">
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
  const container = document.getElementById("success-stories-container");
  let content = "";

  successStories.forEach((story) => {
    content += `
      <div class="card">
        <div class="card-body">
          <h2 class="card-title">${story.title}</h2>
          <h3 class="card-subtitle">${story.student.name} (${
      story.student.grade
    })</h3>
          <p class="card-text"><strong>Challenge:</strong> ${
            story.challenge
          }</p>
          <p class="card-text"><strong>Solution:</strong></p>
          <ul>
            ${story.solution.map((step) => `<li>${step}</li>`).join("")}
          </ul>
          <p class="card-text"><strong>Result:</strong> ${story.result}</p>
          ${
            story.testimonial
              ? `<blockquote class="card-testimonial">"${story.testimonial}"</blockquote>`
              : ""
          }
        </div>
      </div>`;
  });

  container.innerHTML = content;
}

displaySuccessStories();
