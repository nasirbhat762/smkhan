let main = document.getElementById("main");

let data = [
    {
        image: "./editorialpics/editorialandprepress.jpg",
        Service: "Editorial & Pre-press",
        Description: "We offer comprehensive Editorial and Pre-Press services to ensure that your content is of the highest quality and ready for publication. Our team of experts will help with proofreading, formatting, and technical preparation to ensure your work is error-free and meets industry standards. Contact us to take your content to the next level."
    },
    {
        image: "./editorialpics/abstractwritingservices.jpg",
        Service: "Abstract Writing Services",
        Description: "Our Abstract Writing Services are designed to help you succinctly summarize the main points of your research or project. Our experienced writers will work with you to create a compelling and informative abstract that accurately reflects the content of your work. Get in touch to learn more about how we can help you communicate your research effectively."
    },
    {
        image: "./editorialpics/bookindexingservices.jpg",
        Service: "Book Indexing Services",
        Description: "We offer professional Book Indexing Services to help you organize and make your book easily accessible to readers. Our indexers will create a comprehensive, user-friendly index that accurately reflects the content of your book, making it easier for readers to find the information they need. Contact us to learn more about our indexing services and how they can benefit your book."
    },
    {
        image: "./editorialpics/professionaltechnicalwritingservices.jpg",
        Service: "Professional Medical Writing Services",
        Description: "We offer top-notch medical writing services to healthcare professionals and organizations. Our team of experienced writers delivers accurate, concise, and scientifically-sound medical content that meets industry standards. Trust us to handle all your medical writing needs."
    },
    {
        image: "./editorialpics/professionaltechnicalwritingservices.jpg",
        Service: "Professional Technical Writing Services",
        Description: "With our technical writing services, we help clients effectively communicate technical information to their target audience. Our team of experts uses clear and concise language to create high-quality documents for a variety of industries. From user manuals to technical reports, we have the expertise to deliver top-notch results."
    },
    {
        image: "./editorialpics/coverpagedesignandinteriorpagesdesignservices.jpg",
        Service: "Cover Page Design And Interior Page Design Services",
        Description: "We provide comprehensive cover page and interior page design services for books, reports, and other print materials. Our experienced design team creates visually appealing and professional designs that accurately reflect your brand and content. Let us help you make a lasting impression with our cover page and interior page design services."
    },
    {
        image: "./editorialpics/technicalsituationalmedicalartservices.jpg",
        Service: "Technical Situational Medical Art Services",
        Description: "We provide technical situational medical art services to help illustrate complex medical procedures, conditions, and concepts. Our team of artists and medical professionals create detailed and accurate visual representations to aid in patient education and communication. From medical animations to 3D illustrations, our services help bring clarity to complex medical information."
    },
    {
        image: "./editorialpics/artworkanddesignservices.jpg",
        Service: "Art Work & Design Services",
        Description: "Our professional art and design services bring clients' visions to life. Our team of skilled artists and designers create high-quality graphics, illustrations, logos, and other design elements for a wide range of projects. Whether for print or digital media, we use our expertise to create visually stunning and impactful designs that effectively communicate your message."
    },
    {
        image: "./editorialpics/flashtohtml5conversion.jpg",
        Service: "Flash to HTML5 Conversion",
        Description: "We offer flash to HTML5 conversion services to help clients upgrade their outdated Flash content to a modern and accessible format. Our team of developers uses cutting-edge technology to convert Flash animations, games, and other interactive content into HTML5, ensuring compatibility with all devices and platforms. We deliver fast, reliable, and cost-effective results that ensure your content remains accessible to a wider audience."
    },
    {
        image: "./editorialpics/copyeditingandproofreading.jpg",
        Service: "Copyediting & Proofreading",
        Description: "We provide professional copy editing and proofreading services to help clients refine their written content for accuracy, clarity, and style. Our team of editors and proofreaders thoroughly review and revise text for grammar, spelling, punctuation, and overall flow, ensuring that your message is communicated effectively. Whether for academic, business, or creative writing, we deliver high-quality results that meet your specific needs and requirements."
    },
    {
        image: "./editorialpics/digitalization.jpg",
        Service: "Digitalization",
        Description: "We are experts in digitalization, helping businesses and organizations transition their physical records and documents into secure, digital formats. Our team uses cutting-edge technology to digitize a wide range of materials, including paper documents, images, and audio/video files, ensuring accuracy and long-term preservation. With years of experience and a commitment to quality, we provide efficient and effective solutions to meet your digitalization needs."
    },
    {
        image: "./editorialpics/typesetting.jpg",
        Service: "Type setting",
        Description: "We offer professional typesetting services to help clients create visually appealing and high-quality printed or digital documents. Our team of experts uses advanced technology and design skills to produce attractive and well-structured layouts for a wide range of materials, including books, magazines, and reports. Whether for print or digital media, we deliver accurate, consistent, and efficient results that meet your specific needs and requirements."
    },
    {
        image: "./editorialpics/abstractandindexing.jpg",
        Service: "Abstract & Indexing",
        Description: "Our company offers comprehensive Abstracting & Indexing services to organize and summarize research material in a systematic manner. Our services help make information discovery and retrieval efficient and effective."
    },
    {
        image: "./editorialpics/creativeservices.jpg",
        Service: "Creative Services",
        Description: "Our Creative Services team specializes in delivering innovative and visually appealing design solutions for a variety of mediums. From branding to advertising, we bring your ideas to life with our unique and creative approach."
    },
    {
        image: "./editorialpics/fullserviceprojectmanagement.jpg",
        Service: "Full Service Project Management",
        Description: "We provide full-service project management to ensure seamless delivery of projects from start to finish. Our experienced PMs use a systematic approach to guide projects to successful completion, on-time and within budget."
    },
    {
        image: "./editorialpics/htmlxmlconversion.jpg",
        Service: "HTML XML Conversion",
        Description: "Our HTML XML Conversion services allow for easy conversion of legacy or printed documents into HTML or XML formats. We provide accurate and efficient conversion services, ensuring seamless integration of your data into modern platforms."
    },
    {
        image: "./editorialpics/imagerestoration.jpg",
        Service: "Image Restoration",
        Description: "Our Image Restoration services bring new life to old and damaged photos, documents and other images. Using advanced techniques and tools, our team can repair and restore images to their original state, preserving memories for generations to come."
    },
    {
        image: "./editorialpics/metadatatagging.jpg",
        Service: "Metadata Tagging",
        Description: "We offer comprehensive Meta Tagging services to improve the visibility and discoverability of your online content. Our team expertly tags your images, videos, and documents with accurate and relevant metadata, ensuring that search engines and users can easily find and understand your content. Contact us today to enhance your online presence."
    }
];



let text = "";
let i = 0;
for (let dataitem of data) {
  text =
    text +
    `<div class="card rounded-0 border-warning" style="width: 18rem;">
  <img src=${dataitem.image} class="card-img-top rounded-0" alt="...">
  <div class="card-body">
    <h5 class="card-title">${dataitem.Service}</h5>
    <p class="card-text">${dataitem.Description}</p>
   
  </div>
</div>`;
}

main.innerHTML = text;
