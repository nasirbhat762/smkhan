let main = document.getElementById("main");

let data = [
    {
        image: "./accessibilitypics/accessibilityaudit.jpg",
        Service: "Accessibility Audit",
        Description: "We provide comprehensive accessibility audits to help ensure that your website, software, or mobile application is accessible to all users, including those with disabilities. Our team of experts will evaluate your digital products for compliance with accessibility standards and guidelines, such as WCAG 2.1. We will provide detailed recommendations for improvements and best practices to make your digital products more inclusive."
    },
    {
        image: "./accessibilitypics/alttext.jpg",
        Service: "Alt Text",
        Description: "We offer Alt Text service to make your digital content more accessible to users with visual impairments and other disabilities. Our team of experts can provide accurate, descriptive, and contextually appropriate alt text for images, videos, infographics, and other multimedia content on your website, software, and mobile applications. We will help you to create an inclusive user experience for all your customers."
    },
    {
        image: "./accessibilitypics/accessibilitytesting.jpg",
        Service: "Accessibility Testing",
        Description: "We provide accessibility testing services to ensure that your website, software, or mobile application is accessible to all users, including those with disabilities. Our team of experts will use a variety of testing methods and tools to evaluate your digital products for compliance with accessibility standards and guidelines, such as WCAG 2.1. We will provide detailed reports and recommendations for improvements to make your digital products more inclusive."
    },
    {
        image: "./accessibilitypics/pdfpptword.jpg",
        Service: "PDF/PPT/Word doc. Remediation",
        Description: "We provide PDF/PPT/Word document remediation services to make your documents more accessible to users with disabilities. Our team of experts will evaluate your documents for compliance with accessibility standards and guidelines, such as Section 508 and WCAG 2.1. We will make necessary changes, such as adding alternative text, headings, and tags, to ensure that your documents can be read and navigated by assistive technologies. We will also provide detailed reports and recommendations for improvements."
    },
    {
        image: "./accessibilitypics/videolectures.jpg",
        Service: "Video Lectures",
        Description: "We offer professional video lecture services, providing high-quality, engaging and interactive video lectures for online or offline learning. Our team of experts can help you create video lectures that are tailored to your specific needs and goals. We can help you create video lectures on various subjects like programming, finance, science, etc. We use the latest technology and techniques to ensure your video lectures are accessible and can be easily understood by all learners."
    },
    {
        image: "./accessibilitypics/explainervideo.jpg",
        Service: "Explainer Video",
        Description: "We specialize in creating explainer videos that are engaging, informative and easy to understand. Our team of experts can help you explain complex ideas, products, or services in a simple and visually appealing way. We use animation, motion graphics and other techniques to create explainer videos that are perfect for marketing, branding, and training. We can help you create videos for different platforms, like website, social media, and mobile devices."
    },
    {
        image: "./accessibilitypics/accessibilityepub3.jpg",
        Service: "Accessibility for EPUB3",
        Description: "We provide accessibility solutions for EPUB3, to ensure that your digital publications are accessible to users with disabilities. Our team of experts can evaluate your EPUB3 documents for compliance with accessibility standards and guidelines, such as the EPUB Accessibility Guidelines (EPUB3-A11Y) and WCAG 2.1. We will make necessary changes to your EPUB3 documents, such as adding alternative text and headings, to ensure that they can be read and navigated by assistive technologies. We will also provide detailed reports and recommendations for improvements."
    },
    {
        image: "./accessibilitypics/bookdigitilizationsolution.jpg",
        Service: "Book Digitalization Solution",
        Description: "We offer professional book digitalization solutions that help you to convert your physical books into digital formats. Our team of experts can digitize your books in a wide range of formats like e-books, pdf, audio books, etc. We use advanced technology and techniques to ensure that the digital versions of your books are of high-quality, searchable and accessible. Our solutions are perfect for libraries, publishers, and educational institutions."
    },
    {
        image: "./accessibilitypics/ppttoonlinemobileready.jpg",
        Service: "PPT to Online Mobile-Ready",
        Description: "We offer a comprehensive solution for presenting your ideas and content, converting your PPT presentations into mobile-ready formats for seamless online delivery. Our platform ensures your presentations look great on any device and offers easy sharing options to help you reach a wider audience."
    },
    {
        image: "./accessibilitypics/professionalebookscanningservices.jpg",
        Service: "Professional Ebook Scanning Services",
        Description: "Under our professional ebook scanning services, we convert physical books into digital format, preserving the content and layout of the original book. Our services ensure high-quality scans with accurate OCR technology, making your books easily searchable and accessible on any device."
    },
    {
        image: "./accessibilitypics/aodatesting.jpg",
        Service: "AODA Testing",
        Description: "With our Accessibility for Ontarians with Disabilities Act (AODA) testing services, we ensure your website or application is compliant and accessible to people with disabilities. Our team of experts uses the latest tools and techniques to deliver accurate results."
    },
    {
        image: "./accessibilitypics/508complianceservice.jpg",
        Service: "508 Compliance Service",
        Description: "We provide 508 Compliance Services to help organizations meet the accessibility requirements of Section 508 of the Rehabilitation Act. Our team of experts ensures that your digital assets are accessible to people with disabilities, delivering a seamless user experience."
    },
    {
        image: "./accessibilitypics/vpatcertification.jpg",
        Service: "VPAT Certification",
        Description: "We provide VPAT (Voluntary Product Accessibility Template) certification services to help organizations demonstrate their commitment to accessibility. Our team of experts ensures that your products and services meet the requirements of the Section 508 guidelines and provide a seamless experience for all users."
    },
    {
        image: "./accessibilitypics/wcagcompliance.jpg",
        Service: "WCAG Compliance",
        Description: "Our company ensures that all digital content is WCAG (Web Content Accessibility Guidelines) compliant, making it accessible to people with disabilities. This includes features like alt text, keyboard navigation, and clear language. We are committed to creating inclusive digital experiences for everyone."
    },
    {
        image: "./accessibilitypics/ocr.jpg",
        Service: "OCR",
        Description: "Our company offers OCR (Optical Character Recognition) services, converting scanned images and documents into editable text. This technology allows for easy digitization and organization of physical documents, saving time and increasing efficiency. Trust us for accurate and reliable OCR results."
    }
];


let text = "";
let i = 0;
for (let dataitem of data) {
  text =
    text +
    `<div class="card rounded-0 border-success" style="width: 18rem;">
  <img src=${dataitem.image} class="card-img-top rounded-0" alt="...">
  <div class="card-body">
    <h5 class="card-title">${dataitem.Service}</h5>
    <p class="card-text">${dataitem.Description}</p>
   
  </div>
</div>`;
}

main.innerHTML = text;
