let main = document.getElementById("main");

let data = [
  { image:"./localizationpics/localization.jpg",
    Service: "Localization",
    Description:
      "Our organization offers top-tier localization services, utilizing a team of native speakers and industry specialists to ensure maximum accuracy and fluency across multiple languages. We strive for 100% precision in our work, backed by ISO certifications, showcasing our commitment to quality.",
  },
  {image:"./localizationpics/translation.jpg",
    Service: "Translation",
    Description:
      "We are renowned for being the most adaptable language service provider in the sector. Our team of expert translators and language professionals delivers comprehensive and flexible translation services, customized to your specific needs. Recognizing the importance of time in today's business world, we offer 24/7 online availability to assist you whenever needed.",
  },
  {image:"./localizationpics/subtitling.jpg",
    Service: "Subtitling",
    Description:
      "In need of professional subtitling for your video content? Our team of skilled human translators provides precise and clear subtitling in over 70 languages. Serving video providers, broadcasters, individuals, and businesses globally, we support a variety of formats to enhance your video content with our top-notch subtitling services.",
  },
  {image:"./localizationpics/voiceover.jpg",
    Service: "Voice Over",
    Description:
      "Looking for voiceover services? Our trained voice actors excel in conveying emotions, setting the perfect tone, and knowing where to pause. We understand the importance of the message, and therefore, we never compromise on quality.",
  },
  {image:"./localizationpics/dubbing.png",
    Service: "Dubbing",
    Description:
      "We deliver outstanding dubbing services to businesses worldwide. Our team of professional dubbing voice artists, video editors, and language experts collaborates to ensure your media is accurately and effectively translated while maintaining the original intent and tone.",
  },
  {image:"./localizationpics/closedcaptioningservices.png",
    Service: "Closed Captioning Services",
    Description:
      "Our premium closed captioning services are distinguished by a 99% accuracy rate. We take pride in the trust our valued clients place in us for their captioning needs. Our team of captioning experts and competitive pricing make us a leading provider in the industry. Trust us for exceptional results in all your captioning requirements.",
  },
  {image:"./localizationpics/storylinetranslation.png",
    Service: "Storyline Translation",
    Description:
      "We excel in professional storyline translation across various industries and target audiences. With a team of expert translators fluent in over 170 languages and dialects, we offer customized solutions that meet our clients' specific needs, including budget constraints, desired delivery timelines, and quality standards.",
  },
  {image:"./localizationpics/transcription.png",
    Service: "Transcription",
    Description:
      "We provide professional audio and video transcription services to businesses and individuals. Our transcription services enhance the searchability, scannability, and SEO-friendliness of your audio and video content. Whether you need interviews, podcasts, webinars, or other content transcribed, we have the expertise to deliver high-quality transcripts that accurately capture the spoken word.",
  },
];

let text = "";
let i = 0;
for (let dataitem of data) {
  text =
    text +
    `<div class="card rounded-0 border-info" style="width: 18rem;">
  <img src=${dataitem.image} class="card-img-top rounded-0" alt="...">
  <div class="card-body">
    <h5 class="card-title">${dataitem.Service}</h5>
    <p class="card-text">${dataitem.Description}</p>
   
  </div>
</div>`;
}

main.innerHTML = text;
