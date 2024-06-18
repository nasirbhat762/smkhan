let main = document.getElementById("main");

let data = [
    {
        image: "./mediaServicespics/2d3dvideos.jpg",
        Service: "2D/3D Videos",
        Description: "Our 2D and 3D services bring your designs and ideas to life. Our services include 2D drafting, 3D modeling, animation, and rendering. We work with a variety of industries and can customize our services to meet your specific needs. Let us help you create visually stunning and accurate representations of your projects."
    },
    {
        image: "./mediaServicespics/animatedvideos.jpg",
        Service: "Animated Videos",
        Description: "We provide animated video services to help you visually communicate your message in an engaging and memorable way. Our services include animation design, storyboarding, voiceover, and music. We specialize in creating high-quality, custom animated videos for businesses, organizations, and individuals. Let us help you bring your story to life!"
    },
    {
        image: "./mediaServicespics/imageprocessing.jpg",
        Service: "Image Processing",
        Description: "We specialize in image processing, using advanced algorithms and techniques to enhance, analyze, and extract information from digital images. Our capabilities include image enhancement, object recognition, image segmentation, and more. We deliver results that are accurate, efficient and fast."
    },
    {
        image: "./mediaServicespics/motiongraphics.jpg",
        Service: "Motion Graphics",
        Description: "We are experts in motion graphics, using the latest software and techniques to create dynamic and engaging visuals for film, television, and digital media. Our services include animation, compositing, visual effects, and title design. We help you stand out from the competition."
    },
    {
        image: "./mediaServicespics/pptanimation.jpg",
        Service: "PPT Animation",
        Description: "We offer professional PowerPoint animation services to enhance your presentations and make them more engaging. Our team of experts can create custom animations and bring your ideas to life with dynamic transitions, motion graphics, and interactive elements. We help you make a lasting impression on your audience."
    },
    {
        image: "./mediaServicespics/pptpresenterbased.jpg",
        Service: "PPT Presenter Based",
        Description: "We provide PowerPoint presenter-based services that help you deliver engaging presentations. Our team of experts can help you create dynamic and interactive presentations, using the latest design and animation techniques. We can also provide training and support to help you become a more effective presenter. Our services can include creating presentations from scratch, editing existing presentations, and providing tips and best practices on how to present."
    },
    {
        image: "./mediaServicespics/typographyvideo.jpg",
        Service: "Typography Video",
        Description: "We specialize in creating typography videos that are visually engaging and help communicate your message effectively. Our team of designers and animators use the latest techniques to create dynamic typography animation, motion graphics, and visual effects. We can help you create videos for social media, marketing, and branding campaigns that are sure to leave a lasting impression."
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
    <h5 class="card-title fw-bold">${dataitem.Service}</h5>
    <p class="card-text">${dataitem.Description}</p>
   
  </div>
</div>`;
}

main.innerHTML = text;
