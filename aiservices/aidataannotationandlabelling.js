const main = document.getElementById("main");
const data = [
  {
    image:
      "./aidataannotationandlabellingpics/imageVideoTextAndAudioAnnotation.png",
    service: "Image, Video, Text & Audio Annotation",
    description:
      "High-quality annotation services for images, videos, text, and audio datasets to improve AI model training accuracy and performance.",
  },

  {
    image:
      "./aidataannotationandlabellingpics/boundingBoxesPolygonsAndSegmentation.png",
    service: "Bounding Boxes, Polygons & Segmentation",
    description:
      "Precise object detection and segmentation using bounding boxes, polygons, and pixel-level labeling for computer vision projects.",
  },

  {
    image: "./aidataannotationandlabellingpics/nlpDataLabelling.png",
    service: "NLP Data Labeling",
    description:
      "Structured labeling for natural language processing tasks including sentiment analysis, intent recognition, entity tagging, and classification.",
  },

  {
    image:
      "./aidataannotationandlabellingpics/medicalAndEducationalDatasetAnnotation.png",
    service: "Medical & Educational Dataset Annotation",
    description:
      "Specialized annotation services for healthcare and education datasets with domain-focused accuracy, confidentiality, and compliance standards.",
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
    <h5 class="card-title fw-bold">${dataitem.service}</h5>
    <p class="card-text">${dataitem.description}</p>
   
  </div>
</div>`;
}

main.innerHTML = text;
